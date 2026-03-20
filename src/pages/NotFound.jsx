import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHome } from "react-icons/fa";

function NotFound() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 bg-slate-900/5 rounded-full blur-3xl"></div>

      <div className="max-w-xl w-full text-center relative z-10" data-aos="zoom-in">
        <h1 className="text-[180px] font-black text-slate-900/10 leading-none mb-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          404
        </h1>
        
        <div className="relative">
          <div className="w-32 h-32 bg-slate-900 mx-auto rounded-3xl flex items-center justify-center mb-10 shadow-2xl rotate-12 transition-transform hover:rotate-0 duration-500">
            <span className="text-white text-5xl font-black">?</span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Lost in Iron?
          </h2>
          <p className="text-slate-500 mb-12 text-lg leading-relaxed italic">
            "While our steel furniture lasts forever, this page seems to have disappeared. Let's get you back to the collection."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 active:scale-95 flex items-center gap-3 w-full sm:w-auto"
            >
              <FaHome className="text-sm" /> Arpan Home
            </Link>
            <Link 
              to="/catalog" 
              className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all active:scale-95 w-full sm:w-auto"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
