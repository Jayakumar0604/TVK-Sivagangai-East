import React from "react";
import { motion } from "framer-motion";
import VijayImage from "../../assets/tvk-vijay.webp"; // Replace with your actual image
import { Quote } from "lucide-react"; // Ensure lucide-react is installed or use an SVG

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Smooth delay between text blocks
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring", stiffness: 50 } 
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: -50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const Leader = () => {
  return (
    <>
      {/* --- Section Header --- */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-20"
      >
        <div className="bg-[#990500] py-6 text-center shadow-lg relative overflow-hidden">
             {/* Decorative pattern overlay */}
             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20"></div>
             
             <h2 className="text-lg md:text-2xl noto-sans-bold text-white uppercase tracking-wider relative z-10">
                எங்கள் தலைவர் தளபதி விஜய்
             </h2>
        </div>
      </motion.div>

      {/* --- Main Content Section --- */}
      <section className="relative bg-[#FFDD00] text-[#3D3D3D] px-6 py-16 noto-sans-semi overflow-hidden">
        
        {/* Background Decorative Circles (Strictly Palette Colors) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#990500] rounded-full mix-blend-multiply filter blur-3xl opacity-5 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* --- Left Column: Portrait Image --- */}
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-5 relative"
            >
              {/* Image Frame Effect */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-white group">
                 {/* Inner Border */}
                 <div className="absolute inset-0 border-4 border-[#990500]/20 z-20 pointer-events-none transition-colors duration-500 group-hover:border-[#990500]/50"></div>
                 
                 <img
                  src={VijayImage}
                  alt="Thalapathy Vijay"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Caption Badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#990500] to-transparent p-6 pt-12">
                   <p className="text-white text-center noto-sans-bold text-lg tracking-wide">
                      தளபதி விஜய்
                   </p>
                </div>
              </div>
            </motion.div>

            {/* --- Right Column: Text Content --- */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-7 space-y-6"
            >
              {/* Opening Quote Icon */}
              <motion.div variants={textVariants} className="text-[#990500] opacity-80">
                 <Quote size={48} className="rotate-180 fill-current" />
              </motion.div>

              {/* Text Blocks */}
              <motion.div variants={textVariants} className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-[#990500] shadow-sm">
                <p className="text-lg md:text-xl leading-relaxed font-medium">
                  <span className="text-[#990500] noto-sans-bold">தமிழக வெற்றிக் கழகத்தின் (TVK)</span> நிறுவனர் 
                  <span className="text-[#990500] noto-sans-bold"> தளபதி விஜய்</span> அவர்கள், 
                  சமூக நீதி, அரசியல் மாற்றம் மற்றும் தமிழக மக்கள் முன்னேற்றம் குறித்த ஆழ்ந்த நம்பிக்கையுடன் செயல்படும் ஒரு குரல் நாயகன்.
                </p>
              </motion.div>

              <motion.div variants={textVariants} className="text-sm md:text-base leading-loose text-justify space-y-4">
                <p>
                  மக்களுக்கான சேவையில் அவருக்கு உள்ள அழுத்தமும், 
                  <span className="text-[#990500] noto-sans-bold px-1 bg-white/60 rounded">ஊழல் இல்லாத, நெறி தமிழ்நாடு உருவாகும் முயற்சியும்</span> 
                  அவருக்கு தமிழகத்தின் பல்வேறு தரப்பில் உள்ள மக்களின் மத்தியில் 
                  <span className="text-[#990500] noto-sans-bold"> மாறாத ஆதரவை</span> பெற்றுத்தந்துள்ளது.
                </p>

                <p>
                  தளபதி விஜய் அவர்களின் தலைமை சிறப்பம்சம் என்பது 
                  <span className="text-[#990500] noto-sans-bold"> மக்களை அரவணைப்பதும், சமநிலை வாய்ந்த சமூகத்தை முன்னிறுத்துவதும்</span> ஆகும். 
                  பொதுமக்கள் நலனில் அவரது உறுதியான நம்பிக்கையும், வேலைவாய்ப்புகளுக்கான வழிமுறைகளில் அவரது ஈடுபாடும் குறிப்பிடத்தக்கது.
                </p>

                <p>
                  அவரது <span className="text-[#990500] noto-sans-bold">நேர்மை, வெளிப்படைத்தன்மை</span> மற்றும் 
                  நம்பிக்கையான நடவடிக்கைகள், அவரை ஒரு <span className="bg-[#990500] text-white px-2 py-0.5 rounded shadow-sm text-sm">நம்பகமான தலைவராக</span> உருவாக்குகிறது. 
                  அவரது செயல்பாடுகள், முன்னோக்கி பார்வை, தலைமை திறன் மற்றும் கடுமையான உழைப்பு ஆகியவை அவரை ஒரு 
                  வலுவான தலைவராக நிலைநிறுத்துகின்றன.
                </p>
              </motion.div>

              {/* Closing Highlight Box */}
              <motion.div variants={textVariants} className="mt-8 bg-[#990500] text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFDD00] rounded-full opacity-10 translate-x-8 -translate-y-8"></div>
                 <p className="relative z-10 text-center text-lg md:text-xl font-medium leading-relaxed">
                   "ஒவ்வொரு தமிழர் மனதிலும் <span className="text-[#FFDD00] font-bold">எதிர்காலத்தை மாற்றும் நம்பிக்கையை</span> நம்மிடையே விதைத்துக் கொண்டிருக்கிறார்."
                 </p>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leader;