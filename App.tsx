
import React, { useState, useEffect, useMemo } from 'react';
import KingdomDoor from './components/KingdomDoor.tsx';
import VisionWindow from './components/VisionWindow.tsx';
import CandyJar from './components/CandyJar.tsx';
import { VISION_DATA, BIBLE_VERSE, MOTIVATION_LYRICS } from './constants.tsx';
import { VisionCategory } from './types.ts';

const GlitterBackground: React.FC = () => {
  const sparkles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 2}px`,
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
    setIsDoorOpen(false);
    setActiveVision(null);
  };

  const handleCandyClick = (cat: VisionCategory) => {
    setActiveVision(cat);
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

      {/* Header Actions - Mobile Optimized */}
      <div className={`fixed top-4 left-4 md:top-6 md:left-6 z-40 transition-all duration-500 ${
          isDoorOpen ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
        }`}>
        <button
          onClick={handleCloseDoor}
          className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border-2 border-white text-pink-500 font-bold flex items-center gap-2 transition-all active:scale-90 text-sm md:text-base"
        >
          <span>🏰</span> Kembali
        </button>
      </div>

      <main className={`transition-all duration-1000 ease-out ${isDoorOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} p-4 pt-16 md:p-16 lg:p-24 relative z-10 max-w-6xl mx-auto`}>
        
        {/* Header Section */}
        <section className="text-center mb-10 md:mb-24">
          <div className="inline-block relative">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-pink-600 mb-2 md:mb-4 drop-shadow-md tracking-tight font-pacifico">Vision Board 2026</h2>
            <div className="h-2 w-3/4 mx-auto bg-pink-200/50 rounded-full blur-[1px]"></div>
            <div className="absolute -top-8 -right-6 md:-top-16 md:-right-16 text-3xl md:text-6xl animate-float">🍭</div>
          </div>
          
          <div className="mt-8 md:mt-16 flex flex-col gap-5 md:gap-10 max-w-4xl mx-auto">
            {/* Bible Verse Card */}
            <div className="bg-white/80 backdrop-blur-md p-6 md:p-14 rounded-[2rem] md:rounded-[4rem] border-b-4 md:border-b-8 border-pink-100 shadow-xl animate-pop-in relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
               <h3 className="text-pink-400 font-bold text-[10px] md:text-lg mb-2 md:mb-6 uppercase tracking-[0.2em] md:tracking-[0.4em]">{BIBLE_VERSE.reference}</h3>
               <p className="text-pink-900 text-base md:text-4xl font-semibold italic leading-relaxed font-quicksand">
                 "{BIBLE_VERSE.text}"
               </p>
            </div>

            {/* DIVINE MOTIVATION CARD */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-yellow-300 rounded-[2rem] md:rounded-[3.5rem] blur opacity-20 transition duration-1000"></div>
              
              <div className="relative bg-white/70 backdrop-blur-xl p-6 md:p-14 rounded-[2rem] md:rounded-[3.5rem] border-2 border-white/50 shadow-lg animate-pop-in delay-300 overflow-hidden text-center">
                 <h4 className="text-pink-500/60 font-black text-[9px] md:text-sm mb-4 md:mb-8 uppercase tracking-[0.3em] md:tracking-[0.6em] border-b border-pink-50 pb-2 md:pb-4 inline-block">
                   {MOTIVATION_LYRICS.title}
                 </h4>

                 <div className="flex flex-col gap-2 md:gap-4">
                   {MOTIVATION_LYRICS.lyrics.map((line, idx) => (
                     <div 
                        key={idx} 
                        className="animate-pop-in"
                        style={{ animationDelay: `${0.5 + (idx * 0.15)}s` }}
                     >
                       <p className="text-pink-800 text-sm sm:text-base md:text-3xl font-extrabold tracking-tight">
                         {line}
                       </p>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jar Section */}
        <section className="flex flex-col items-center justify-center space-y-8 md:space-y-20 mb-20 md:mb-40">
          <CandyJar onCandyClick={handleCandyClick} />
          
          <div className="text-center px-4">
            <div className="inline-block bg-pink-100/50 backdrop-blur-sm px-5 py-2 md:px-8 md:py-3 rounded-full border border-white">
              <p className="text-pink-500 font-black tracking-[0.15em] md:tracking-[0.4em] uppercase text-[9px] md:text-sm animate-pulse">
                ✨ KETUK PERMEN UNTUK MEMBUKA VISI ✨
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center pb-8 md:pb-12 opacity-30 text-[9px] md:text-sm font-medium">
          <p className="tracking-widest uppercase px-4">© 2026 My Vision Kingdom • Created with Faith and Love</p>
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
