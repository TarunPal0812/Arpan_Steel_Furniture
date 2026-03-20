import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaTools, FaShippingFast, FaRupeeSign, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import * as assets from "../assets";
import data from "../data/data.json";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);




  return (
    <div className="bg-white overflow-hidden">
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-slate-900 rounded-full opacity-[0.03] blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-600 rounded-full opacity-[0.03] blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-16 z-10">
          <div data-aos="fade-right">
            <span className="inline-block py-2 px-4 rounded-full bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-widest mb-6">
              Est. Since Decades
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
              Arpan Steel <br/>
              <span className="text-slate-400">Furniture</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
              Experience the perfect fusion of industrial strength and modern elegance. We craft furniture that defines your lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/catalog" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 active:scale-95 flex items-center gap-3">
                Explore Catalog <FaArrowRight />
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-slate-50 transition-all active:scale-95">
                Bulk Inquiry
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8 grayscale opacity-40">
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-[10px] uppercase tracking-widest">Designs</p>
              </div>
              <div className="h-10 w-[1px] bg-slate-200"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">10k+</p>
                <p className="text-[10px] uppercase tracking-widest">Clients</p>
              </div>
            </div>
          </div>

          <div className="relative lg:mt-0 mt-8" data-aos="fade-left" data-aos-delay="200">
            {/* Background Decorative Element */}
            <div className="absolute -inset-6 bg-slate-100 rounded-[60px] -rotate-2 -z-10 translate-x-4 translate-y-4"></div>
            
            <div className="relative w-full max-w-[650px] lg:max-w-[800px] mx-auto rounded-xl overflow-hidden shadow-2xl border-2 border-white bg-white p-0.5 sm:p-1">
              <img 
                src={assets.cta} 
                alt="Arpan Steel Furniture Banner" 
                className="w-full h-auto object-contain block" 
              />
            </div>


            
            {/* Float Badge */}
            <div className="absolute -bottom-10 -right-6 lg:-bottom-16 lg:-right-10 bg-white p-5 lg:p-6 rounded-3xl shadow-2xl animate-float hidden sm:block z-20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white text-xl">
                  <FaTools />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Lifetime</p>
                  <p className="text-sm font-bold text-slate-900">Quality Trust</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group" data-aos="fade-up">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 text-2xl shadow-sm border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 mb-6">
                <FaTools />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Durable Craftsmanship</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Built from premium-grade steel with industrial-strength joints that last for generations.</p>
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 text-2xl shadow-sm border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 mb-6">
                <FaShippingFast />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Seamless Delivery</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Expert logistics team ensuring your furniture arrives in pristine condition across WB.</p>
            </div>
            <div className="group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 text-2xl shadow-sm border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 mb-6">
                <FaRupeeSign />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Unmatched Value</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Top-tier quality at factory-direct pricing. Luxury that doesn't break the bank.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Curated Collections</h2>
              <div className="h-1.5 w-20 bg-slate-900"></div>
            </div>
            <p className="text-slate-400 max-w-sm text-sm" data-aos="fade-left">Discover specialized furniture lines designed for every environment, from home to high-stakes offices.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.collections.map((cat, i) => (
              <Link to="/catalog" key={i} className="group relative rounded-[40px] overflow-hidden bg-slate-100 h-[450px]" data-aos="zoom-in" data-aos-delay={i * 100}>
                <img src={assets[cat.image]} alt={cat.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{cat.count}</p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Trending Masterpieces</h2>
          <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold" data-aos="fade-up" data-aos-delay="100">Most Loved This Season</p>
        </div>
        
        <div data-aos="fade-up">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-8 px-6"
          >
            {data.products.slice(0, 10).map((product, index) => (
              <SwiperSlide key={index}>
                <div className="bg-slate-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 border border-slate-700 p-3">
                  <div className="h-64 rounded-2xl overflow-hidden mb-4">
                    <img src={assets[product.image]} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  </div>
                  <div className="p-4 flex justify-between items-center text-left">
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="text-lg font-bold truncate">{product.name}</h4>
                      <p className="text-slate-500 text-xs">ID: #{product.id}</p>
                    </div>
                    <Link to="/catalog" className="w-10 h-10 bg-white text-slate-900 rounded-full flex-shrink-0 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </section>

      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FaQuoteLeft className="text-5xl text-slate-200 mx-auto mb-10" />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            loop
            className="pb-8"
          >
            {data.testimonials.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="space-y-6">
                  <p className="text-2xl lg:text-3xl text-slate-700 font-medium leading-relaxed italic">"{review.comment}"</p>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{review.name}</h4>
                    <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">{review.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      <section className="py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[60px] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Background Accent */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-green-500 rounded-full blur-[120px] opacity-20"></div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 relative z-10" data-aos="fade-up">Ready for a <br/><span className="text-green-400">Masterpiece?</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto relative z-10" data-aos="fade-up" data-aos-delay="100">Let us help you design your ideal space with our custom-built steel solutions.</p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10" data-aos="fade-up" data-aos-delay="200">
              <Link to="/contact" className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-green-400 transition-colors">Start Your Project</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
