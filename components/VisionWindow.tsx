
import React, { useEffect } from 'react';
import { VisionItem } from '../types.ts';

interface VisionWindowProps {
  item: VisionItem;
  onClose: () => void;
}

const VisionWindow: React.FC<VisionWindowProps> = ({ item, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-black/20 backdrop-blur-sm transition-all duration-300 animate-in fade-in">
      <div className="absolute inset-0" onClick={handleClose}></div>

      <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden transform transition-all animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
        
        <div className={`shrink-0 h-24 md:h-32 ${item.gradient} flex items-center justify-center text-3xl relative`}>
          <span className="animate-float">{item.icon}</span>
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors z-10"
            aria-label="Tutup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
          <h2 className="text-2xl md:text-3xl font-extrabold text-pink-600 mb-6 md:mb-8 text-center tracking-wide">{item.title}</h2>
          
          <ul className="space-y-3 md:space-y-4">
            {item.items.map((point, idx) => (
              <li 
                key={idx} 
                className="bg-pink-50/50 p-4 md:p-5 rounded-2xl border border-pink-100 flex items-start gap-3 animate-pop-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <span className="text-pink-400 mt-1 shrink-0">✨</span>
                <span className="text-pink-900 font-medium text-sm md:text-base leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`shrink-0 p-4 bg-gray-50/80 backdrop-blur-sm border-t border-gray-100 flex justify-center`}>
           <button 
            onClick={handleClose}
            className="px-10 py-3 bg-pink-400 text-white rounded-full font-bold shadow-md hover:bg-pink-500 active:scale-95 transition-all"
           >
             Tutup
           </button>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #fbcfe8;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #f9a8d4;
        }
      `}</style>
    </div>
  );
};

export default VisionWindow;
