
import React from 'react';
import { VISION_DATA, SOUNDS } from '../constants.tsx';
import { VisionCategory } from '../types.ts';
import { playSound } from '../utils/audio.ts';

interface CandyJarProps {
  onCandyClick: (category: VisionCategory) => void;
}

const CandyJar: React.FC<CandyJarProps> = ({ onCandyClick }) => {
  const handleCandyClick = (category: VisionCategory) => {
    playSound(SOUNDS.CANDY_POP, 0.3);
    onCandyClick(category);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="relative w-[300px] md:w-[380px] h-[450px] bg-white/40 backdrop-blur-md rounded-[5rem] border-[10px] border-white shadow-2xl p-8 flex flex-col items-center justify-center overflow-visible group">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-pink-300 rounded-t-2xl border-x-4 border-t-4 border-white shadow-md"></div>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-48 h-2 bg-white/80 rounded-full shadow-sm"></div>

        <div className="grid grid-cols-2 gap-8 md:gap-12 relative z-10">
          {VISION_DATA.map((vision) => (
            <button
              key={vision.id}
              onClick={() => handleCandyClick(vision.category)}
              className="group/candy relative flex flex-col items-center"
            >
              {/* Wrapped Candy Shape Container */}
              <div className="relative flex items-center justify-center transition-all duration-300 group-hover/candy:scale-110 group-hover/candy:-translate-y-2 group-active/candy:scale-95">
                
                {/* Left Wrapper Tip */}
                <div className={`absolute -left-3 md:-left-4 w-10 h-14 md:w-12 md:h-16 rounded-lg rotate-[25deg] opacity-70 border-2 border-white shadow-sm ${vision.gradient}`}></div>
                
                {/* Right Wrapper Tip */}
                <div className={`absolute -right-3 md:-right-4 w-10 h-14 md:w-12 md:h-16 rounded-lg rotate-[-25deg] opacity-70 border-2 border-white shadow-sm ${vision.gradient}`}></div>

                {/* Main Candy Body (The Circle) */}
                <div 
                  className={`relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border-4 border-white shadow-lg overflow-hidden ${vision.gradient}`}
                >
                  {/* Subtle Stripe for texture */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.8)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
                  
                  <div className="text-3xl md:text-4xl transform group-hover/candy:rotate-12 transition-transform relative z-10">
                     {vision.icon}
                  </div>
                </div>
              </div>

              {/* Candy Stick/Shadow Shadow Area */}
              <div className="w-1 h-6 bg-white/40 -mt-1 rounded-b-full"></div>
              
              <span className="mt-2 text-[10px] md:text-xs font-bold text-pink-500 uppercase tracking-widest opacity-60 group-hover/candy:opacity-100 transition-opacity">
                {vision.category}
              </span>
            </button>
          ))}
        </div>
        <div className="absolute inset-4 rounded-[4rem] bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
      </div>
      <div className="w-64 h-6 bg-pink-100 rounded-[100%] blur-xl mt-4"></div>
    </div>
  );
};

export default CandyJar;
