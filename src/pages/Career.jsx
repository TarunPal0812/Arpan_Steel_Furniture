import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data/data.json";

function Career() {
  const { career } = data;
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">Join Our Team</h1>
        <p className="text-slate-400 max-w-2xl mx-auto italic">Build your career with the leaders in steel furniture manufacturing.</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-[40px] p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 text-center" data-aos="fade-up">
          <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-900 text-3xl mx-auto mb-8">
            🚀
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{career.title}</h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-10">
            {career.description}
          </p>
          <div className="inline-block px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl">
            {career.status}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Career;

