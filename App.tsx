
import React, { useState, useEffect, useMemo } from 'react';
import KingdomDoor from './components/KingdomDoor.tsx';
import VisionWindow from './components/VisionWindow.tsx';
import CandyJar from './components/CandyJar.tsx';
import { VISION_DATA, BIBLE_VERSE, SOUNDS } from './constants.tsx';
import { VisionCategory } from './types.ts';
import { playSound } from './utils/audio.ts';

const GlitterBackground: React.FC = () => {
  const sparkles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
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
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8)',
          }}
        />
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
    <div className="min-h-screen relative selection:bg-pink-200">
      <GlitterBackground />
      <KingdomDoor isOpen={isDoorOpen} onOpen={handleOpenDoor} />

      {/* Header Actions */}
      <div className={`fixed top-6 left-6 z-40 transition-all duration-500 ${
          isDoorOpen ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
        }`}>
        <button
          onClick={handleCloseDoor}
          className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border-2 border-white text-pink-500 font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
        >
          <span>🏰</span> Home
        </button>
      </div>

      <main className={`transition-all duration-1000 ease-out ${isDoorOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} p-6 md:p-12 lg:p-20 relative z-10 max-w-6xl mx-auto`}>
        
        {/* Header Section */}
        <section className="text-center mb-16 pt-16">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-pacifico text-pink-600 mb-2 drop-shadow-sm">Vision Board 2026</h2>
            <div className="h-1 w-full bg-pink-200 rounded-full"></div>
            <div className="absolute -top-8 -right-8 text-4xl animate-float">🍭</div>
          </div>
          
          <div className="mt-12 bg-white/60 backdrop-blur-sm p-8 rounded-[3rem] border-2 border-white shadow-xl max-w-2xl mx-auto">
             <h3 className="text-pink-700 font-bold text-lg mb-2">{BIBLE_VERSE.reference}</h3>
             <p className="text-pink-900 text-2xl md:text-3xl font-bold italic leading-relaxed">
               {BIBLE_VERSE.text}
             </p>
          </div>
        </section>

        {/* Jar Section */}
        <section className="flex flex-col items-center justify-center space-y-12 mb-20">
          <CandyJar onCandyClick={(cat) => setActiveVision(cat)} />
          
          <div className="text-center">
            <p className="text-pink-400 font-bold tracking-widest uppercase text-sm animate-pulse">
              PILIH PERMEN UNTUK MELIHAT VISI ✨
            </p>
          </div>
        </section>

        <footer className="text-center mt-20 opacity-50 text-sm">
          <p>© 2026 My Vision Kingdom • Created with love and candies</p>
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
