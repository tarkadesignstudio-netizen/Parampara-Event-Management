import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden text-center">
      {/* Background Image */}
      <img 
        src={heroBg} 
        alt="Indian Wedding Mandap"
        className="absolute inset-0 w-full h-full object-cover animate-slow-zoom z-0"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-darkRed/80 to-primaryRed/90 z-10"></div>
      
      {/* Decorative Text */}
      <div className="absolute z-10 top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4.5rem] sm:text-[8rem] md:text-[14rem] font-script text-gold opacity-[0.08] whitespace-nowrap pointer-events-none select-none">
        Royal Setup
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 w-full max-w-3xl flex flex-col items-center px-6 md:px-4">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-up opacity-0 [animation-delay:100ms]">
          Plan Your Dream Wedding with Parampara
        </h1>
        
        <p className="font-sans text-[#FFF8F0] text-base md:text-lg mt-5 animate-fade-up opacity-0 [animation-delay:400ms]">
          Explore stunning decor, curated packages, and trusted vendors for every wedding function
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 animate-fade-in opacity-0 [animation-delay:800ms] w-full sm:w-auto">
          <button className="bg-gold text-gray-900 font-medium px-6 py-3 rounded-md hover:scale-105 transition-all duration-300 w-full sm:w-auto">
            Explore Designs
          </button>
          <button className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-md hover:scale-105 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
            View Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
