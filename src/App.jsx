import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Special from "./pages/Special";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import Value from "./pages/Value";
import License from "./pages/License";
import Career from "./pages/Career";
import Preloader from "./components/Preloader";
import NotFound from "./pages/NotFound";


function EnforceHttpsForZoho() {
  const location = useLocation();

  useEffect(() => {
    if (
      window.location.href === "http://arpansteelfurniture.in/zohoverify/verifyforzoho.html"
    ) {
      window.location.href =
        "https://arpansteelfurniture.in/zohoverify/verifyforzoho.html";
    }
  }, [location]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time for branding
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
      <EnforceHttpsForZoho />
      <Nav />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/special" element={<Special />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/value" element={<Value />} />
          <Route path="/udyam" element={<License />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
