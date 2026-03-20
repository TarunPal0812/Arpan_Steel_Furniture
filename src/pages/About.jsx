import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import * as assets from "../assets";
import data from "../data/data.json";

function About() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const teamMembers = data.teamMembers.map(member => ({
    ...member,
    image: assets[member.image]
  }));


  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">About Our Journey</h1>
        <p className="text-slate-400 max-w-2xl mx-auto italic">Learn about the visionaries behind Arpan Steel Furniture and our commitment to excellence.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Leadership Team</h2>
          <div className="h-1 w-20 bg-slate-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center" data-aos="fade-up" data-offset={index * 100}>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-slate-900 rounded-full scale-110 -z-10 opacity-5"></div>
                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">{member.name}</h4>
              <p className="text-green-600 font-bold uppercase tracking-widest text-xs mt-1 mb-4">{member.role}</p>
              <p className="text-slate-500 leading-relaxed italic">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Vision & Mission Summary */}
        <div className="mt-24 grid md:grid-cols-2 gap-8" data-aos="fade-up">
          <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              {data.vision}
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed">
              {data.mission.join(" ")}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}


export default About;


