import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming you use React Router
import { ArrowRight, MapPin, Target } from "lucide-react"; // Icons for better UI
import Prabhu from "../../assets/TVK-Prabhu.png";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 50 } 
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -2 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    transition: { duration: 0.8, ease: "backOut" } 
  },
};

const SmallAbout = () => {
  return (
    <section className="relative bg-[#FFDD00] text-[#3D3D3D] py-16 md:py-24 overflow-hidden noto-sans-semi">
      
      {/* --- Background Decorative Elements (Palette Colors) --- */}
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-[#990500] rounded-full mix-blend-multiply opacity-5 blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-white rounded-full opacity-40 blur-3xl"></div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        {/* --- Section Header (District Focus) --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
           <div className="bg-[#990500] text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
              <MapPin className="w-5 h-5 text-[#FFDD00]" />
              <span className="noto-sans-bold uppercase tracking-wider text-sm md:text-base">
                சிவகங்கை கிழக்கு மாவட்டம்
              </span>
           </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Left: Text Content --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2 variants={textVariants} className="text-sm font-bold text-[#990500] uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-1 bg-[#990500]"></span>
              தவெக ஓர் அறிமுகம்
            </motion.h2>

            <motion.h1 variants={textVariants} className="text-3xl md:text-4xl lg:text-5xl noto-sans-bold text-[#3D3D3D] leading-tight">
              சிறந்ததொரு நாளையை <br/>
              <span className="text-white text-shadow-sm bg-[#990500] px-2 leading-snug box-decoration-clone">
                உருவாக்குவோம்!
              </span>
            </motion.h1>

            <motion.p variants={textVariants} className="text-base md:text-lg text-[#3D3D3D] leading-relaxed text-justify">
              தமிழக வெற்றிக் கழகம், அனைவரையும் உள்ளடக்கிய ஓர் உன்னதமான 
              <span className="noto-sans-bold text-[#990500]"> சிவகங்கை கிழக்கு மாவட்டத்தை </span> 
              உருவாக்க உறுதிபூண்டுள்ளது. இளைஞர் மேம்பாடு, தொழில்நுட்ப வளர்ச்சி மற்றும் சமூக நீதி ஆகியவையே எங்கள் பார்வையின் அடிப்படை.
            </motion.p>

            <motion.div variants={textVariants} className="bg-white/50 border-l-4 border-[#990500] p-4 rounded-r-md">
                <p className="text-sm md:text-base italic font-medium">
                    "வெளிப்படையான நிர்வாகம் மற்றும் சாமானிய மக்களும் பயன்பெறும் வகையிலான கொள்கைகளை நாங்கள் உறுதியாக நம்புகிறோம்."
                </p>
            </motion.div>

            <motion.div variants={textVariants} className="pt-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 bg-[#3D3D3D] text-[#FFDD00] px-6 py-3 rounded-md noto-sans-bold shadow-lg hover:bg-[#990500] hover:text-white transition-all duration-300"
              >
                மேலும் அறிக <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* --- Right: Creative Image Layout --- */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Back Box (Red) */}
            <div className="absolute top-4 left-4 w-full h-full border-4 border-[#990500] rounded-xl z-0"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl bg-white transform transition-transform duration-500 hover:-translate-y-2">
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#990500] to-transparent opacity-20 hover:opacity-0 transition-opacity duration-500"></div>
                
                <img
                  src={Prabhu}
                  alt="TVK Prabhu - Sivagangai East"
                  className="w-full h-auto object-cover min-h-[350px] md:min-h-[450px]"
                />

                {/* Floating Caption inside Image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
                    <p className="text-[#FFDD00] text-sm font-bold uppercase tracking-widest">
                        மக்கள் பணியில் நம் தோழர்
                    </p>
                </div>
            </div>

            {/* Floating Icon Badge */}
            <div className="absolute -top-6 -right-6 bg-[#FFDD00] border-4 border-white p-4 rounded-full shadow-xl z-20 hidden md:block animate-bounce-slow">
                <Target className="w-8 h-8 text-[#990500]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SmallAbout;