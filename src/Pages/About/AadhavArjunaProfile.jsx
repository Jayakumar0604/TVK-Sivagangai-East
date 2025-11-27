import React from "react";
import { motion } from "framer-motion";
import { Globe, Twitter, CheckCircle, Quote } from "lucide-react"; 
import AadhavImage from "../../assets/aadhav-arjuna-tvk-.webp"; 

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
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50 } 
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: "backOut" } 
  },
};

const AadhavArjunaProfile = () => {
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
             <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
             <h1 className="text-xl md:text-3xl noto-sans-bold text-white uppercase tracking-wider relative z-10">
               தேர்தல் பிரச்சார மேலாண்மை
             </h1>
        </div>
      </motion.div>

      {/* --- Main Profile Section --- */}
      <section className="relative bg-[#FFDD00] text-[#3D3D3D] px-4 md:px-6 py-16 noto-sans-semi overflow-hidden">
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#990500] rounded-full mix-blend-multiply opacity-5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full opacity-40 blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-5xl"
        >
          
          {/* --- Profile Card --- */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-10 border-t-8 border-[#990500]">
            <div className="grid md:grid-cols-12 gap-0">
              
              {/* Left: Image */}
              <motion.div variants={imageVariants} className="md:col-span-5 bg-gray-100 relative group overflow-hidden">
                <div className="absolute inset-0 bg-[#990500] opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10" />
                <img
                  src={AadhavImage}
                  alt="Thiru. Aadhav Arjuna"
                  className="w-full h-full object-cover object-top min-h-[300px] md:min-h-full transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

              {/* Right: Info */}
              <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center space-y-6">
                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl noto-sans-bold text-[#990500] mb-1">
                    திரு. ஆதவ் அர்ஜுனா
                  </h2>
                  <span className="text-sm font-bold bg-[#FFDD00] text-[#990500] px-2 py-1 rounded inline-block mb-4">
                    B.A. (Political Science)
                  </span>
                  <p className="text-lg md:text-xl noto-sans-medium text-gray-800 border-b-2 border-gray-100 pb-4">
                    பொதுச்செயலாளர் - தேர்தல் பிரச்சார மேலாண்மை <br/>
                    <span className="text-sm text-gray-500 font-normal">தமிழக வெற்றிக் கழகம் (TVK)</span>
                  </p>
                </motion.div>

                {/* Social Links */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-[#990500] transition-colors text-sm font-bold">
                    <Twitter size={18} /> @AadhavArjuna
                  </a>
                  <a href="#" className="flex items-center gap-2 border-2 border-[#3D3D3D] text-[#3D3D3D] px-4 py-2 rounded-lg hover:bg-[#3D3D3D] hover:text-white transition-colors text-sm font-bold">
                    <Globe size={18} /> www.aadhavarjuna.com
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* --- Content / Vision Section --- */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Description Column */}
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border-l-4 border-[#990500]">
              <h3 className="text-[#990500] noto-sans-bold text-lg mb-4 flex items-center gap-2">
                <span className="bg-[#990500] w-2 h-2 rounded-full"></span>
                துறைசார் அனுபவம்
              </h3>
              
              {/* FIXED: Changed text-justify to text-left */}
              <p className="text-sm md:text-base leading-relaxed text-left mb-4">
                தமிழக அரசியல் மற்றும் தகவல் தொழில்நுட்ப துறையில் நன்கு அனுபவம் பெற்ற
                <span className="noto-sans-bold text-[#990500]"> திரு. CTR. நிர்மல் குமார் B.E., LL.B.</span> அவர்கள்,
                தமிழக வெற்றிக் கழகத்தில் இணைந்து, தகவல் தொழில்நுட்பம் மற்றும் சமூக ஊடகப் பிரிவு பொறுப்பை ஏற்றுள்ளார்.
              </p>
              
              {/* FIXED: Changed text-justify to text-left */}
              <p className="text-sm md:text-base leading-relaxed text-left">
                இவரது தலைமையில் <span className="noto-sans-bold text-[#990500]"> TVK IT Wing</span> ஒரு முன்னோடியான, 
                தொழில்நுட்பம் நிரம்பிய தளமாக உருவாக்கப்பட்டுள்ளது.
              </p>
            </motion.div>

            {/* Goals & Quote Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              
              {/* Checklist */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
                <h3 className="text-[#990500] noto-sans-bold text-lg mb-4">முக்கிய செயல்பாடுகள்</h3>
                <ul className="space-y-3">
                  {[
                    "தகவல் தொழில்நுட்பம் மற்றும் சமூக ஊடகக் கொள்கைகளை வகுத்தல்.",
                    "வலைவழி நுட்பங்கள் மூலம் மக்களுடன் நேரடி இணைப்பு.",
                    "தொழில்நுட்பம் மற்றும் சமூக ஊடகத்தில் கழகத்தை முன்னேற்றுதல்."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base">
                      <CheckCircle className="w-5 h-5 text-[#990500] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote Box */}
              <div className="bg-[#990500] text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                <Quote className="absolute top-2 right-2 text-[#FFDD00] w-10 h-10 opacity-20" />
                <p className="italic text-base md:text-lg noto-sans-medium leading-relaxed relative z-10">
                  “அரசியலில் தொழில்நுட்பம் ஒரு கருவி, அதை நம் மக்கள் நன்றாக பயன்படுத்த வேண்டும்!”
                </p>
                <p className="text-right text-[#FFDD00] text-sm font-bold mt-2 uppercase tracking-wide">
                  – CTR. நிர்மல் குமார்
                </p>
              </div>

            </motion.div>
          </div>

        </motion.div>
      </section>
    </>
  );
};

export default AadhavArjunaProfile;