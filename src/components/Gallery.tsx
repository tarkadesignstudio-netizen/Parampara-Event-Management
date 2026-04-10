import g1 from '../assets/gallery1.png';
import g2 from '../assets/gallery2.png';
import g3 from '../assets/gallery3.png';
import g4 from '../assets/gallery4.png';
import g5 from '../assets/gallery5.png';

const galleryImages = [
  { id: 1, src: g1, alt: 'Marigold decoration' },
  { id: 2, src: g2, alt: 'Yellow canopy' },
  { id: 3, src: g3, alt: 'Mehendi seating setup' },
  { id: 4, src: g4, alt: 'Candlelight table decor' },
  { id: 5, src: g5, alt: 'White sofa stage' },
];

const Gallery = () => {
  return (
    <section className="w-full bg-[#FFF8F0] pt-16 pb-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between text-center md:text-left gap-6 md:gap-0">
          {/* Left Side */}
          <div className="w-full md:w-auto flex flex-col items-center md:items-start">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A0A12]">
              The Inspiration Gallery
            </h2>
            <p className="mt-3 text-base md:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
              A handpicked collection of the most breathtaking wedding aesthetics from across India.
            </p>
          </div>

          {/* Right Side */}
          <div className="shrink-0">
            <span className="text-[#D4AF37] font-medium cursor-pointer hover:underline underline-offset-4 transition-all duration-300">
              View All Collections &rarr;
            </span>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {galleryImages.map((img) => (
            <div key={img.id} className="rounded-lg overflow-hidden group cursor-pointer shadow-sm">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-56 sm:h-64 md:h-72 lg:h-[340px] xl:h-[400px] object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
