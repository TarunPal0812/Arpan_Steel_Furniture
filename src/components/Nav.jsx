import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import * as assets from "../assets";
import data from "../data/data.json";

function Nav() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setNavOpen(false);
  }, [location]);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [navOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Catalog", path: "/catalog" },
    { name: "Vision", path: "/value" },
    { name: "License", path: "/udyam" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  const isHomePage = location.pathname === "/";
  const needsSolidBg = !isHomePage || isScrolled;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 px-6 ${
        navOpen
        ? "bg-white opacity-100 backdrop-blur-none py-4"
        : needsSolidBg 
          ? "bg-white/95 backdrop-blur-xl shadow-xl shadow-slate-900/5 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
            <img src={assets.logo} alt="ASF" className="w-7 h-7 object-contain brightness-0 invert" />
          </div>
          <div className="">
            <h1 className="text-lg font-black text-slate-900 leading-none uppercase tracking-tighter">
              Arpan Steel
            </h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-0.5">Furniture</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path}
                className={`relative py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  location.pathname === link.path 
                  ? "text-slate-900" 
                  : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 rounded-full animate-in fade-in slide-in-from-left-2 offset-y-1"></span>
                )}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg active:scale-95">
              Let's Talk
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setNavOpen(!navOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-900 text-xl z-[1100] relative"
          aria-label="Toggle Menu"
        >
          {navOpen ? <FaTimes key="close" /> : <FaBars key="open" />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[1050] transition-transform duration-500 lg:hidden ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-10 pt-32">
          <ul className="space-y-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`text-4xl font-bold transition-all ${
                    location.pathname === link.path ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto border-t border-slate-100 pt-10">
            <p className="text-slate-400 text-sm mb-4">Questions? Call us</p>
            <a href={`tel:${data.siteConfig.phone}`} className="text-2xl font-bold text-slate-900">{data.siteConfig.phone}</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

