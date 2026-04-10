import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FFF8F0] h-[70px] flex items-center justify-between px-4 md:px-10 shadow-sm transition-all duration-300">
      <div className="font-serif text-primaryRed text-2xl font-bold">
        Parampara
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row items-center gap-8 font-sans font-medium text-gray-800">
        <li className="cursor-pointer text-primaryRed font-semibold border-b-2 border-gold pb-1">
          Weddings
        </li>
        <li className="cursor-pointer hover:text-primaryRed transition-colors pb-1 border-b-2 border-transparent hover:border-gold">
          Decor
        </li>
        <li className="cursor-pointer hover:text-primaryRed transition-colors pb-1 border-b-2 border-transparent hover:border-gold">
          Packages
        </li>
        <li className="cursor-pointer hover:text-primaryRed transition-colors pb-1 border-b-2 border-transparent hover:border-gold">
          Vendors
        </li>
      </ul>

      {/* Desktop Auth */}
      <div className="hidden md:flex items-center gap-6 font-sans">
        <button className="text-gray-800 font-medium hover:text-primaryRed transition-colors">
          Login
        </button>
        <button className="bg-primaryRed text-white px-4 py-2 rounded-md hover:bg-darkRed transition-colors font-medium">
          Sign Up
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none" aria-label="Toggle Menu">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#FFF8F0] shadow-md flex flex-col items-center py-6 gap-5 md:hidden z-40 border-t border-gray-200">
          <div className="cursor-pointer font-sans font-medium text-primaryRed border-b-2 border-gold pb-1">Weddings</div>
          <div className="cursor-pointer font-sans font-medium text-gray-800 hover:text-primaryRed">Decor</div>
          <div className="cursor-pointer font-sans font-medium text-gray-800 hover:text-primaryRed">Packages</div>
          <div className="cursor-pointer font-sans font-medium text-gray-800 hover:text-primaryRed">Vendors</div>
          <div className="w-full flex justify-center gap-4 mt-2">
            <button className="font-sans font-medium text-gray-800 hover:text-primaryRed">Login</button>
            <button className="bg-primaryRed text-white px-5 py-2 rounded-md font-medium">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
