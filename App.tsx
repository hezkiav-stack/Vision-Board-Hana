
import React, { useState, useEffect, useMemo } from 'react';
import KingdomDoor from './components/KingdomDoor';
import VisionWindow from './components/VisionWindow';
import CandyJar from './components/CandyJar';
import { VISION_DATA, BIBLE_VERSE, SOUNDS } from './constants';
import { VisionCategory } from './types';
import { playSound } from './utils/audio';

const GlitterBackground: React.FC = () => {
  const sparkles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 2}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 4 + 3}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-gradient-to-b from-[#fff5f8] to-[#fff0f5]">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute bg-white rounded-full opacity-0 animate-sparkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
            boxShadow: '0 0 12px 2px rgba(255, 255, 255, 0.9)',
          }}
        />
      ))}
    </div>
  );
};

const InteractiveDecor: React.FC = () => {
  const items = [
    { icon: '☁️', top: '12%', left: '5%', factor: 1.2 },
    { icon: '💖', top: '22%', left: '88%', factor: 0.8 },
    { icon: '🍭', top: '72%', left: '10%', factor: 1.5 },
    { icon: '🌈', top: '8%', left: '48%', factor: 0.5 },
    { icon: '✨', top: '45%', left: '94%', factor: 1.1 },
    { icon: '🍓', top: '88%', left: '75%', factor: 1.3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
      {items.map((item, i) => (
        <div
          key={i}
          className={`absolute text-4xl md:text-5xl animate-float transition-all duration-1000`}
          style={{
            top: item.top,
            left: item.left,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${4 + item.factor * 2}s`
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [activeVision, setActiveVision] = useState<VisionCategory | null>(null);

  const handleOpenDoor = () => {
    setIsDoorOpen(true);
  };

  const handleCloseDoor = () => {
    playSound(SOUNDS.CLOSE, 0.4);
    setIsDoorOpen(false);
    setActiveVision(null);
  };

  useEffect(() => {
    if (isDoorOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    }
  }, [isDoorOpen]);

  const activeVisionData = VISION_DATA.find(v => v.category === activeVision);

  return (
    <div className="min-h-screen relative selection:bg-pink-200 overflow-x-hidden">
      <GlitterBackground />
      <InteractiveDecor />
      <KingdomDoor isOpen={isDoorOpen} onOpen={handleOpenDoor} />

      {/* Navigation Button */}
      <button
        onClick={handleCloseDoor}
        className={`fixed top-6 left-6 z-40 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border-2 border-white text-pink-500 font-bold flex items-center gap-2 transition-all duration-500 hover:scale-105 active:scale-95 group ${
          isDoorOpen ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0 pointer-events-none'
        }`}
      >
        <span className="text-xl group-hover:-translate-x-1 transition-transform">🏰</span>
        <span className="text-sm md:text-base">Home</span>
      </button>

      <main className={`transition-all duration-1000 ease-out ${isDoorOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} p-6 md:p-12 lg:p-20 relative z-10 max-w-5xl mx-auto`}>
        
        {/* Bible Verse Header */}
        <section className="text-center mb-40 pt-10 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
               <div className="bg-white p-3 rounded-full shadow-xl border-4 border-pink-100 animate-float">
                  <span className="text-4xl">📖</span>
               </div>
            </div>
            
            <div className="bg-white rounded-[3.5rem] shadow-[0_25px_50px_-12px_rgba(255,182,193,0.3)] p-1 border-4 border-white/80">
              <div className="bg-pink-50/40 rounded-[3.2rem] px-8 py-14 md:py-16 border-2 border-pink-100/10">
                <h3 className="text-pink-700 font-pacifico text-2xl mb-6 tracking-wide drop-shadow-sm">{BIBLE_VERSE.reference}</h3>
                <p className="text-pink-900 text-xl md:text-3xl font-bold italic leading-relaxed px-2 md:px-10">
                  {BIBLE_VERSE.text}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Jar Hero Section */}
        <section className="flex flex-col items-center justify-center space-y-24">
          <div className="transform scale-100 md:scale-110 lg:scale-[1.25] transition-all duration-700">
            <CandyJar onCandyClick={(cat) => setActiveVision(cat)} />
          </div>
          
          {/* Refined Footer Decoration Section */}
          <div className="w-full flex flex-col items-center pt-20 pb-20 relative">
            
            {/* Ornament cluster around title */}
            <div className="absolute top-0 flex items-center justify-center w-full gap-8">
               <div className="text-4xl animate-bounce delay-700 opacity-80">🍭</div>
               <div className="text-5xl opacity-40 animate-twinkle">🌈</div>
               <div className="text-4xl animate-bounce opacity-80">🍬</div>
            </div>

            <div className="font-pacifico text-4xl md:text-5xl text-pink-600 mb-12 drop-shadow-sm tracking-wide">
               Pilih Permen-mu!
            </div>

            {/* Description Card with refined ornaments */}
            <div className="w-full max-w-2xl candy-card p-10 md:p-14 text-center relative group hover:shadow-[0_40px_80px_-15px_rgba(255,182,193,0.4)] transition-all duration-500 overflow-visible">
              
              {/* Corner ornaments - placed precisely outside boundaries */}
              <div className="absolute -top-10 -left-10 text-5xl md:text-6xl animate-float filter drop-shadow-xl z-20">🍭</div>
              <div className="absolute -bottom-8 -right-8 text-5xl md:text-6xl animate-float-delayed filter drop-shadow-xl z-20">❤️</div>
              
              <h2 className="text-4xl md:text-5xl font-pacifico text-pink-500 mb-6 drop-shadow-sm">Vision Board 2026</h2>
              <div className="w-24 h-1 bg-pink-200 mx-auto rounded-full mb-8 opacity-40"></div>
              
              <p className="text-pink-900 text-lg md:text-xl font-bold leading-relaxed max-w-lg mx-auto">
                Tiap permen di dalam toples mewakili mimpi dan target yang ingin kucapai.
              </p>

              {/* Decorative sparkles inside card */}
              <div className="absolute top-4 right-4 text-xs opacity-40 animate-twinkle">✨</div>
              <div className="absolute bottom-6 left-8 text-xs opacity-40 animate-twinkle delay-1000">✨</div>
            </div>
          </div>
        </section>

        <footer className="text-center mt-12 pb-16 opacity-50">
          <p className="font-bold text-pink-400 tracking-widest uppercase text-[10px]">
            © 2026 My Vision Kingdom • Created with Faith & Love
          </p>
        </footer>
      </main>

      {/* Vision Detail Modal */}
      {activeVision && activeVisionData && (
        <VisionWindow 
          item={activeVisionData} 
          onClose={() => setActiveVision(null)} 
        />
      )}
    </div>
  );
};

export default App;
