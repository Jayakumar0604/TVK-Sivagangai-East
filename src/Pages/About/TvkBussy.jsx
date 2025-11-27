import React from "react";
import { motion } from "framer-motion";
import Bussy from "../../assets/bussy-anand.jpg"; // Ensure path is correct
import { Award, Users, TrendingUp } from "lucide-react"; // Ensure lucide-react is installed

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

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 60 } 
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};

const TvkBussy = () => {
  return (
    <>
      {/* --- Header Section --- */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-20"
      >
        <div className="bg-[#990500] py-6 text-center shadow-lg relative overflow-hidden">
             {/* Decorative pattern */}
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
             
             <h2 className="text-lg md:text-2xl noto-sans-bold text-white uppercase tracking-wider relative z-10">
               மதிப்பிற்குரிய பொதுச்செயலாளர்
             </h2>
        </div>
      </motion.div>

      {/* --- Main Content Section --- */}
      <section className="relative bg-[#FFDD00] text-[#3D3D3D] px-4 md:px-6 py-12 md:py-16 noto-sans-semi overflow-hidden">
        
        {/* Background Decor (Palette Colors) */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#990500] rounded-bl-full opacity-10 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-tr-full opacity-40 blur-2xl pointer-events-none"></div>

        <div className="mx-auto max-w-6xl relative z-10">
          
          {/* FIXED GRID LAYOUT:
             1. grid-cols-1: Mobile & Tablet (md) will show 1 column (Stacked).
             2. lg:grid-cols-12: Only Laptops/Desktops will show side-by-side (12 columns).
          */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* --- Left Column: Image & Designation --- */}
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5 relative mb-12 lg:mb-0" // mb-12 provides spacing when stacked
            >
              <div className="relative group">
                {/* Image Frame */}
                <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={Bussy}
                    alt="Mr. Bussy N. Anand"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Floating Name Card */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] bg-white p-4 rounded-lg shadow-xl border-l-4 border-[#990500] text-center z-20">
                   <h3 className="text-[#990500] noto-sans-bold text-lg leading-tight">திரு. Bussy N. ஆனந்த்</h3>
                   <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">முன்னாள் MLA & பொதுச்செயலாளர்</p>
                </div>
              </div>
            </motion.div>

            {/* --- Right Column: Content Blocks --- */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-5"
            >
              
              {/* Block 1: Intro & Coordination */}
              <motion.div variants={itemVariants} className="bg-white/90 backdrop-blur-sm p-5 md:p-6 rounded-lg shadow-sm border-l-4 border-[#990500]">
                <div className="flex items-start gap-4">
                    <div className="bg-[#990500]/10 p-2 rounded-full shrink-0">
                        <Users className="w-6 h-6 text-[#990500]" />
                    </div>
                    <div>
                        <h4 className="text-[#990500] noto-sans-bold text-lg mb-2">ஒருங்கிணைப்பு நாயகன்</h4>
                        <p className="text-sm md:text-base leading-7 text-gray-800 text-left">
                        தமிழக வெற்றிக் கழகத்தின் பொதுச் செயலாளராக உள்ள <span className="text-[#990500] font-bold">திரு. Bussy N. ஆனந்த்</span> அவர்கள், 
                        கட்சியின் அனைத்து உறுப்பினர்களையும் இணைக்கும் திறமையான ஒருங்கிணைப்பாளராக விளங்குகிறார். 
                        தமிழகத்தின் அனைத்து பகுதிகளிலும் நடைபெறும் கூட்டங்களில் நேரடிப் பங்கேற்பு கொண்டு முக்கிய முடிவுகளை மேற்கொள்கிறார்.
                        </p>
                    </div>
                </div>
              </motion.div>

              {/* Block 2: Growth & Social Justice */}
              <motion.div variants={itemVariants} className="bg-white/90 backdrop-blur-sm p-5 md:p-6 rounded-lg shadow-sm border-l-4 border-[#990500]">
                <div className="flex items-start gap-4">
                    <div className="bg-[#990500]/10 p-2 rounded-full shrink-0">
                        <TrendingUp className="w-6 h-6 text-[#990500]" />
                    </div>
                    <div>
                        <h4 className="text-[#990500] noto-sans-bold text-lg mb-2">கழகத்தின் வளர்ச்சி</h4>
                        <p className="text-sm md:text-base leading-7 text-gray-800 text-left">
                        அவரது வழிகாட்டுதலின் கீழ், கட்சி அசுர வேகத்தில் வளர்ச்சியடைந்து வருகிறது. 
                        <span className="bg-[#990500]/10 px-1 rounded text-[#990500] font-bold">சமூகநீதியை நிலைநிறுத்துவதிலும்</span>, 
                        தொண்டர்களின் ஒற்றுமையை உறுதிப்படுத்துவதிலும் அவர் முக்கிய பங்கு வகிக்கிறார். 
                        அவரது திட்டமிட்ட செயல்பாடுகள் TVK-வை வலுவான இயக்கமாக மாற்றியுள்ளது.
                        </p>
                    </div>
                </div>
              </motion.div>

              {/* Block 3: Dedication */}
              <motion.div variants={itemVariants} className="bg-white/90 backdrop-blur-sm p-5 md:p-6 rounded-lg shadow-sm border-l-4 border-[#990500]">
                <div className="flex items-start gap-4">
                    <div className="bg-[#990500]/10 p-2 rounded-full shrink-0">
                        <Award className="w-6 h-6 text-[#990500]" />
                    </div>
                    <div>
                        <h4 className="text-[#990500] noto-sans-bold text-lg mb-2">அர்ப்பணிப்பு</h4>
                        <p className="text-sm md:text-base leading-7 text-gray-800 text-left">
                        அவரது கடின உழைப்பின் காரணமாக, தமிழக வெற்றிக் கழகம் இன்று மக்கள் நலனுக்காக செயல்படும் முதன்மை இயக்கமாக மாறியுள்ளது. 
                        முன்னாள் MLA ஆனந்த் அவர்களின் தலைமையில், கட்சி நம்பிக்கையுடன் வெற்றிப் பாதையில் பயணிக்கிறது.
                        </p>
                    </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TvkBussy;