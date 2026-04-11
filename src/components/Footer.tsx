

const Footer = () => {
  return (
    <footer className="w-full bg-[#F3ECE4] pt-[60px] pb-[40px] px-8 md:px-[80px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Section */}
          <div className="flex flex-col">
            <h2 className="font-serif italic font-medium text-2xl text-[#6B2E2E] mb-5 tracking-wide">
              Parampara
            </h2>
            <p className="font-sans text-[15px] text-[#6D6D6D] leading-[1.7] mb-6 max-w-[280px]">
              Curating the finest heritage wedding experiences with modern digital ease.
            </p>
            <div className="flex gap-4">
              {/* Share */}
              <svg className="w-[18px] h-[18px] text-[#6B2E2E] cursor-pointer hover:opacity-75 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              {/* Help/Support */}
              <svg className="w-[18px] h-[18px] text-[#6B2E2E] cursor-pointer hover:opacity-75 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {/* Location */}
              <svg className="w-[18px] h-[18px] text-[#6B2E2E] cursor-pointer hover:opacity-75 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>

          {/* Column 2: Experience */}
          <div className="flex flex-col pt-1">
            <h3 className="font-serif font-semibold text-[17px] text-[#3B2B2B] mb-[18px] tracking-wide">Experience</h3>
            <div className="flex flex-col space-y-[12px]">
              <a href="#" className="font-sans text-[15px] text-[#6D6D6D] hover:text-[#3B2B2B] hover:underline transition-all">The Estate</a>
              <a href="#" className="font-sans text-[15px] text-[#6D6D6D] hover:text-[#3B2B2B] hover:underline transition-all">Royal Vendors</a>
              <a href="#" className="font-sans text-[15px] text-[#6D6D6D] hover:text-[#3B2B2B] hover:underline transition-all">Curated Decor</a>
            </div>
          </div>

          {/* Column 3: Collection */}
          <div className="flex flex-col pt-1">
            <h3 className="font-serif font-semibold text-[17px] text-[#3B2B2B] mb-[18px] tracking-wide">Collection</h3>
            <div className="flex flex-col space-y-[12px]">
              <a href="#" className="font-sans text-[15px] text-[#6D6D6D] hover:text-[#3B2B2B] hover:underline transition-all">Heritage Packages</a>
              <a href="#" className="font-sans text-[15px] text-[#6D6D6D] hover:text-[#3B2B2B] hover:underline transition-all">Modern Fusion</a>
              <a href="#" className="font-sans text-[15px] text-[#6D6D6D] hover:text-[#3B2B2B] hover:underline transition-all">Minimalist Chic</a>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col pt-1">
            <h3 className="font-serif font-semibold text-[17px] text-[#3B2B2B] mb-[18px] tracking-wide">Legal</h3>
            <div className="flex flex-col space-y-[12px]">
              <a href="#" className="font-sans text-[15px] text-[#6D6D6D] hover:text-[#3B2B2B] hover:underline transition-all">Privacy Policy</a>
              <a href="#" className="font-sans text-[15px] text-[#6D6D6D] hover:text-[#3B2B2B] hover:underline transition-all">Terms of Service</a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-[22px] border-t border-[#ddd] text-center">
          <p className="font-sans text-[14px] text-gray-500 tracking-wide">
            © 2024 Parampara. The Digital Heirloom of Indian Weddings.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
