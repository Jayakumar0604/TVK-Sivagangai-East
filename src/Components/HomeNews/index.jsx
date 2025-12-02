import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"; 
import { activitiesData } from "../../data/activitiesData"; 

// --- 1. Sub-Component for Individual Cards ---
const NewsCard = ({ activity, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout // 1. Helps the card resize smoothly
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300 group h-full flex flex-col"
    >
      {/* Image Area */}
      <div className="h-52 overflow-hidden relative shrink-0">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold shadow-sm z-10">
          {activity.date}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col grow">
        <div className="text-xs text-[#990500] font-bold uppercase mb-2 tracking-wide">
          {activity.category}
        </div>
        <h3 className="text-lg noto-sans-bold text-gray-900 mb-3 leading-snug group-hover:text-[#990500] transition-colors">
          {activity.title}
        </h3>

        {/* --- SMOOTH EXPANSION LOGIC --- */}
        <motion.div 
            layout 
            className="relative overflow-hidden mb-2"
            initial={false}
            // 2. Animate Height: 3rem is approx 2 lines. "auto" is full height.
            animate={{ height: isExpanded ? "auto" : "3.2rem" }} 
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <p className="text-gray-600 text-sm leading-relaxed">
            {activity.description}
          </p>
          
          {/* 3. Gradient Fade Effect (Visible only when collapsed) */}
          <motion.div 
            animate={{ opacity: isExpanded ? 0 : 1 }}
            className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent"
          />
        </motion.div>
        
        {/* Toggle Button with Smooth Icon Rotation */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs font-bold text-[#990500] hover:text-[#7a0400] transition-colors mb-auto focus:outline-none w-fit"
        >
          {isExpanded ? "குறைக்க" : "மேலும் படிக்க"}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
             <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
        {/* ---------------------------------------- */}

        <div className="pt-4 border-t border-gray-100 flex items-center text-sm text-gray-500 gap-2 mt-4">
          <svg className="w-4 h-4 text-[#990500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="truncate">{activity.location}</span>
        </div>
      </div>
    </motion.div>
  );
};

// --- 2. Main Section Component (No Changes needed here, just make sure to include it) ---
const HomeNewsSection = () => {
  const navigate = useNavigate();
  const latestActivities = activitiesData.slice(0, 3);

  return (
    <section className="bg-yellow-400 py-16 px-4 noto-sans-semi relative overflow-hidden">
      {/* ... Backgrounds ... */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#990500]/20 text-[#990500] px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Calendar className="w-5 h-5" />
              <span className="noto-sans-bold text-sm md:text-base tracking-widest uppercase">
                எங்கள் பணிகள்
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl noto-sans-bold text-[#3D3D3D] leading-tight">
              <span className="text-[#990500]">புதிய</span> நிகழ்வுகள்
            </h2>
            <div className="w-24 h-1.5 bg-[#990500] rounded-full mt-2 opacity-80"></div>
        </div>

        {/* Grid Container */}
        {/* 'layout' prop here ensures neighbor cards move smoothly when one expands */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {latestActivities.map((activity, index) => (
             <div key={activity.id} className={index === 2 ? "hidden lg:block" : "block"}>
                <NewsCard activity={activity} index={index} />
             </div>
          ))}
        </motion.div>

        {/* Bottom Button */}
        <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/activities")}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#990500] hover:bg-[#7a0400] text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-bold tracking-wide"
            >
              அனைத்தையும் காண்க
              <ArrowRight className="w-5 h-5" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default HomeNewsSection;