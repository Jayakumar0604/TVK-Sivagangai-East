import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  HeartPulse, 
  Leaf, 
  Building2, 
  Wifi, 
  ShieldCheck, 
  Sprout,
  Cpu,
  Factory,
  Palette,
  CheckCircle,
  Users,
  BarChart3,
  MessageCircle
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- DATA SECTION 1: SIVAGANGAI 2030 (Numbered) ---
const section1Data = [
  {
    number: "01",
    title: "டிஜிட்டல் மேம்பாடு",
    description: "அனைவருக்கும் இணைய வசதி மற்றும் மின்னணு சேவை மையங்களை உருவாக்குதல்.",
    icon: <Cpu size={28} />
  },
  {
    number: "02",
    title: "தொழில்துறை மையம்",
    description: "உள்ளூர் வளங்களை ஆதரிக்கும் சிறு மற்றும் குறு தொழில்களுக்கான சிறப்பு மண்டலங்கள்.",
    icon: <Factory size={28} />
  },
  {
    number: "03",
    title: "கல்வி சிறப்பு",
    description: "உலகத்தரம் வாய்ந்த கல்வி மற்றும் திறன் மேம்பாட்டு மையங்களை நிறுவுதல்.",
    icon: <GraduationCap size={28} />
  },
  {
    number: "04",
    title: "சுகாதார தரம்",
    description: "நவீன மருத்துவ வசதிகள் மற்றும் தடையற்ற அவசர சிகிச்சை.",
    icon: <HeartPulse size={28} />
  },
  {
    number: "05",
    title: "நிலையான எதிர்காலம்",
    description: "பசுமை எரிசக்தி மற்றும் சுற்றுச்சூழல் பாதுகாப்பு நடவடிக்கைகள்.",
    icon: <Leaf size={28} />
  },
  {
    number: "06",
    title: "கலாச்சார பெருமை",
    description: "தமிழ் பாரம்பரியத்தை பாதுகாக்கும் சுற்றுலாத் திட்டங்கள்.",
    icon: <Palette size={28} />
  }
];

// --- DATA SECTION 2: POLICIES (With Bullet Points) ---
const section2Data = [
  {
    title: "வேலைவாய்ப்பு & பொருளாதாரம்",
    description: "வேலைவாய்ப்புகளை உருவாக்குதல் மற்றும் பொருளாதார சுதந்திரம்.",
    icon: <Briefcase size={28} />,
    points: ["புதிய தொழில் பூங்காக்கள்", "இளைஞர்களுக்கு பயிற்சி", "மகளிர் குழுக்களுக்கு ஆதரவு"]
  },
  {
    title: "கல்வி & திறன்கள்",
    description: "நவீன கல்வி முறைகள் மூலம் மாணவர்களின் தரத்தை உயர்த்துதல்.",
    icon: <GraduationCap size={28} />,
    points: ["இலவச கணினி கல்வி", "நூலகங்கள் அமைத்தல்", "கல்வி உதவித் தொகை"]
  },
  {
    title: "சுகாதாரம்",
    description: "மருத்துவ வசதிகள் மற்றும் சுகாதார கட்டமைப்புகளை மேம்படுத்துதல்.",
    icon: <HeartPulse size={28} />,
    points: ["கிராமப்புற சுகாதார மையம்", "இலவச காப்பீடு", "24/7 அவசர ஊர்தி"]
  },
  {
    title: "சுற்றுச்சூழல்",
    description: "இயற்கை வளங்களை பாதுகாத்தல் மற்றும் மாசு கட்டுப்பாடு.",
    icon: <Leaf size={28} />,
    points: ["100% மரக்கன்று நடுதல்", "பிளாஸ்டிக் ஒழிப்பு", "நீர்நிலை பாதுகாப்பு"]
  },
  {
    title: "உள்கட்டமைப்பு",
    description: "சாலை வசதிகள், குடிநீர் மற்றும் போக்குவரத்தை மேம்படுத்துதல்.",
    icon: <Building2 size={28} />,
    points: ["தரமான சாலைகள்", "தடையற்ற குடிநீர்", "நகர்ப்புற மேம்பாடு"]
  },
  {
    title: "புதுமை & தொழில்நுட்பம்",
    description: "அறிவியல் மற்றும் தொழில்நுட்ப வளர்ச்சியில் முன்னிலை.",
    icon: <Wifi size={28} />,
    points: ["ஊராட்சிகளில் WiFi", "இ-சேவை மையங்கள்", "ஸ்டார்ட்-அப் ஊக்கத்தொகை"]
  },
  {
    title: "சமூக நீதி",
    description: "அனைவருக்குமான உரிமைகள் மற்றும் பாதுகாப்பை உறுதி செய்தல்.",
    icon: <ShieldCheck size={28} />,
    points: ["பெண்கள் பாதுகாப்பு", "சிறுபான்மையினர் நலம்", "மாற்றுத்திறனாளிகள் நலம்"]
  },
  {
    title: "விவசாயம் & கிராமப்புறம்",
    description: "விவசாயிகளின் வாழ்வாதாரத்தை உயர்த்துதல்.",
    icon: <Sprout size={28} />,
    points: ["நியாய விலை நிர்ணயம்", "நீர் பாசன வசதி", "இயற்கை விவசாயம்"]
  }
];

// --- DATA SECTION 3: PROMISES ---
const section3Data = [
  {
    title: "வெளிப்படையான ஆட்சி",
    description: "ஒவ்வொரு முடிவும் மக்களின் நலன் கருதி வெளிப்படைத்தன்மையுடன் எடுக்கப்படும்.",
    icon: <CheckCircle size={28} />
  },
  {
    title: "பொறுப்புள்ள தலைமை",
    description: "மக்களின் குறைகளை உடனுக்குடன் தீர்க்கும் பொறுப்புள்ள தலைமை.",
    icon: <Users size={28} />
  },
  {
    title: "தரவு சார்ந்த முடிவுகள்",
    description: "அறிவியல் பூர்வமான மற்றும் தரவுகளின் அடிப்படையில் வளர்ச்சித் திட்டங்கள்.",
    icon: <BarChart3 size={28} />
  },
  {
    title: "குடிமக்கள் பங்கேற்பு",
    description: "அரசின் திட்டங்களில் மக்களின் நேரடிப் பங்கேற்பை உறுதி செய்தல்.",
    icon: <MessageCircle size={28} />
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

      {/* Conditional Rendering: Bullet Points (For Section 2) */}
      {item.points && (
        <ul className="mt-2 text-left w-full space-y-2 bg-red-900/30 p-4 rounded-lg border border-red-800/50">
          {item.points.map((point, idx) => (
            <li key={idx} className="flex items-start text-xs md:text-sm text-yellow-100/90">
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 mr-2 shrink-0"></span>
              {point}
            </li>
          ))}
        </ul>
      )}

      {/* Conditional Rendering: Number Badge (For Section 1) */}
      {item.number && (
        <div className="mt-auto pt-4 opacity-20 text-4xl font-black text-white group-hover:text-yellow-400 group-hover:opacity-100 transition-all duration-300">
          {item.number}
        </div>
      )}
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
      <p className="text-[#990500]/80 noto-sans-medium text-sm md:text-base max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

const Sivagangai = () => {
  return (
    <div className="font-sans bg-gray-50">
      
      {/* Hero Title Section */}
      <div className="bg-gradient-to-r from-[#990500] to-[#700300] py-12 px-4 shadow-md z-10 relative border-b-4 border-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-yellow-400 text-[#990500] text-xs font-bold rounded-full mb-3 uppercase tracking-wider shadow-sm">
            எங்கள் பார்வை
          </span>
          <h1 className="text-3xl md:text-5xl noto-sans-bold text-white tracking-wider drop-shadow-md">
            சிவகங்கை <span className="text-yellow-400">2030</span>
          </h1>
          <p className="text-yellow-100 mt-3 text-lg noto-sans-medium tracking-wide">
            வளமான எதிர்காலத்திற்கான தொலைநோக்கு திட்டங்கள்
          </p>
        </div>
      </div>

      {/* Main Content Area with Bright Yellow Background */}
      <section className="bg-[#FFDD00] px-4 py-16 md:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* --- SECTION 1: SIVAGANGAI 2030 (Numbered) --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <SectionHeader title="எங்கள் இலக்குகள்" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section1Data.map((card, index) => (
                <Card key={index} item={card} />
              ))}
            </div>
          </motion.div>

          {/* Divider Line */}
          <div className="w-full h-0.5 bg-[#990500]/20 max-w-4xl mx-auto"></div>

          {/* --- SECTION 2: KEY POLICIES (Bullets) --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <SectionHeader 
              title="முக்கிய கொள்கை பகுதிகள்" 
              subtitle="முன்னேற்றத்தின் ஒவ்வொரு படியிலும் மாற்றம்"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section2Data.map((card, index) => (
                <Card key={index} item={card} />
              ))}
            </div>
          </motion.div>

           {/* Divider Line */}
           <div className="w-full h-0.5 bg-[#990500]/20 max-w-4xl mx-auto"></div>

          {/* --- SECTION 3: PROMISES --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <SectionHeader title="நாங்கள் என்ன உறுதியளிக்கிறோம்" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section3Data.map((card, index) => (
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

export default Sivagangai;