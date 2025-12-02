import React from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../../assets/TVK-logo.jpg"; 

const quickLinks = [
  { label: "முகப்பு", href: "/" },
  { label: "எங்களைப் பற்றி", href: "/about" },
  { label: "மாவட்ட செயல்பாடுகள்", href: "/district-activities" },
  { label: "தன்னார்வலராக சேரவும்", href: "/join" },
  { label: "கொள்கைகள் & நோக்கம்", href: "/policies-vision" },
];

// --- Social Media Links Configuration ---
const socialMedia = [
  { id: 1, Icon: FaFacebookF, href: "https://www.facebook.com/drtkprabhutvk" },
  { id: 2, Icon: FaTwitter, href: "https://x.com/drtkprabhu_TVK" },
  { id: 3, Icon: FaInstagram, href: "https://www.instagram.com/prabhuthurai/?hl=en" },
  // { id: 4, Icon: FaYoutube, href: "#" }, // Placeholder for YouTube if needed
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
};

export default function Footer() {
  return (
    <footer className="relative bg-[#990500] text-white overflow-hidden font-sans border-t-8 border-[#FFDD00]">
      
      {/* --- Background Decorative Elements --- */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFDD00] rounded-full mix-blend-overlay opacity-5 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black rounded-full mix-blend-multiply opacity-20 blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8"
        >
          
          {/* --- Column 1: Brand Info --- */}
          <motion.div variants={itemVariants} className="text-center md:text-left space-y-6">
            <Link to="/" className="inline-flex items-center gap-4 group">
              <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-[#FFDD00] p-0.5 bg-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src={Logo}
                  alt="TVK Logo"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="text-left">
                <h2 className="text-md md:text-lg lg:text-xl noto-sans-bold text-white uppercase tracking-wider leading-none">
                  தமிழக வெற்றிக் கழகம்
                </h2>
                <p className="text-xs font-bold text-[#FFDD00] mt-1 tracking-widest uppercase">
                  சிவகங்கை கிழக்கு மாவட்டம்
                </p>
              </div>
            </Link>

            <p className="text-sm md:text-base leading-relaxed text-gray-200 opacity-90 max-w-sm mx-auto md:mx-0">
              ஒருங்கிணைந்த மற்றும் புதுமையான நிர்வாகத்தின் மூலம், முற்போக்கான,
              அனைவரையும் அரவணைக்கும் செழிப்பான சிவகங்கையை உருவாக்குவதே எங்கள் இலக்கு.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-4">
              {socialMedia.map(({ id, Icon, href }) => (
                <motion.a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFDD00] hover:text-[#990500] transition-all duration-300 shadow-sm border border-white/20"
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* --- Column 2: Quick Links --- */}
          <motion.div variants={itemVariants} className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-lg noto-sans-bold text-[#FFDD00] mb-6 uppercase tracking-wide relative inline-block">
              விரைவு இணைப்புகள்
              <span className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-10 h-1 bg-white rounded-full"></span>
            </h3>
            
            <ul className="space-y-3 w-full max-w-xs">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="group flex items-center justify-center md:justify-start gap-2 text-sm md:text-base text-gray-200 hover:text-[#FFDD00] transition-all duration-300 py-1"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFDD00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-125"></span>
                    <span className="relative">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFDD00] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* --- Column 3: Contact Info --- */}
          <motion.div variants={itemVariants} className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-lg noto-sans-bold text-[#FFDD00] mb-6 uppercase tracking-wide relative inline-block">
              தொடர்புக்கு
              <span className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-10 h-1 bg-white rounded-full"></span>
            </h3>
            
            <ul className="space-y-4 w-full max-w-xs">
              {/* Email */}
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <div className="bg-white/10 p-2 rounded-full shrink-0 text-[#FFDD00]">
                    <FaEnvelope />
                </div>
                <div>
                    <span className="block text-xs text-gray-400 font-bold uppercase mb-1">மின்னஞ்சல்</span>
                    <a href="mailto:tvkitwingsvgeast@gmail.com" className="text-sm hover:text-[#FFDD00] transition-colors break-all">
                        tvkitwingsvgeast@gmail.com
                    </a>
                </div>
              </li>

              {/* Phone */}
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <div className="bg-white/10 p-2 rounded-full shrink-0 text-[#FFDD00]">
                    <FaPhoneAlt />
                </div>
                <div>
                    <span className="block text-xs text-gray-400 font-bold uppercase mb-1">தொலைபேசி</span>
                    <a href="tel:+919840553968" className="text-sm hover:text-[#FFDD00] transition-colors">
                        +91 98405 53968
                    </a>
                </div>
              </li>

              {/* Address with Link */}
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <div className="bg-white/10 p-2 rounded-full shrink-0 text-[#FFDD00]">
                    <FaMapMarkerAlt />
                </div>
                <div>
                    <span className="block text-xs text-gray-400 font-bold uppercase mb-1">முகவரி</span>
                    <a 
                      href="https://maps.app.goo.gl/1cnqUckCiCLLkEc78" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gray-200 hover:text-[#FFDD00] transition-colors"
                    >
                        தமிழக வெற்றிக் கழகம்,<br/> சிவகங்கை கிழக்கு மாவட்டம்.
                    </a>
                </div>
              </li>
            </ul>
          </motion.div>

        </motion.div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="border-t border-white/10 bg-[#7a0400]">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-300">
          <p className="text-center md:text-left">
            © 2025 <span className="text-[#FFDD00] font-bold">தமிழக வெற்றிக் கழகம்</span>. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
          </p>
          
          <div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full">
            <span>Developed by</span>
            <span className="text-white font-bold tracking-wide">Digitaly AI Tech Solution</span>
          </div>
        </div>
      </div>
    </footer>
  );
}