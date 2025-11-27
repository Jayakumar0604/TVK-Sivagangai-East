import React from "react";
import { motion } from "framer-motion";
import { Users, Star } from "lucide-react"; // Make sure to install lucide-react

// Replace with your actual image imports
import Venkat from "../../assets/tvk-venkat.webp";
import Jayadheesh from "../../assets/tvk-jagadish.webp";
import Rajmohan from "../../assets/tvk-raj-mohan.jpg";

const members = [
  {
    name: "திரு. வெங்கட், M.Com., MBA., M.L",
    role: "கழக பொருளாளர்", // Corrected spelling from பொறுளாளர் to பொருளாளர்
    image: Venkat,
    highlight: "நிர்வாகம்",
  },
  {
    name: "திரு. P.ஜெயதீஷ்",
    role: "தலைமை கழக இணைப் பொருளாளர்",
    image: Jayadheesh,
    highlight: "ஒருங்கிணைப்பு",
  },
  {
    name: "திரு. A.ராஜ்மோகன்",
    role: "கழக கொள்கைப் பரப்புச் செயலாளர்",
    image: Rajmohan,
    highlight: "பரப்புரை",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delays each card by 0.3s
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 15 } 
  },
};

const TVKFinanceTeam = () => {
  return (
    <>
      {/* --- Section Header --- */}
      <div className="relative z-20">
         <div className="bg-[#990500] py-4 text-center shadow-lg">
             <h2 className="text-lg md:text-2xl noto-sans-bold text-white uppercase tracking-wider flex items-center justify-center gap-3">
                <Users className="w-6 h-6 text-[#FFDD00]" />
                தலைமை கழக நிர்வாகிகள்
                <Users className="w-6 h-6 text-[#FFDD00]" />
             </h2>
         </div>
         <div className="h-1 bg-white w-full" />
      </div>

      {/* --- Main Grid Section --- */}
      <section className="relative bg-[#FFDD00] text-[#3D3D3D] px-6 py-16 noto-sans-semi overflow-hidden min-h-[60vh] flex items-center">
        
        {/* Background Decorative Elements (Palette Colors) */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-40 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#990500] rounded-full mix-blend-multiply opacity-5 blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {members.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl border-b-8 border-[#990500] transform transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64 md:h-72 w-full bg-gray-100">
                <div className="absolute inset-0 bg-[#990500] opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 bg-[#FFDD00] text-[#990500] text-xs font-bold px-3 py-1 rounded-full shadow-md z-20 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <Star className="w-3 h-3 fill-current" />
                    {member.highlight}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 text-center space-y-3 relative">
                {/* Decorative Line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <div className="w-2 h-2 bg-[#990500] rounded-full"></div>
                </div>

                <h3 className="text-lg md:text-xl noto-sans-bold text-[#990500] leading-tight pt-2">
                  {member.name}
                </h3>
                
                <div className="w-16 h-1 bg-[#FFDD00] mx-auto rounded-full"></div>

                <p className="text-sm md:text-base text-[#3D3D3D] font-medium opacity-90">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default TVKFinanceTeam;