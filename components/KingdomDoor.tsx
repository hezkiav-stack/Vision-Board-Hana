
import React, { useState, useEffect, useMemo } from 'react';

interface KingdomDoorProps {
  isOpen: boolean;
  onOpen: () => void;
}

const KingdomDoor: React.FC<KingdomDoorProps> = ({ isOpen, onOpen }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const confettiItems = useMemo(() => {
    const icons = ['✨', '💖', '🍭', '⭐', '🎈', '🎉', '🌟'];
    const colors = ['#ff9a9e', '#a1c4fd', '#84fab0', '#f6d365', '#fda085'];
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      icon: icons[i % icons.length],
      color: colors[i % colors.length],
      tx: `${(Math.random() - 0.5) * 600}px`,
      ty: `${(Math.random() - 0.5) * 600}px`,
      rotate: `${Math.random() * 360}deg`,
      delay: `${Math.random() * 0.2}s`
    }));
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex overflow-hidden transition-transform duration-1000 ${isOpen ? 'pointer-events-none' : ''}`}>
      {showConfetti && (
        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
          {confettiItems.map((item) => (
            <div
              key={item.id}
              className="absolute animate-confetti-pop text-2xl"
              style={{
                '--tw-translate-x': item.tx,
                '--tw-translate-y': item.ty,
                '--tw-rotate': item.rotate,
                animationDelay: item.delay,
                color: item.color
              } as React.CSSProperties}
            >
              {item.icon}
            </div>
          ))}
        </div>
      )}

      {/* Left Door */}
      <div 
        onClick={onOpen}
        className={`relative w-1/2 h-full bg-[#8b4513] border-r-2 md:border-r-4 border-yellow-500 transition-transform duration-1000 ease-in-out cursor-pointer origin-left shadow-2xl flex items-center justify-end
          ${isOpen ? '-translate-x-full rotate-y-90' : 'translate-x-0'}
        `}
        style={{
          backgroundImage: 'radial-gradient(circle at center, #a0522d 0%, #8b4513 100%)',
          boxShadow: 'inset -20px 0 50px rgba(0,0,0,0.5)'
        }}
      >
        <div className="absolute inset-0 wood-texture pointer-events-none opacity-40"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-sweep"></div>
        </div>

        <div className="mr-4 md:mr-8 relative z-10">
           <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-yellow-500 border-2 md:border-4 border-yellow-200 shadow-lg flex items-center justify-center animate-handle-glow">
             <div className="w-2 md:w-4 h-8 md:h-12 bg-yellow-700 rounded-full"></div>
           </div>
        </div>
      </div>

      {/* Right Door */}
      <div 
        onClick={onOpen}
        className={`relative w-1/2 h-full bg-[#8b4513] border-l-2 md:border-l-4 border-yellow-500 transition-transform duration-1000 ease-in-out cursor-pointer origin-right shadow-2xl flex items-center justify-start
          ${isOpen ? 'translate-x-full -rotate-y-90' : 'translate-x-0'}
        `}
        style={{
          backgroundImage: 'radial-gradient(circle at center, #a0522d 0%, #8b4513 100%)',
          boxShadow: 'inset 20px 0 50px rgba(0,0,0,0.5)'
        }}
      >
        <div className="absolute inset-0 wood-texture pointer-events-none opacity-40"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-sweep" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="ml-4 md:ml-8 relative z-10">
           <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-yellow-500 border-2 md:border-4 border-yellow-200 shadow-lg flex items-center justify-center animate-handle-glow">
             <div className="w-2 md:w-4 h-8 md:h-12 bg-yellow-700 rounded-full"></div>
           </div>
        </div>
      </div>

      {!isOpen && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
          <div className="bg-white/95 px-8 py-6 md:px-12 md:py-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl border-2 md:border-4 border-yellow-400 animate-pulse transform -rotate-2 flex flex-col items-center max-w-[90%]">
            <h1 className="text-xl md:text-3xl font-extrabold text-pink-500 text-center drop-shadow-sm tracking-wide">
              Kingdom of Vision
            </h1>
            <p className="text-center text-black mt-3 md:mt-4 font-bold text-base md:text-xl">Klik untuk Masuk ✨</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default KingdomDoor;
