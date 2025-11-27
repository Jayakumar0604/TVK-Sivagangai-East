import React from "react";
import { motion } from "framer-motion";
import { 
  Monitor, 
  Video, 
  Settings, 
  HeartHandshake 
} from "lucide-react";

// --- ANIMATION VARIANTS (UPDATED) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.2, // Increased stagger delay for a more relaxed flow
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 // Start slightly lower for a longer, smoother float up
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.9, // Increased duration (Slower, softer opacity change)
      ease: "easeOut" 
    } 
  },
};

// --- DATA: CAREER DIVISIONS ---
const careerData = [
  {
    title: "IT பிரிவு",
    description: "கணினி, மென்பொருள் மற்றும் தொழில்நுட்பத் துறையில் ஆர்வமுள்ளவர்களுக்கு.",
    icon: <Monitor size={28} />,
    points: [
      "வலைத்தள உருவாக்கம்",
      "சமூக ஊடக மேலாண்மை",
      "தரவுப் பகுப்பாய்வு",
      "செயலி உருவாக்கம்",
    ],
  },
  {
    title: "ஊடகப் பிரிவு",
    description: "தகவல் தொடர்பு, இதழியல் மற்றும் ஊடகத் துறையில் ஆர்வமுள்ளவர்களுக்கு.",
    icon: <Video size={28} />,
    points: [
      "விளம்பர வடிவமைப்பு",
      "காணொளித் தொகுப்பு",
      "உள்ளடக்க எழுத்து",
      "மக்கள் தொடர்பு",
    ],
  },
  {
    title: "பொறியியல் பிரிவு",
    description: "பொறியியல், கணிதம் மற்றும் அறிவியல் துறையில் ஆர்வமுள்ளவர்களுக்கு.",
    icon: <Settings size={28} />,
    points: [
      "மென்பொருள் பொறியியல்",
      "கட்டிடவியல்",
      "மின்னியல் பொறியியல்",
      "இயந்திரவியல்",
    ],
  },
  {
    title: "சமூக சேவை",
    description: "மற்றவர்களுக்கு உதவுவதில் ஆர்வமுள்ள மற்றும் சமூக அக்கறை கொண்டவர்களுக்கு.",
    icon: <HeartHandshake size={28} />,
    points: [
      "தனிநபர் பராமரிப்பு",
      "சமூக நலப்பணி",
      "மருத்துவ உதவி",
    ],
  },
];

// --- COMPONENT: UNIVERSAL CARD ---
const Card = ({ item }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group relative bg-[#990500] rounded-2xl p-6 shadow-xl shadow-red-900/40 border-2 border-yellow-400 hover:shadow-2xl hover:shadow-red-900/60 transition-all duration-300 overflow-hidden flex flex-col h-full"
  >
    {/* Decorative Background Circle */}
    <div className="absolute -right-6 -top-6 w-28 h-28 bg-yellow-400 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
    
    <div className="relative z-10 flex flex-col items-center text-center h-full">
      
      {/* Icon: Gold Circle, Red Icon */}
      <div className="mb-4 p-4 bg-yellow-400 text-[#990500] rounded-full group-hover:bg-white group-hover:text-[#990500] transition-colors duration-300 shadow-md ring-4 ring-[#990500]/50">
        {item.icon}
      </div>

      {/* Title: Gold Text */}
      <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-2 group-hover:text-white transition-colors tracking-wide">
        {item.title}
      </h3>

      {/* Description: White Text */}
      <p className="text-sm md:text-[15px] text-white/90 leading-relaxed noto-sans-medium mb-4">
        {item.description}
      </p>

      {/* Bullet Points Section */}
      {item.points && (
        <ul className="mt-auto text-left w-full space-y-2 bg-red-900/30 p-4 rounded-lg border border-red-800/50">
          {item.points.map((point, idx) => (
            <li key={idx} className="flex items-start text-xs md:text-sm text-yellow-100/90 noto-sans-medium">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 mr-2 shrink-0"></span>
              {point}
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

// --- COMPONENT: SECTION HEADER ---
const SectionHeader = ({ title, subtitle }) => (
  <div className="relative mb-12 text-center">
    <h2 className="text-2xl md:text-3xl noto-sans-bold  uppercase tracking-wide inline-block relative z-10 px-4 drop-shadow-sm">
      {title}
    </h2>
    <div className="w-24 h-1.5 bg-[#990500] mx-auto mt-2 rounded-full mb-3"></div>
    {subtitle && (
      <p className="text-[#990500]/80 noto-sans-medium text-sm md:text-base max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

const CareerDivisions = () => {
  return (
    <div className="font-sans bg-gray-50">
      
      {/* Hero Title Section */}
      <div className="bg-gradient-to-r from-[#990500] to-[#700300] py-12 px-4 shadow-md z-10 relative border-b-4 border-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-yellow-400 text-[#990500] text-xs font-bold rounded-full mb-3 uppercase tracking-wider shadow-sm">
            வழிகாட்டுதல்
          </span>
          <h1 className="text-3xl md:text-5xl noto-sans-bold text-white tracking-wider drop-shadow-md">
            துறை வாரியான <span className="text-yellow-400">பிரிவுகள்</span>
          </h1>
          <p className="text-yellow-100 mt-3 text-lg noto-sans-medium tracking-wide">
            உங்கள் திறன்கள் மற்றும் ஆர்வத்துடன் பொருந்தும் பாதையைத் தேர்ந்தெடுங்கள்
          </p>
        </div>
      </div>

      {/* Main Content Area with Bright Yellow Background */}
      <section className="bg-[#FFDD00] px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* --- CAREER GRID --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <SectionHeader 
              title="உங்கள் பாதையைத் தேர்ந்தெடுக்கவும்" 
              subtitle="எதிர்காலத்திற்கான சரியான தேர்வு"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerData.map((card, index) => (
                <Card key={index} item={card} />
              ))}
            </div>
          </motion.div>

        </div>
      </section>
      
      {/* Footer stripe */}
      <div className="h-6 bg-[#990500]"></div>
    </div>
  );
};

export default CareerDivisions;