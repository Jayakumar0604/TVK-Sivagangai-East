import React from "react";
import { motion } from "framer-motion";
import DistrictImage from "../../assets/Tvk-District.jpg"; 

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const DHome = () => {
  return (
    <section className="bg-[#FFDD00] min-h-screen w-full text-black px-6 py-12 noto-sans-semi overflow-hidden flex items-center">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left: Tamil Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          className="space-y-6"
        >
          <h1 className="text-2xl md:text-3xl noto-sans-bold text-[#990500]">
            மாவட்ட நடவடிக்கைகள்
          </h1>
          
          <p className="text-sm md:text-base text-[#3D3D3D] leading-relaxed">
            தலைவரின் ஆணைக்கிணங்க, தமிழகத்தின் அனைத்து மாவட்டங்களிலும் 
            <span className="text-[#990500] noto-sans-bold"> மக்கள் நலப்பணிகள் </span> 
            மிகச் சிறப்பாக நடைபெற்று வருகின்றன. கல்வி உதவிகள், மருத்துவ முகாம்கள், 
            மற்றும் அடிப்படை வசதிகளை மேம்படுத்துதல் போன்ற செயல்பாடுகளில் நம் 
            கழகத் தோழர்கள் களத்தில் நின்று அயராது உழைத்து வருகின்றனர்.
          </p>

          <p className="text-lg noto-sans-bold text-[#990500]">
            என்றும் மக்கள் பணியில்...
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeRight}
          className="w-full aspect-square rounded-md overflow-hidden shadow-lg"
        >
          <img
            src={DistrictImage}
            alt="District Activities"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DHome;