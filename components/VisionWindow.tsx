
import React, { useEffect } from 'react';
import { VisionItem } from '../types.ts';
import { playSound } from '../utils/audio.ts';
import { SOUNDS } from '../constants.tsx';

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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-white/10 backdrop-blur-md transition-all duration-300 animate-in fade-in">
      <div className="absolute inset-0" onClick={handleClose}></div>

      <div className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden transform transition-all animate-in zoom-in-95 duration-300">
        <div className={`h-32 ${item.gradient} flex items-center justify-center text-6xl relative`}>
          {item.icon}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-pacifico text-pink-600 mb-8 text-center">{item.title}</h2>
          
          <ul className="space-y-4">
            {item.items.map((point, idx) => (
              <li 
                key={idx} 
                className="bg-pink-50/50 p-4 rounded-2xl border border-pink-100 flex items-start gap-3 animate-pop-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className="text-pink-400 mt-1">✨</span>
                <span className="text-pink-900 font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 bg-gray-50 flex justify-center">
           <button 
            onClick={handleClose}
            className="px-8 py-2 bg-pink-400 text-white rounded-full font-bold shadow-md hover:bg-pink-500 transition-colors"
           >
             Tutup
           </button>
        </div>
      </div>
    </div>
  );
};

export default VisionWindow;
