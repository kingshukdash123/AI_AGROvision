import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';     

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

useEffect(() => {
  // ✅ Check if script is already loaded
  if (!document.querySelector("#google-translate-script")) {
    const script = document.createElement("script");
    script.id = "google-translate-script"; // unique ID to avoid duplicates
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }

  // ✅ Define init function only if not already defined
  if (!window.googleTranslateElementInit) {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,or,bn", // add more if needed
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );

      // Small delay ensures CSS applies after dropdown is created
      setTimeout(() => {
        const combo = document.querySelector(".goog-te-combo");
        if (combo) combo.classList.add("styled-translate");
      }, 500);
    };
  }
}, []);


  const closeDrawer = () => setIsOpen(false);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' }, 
    { path: '/weather', label: 'WEATHER' },  
    { path: '/contact', label: 'CONTACT US' },
  ];

  return (
    <header data-aos="fade-down" className="fixed top-0 z-50 left-0 right-0">
      <div className="bg-white/90 border-b-2">
        <div className="flex items-center justify-between px-4 md:px-8 py-3">
          <NavLink to="/" className="flex items-center space-x-2 text-black font-bold text-xl">
            <img src={Logo} alt="Logo" className="h-auto w-11  object-contain" />
            {/* DEMO */}
            AgroAI
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeDrawer}
                className={({ isActive }) =>
                  `text-lg font-medium transition-all duration-300
                  ${isActive ? "text-[#57821f] underline underline-offset-4 scale-105" : "text-black"}
                  hover:text-[#57821f] hover:scale-105 hover:underline`
                }
              >
                {label}
              </NavLink>
            ))}
            
          </nav>
          
          

          {/* Desktop Button */}
          <div className="hidden lg:flex">
            <div className='hidden lg:flex  '>
            <div className='hidden lg:flex pt-3 pr '
      id="google_translate_element"
    ></div><span className='text-lg font-medium pt-2 pr-3'>Eng</span></div>
            <NavLink
              to="/get"
              className="px-5 py-2 rounded-full text-white font-semibold shadow-md bg-[#10753C] hover:bg-[#57821f] hover:text-gray-200 transition-all duration-300"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Icon */}
          
          <div className="lg:hidden flex">
            <div className=' lg:hidden '>
            <div className=' pt-3 lg:hidden flex'
      id="google_translate_element"
    ></div><span className='text-lg font-medium pt-2 pr-3'>Eng</span></div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          ref={drawerRef}
          data-aos="fade-down"
          className="absolute top-20 right-4 w-[75%] rounded-2xl bg-black/10 backdrop-blur-xl p-6 shadow-2xl flex flex-col items-center space-y-5 lg:hidden"
        >
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={closeDrawer}
              className={({ isActive }) =>
                `text-lg font-medium transition-all duration-300 
                ${isActive ? "text-[#57821f] underline scale-105" : "text-gray-900"}
                hover:text-[#57821f] hover:scale-105`
              }
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/get"
            onClick={closeDrawer}
            className="mt-4 px-6 py-2 w-full text-center rounded-full text-white font-semibold shadow-md bg-[#57821f] hover:from-white hover:to-white  transition-all duration-300"
          >
            Get Started
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
