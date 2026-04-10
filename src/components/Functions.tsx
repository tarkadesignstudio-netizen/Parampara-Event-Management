import haldiImg from '../assets/haldi.png';
import mehendiImg from '../assets/mehendi.png';
import sangeetImg from '../assets/sangeet.png';
import weddingImg from '../assets/wedding.png';
import receptionImg from '../assets/reception.png';

const functionsData = [
  { id: 1, title: 'Haldi', image: haldiImg },
  { id: 2, title: 'Mehendi', image: mehendiImg },
  { id: 3, title: 'Sangeet', image: sangeetImg },
  { id: 4, title: 'Wedding', image: weddingImg },
  { id: 5, title: 'Reception', image: receptionImg },
];

const Functions = () => {
  return (
    <section className="w-full bg-[#FFF8F0] pt-16 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <h2 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4A0A12] mb-12">
          Curated For Every Function
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {functionsData.map((item) => (
            <div key={item.id} className="cursor-pointer group flex flex-col bg-transparent">
              {/* Image Container */}
              <div className="w-full h-64 lg:h-72 rounded-xl overflow-hidden shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Title */}
              <h3 className="mt-3 font-serif text-lg font-bold text-[#4A0A12]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Functions;
