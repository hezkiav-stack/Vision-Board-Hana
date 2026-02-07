
export const playSound = (url: string, volume: number = 0.3) => {
  try {
    const audio = new Audio(url);
    audio.volume = volume;
    audio.play().catch(e => {
      // Browsers often block audio until first user interaction
      console.debug('Audio playback blocked or failed:', e);
    });
  } catch (e) {
    console.error('Failed to initialize audio:', e);
  }
};
