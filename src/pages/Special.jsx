import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEdit, FaWhatsapp, FaUpload, FaChevronRight } from "react-icons/fa";
import data from "../data/data.json";

function Special() {
  const { siteConfig } = data;
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    details: "",
    file: null,
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
  
    const payload = new URLSearchParams();
    payload.append("name", formData.name);
    payload.append("phone", formData.phone);
    payload.append("details", formData.details);
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwCE68AJeGshfVAfColHUZ6Z28OZ7kfNkv6W0N-9lcscS8DMrpphQriOEgAPM9759G8/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });
  
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", details: "", file: null });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">Custom Commissions</h1>
        <p className="text-slate-400 max-w-2xl mx-auto italic">Have a unique vision? We specialize in bringing bespoke steel concepts to life.</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-1 gap-12">
          
          <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-6">Order Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your official name"
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-slate-900 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="10-digit number"
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-slate-900 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Design Description</label>
                <textarea
                  name="details"
                  rows="6"
                  value={formData.details}
                  onChange={handleChange}
                  required
                  placeholder="Describe your requirement (dimensions, material, finish...)"
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-slate-900 focus:outline-none transition-all"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Reference Sketch/Photo</label>
                <label className="flex items-center justify-center w-full p-8 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 hover:bg-slate-100 hover:border-slate-400 cursor-pointer transition-all group">
                  <input type="file" className="hidden" onChange={handleFileChange} />
                  <div className="text-center">
                    <FaUpload className="text-3xl text-slate-300 mx-auto mb-3 group-hover:text-slate-900 transition-colors" />
                    <span className="text-sm font-bold text-slate-400 group-hover:text-slate-900">
                      {formData.file ? formData.file.name : "Click to select or drag and drop"}
                    </span>
                  </div>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`flex-1 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 ${
                    status === "success" 
                    ? "bg-green-600 text-white" 
                    : status === "error" 
                    ? "bg-red-600 text-white" 
                    : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {status === "sending" ? "Sending..." : status === "success" ? "Submitted!" : status === "error" ? "Error" : "Submit Proposal"}
                </button>
                
                <a 
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=I%20have%20a%20special%20custom%20order%20request.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-5 bg-green-500 text-white rounded-2xl font-bold uppercase tracking-widest text-xs shadow-xl text-center hover:bg-green-600 transition-all flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="text-xl" /> WhatsApp Us
                </a>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Special;

