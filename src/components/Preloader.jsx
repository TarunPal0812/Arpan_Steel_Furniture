import React from "react";
import * as assets from "../assets";

function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated Logo Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl animate-pulse scale-150"></div>
          <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center relative shadow-2xl animate-bounce duration-2000">
            <img 
              src={assets.logo} 
              alt="Arpan Steel" 
              className="w-16 h-16 object-contain" 
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white tracking-[0.3em] uppercase mb-2 animate-pulse">
            Arpan Steel
          </h2>
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-white w-1/3 rounded-full animate-[progress_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}

export default Preloader;
