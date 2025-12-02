import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenu, BiX } from "react-icons/bi";
import { FaHome, FaHandHoldingHeart } from "react-icons/fa";
import Logo from "../../assets/TVK-logo.jpg";

// Animation Variants for Mobile Menu
const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 50 },
};

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

  const Nav = [
    {
      id: 1,
      name: <FaHome className="text-lg lg:text-xl mb-[2px] shrink-0" />,
      link: "/",
    },
    { id: 2, name: "எங்களைப் பற்றி", link: "/about" },
    { id: 3, name: "மாவட்ட செயல்பாடுகள்", link: "/district-activities" },
    { id: 4, name: "தன்னார்வலர்கள்", link: "/volunteer-with-us" },
    { id: 5, name: "கொள்கைகள்", link: "/policies-vision" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-[#FFDD00]/50"
            : "bg-white py-3 md:py-4 border-transparent"
        }`}
      >
        <div className="px-4 md:px-6 lg:px-6 max-w-7xl mx-auto flex items-center justify-between">
          {/* --- Logo Section --- */}

          <div>
            <Link
              to="/"
              className="flex items-center gap-2 md:gap-2 group z-50 min-w-0"
              onClick={closeMenu}
            >
              {/* Circular Logo Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-12 lg:h-14 w-12 lg:w-14 shrink-0 overflow-hidden rounded-full border-2 border-[#FFDD00] p-0.5 bg-white shadow-md group-hover:shadow-lg transition-shadow"
              >
                <img
                  src={Logo}
                  alt="TVK Logo"
                  className="h-full w-full object-cover rounded-full"
                />
              </motion.div>

              {/* Text Content */}
              <div className="flex flex-col justify-center">
                {/* FIX: Reduced lg size to text-lg to save space for menu */}
                <span className="text-[#990500] noto-sans-bold text-xs  xl:text-sm leading-none uppercase tracking-wide whitespace-nowrap">
                  தமிழக வெற்றிக் கழகம்
                </span>
                <span className="text-[8px]  font-bold text-[#FFDD00] tracking-widest uppercase bg-[#990500] px-1.5 py-0.5 rounded w-fit mt-1">
                  சிவகங்கை கிழக்கு மாவட்டம்
                </span>
              </div>
            </Link>
          </div>

          {/* --- Desktop Navigation --- */}
          {/* FIX: Reduced gap for lg screens */}

          <div>
            <nav className="hidden lg:flex items-center gap-0 xl:gap-1 ">
              {Nav.map((item) => {
                const isActive = currentPath === item.link;
                return (
                  <Link
                    key={item.id}
                    to={item.link}
                    className="relative px-3 xl:px-4 py-2 rounded-full group"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-red-50 rounded-full border border-red-100"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 text-xs xl:text-sm font-bold transition-colors duration-200 flex items-center gap-2 ${
                        isActive
                          ? "text-[#990500]"
                          : "text-[#3D3D3D] group-hover:text-[#990500]"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}

              {/* CTA Button */}
              {/* FIX: Made button more compact on lg screens */}
              <motion.div
                className="ml-2 xl:ml-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/join"
                  className="flex items-center gap-2 bg-[#990500] hover:bg-[#b30600] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-full font-bold text-xs shadow-md border-2 border-[#990500] hover:border-[#FFDD00] transition-all"
                >
                  <FaHandHoldingHeart className="text-[#FFDD00] text-base xl:text-lg" />
                  <span>இணையுங்கள்</span>
                </Link>
              </motion.div>
            </nav>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-3xl md:text-4xl text-[#990500] cursor-pointer ml-2 shrink-0"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Side Menu */}
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 lg:hidden flex flex-col border-l-4 border-[#FFDD00]"
            >
              {/* Watermark Background */}
              <div className="absolute bottom-0 right-0 opacity-[0.05] pointer-events-none">
                <img
                  src={Logo}
                  alt="Watermark"
                  className="w-64 grayscale -rotate-12 translate-x-10 translate-y-10"
                />
              </div>

              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-[#FFDD00] p-0.5 bg-white">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-[#990500] font-bold text-lg">
                    வணக்கம்!
                  </span>
                </div>
                <button
                  onClick={toggleMenu}
                  className="text-[#990500] text-3xl hover:rotate-90 transition-transform duration-300"
                >
                  <BiX />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col p-6 space-y-3 overflow-y-auto relative z-10">
                {Nav.map((item) => (
                  <motion.div key={item.id} variants={itemVariants}>
                    <Link
                      to={item.link}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all ${
                        currentPath === item.link
                          ? "bg-red-50 text-[#990500] font-bold shadow-sm border border-red-100"
                          : "text-[#3D3D3D] noto-sans-medium hover:bg-yellow-50 hover:text-[#990500]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile CTA */}
                <motion.div variants={itemVariants} className="pt-4">
                  <Link
                    to="/join"
                    onClick={closeMenu}
                    className="flex justify-center items-center gap-2 w-full text-center bg-[#FFDD00] text-[#990500] py-3.5 px-3 rounded-xl font-bold shadow-md active:scale-95 transition-transform"
                  >
                    <FaHandHoldingHeart className="text-xl" />
                    தன்னார்வலர் ஆகுங்கள்
                  </Link>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="mt-auto p-4 bg-[#990500] text-white text-center text-xs tracking-wider uppercase">
                தமிழக வெற்றிக் கழகம் &copy; 2025
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
};

export default Header;
