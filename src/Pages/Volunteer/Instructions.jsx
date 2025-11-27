import React from "react";
import { motion } from "framer-motion";
import { 
  HandHelping, 
  Megaphone, 
  ClipboardCheck, 
  Users 
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.2, 
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.9, 
      ease: "easeOut" 
    } 
  },
};

// --- DATA: INSTRUCTIONS CONTENT ---
const instructionData = [
  {
    title: "நாங்கள் என்ன செய்கிறோம்?",
    description: "மக்களின் நலனிற்காக பல்வேறு சமூக சேவைகள் மற்றும் நலத்திட்டங்கள்.",
    icon: <HandHelping size={28} />,
    points: [
      "பொதுமக்களுக்கு சேவை உதவிகள்",
      "மாணவர்களுக்கு கல்வி உதவிகள்",
      "சுற்றுச்சூழல் பாதுகாப்பு முயற்சிகள்",
      "சுயதிறன் மற்றும் வளர்ச்சி முயற்சிகள்",
    ],
  },
  {
    title: "நீங்கள் எவ்வாறு பங்கேற்கலாம்?",
    description: "ஒரு உறுதியான ஆதரவாளராக சமூக முன்னேற்றத்திற்கு உதவலாம்.",
    icon: <Megaphone size={28} />,
    points: [
      "பகுதி வாரியான நிகழ்ச்சிகளில் இணைதல்",
      "சமூக ஊடகங்களில் சேவைகளை பகிர்தல்",
      "தொண்டர்களுடன் இணைந்து பணியாற்றுதல்",
      "திட்டங்களை மக்களுக்கு விளக்குதல்",
    ],
  },
  {
    title: "தொண்டராக சேரும் வழிமுறைகள்",
    description: "கீழே உள்ள எளிய வழிமுறைகளைப் பின்பற்றி இன்றே இணையுங்கள்.",
    icon: <ClipboardCheck size={28} />,
    points: [
      "விண்ணப்பப் படிவத்தை நிரப்பவும்",
      "பிரதேச மையத்திலிருந்து அழைப்பு வரும்",
      "விருப்பமான சேவையைத் தேர்ந்தெடுக்கவும்",
      "சேவைப்பணிகளில் பங்கேற்கலாம்",
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
    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide inline-block relative z-10 px-4 drop-shadow-sm text-[#990500]">
      {title}
    </h2>
    <div className="w-24 h-1.5 bg-[#990500] mx-auto mt-2 rounded-full mb-3"></div>
    {subtitle && (
      <p className="text-[#990500]/80 noto-sans-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const Instructions = () => {
  return (
    <div className="font-sans bg-gray-50">
      
      {/* Hero Title Section */}
      <div className="bg-gradient-to-r from-[#990500] to-[#700300] py-12 px-4 shadow-md z-10 relative border-b-4 border-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-yellow-400 text-[#990500] text-xs font-bold rounded-full mb-3 uppercase tracking-wider shadow-sm">
            சமூக சேவை
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white tracking-wider drop-shadow-md leading-tight">
            தமிழக வெற்றிக் கழகத்துடன் <br className="hidden md:block" />
            <span className="text-yellow-400">தொண்டராக இணையுங்கள்!</span>
          </h1>
          <p className="text-yellow-100 mt-4 text-base md:text-lg noto-sans-medium tracking-wide max-w-2xl mx-auto">
            உங்கள் குடும்பத்தின் வளர்ச்சிக்காகவும், சமூக மாற்றத்திற்காகவும் எங்களோடு கைகோருங்கள்.
          </p>
        </div>
      </div>

      {/* Main Content Area with Bright Yellow Background */}
      <section className="bg-[#FFDD00] px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* --- INSTRUCTION GRID --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <SectionHeader 
              title="சேவை மற்றும் பங்களிப்பு" 
              subtitle="தமிழக வெற்றிக் கழகம் (TVK) மக்களின் நலனிற்காக பல்வேறு சமூக சேவைகள், நலத்திட்டங்களை செயல்படுத்துகிறது."
            />
            {/* Grid layout adjusted for 3 items (centered) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {instructionData.map((card, index) => (
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

export default Instructions;