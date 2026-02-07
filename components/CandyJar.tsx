
import React from 'react';
import { VISION_DATA, SOUNDS } from '../constants';
import { VisionCategory } from '../types';
import { playSound } from '../utils/audio';

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
      {/* The main decorative "Jar" pill container */}
      <div className="relative w-[340px] md:w-[380px] min-h-[480px] bg-white/40 backdrop-blur-xl rounded-[6rem] border-[10px] border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-12 flex flex-col items-center justify-center overflow-visible">
        
        {/* Floating background particles inside the jar */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[5.5rem]">
           {[...Array(15)].map((_, i) => (
             <div 
               key={i}
               className={`absolute rounded-full opacity-20 ${i % 3 === 0 ? 'bg-pink-300' : i % 3 === 1 ? 'bg-blue-300' : 'bg-yellow-300'}`}
               style={{
                 width: `${Math.random() * 20 + 10}px`,
                 height: `${Math.random() * 20 + 10}px`,
                 top: `${Math.random() * 100}%`,
                 left: `${Math.random() * 100}%`,
                 animation: `float ${4 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`
               }}
             />
           ))}
        </div>

        {/* Top Seal/Ribbon aesthetic */}
        <div className="absolute -top-6 z-30 flex flex-col items-center">
           <div className="bg-pink-200/80 backdrop-blur-md w-36 h-10 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
             <div className="w-24 h-1.5 bg-white/40 rounded-full"></div>
           </div>
           <div className="bg-white p-2 rounded-full shadow-xl -mt-5 border-4 border-pink-50 animate-bounce transition-all duration-1000">
             <span className="text-2xl">🍬</span>
           </div>
        </div>

        {/* Grid of Vision Candies */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-14 z-10 relative">
          {VISION_DATA.map((vision) => (
            <button
              key={vision.id}
              onClick={() => handleCandyClick(vision.category)}
              className="group relative flex flex-col items-center"
            >
              {/* Main candy circle */}
              <div 
                className={`w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center border-[6px] border-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-active:scale-95 ${vision.gradient}`}
                style={{
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1), inset 0 2px 10px rgba(255,255,255,0.6)'
                }}
              >
                <div className="text-5xl md:text-6xl transform group-hover:rotate-12 transition-transform drop-shadow-md">
                   {vision.icon}
                </div>
                
                {/* Decorative twinkles on hover */}
                <div className="absolute -top-3 -right-3 text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100 animate-pulse">✨</div>
                <div className="absolute -bottom-3 -left-3 text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100 animate-pulse delay-75">✨</div>
              </div>

              {/* Glowing Aura */}
              <div className={`absolute -z-10 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${vision.gradient}`}></div>
              
              {/* Category label */}
              <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-300 font-bold text-pink-400 text-xs tracking-wider uppercase bg-white/90 px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                {vision.category}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Visual Shadow beneath jar */}
      <div className="w-64 h-5 bg-pink-200/20 rounded-[100%] blur-2xl mt-8"></div>
    </div>
  );
};

export default CandyJar;
