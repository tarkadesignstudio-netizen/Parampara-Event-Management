import React from 'react';
import photographerImg from '../assets/photographer.png';
import makeupImg from '../assets/makeup.png';
import cateringImg from '../assets/catering.png';
import testimonialImg from '../assets/IMGP.png';

const Artisans = () => {
  const artisans = [
    {
      name: "Royal Frames Studio",
      rating: "4.9",
      category: "Mumbai · Cinematic Wedding Photography",
      imageUrl: photographerImg,
    },
    {
      name: "Ethereal Glow By Zara",
      rating: "4.8",
      category: "Delhi · Bridal Makeup Artist",
      imageUrl: makeupImg,
    },
    {
      name: "Spice & Silver",
      rating: "5.0",
      category: "Bengaluru · Gourmet Wedding Catering",
      imageUrl: cateringImg,
    },
    {
      name: "Veda Palace Estates",
      rating: "4.7",
      category: "Jaipur · Luxury Wedding Venue",
      imageUrl: "https://images.unsplash.com/photo-1596422846543-74c6eb230a11?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="w-full bg-[#FFF7F0] py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24 text-[#2C2C2C]">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: Trusted Wedding Artisans */}
        <div className="mb-20 md:mb-28">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
                Trusted Wedding Artisans
              </h2>
              <p className="font-sans font-light text-gray-500 text-base md:text-lg">
                Handpicked vendors who transform dreams into reality.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Photographers', 'Makeup Artists', 'Decorators'].map((tab) => (
                <button 
                  key={tab} 
                  className="px-6 py-2.5 rounded-full border border-[#2C2C2C]/20 text-sm font-medium hover:bg-black/5 hover:border-[#2C2C2C]/30 transition-all duration-300 bg-transparent text-[#2C2C2C]"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artisans.map((artisan, index) => (
              <div 
                key={index} 
                className="bg-white p-4 shadow-sm hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-all duration-300 ease-in-out hover:scale-[1.02] flex flex-col border border-gray-100/80 rounded"
              >
                <div className="w-full h-[200px] mb-4 overflow-hidden rounded-[2px]">
                  <img 
                    src={artisan.imageUrl} 
                    alt={artisan.name} 
                    className="w-full h-full object-cover grayscale opacity-95 transition-all duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="flex justify-between items-center mb-1.5">
                  <h3 className="font-serif text-[17px] font-bold text-[#5A2C38] leading-tight truncate pr-2">
                    {artisan.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] shrink-0 font-bold text-[#8B6B4A]">
                    <span className="text-[#8B6B4A] text-[10px]">⭐</span>
                    {artisan.rating}
                  </div>
                </div>
                
                <p className="text-gray-500 text-[12px] font-sans mb-6 flex-grow tracking-wide">
                  {artisan.category}
                </p>
                
                <button className="w-full py-2.5 bg-transparent border border-[#A68759] text-[#A68759] hover:bg-[#A68759] hover:text-white transition-all duration-300 text-[13px] font-semibold tracking-wide rounded-[2px]">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: Indian Wedding Stories */}
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-10 md:mb-14 text-[#2C2C2C]">
            Indian Wedding Stories
          </h2>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-[12px] shadow-[0_8px_40px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row mb-12">
            
            {/* Left: Image */}
            <div className="w-full md:w-[40%] h-72 md:h-auto overflow-hidden relative">
              <img 
                src={testimonialImg} 
                alt="Ananya and Vikram Wedding" 
                className="w-full h-full object-cover opacity-95 transition-all duration-700 hover:scale-105"
              />
            </div>

            {/* Right: Quote structure */}
            <div className="w-full md:w-[60%] p-8 md:p-14 flex flex-col justify-center">
              {/* Quote Icon */}
              <svg className="w-8 h-8 text-[#D4AF37] mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              
              {/* Quote Text */}
              <p className="font-serif text-lg md:text-xl leading-relaxed text-[#2C2C2C]/80 italic mb-8">
                "Parampara transformed our vision of a heritage Indian wedding into a living masterpiece. The attention to cultural detail in every element made our celebration truly unforgettable."
              </p>

              {/* Author text */}
              <div>
                <h4 className="font-serif font-bold text-lg text-[#2C2C2C]">Ananya & Vikram</h4>
                <p className="font-sans text-sm text-[#2C2C2C]/50 mt-1 uppercase tracking-wider font-medium">The Royal Udaipur Wedding</p>
              </div>
            </div>
            
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-4">
            <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-[#2C2C2C]/30 cursor-pointer hover:border-[#2C2C2C]/60 transition-colors"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#2C2C2C] shadow-sm cursor-pointer"></div>
            <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-[#2C2C2C]/30 cursor-pointer hover:border-[#2C2C2C]/60 transition-colors"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Artisans;
