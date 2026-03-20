import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEye, FaBullseye, FaCheckCircle } from "react-icons/fa";
import data from "../data/data.json";

function Value() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">Vision & Mission</h1>
        <p className="text-slate-400 max-w-2xl mx-auto italic">Our core values that drive us to create exceptional furniture every single day.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Vision */}
          <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100" data-aos="fade-up">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-2xl mb-8">
              <FaEye />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              {data.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100" data-aos="fade-up" data-aos-delay="100">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-8">
              <FaBullseye />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <ul className="space-y-4">
              {data.mission.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-500">
                  <FaCheckCircle className="mt-1 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}


export default Value;

