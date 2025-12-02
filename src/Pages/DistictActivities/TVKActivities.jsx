import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react"; 
import { activitiesData } from "../../data/activitiesData"; // Ensure this path is correct

// --- 1. Sub-Component for Individual Cards (Fixed Layout) ---
const ActivityCard = ({ activity }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      // FIX: Removed 'h-full' so background doesn't stretch to match tallest neighbor
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all flex flex-col"
    >
      {/* Image Section */}
      <div className="h-48 overflow-hidden relative shrink-0">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-[#990500]/90 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-md">
          {activity.talukLabel}
        </div>
      </div>

      {/* Content Section */}
      {/* FIX: Removed 'grow' so content area doesn't stretch */}
      <div className="p-5 flex flex-col">
        <h3 className="text-xl noto-sans-bold text-[#222] mb-2 leading-tight">
          {activity.title}
        </h3>

        {/* --- Smooth Expandable Text --- */}
        <motion.div
          layout
          className="relative overflow-hidden mb-2"
          initial={false}
          animate={{ height: isExpanded ? "auto" : "2.8rem" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="text-sm text-gray-600 leading-relaxed">
            {activity.description}
          </p>

          {/* Fade Gradient */}
          <motion.div
            animate={{ opacity: isExpanded ? 0 : 1 }}
            className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"
          />
        </motion.div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs font-bold text-[#990500] hover:text-[#7a0400] transition-colors mb-4 focus:outline-none w-fit"
        >
          {isExpanded ? "குறைக்க" : "மேலும் படிக்க"}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? (
               <ChevronUp className="w-4 h-4" />
            ) : (
               <ChevronDown className="w-4 h-4" />
            )}
          </motion.div>
        </button>

        {/* Divider & Footer Stats */}
        <div className="h-px bg-gray-100 my-3"></div>
        
        {/* FIX: Removed 'mt-auto' so footer stays attached to content */}
        <div className="text-sm text-gray-600 flex justify-between items-center">
          <div className="flex items-center gap-1">
             <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
             </svg>
             <span>{activity.date}</span>
          </div>
          <span className="text-[#990500] font-bold bg-red-50 px-2 py-1 rounded-md text-xs">
             {activity.participants}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// --- 2. Main Page Component ---
const TVKActivities = () => {
  const [selectedTaluk, setSelectedTaluk] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActivities = activitiesData.filter((activity) => {
    const lowerQuery = searchQuery.toLowerCase();
    const matchesTaluk =
      selectedTaluk === "All" || activity.taluk === selectedTaluk;
    const matchesSearch =
      activity.title.toLowerCase().includes(lowerQuery) ||
      activity.description.toLowerCase().includes(lowerQuery) ||
      activity.talukLabel.includes(lowerQuery) ||
      activity.taluk.toLowerCase().includes(lowerQuery) ||
      activity.categoryEnglish.toLowerCase().includes(lowerQuery);

    return matchesTaluk && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FFDD00]">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#990500] to-[#700300] py-12 px-4 shadow-md relative border-b-4 border-yellow-400">
        <div className="max-w-5xl mx-auto text-center mt-12 md:mt-0">
          <h1 className="text-3xl md:text-5xl noto-sans-bold text-white tracking-wider drop-shadow-md leading-tight">
            சிவகங்கை கிழக்கு மாவட்டத்தின்{" "}
            <span className="text-yellow-400 block md:inline mt-2 md:mt-0">
              முக்கிய நிகழ்வுகள்
            </span>
          </h1>
        </div>
      </div>

      <section className="px-4 py-8 noto-sans-semi">
        <div className="mx-auto max-w-6xl space-y-8">
          
          {/* Controls */}
          <div className="sticky top-20 z-30 transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-yellow-500/30 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              
              <div className="w-full md:w-1/3 relative">
                <select
                  value={selectedTaluk}
                  onChange={(e) => setSelectedTaluk(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-200 focus:border-[#990500] outline-none bg-white text-gray-700 cursor-pointer appearance-none shadow-sm"
                >
                  <option value="All">அனைத்து தாலுகாக்கள்</option>
                  <option value="Karaikudi">காரைக்குடி</option>
                  <option value="Devakottai">தேவகோட்டை</option>
                  <option value="Thirupathur">திருப்பத்தூர்</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              <div className="w-full md:w-2/3 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="தேடுக..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#990500] outline-none shadow-sm"
                />
                <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none text-gray-400">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Container */}
          {/* FIX: Added 'items-start' to ensure rows align at top and don't stretch vertically */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 items-start"
          >
            <AnimatePresence>
              {filteredActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </AnimatePresence>
            
            {/* Empty State */}
            {filteredActivities.length === 0 && (
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
                    className="col-span-full text-center py-12 text-gray-600 bg-white/50 rounded-xl"
                >
                    தகவல்கள் எதுவும் இல்லை.
                </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TVKActivities;