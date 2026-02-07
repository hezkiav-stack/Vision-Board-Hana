
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
              <div 
                className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center border-4 border-white shadow-lg transition-all duration-300 group-hover/candy:scale-110 group-hover/candy:-translate-y-2 group-active/candy:scale-95 ${vision.gradient}`}
              >
                <div className="text-4xl md:text-5xl transform group-hover/candy:rotate-12 transition-transform">
                   {vision.icon}
                </div>
              </div>
              <div className="w-2 h-10 bg-white/60 -mt-2 rounded-b-full"></div>
              <span className="mt-2 text-xs font-bold text-pink-500 uppercase tracking-tighter opacity-60 group-hover/candy:opacity-100">
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
