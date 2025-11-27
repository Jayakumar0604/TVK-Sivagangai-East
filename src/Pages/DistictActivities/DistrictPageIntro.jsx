import React from "react";
import { Link } from "react-router-dom"; // IMPORTED LINK FOR NAVIGATION
import { motion } from "framer-motion";
import { 
  HeartHandshake, 
  Users, 
  Megaphone, 
  TrendingUp, 
  MapPin, 
  Target,
  ArrowLeft 
} from "lucide-react";

// Replace with your screenshot image
import DistrictIntroImage from "../../assets/TVK-District-Intro.webp"; 

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- DATA: District Activities ---
const districtActivities = [
  {
    number: "01",
    title: "சமூக நலத்திட்டங்கள்",
    description: "மக்கள் நலனுக்கான பல்வேறு சமூக சேவைகள், மருத்துவ முகாம்கள், பெண்கள் மற்றும் குழந்தைகள் பாதுகாப்பு திட்டங்கள் மற்றும் விவசாயிகளுக்கான உதவி.",
    icon: <HeartHandshake size={28} />
  },
  {
    number: "02",
    title: "மக்கள் சந்திப்பு",
    description: "மாவட்ட நிர்வாகத்தினர் பொதுமக்களை நேரடியாக சந்தித்து, அவர்கள் எதிர்கொள்ளும் பிரச்சினைகளை கேட்டறிந்து, உடனடி தீர்வுகளை வழங்குகின்றனர்.",
    icon: <Users size={28} />
  },
  {
    number: "03",
    title: "பொது கூட்டங்கள்",
    description: "விழிப்புணர்வு நிகழ்ச்சிகள் மற்றும் அரசியல் கலந்துரையாடல் நிகழ்வுகள் மூலம் மக்கள் தங்கள் கருத்துகளை வெளிப்படுத்தும் வாய்ப்பு.",
    icon: <Megaphone size={28} />
  },
  {
    number: "04",
    title: "முன்னேற்ற நடவடிக்கைகள்",
    description: "இளைஞர்கள் மற்றும் பெண்களுக்கு வேலைவாய்ப்புகள், திறன் வளர்ச்சி பயிற்சிகள் மற்றும் கல்வி முன்னேற்ற திட்டங்கள் செயல்படுத்துதல்.",
    icon: <TrendingUp size={28} />
  }
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
      {/* Icon */}
      <div className="mb-4 p-4 bg-yellow-400 text-[#990500] rounded-full group-hover:bg-white group-hover:text-[#990500] transition-colors duration-300 shadow-md ring-4 ring-[#990500]/50">
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-2 group-hover:text-white transition-colors tracking-wide">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-[15px] text-white/90 leading-relaxed noto-sans-medium mb-4">
        {item.description}
      </p>

      {/* Number Badge */}
      <div className="mt-auto pt-4 opacity-20 text-4xl font-black text-white group-hover:text-yellow-400 group-hover:opacity-100 transition-all duration-300">
        {item.number}
      </div>
    </div>
  </motion.div>
);

// --- COMPONENT: SECTION HEADER ---
const SectionHeader = ({ title, subtitle }) => (
  <div className="relative mb-12 text-center">
    <h2 className="text-2xl md:text-3xl noto-sans-bold text-[#990500] uppercase tracking-wide inline-block relative z-10 px-4 drop-shadow-sm">
      {title}
    </h2>
    <div className="w-24 h-1.5 bg-[#990500] mx-auto mt-2 rounded-full mb-3"></div>
    {subtitle && (
      <p className="text-[#333] noto-sans-medium text-sm md:text-base max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

const DistrictPageIntro = () => {
  return (
    <section className="bg-[#FFDD00] min-h-screen text-black font-sans">
      
      {/* 1. Header / Hero Section */}
      <div className="bg-gradient-to-r from-[#990500] to-[#700300] py-12 px-4 shadow-md relative border-b-4 border-yellow-400">
         
         {/* ADDED: Back Button Navigation */}
         <Link to="/" className="absolute top-6 left-6 text-yellow-400 hover:text-white transition-colors flex items-center gap-2 font-bold z-20">
            <ArrowLeft size={24} /> <span className="hidden sm:inline">முகப்பு</span>
         </Link>

         <div className="max-w-4xl mx-auto text-center relative z-10">
           <span className="inline-block px-3 py-1 bg-yellow-400 text-[#990500] text-xs font-bold rounded-full mb-3 uppercase tracking-wider shadow-sm">
             களப்பணி
           </span>
           <h1 className="text-2xl md:text-4xl noto-sans-bold text-white tracking-wider drop-shadow-md">
             தமிழக வெற்றிக் கழகம் <br /> <span className="text-yellow-400">மாவட்ட நடவடிக்கைகள்</span>
           </h1>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        
        {/* 2. Intro Section with Image & Text */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Image Side */}
          <motion.div variants={cardVariants} className="flex justify-center">
            <div className="w-full max-w-md shadow-2xl rounded-2xl overflow-hidden border-4 border-[#990500] relative">
               <img 
                 src={DistrictIntroImage} 
                 alt="TVK District Leader" 
                 className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
               />
               <div className="absolute inset-0 border-4 border-yellow-400/30 pointer-events-none rounded-xl"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          {/* FIXED: Changed text-justify to text-left */}
          <motion.div variants={cardVariants} className="space-y-6 text-left">
             <div className="flex items-center gap-2 mb-2">
                <Target className="text-[#990500]" />
                <h3 className="text-xl font-bold text-[#990500]">எங்கள் நோக்கம்</h3>
             </div>
             <p className="text-base md:text-lg leading-relaxed text-gray-800 noto-sans-medium">
               தமிழக வெற்றிக் கழகம் (TVK) தமிழ்நாட்டின் ஒவ்வொரு மாவட்டத்திலும் மக்கள் நலனுக்காக பல்வேறு செயல்பாடுகளை முன்னெடுத்து வருகிறது. நமது கட்சியின் ஒவ்வொரு மாவட்டக் குழுவும், மாவட்டத்தின் தனித்துவமான தேவைகளுக்கு ஏற்ப சமூக முன்னேற்ற திட்டங்களை செயல்படுத்தி வருகிறது.
             </p>
             <p className="text-base md:text-lg leading-relaxed text-gray-800 noto-sans-medium">
               மாவட்ட அளவிலான பணிகள் மூலம், நாங்கள் தமிழகத்தின் ஆழம் வரை சமூக நீதியும், சமத்துவமும் கொண்ட செயல்பாடுகளை முன்னெடுத்து வருகிறோம்.
             </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-[#990500]/20 max-w-4xl mx-auto"></div>

        {/* 3. Cards Grid (Numbered List Converted) */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
           variants={containerVariants}
        >
          <SectionHeader 
             title="மாவட்டத்தின் முக்கிய நடவடிக்கைகள்" 
             subtitle="ஒவ்வொரு மாவட்டமும் நமது இயக்கத்தின் முக்கிய அங்கமாகும்"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {districtActivities.map((activity, index) => (
              <Card key={index} item={activity} />
            ))}
          </div>
        </motion.div>

        {/* 4. Closing / Contribution Section */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-[#990500]/20 shadow-lg text-center max-w-4xl mx-auto"
        >
           <div className="flex justify-center mb-4 text-[#990500]">
             <MapPin size={40} />
           </div>
           <h3 className="text-xl md:text-2xl font-bold text-[#990500] mb-4">
             ஒவ்வொரு மாவட்டத்தின் பங்களிப்பு
           </h3>
           <p className="text-gray-800 mb-6 leading-relaxed">
             தமிழகத்தின் ஒவ்வொரு மாவட்டமும் TVK கட்சியின் சிறப்பு பயணத்தில் தனித்துவமான பங்காற்றுகிறது. 
             இங்கே நீங்கள் உங்கள் மாவட்டத்தின் சமீபத்திய நிகழ்வுகள், திட்டங்கள் மற்றும் பொதுக்கூட்டங்கள் பற்றிய அனைத்து புதுப்பிப்புகளையும் பார்க்கலாம்.
           </p>
           
           {/* FIXED: Navigation Button using Link */}
           <Link 
             to="/activities" 
             className="inline-block px-8 py-3 bg-[#990500] text-yellow-400 font-bold rounded-full shadow-lg hover:bg-[#b30600] hover:scale-105 transform transition-all duration-300 cursor-pointer"
           >
             நிகழ்வுகளை பின்தொடருங்கள்
           </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default DistrictPageIntro;