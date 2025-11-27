import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenu, BiX } from "react-icons/bi"; // Changed AiOutlineClose to BiX for consistency
import { FaHome, FaHandHoldingHeart } from "react-icons/fa";
import Logo from "../../assets/TVK-logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop Navigation Data
  const Nav = [
    { id: 1, name: <FaHome className="text-xl mb-1" />, link: "/" },
    { id: 2, name: "எங்களைப் பற்றி", link: "/about" },
    { id: 3, name: "மாவட்ட செயல்பாடுகள்", link: "/district-activities" },
    { id: 4, name: "தன்னார்வலர்கள்", link: "/volunteer-with-us" },
    { id: 5, name: "கொள்கைகள் & நோக்கம்", link: "/policies-vision" },
  ];

  // Mobile Navigation Data
  const Nav1 = [
    { id: 1, name: "முகப்பு", link: "/" },
    { id: 2, name: "எங்களைப் பற்றி", link: "/about" },
    { id: 3, name: "மாவட்ட செயல்பாடுகள்", link: "/district-activities" },
    { id: 4, name: "தன்னார்வலர்கள்", link: "/volunteer-with-us" },
    { id: 5, name: "கொள்கைகள் & நோக்கம்", link: "/policies-vision" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
          scrolled ? "shadow-lg py-2" : "shadow-md py-4"
        }`}
      >
        <div className="px-5 md:px-10 flex items-center justify-between">
          
          {/* --- Logo Section --- */}
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
             <motion.div whileHover={{ scale: 1.05 }}>
                <img src={Logo} alt="TVK Logo" className="w-16 md:w-20 object-contain" />
             </motion.div>
             <div className="hidden md:flex flex-col">
                <span className="text-[#990500] noto-sans-bold text-lg leading-none uppercase">
                    தமிழக வெற்றிக் கழகம்
                </span>
             </div>
          </Link>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {Nav.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="relative group py-2"
              >
                <span
                  className={`text-sm xl:text-base transition-colors duration-300 flex items-center gap-1 ${
                    currentPath === item.link
                      ? "text-[#990500] noto-sans-bold"
                      : "text-[#3D3D3D] noto-sans-semi group-hover:text-[#990500]"
                  }`}
                >
                  {item.name}
                </span>
                {/* Animated Underline */}
                <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#990500] transition-all duration-300 ${
                        currentPath === item.link ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>
            ))}

            {/* CTA Button - Navigates to /join */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                    to="/join"
                    className="bg-[#990500] hover:bg-[#b30600] text-white px-5 py-2.5 rounded-lg noto-sans-bold text-sm shadow-md border-2 border-[#990500] hover:border-[#FFDD00] transition-all flex items-center gap-2"
                >
                    <FaHandHoldingHeart className="text-[#FFDD00]" />
                    தன்னார்வலர் ஆகுங்கள்
                </Link>
            </motion.div>
          </nav>

          {/* --- Mobile Menu Toggle --- */}
          <motion.div 
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-3xl text-[#990500] cursor-pointer p-2 rounded-md hover:bg-gray-100" 
            onClick={toggleMenu}
          >
            {isOpen ? <BiX /> : <BiMenu />}
          </motion.div>
        </div>
      </header>

      {/* --- Mobile Navigation Drawer --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            
            {/* Side Menu */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 lg:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b-4 border-[#990500] bg-gray-50">
                <span className="text-[#990500] noto-sans-bold text-lg">மெனு</span>
                <button onClick={toggleMenu} className="text-[#990500] text-3xl">
                  <BiX />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col p-6 space-y-2 overflow-y-auto">
                {Nav1.map((item) => (
                  <Link
                    key={item.id}
                    to={item.link}
                    onClick={closeMenu}
                    className={`block px-5 py-3 rounded-lg border-l-4 transition-all ${
                      currentPath === item.link
                        ? "border-[#990500] bg-red-50 text-[#990500] noto-sans-bold"
                        : "border-transparent text-[#3D3D3D] noto-sans-semi hover:bg-yellow-50 hover:text-[#990500]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile CTA Button */}
                <div className="pt-6 mt-4 border-t border-gray-100">
                    <Link
                        to="/join"
                        onClick={closeMenu}
                        className="block w-full text-center bg-[#FFDD00] text-[#990500] py-3 rounded-lg noto-sans-bold shadow-md hover:bg-yellow-300 transition"
                    >
                        தன்னார்வலர் ஆகுங்கள்
                    </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto p-4 bg-[#990500] text-white text-center text-xs">
                 <p>தமிழக வெற்றிக் கழகம்</p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
      
      {/* Spacer div to prevent content from hiding behind fixed header */}
      <div className="h-24 lg:h-28"></div>
    </>
  );
};

export default Header;