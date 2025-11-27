import React from "react";
import { motion } from "framer-motion";
import Emblem from "../../assets/tvk-emblem.webp"; 
import { AlertCircle, Star, MapPin } from "lucide-react"; 

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 20 } 
  },
};

const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const TvkIt = () => {
  return (
    <>
      {/* --- Header Section --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <div className="bg-[#990500] text-center py-6 shadow-lg relative overflow-hidden">
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <h2 className="text-lg md:text-2xl noto-sans-bold text-white uppercase tracking-wider relative z-10">
              தமிழக வெற்றிக் கழகம்
            </h2>
            <div className="flex justify-center items-center gap-2 mt-2 text-[#FFDD00] relative z-10">
                <MapPin className="w-5 h-5 fill-current" />
                <span className="text-sm md:text-lg noto-sans-semi tracking-widest uppercase">
                  சிவகங்கை கிழக்கு மாவட்டம்
                </span>
            </div>
        </div>
        {/* Decorative Bottom Border */}
        <div className="h-2 bg-white w-full" />
      </motion.div>

      {/* --- Main Content Section --- */}
      <section className="relative bg-[#FFDD00] text-[#3D3D3D] px-4 py-12 md:px-6 md:py-16 noto-sans-semi overflow-hidden min-h-[80vh] flex items-center justify-center">
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#990500] rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-[#FFFFFF] rounded-full opacity-40 blur-3xl" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center"
        >
          
          {/* --- Left Column: Visuals & Slogan --- */}
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Emblem with Floating Effect */}
            <motion.div 
              variants={floatAnimation} 
              animate="animate"
              className="relative"
            >
                {/* Glow behind emblem */}
                <div className="absolute inset-0 bg-white blur-2xl opacity-50 rounded-full scale-90" />
                <img
                  src={Emblem}
                  alt="TVK Emblem"
                  className="relative w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
                />
            </motion.div>

            {/* Slogan Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#990500] shadow-xl max-w-md transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-2 text-[#FFDD00]">
                <Star className="fill-current w-6 h-6" />
                <Star className="fill-current w-6 h-6 mx-1" />
                <Star className="fill-current w-6 h-6" />
              </div>
              <p className="text-base md:text-lg text-[#3D3D3D] leading-relaxed noto-sans-medium">
                "மக்கள் சேவையில் மாவீரன்! களத்தில் இணையில்லா தலைவன்!
                <br />
                நாளை முதல்வராகும் லட்சியப் பயணம்..."
              </p>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <span className="noto-sans-bold text-[#990500] text-lg block">
                  எங்கள் தளபதி விஜய்
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  வெற்றிப் படையின் முகவரி
                </span>
              </div>
            </motion.div>
          </div>

          {/* --- Right Column: District Specific Content --- */}
          <div className="space-y-8">
            
            {/* Main Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#990500] w-2 h-8 rounded-full"></span>
                <h3 className="text-2xl noto-sans-bold text-[#990500]">
                  மாவட்ட செயல்பாடு
                </h3>
              </div>
              
              {/* FIXED: Changed text-justify to text-left */}
              <p className="text-base md:text-lg leading-loose text-gray-800 text-left">
                இந்த இணையதளம் <span className="font-bold text-[#990500]">சிவகங்கை கிழக்கு மாவட்ட</span> (Sivagangai East)
                தமிழக வெற்றிக் கழகத் தொண்டர்களுக்காகப் பிரத்யேகமாக உருவாக்கப்பட்டுள்ளது.
                எங்கள் மாவட்டத்தில் நடைபெறும் மக்கள் நலப்பணிகள், உறுப்பினர் சேர்க்கை முகாம்கள் 
                மற்றும் கழக நிகழ்வுகளை ஒருங்கிணைக்க இது செயல்படுகிறது.
              </p>
              
              {/* FIXED: Changed text-justify to text-left */}
              <p className="text-base md:text-lg leading-loose text-gray-800 text-left">
                சிவகங்கை மண்ணின் மக்களின் குரலாகவும், தளபதி அவர்களின் கொள்கைகளை 
                வீடுதோறும் கொண்டு சேர்க்கும் பாலமாகவும் நாங்கள் செயல்படுகிறோம்.
              </p>
            </motion.div>

            {/* Disclaimer Box */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-[#990500] text-white p-6 rounded-2xl shadow-2xl relative overflow-hidden group"
            >
              {/* Decoration Circle */}
              <div className="absolute top-[-20px] right-[-20px] w-20 h-20 bg-[#FFDD00] rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="bg-white/20 p-2 rounded-full shrink-0">
                  <AlertCircle className="w-6 h-6 text-[#FFDD00]" />
                </div>
                <div>
                  <strong className="block mb-2 text-lg noto-sans-bold text-[#FFDD00] tracking-wide">
                    முக்கிய அறிவிப்பு:
                  </strong>
                  <p className="text-sm md:text-base opacity-90 leading-relaxed text-left">
                    இது சிவகங்கை கிழக்கு மாவட்டத் தொண்டர்களால் நிர்வகிக்கப்படும் 
                    <span className="font-bold border-b border-[#FFDD00] ml-1">ஆதரவு இணையதளம்</span> மட்டுமே. 
                    அதிகாரப்பூர்வ அறிவிப்புகளுக்கு தலைமைக் கழகத்தின் பக்கத்தைப் பார்க்கவும்.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>
    </>
  );
};

export default TvkIt;