
import React from 'react';
import { VISION_DATA } from '../constants.tsx';
import { VisionCategory } from '../types.ts';

interface CandyJarProps {
  onCandyClick: (category: VisionCategory) => void;
}

const CandyJar: React.FC<CandyJarProps> = ({ onCandyClick }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Jar Container - Responsive sizes */}
      <div className="relative w-[92vw] max-w-[340px] md:max-w-[580px] h-[480px] md:h-[800px] bg-white/40 backdrop-blur-md rounded-[3rem] md:rounded-[7rem] border-[6px] md:border-[14px] border-white shadow-2xl p-6 md:p-20 flex flex-col items-center justify-center overflow-visible">
        
        {/* Jar Lid */}
        <div className="absolute -top-5 md:-top-8 left-1/2 -translate-x-1/2 w-28 md:w-64 h-6 md:h-12 bg-pink-300 rounded-t-xl md:rounded-t-3xl border-x-2 md:border-x-4 border-t-2 md:border-t-4 border-white shadow-md"></div>
        <div className="absolute top-0.5 md:top-2 left-1/2 -translate-x-1/2 w-36 md:w-72 h-1 md:h-3 bg-white/80 rounded-full shadow-sm"></div>

        {/* Candies Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:gap-x-32 md:gap-y-32 relative z-10 w-full px-2 md:px-4">
          {VISION_DATA.map((vision) => (
            <button
              key={vision.id}
              onClick={() => onCandyClick(vision.category)}
              className="group/candy relative flex flex-col items-center outline-none"
            >
              <div className="relative flex items-center justify-center transition-all duration-300 group-hover/candy:scale-110 active:scale-90">
                {/* Candy Wrapper Ends */}
                <div className={`absolute -left-2 md:-left-8 w-6 h-10 md:w-16 md:h-24 rounded-lg rotate-[25deg] opacity-60 border border-white/50 ${vision.gradient}`}></div>
                <div className={`absolute -right-2 md:-right-8 w-6 h-10 md:w-16 md:h-24 rounded-lg rotate-[-25deg] opacity-60 border border-white/50 ${vision.gradient}`}></div>

                {/* Candy Center */}
                <div 
                  className={`relative z-10 w-14 h-14 md:w-36 md:h-36 rounded-full flex items-center justify-center border-2 md:border-4 border-white shadow-lg overflow-hidden ${vision.gradient}`}
                >
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.8)_50%,transparent_75%)] bg-[length:12px_12px] md:bg-[length:30px_30px]"></div>
                  
                  <div className="text-2xl md:text-6xl transform transition-transform relative z-10">
                     {vision.icon}
                  </div>
                </div>
              </div>

              {/* Candy Stick */}
              <div className="w-1 md:w-2 h-4 md:h-12 bg-white/40 -mt-0.5 rounded-b-full"></div>
              
              <span className="mt-3 md:mt-8 text-[9px] sm:text-xs md:text-xl font-black text-pink-600 uppercase tracking-wider md:tracking-[0.25em] opacity-90 text-center">
                {vision.category}
              </span>
            </button>
          ))}
        </div>

        {/* Jar Shine Effect */}
        <div className="absolute inset-4 md:inset-6 rounded-[2.5rem] md:rounded-[6rem] bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
      </div>

      {/* Shadow */}
      <div className="w-[60vw] max-w-[280px] md:max-w-[450px] h-6 md:h-12 bg-pink-100/60 rounded-[100%] blur-xl md:blur-3xl mt-4 md:mt-10"></div>
    </div>
  );
};

export default CandyJar;
