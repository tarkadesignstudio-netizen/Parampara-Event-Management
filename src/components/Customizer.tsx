import React, { useState } from 'react';

const Customizer = () => {
  const [activePalette, setActivePalette] = useState(0);
  
  const palettes = [
    { id: 0, color: 'bg-red-600', name: 'Red' },
    { id: 1, color: 'bg-orange-500', name: 'Orange' },
    { id: 2, color: 'bg-pink-500', name: 'Pink' },
    { id: 3, color: 'bg-white', name: 'White' }
  ];

  const imageUrls = [
    "https://images.unsplash.com/photo-1582650043132-7ae6e828a2a0?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000"
  ];

  return (
    <section className="w-full bg-[#5A0F1C] py-16 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side: Form Area */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-8">
            Design Your Own Legacy
          </h2>
          
          <div className="space-y-6">
            {/* Field 1: Function Type */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2 opacity-80 tracking-wide font-medium">FUNCTION TYPE</label>
              <div className="relative">
                <select className="w-full appearance-none bg-[#6A1B2A] text-white px-4 py-3 rounded-md border border-transparent focus:border-gold focus:outline-none transition-colors cursor-pointer">
                  <option>Grand Wedding Ceremony</option>
                  <option>Sangeet Night</option>
                  <option>Royal Reception</option>
                  <option>Haldi Celebration</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Field 2: Decor Style */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2 opacity-80 tracking-wide font-medium">DECOR STYLE</label>
              <div className="relative">
                <select className="w-full appearance-none bg-[#6A1B2A] text-white px-4 py-3 rounded-md border border-transparent focus:border-gold focus:outline-none transition-colors cursor-pointer">
                  <option>Heritage Indian</option>
                  <option>Modern Minimalist</option>
                  <option>Floral Extravaganza</option>
                  <option>Regal Velvet</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Field 3: Floral Palette */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2 opacity-80 tracking-wide font-medium">FLORAL PALETTE</label>
              <div className="flex gap-3">
                {palettes.map((palette) => (
                  <button
                    key={palette.id}
                    onClick={() => setActivePalette(palette.id)}
                    className={`w-6 h-6 rounded-full border-2 transition-transform duration-300 ${palette.color} ${
                      activePalette === palette.id ? 'scale-125 border-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'border-white hover:scale-110'
                    }`}
                    aria-label={`Select ${palette.name} palette`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[#D4AF37] text-gray-900 py-3 rounded-md font-medium text-lg mt-6 hover:brightness-110 hover:shadow-lg transition-all duration-300 active:scale-[0.98]">
              Get Instant Estimate
            </button>
          </div>
        </div>

        {/* Right Side: Image Preview */}
        <div className="w-full md:w-1/2 relative group mt-8 md:mt-0">
          {/* Subtle floating text */}
          <div className="absolute top-4 left-4 z-20 bg-black/40 backdrop-blur-sm text-white/90 text-sm px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Live Preview
          </div>

          {/* Image Container with Glow & Shadow */}
          <div className="relative rounded-lg overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.2)] transition-shadow duration-500 before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#5A0F1C]/60 before:to-transparent before:z-10 before:mix-blend-multiply">
            <img 
              src={imageUrls[activePalette]} 
              alt="Indian Wedding Stage Preview" 
              className="w-full h-[450px] object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
            />
            {/* Subtle glow overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-gold/10 to-transparent mix-blend-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Customizer;
