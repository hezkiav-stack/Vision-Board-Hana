
import React, { useEffect } from 'react';
import { VisionItem } from '../types';
import { playSound } from '../utils/audio';
import { SOUNDS } from '../constants';

interface VisionWindowProps {
  item: VisionItem;
  onClose: () => void;
}

const VisionWindow: React.FC<VisionWindowProps> = ({ item, onClose }) => {
  useEffect(() => {
    playSound(SOUNDS.WINDOW_OPEN, 0.4);
  }, []);

  const handleClose = () => {
    playSound(SOUNDS.CLOSE, 0.3);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-6 bg-pink-50/30 backdrop-blur-xl transition-all duration-300 animate-in fade-in">
      {/* Background overlay click handler */}
      <div className="absolute inset-0" onClick={handleClose}></div>

      <div className="relative w-full max-w-3xl bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] overflow-visible transform transition-all animate-in zoom-in-95 duration-500 border-[12px] border-white ring-1 ring-pink-100">
        
        {/* Large Floating Header Icon */}
        <div className={`absolute -top-20 left-1/2 -translate-x-1/2 z-20 w-32 h-32 rounded-full ${item.gradient} border-[10px] border-white shadow-2xl flex items-center justify-center text-6xl animate-float ring-4 ring-pink-50`}>
          {item.icon}
        </div>

        {/* Content Area */}
        <div className="p-10 md:p-16 rounded-[4rem] bg-gradient-to-br from-white to-pink-50/30 min-h-[500px] flex flex-col items-center">
          
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-8 right-8 p-4 bg-white hover:bg-red-50 text-pink-300 hover:text-red-500 rounded-full transition-all shadow-md border-2 border-gray-50 z-30 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center mt-12 mb-16">
            <h2 className="text-5xl font-pacifico text-pink-700 drop-shadow-sm">{item.title}</h2>
            <div className={`h-2 w-32 mx-auto mt-6 rounded-full opacity-60 ${item.gradient}`}></div>
          </div>

          <div className="w-full max-h-[400px] overflow-y-auto px-4 custom-scrollbar">
            <ul className="space-y-6">
              {item.items.map((point, idx) => (
                <li 
                  key={idx} 
                  style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
                  className="bg-white/80 p-8 rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex items-start gap-6 border-l-[10px] border-pink-200 hover:border-pink-400 hover:translate-x-4 hover:shadow-lg transition-all duration-300 group cursor-default animate-pop-in"
                >
                  <span className="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform inline-block">✨</span>
                  <span className="text-2xl text-pink-900 font-bold leading-tight group-hover:text-pink-600 transition-colors">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionWindow;
