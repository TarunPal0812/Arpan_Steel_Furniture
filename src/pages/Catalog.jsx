import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaInfoCircle, FaSearch } from "react-icons/fa";
import * as assets from "../assets";
import data from "../data/data.json";

const WHATSAPP_NUMBER = data.siteConfig.whatsappNumber;

function Catalog() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const products = data.products.map(p => ({
    ...p,
    image: assets[p.image]
  }));

  const categories = data.categories;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [inquiryData, setInquiryData] = useState({ name: "", phone: "" });


  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.id.toString().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppInquiry = (e) => {
    e.preventDefault();
    let message = `Hello Arpan Steel Furniture,\n\nI am interested in the following product:\n- Product Name: ${selectedProduct.name}\n- Product ID: ${selectedProduct.id}\n- Size: ${selectedProduct.details}`;
    
    if (selectedProduct.material) message += `\n- Material: ${selectedProduct.material}`;
    if (selectedProduct.warranty) message += `\n- Warranty: ${selectedProduct.warranty}`;
    
    message += `\n\nMy Details:\n- Name: ${inquiryData.name}\n- Phone: ${inquiryData.phone}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    
    fetch("https://sheetdb.io/api/v1/y5vovy16oxua3", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...inquiryData, product: selectedProduct.name, productId: selectedProduct.id })
    });

    window.open(whatsappUrl, "_blank");
    setInquiryData({ name: "", phone: "" });
    setSelectedProduct(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-slate-900 text-white pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-down">Product Catalog</h1>
        <p className="text-slate-400 max-w-2xl mx-auto italic">Browse through our premium collection of durable and stylish steel furniture.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <FaSearch className="text-slate-400" /> Filter & Search
            </h3>
            
            <div className="mb-8">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-800 focus:outline-none transition"
              />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Categories</p>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === category 
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
                    : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                data-aos="fade-up"
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-tighter shadow-sm">
                    ID: #{product.id}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{product.category}</p>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-6 flex-grow line-clamp-2 italic">{product.details}</p>
                  
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-95 transition-all"
                  >
                    <FaInfoCircle /> View & Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No products found matching your criteria.</p>
              <button onClick={() => {setSelectedCategory("All"); setSearchQuery("");}} className="mt-4 text-slate-900 font-bold underline">Clear all filters</button>
            </div>
          )}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 md:p-10">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          
          <div className="bg-white rounded-3xl shadow-2xl relative w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[85vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur h-10 w-10 rounded-full flex items-center justify-center text-slate-800 hover:bg-white transition"
            >
              ✕
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-1/2 p-8 flex flex-col bg-slate-50">
              <div className="mb-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{selectedProduct.category} | ID: #{selectedProduct.id}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{selectedProduct.name}</h2>
                <div className="h-1 w-12 bg-slate-900 mb-6"></div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Description</h4>
                    <p className="text-slate-600 leading-relaxed italic">{selectedProduct.details}</p>
                  </div>

                  {selectedProduct.material && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Material</h4>
                        <p className="text-sm font-bold text-slate-800">{selectedProduct.material}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Warranty</h4>
                        <p className="text-sm font-bold text-slate-800">{selectedProduct.warranty}</p>
                      </div>
                    </div>
                  )}

                  {selectedProduct.features && (
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Key Features</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProduct.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 bg-slate-900 rounded-full flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <FaWhatsapp className="text-green-500" /> WhatsApp Inquiry
                  </h4>
                  <form onSubmit={handleWhatsAppInquiry} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-800 focus:outline-none transition text-sm"
                        value={inquiryData.name}
                        onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-800 focus:outline-none transition text-sm"
                        value={inquiryData.phone}
                        onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-4 bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-green-700 shadow-xl shadow-green-100 transition-all active:scale-95 text-sm"
                    >
                      Send Product Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Catalog;