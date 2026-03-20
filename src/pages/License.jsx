import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as assets from "../assets";
import { FaFilePdf, FaDownload } from "react-icons/fa";


const License = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">Certifications & Licenses</h1>
        <p className="text-slate-400 max-w-2xl mx-auto italic">Transparency and compliance are at the heart of our operations.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white rounded-[40px] p-8 lg:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100" data-aos="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Udyam Registration</h2>
              <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Official Government Certification</p>
            </div>
            <a 
              href={assets.udyam} 
              download 
              className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl active:scale-95"
            >
              <FaDownload /> Download Certificate
            </a>
          </div>

          {/* Desktop Preview */}
          <div className="hidden lg:block h-[800px] rounded-3xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50 relative">
            <iframe
              src={assets.udyam}
              title="Udyam Registration"
              width="100%"
              height="100%"
              className="border-none"
            ></iframe>
          </div>

          {/* Mobile Fallback */}
          <div className="lg:hidden p-10 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 text-center">
            <FaFilePdf className="text-6xl text-slate-300 mx-auto mb-6" />
            <p className="text-slate-500 mb-6">
              Preview is not available on mobile devices. Please download the document to view our registration details.
            </p>
            <a 
              href={assets.udyam} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-900 font-bold underline decoration-2 underline-offset-8"
            >
              Open PDF in New Tab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default License;

