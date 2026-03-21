import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";
import data from "../data/data.json";

function Contact() {
  const { siteConfig } = data;
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [status, setStatus] = useState("");
  const [mapRevealed, setMapRevealed] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);


  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile || !mapRef.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(mapRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://sheetdb.io/api/v1/vvpayti20hku2", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      <div className="bg-slate-900 text-white pt-32 pb-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">Contact Us</h1>
        <p className="text-slate-400 max-w-2xl mx-auto italic">We are here to help you transform your space. Reach out to us for inquiries, bulk orders, or support.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          

          <div className="lg:w-1/3 space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-slate-500 mb-8">Have a question? Our team is available to assist you with any furniture related queries.</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-slate-900 p-3 rounded-2xl text-white">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Phone</h4>
                  <p className="text-sm text-slate-500">{siteConfig.phone}</p>
                  <p className="text-sm text-slate-500">{siteConfig.secondaryPhone}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-slate-900 p-3 rounded-2xl text-white">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Email</h4>
                  <p className="text-sm text-slate-500">{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-slate-900 p-3 rounded-2xl text-white">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Address</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-green-600 p-3 rounded-2xl text-white">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">WhatsApp</h4>
                  <p className="text-sm text-slate-500 mb-2">Message us directly for quick response.</p>
                  <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer" className="text-xs font-bold text-green-600 uppercase tracking-widest underline">Chat Now</a>
                </div>
              </div>
            </div>
          </div>



          <div className="lg:w-2/3 space-y-12" data-aos="fade-left">
            <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
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
                      placeholder="John Doe"
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-slate-900 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-slate-900 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    title="Enter a valid 10-digit mobile number"
                    placeholder="9876543210"
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-slate-900 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Your Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us what you're looking for..."
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-slate-900 focus:outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 ${
                    status === "success" 
                    ? "bg-green-600 text-white" 
                    : status === "error" 
                    ? "bg-red-600 text-white" 
                    : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Error! Try Again" : "Send Inquiry"}
                </button>
              </form>
            </div>


            <div
              ref={mapRef}
              tabIndex="0"
              className={`map-wrapper rounded-[40px] overflow-hidden h-80 shadow-2xl border-8 border-white${mapRevealed ? " revealed" : ""}`}
            >
              <iframe
                title="Arpan Steel Furniture Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5356288992034!2d88.0686083!3d22.468001400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0285a0af94cbd5%3A0xa084edbc9445e658!2sArpan%20Steel%20Furniture!5e1!3m2!1sen!2sin!4v1741287560625!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

