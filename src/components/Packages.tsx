import pkg1 from '../assets/package1.png';
import pkg2 from '../assets/package2.png';
import pkg3 from '../assets/package3.png';

const packages = [
  {
    id: 1,
    image: pkg1,
    tag: 'LUXURY',
    title: 'Royal Palace Setup',
    description: 'Experience the grandeur of ancient kingdoms with hand-carved pillars and heritage motifs.',
    price: '₹15,00,000'
  },
  {
    id: 2,
    image: pkg2,
    tag: 'FLORAL',
    title: 'Orchid Dream Garden',
    description: 'A whimsical floral paradise featuring exotic white orchids and emerald green foliage.',
    price: '₹8,50,000'
  },
  {
    id: 3,
    image: pkg3,
    tag: 'MODERN',
    title: 'The Contemporary Heir',
    description: 'Clean lines meet Indian opulence. A perfect blend for the modern couple seeking subtle luxury.',
    price: '₹12,00,000'
  }
];

const Packages = () => {
  return (
    <section className="w-full bg-[#FFF8F0] pt-20 pb-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center px-2">
          <p className="text-[10px] md:text-xs tracking-[0.2em] text-[#A88523] uppercase font-bold">CURATED EXCELLENCE</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#5A0F1C] mt-3 mb-10 md:mb-14">Signature Wedding Packages</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col">
              
              {/* Image relative container */}
              <div className="relative w-full h-56">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 right-4 bg-[#5A0F1C] text-white text-[9px] font-bold px-2 py-1 rounded tracking-widest uppercase">
                  {pkg.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="font-serif text-[22px] font-bold text-[#4A0A12] leading-snug">{pkg.title}</h3>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed flex-grow">{pkg.description}</p>
                
                {/* Divider Line */}
                <div className="w-full h-[1px] bg-gray-100 my-6"></div>
                
                {/* Bottom Row */}
                <div className="flex items-end justify-between mt-auto">
                  <div>
                    <p className="text-[11px] text-gray-400 mb-0.5">Starts at</p>
                    <p className="text-lg font-bold text-[#A88523]">{pkg.price}</p>
                  </div>
                  <button className="bg-[#5A0F1C] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#3d0a13] hover:shadow-md transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
