import React from 'react';

const steps = [
  { id: 1, title: 'Select Function', subtitle: 'Pick your event type', icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ), isActive: true },
  { id: 2, title: 'Choose Style', subtitle: 'Editorial to Heritage', icon: (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ), isActive: false },
  { id: 3, title: 'Customize', subtitle: 'Add your personal touch', icon: (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ), isActive: false },
  { id: 4, title: 'Book Vendor', subtitle: 'Secure with confidence', icon: (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ), isActive: false },
];

const Journey = () => {
  return (
    <section className="w-full bg-[#F5EDE4] pt-16 pb-16 px-4 md:px-10 border-t border-[#e2d5c3]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#5A0F1C] mb-12 md:mb-16 italic">
          The Journey to Your Day
        </h2>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-[24px] left-[12%] right-[12%] h-[1px] bg-[#D4AF37] opacity-60 z-0"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 relative z-10 w-full">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center flex-1 w-full text-center group cursor-pointer">
                <div className="bg-[#F5EDE4] px-6">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg transform transition-transform duration-300 group-hover:-translate-y-1 mx-auto ${step.isActive ? 'bg-[#5A0F1C] shadow-lg' : 'bg-white shadow-md'}`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="mt-5 text-sm font-bold text-[#5A0F1C] tracking-wide">{step.title}</h3>
                <p className="mt-1.5 text-xs text-gray-500">{step.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
