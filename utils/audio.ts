
const audioBufferCache = new Map<string, AudioBuffer>();
let audioContext: AudioContext | null = null;

/**
 * Mendapatkan AudioContext dengan prioritas latensi interaktif.
 */
export const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({
      latencyHint: 'interactive',
    });
  }
  return audioContext;
};

/**
 * Memastikan hardware audio siap menembakkan suara kapan saja.
 */
export const kickstartAudio = () => {
  const ctx = getAudioContext();
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
  
  // Kirim data kosong ke speaker agar jalur tetap terbuka
  const buffer = ctx.createBuffer(1, 1, 22050);
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.start(0);
};

export const preloadSound = async (url: string) => {
  try {
    const ctx = getAudioContext();
    if (audioBufferCache.has(url)) return;

    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
    audioBufferCache.set(url, audioBuffer);
  } catch (error) {
    console.warn(`Gagal preload: ${url}`, error);
  }
};

/**
 * Memutar suara secepat kilat.
 */
export const playSound = (url: string, volume: number = 0.3) => {
  const ctx = getAudioContext();
  
  // Paksa resume jika browser mencoba menidurkan audio context
  if (ctx.state === 'suspended') {
    ctx.resume();
  }

  const buffer = audioBufferCache.get(url);
  if (!buffer) return;

  const source = ctx.createBufferSource();
  const gainNode = ctx.createGain();

  source.buffer = buffer;
  gainNode.gain.setValueAtTime(volume, ctx.currentTime);

  source.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  // Gunakan 0 untuk memberi tahu browser: "Mainkan sekarang juga, jangan tunggu frame berikutnya"
  source.start(0);
};
