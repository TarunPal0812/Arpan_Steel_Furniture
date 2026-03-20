import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from "../data/data.json";

function Footer() {
  const { siteConfig } = data;

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-6" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-white">{siteConfig.name}</h3>
          <p className="text-sm leading-relaxed">
            Crafting durable, stylish, and high-quality steel furniture for
            homes, offices, and institutions since decades. Elevate your space
            with our premium solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com/arpansteelfurniture"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 shadow-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/arpan_steel96"
              className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-pink-600 transition-all duration-300 shadow-lg"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">
            Quick Navigation
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className="hover:text-white transition-colors"
              >
                Product Catalog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">
            Contact Details
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 text-slate-500" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex gap-3">
              <FaPhoneAlt className="mt-1 text-slate-500" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-white transition-colors"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <FaEnvelope className="mt-1 text-slate-500" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-white transition-colors"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Location Map */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">
            Our Location
          </h4>
          <div className="rounded-2xl overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 h-32 border border-slate-800">
            <iframe
              title="Google Map"
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

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
        <p>
          &copy; {new Date().getFullYear()} Arpan Steel Furniture. All Rights
          Reserved.
        </p>
        <p>
          Design by{" "}
          <a
            href="https://tarun-pal.vercel.app/"
            className="text-white hover:text-blue-500 transition-colors"
          >
            Vikash Agrahari | Tarun Pal
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
