import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../../assets/Tvk-Arputham.jpg"; 

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const AHome = () => {
  return (
    <section className="bg-[#FFDD00] min-h-screen w-full text-black px-6 py-12 noto-sans-semi overflow-hidden flex items-center">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Tamil Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          className="space-y-6"
        >
          <h1 className="text-2xl md:text-3xl noto-sans-bold text-[#990500]">
            எங்களைப் பற்றி
          </h1>
          
          <p className="text-sm md:text-base text-[#3D3D3D] leading-relaxed text-justify">
            தமிழக வெற்றிக் கழகம், சாதி, மத, பாலின வேறுபாடுகளற்ற 
            <span className="text-[#990500] noto-sans-bold"> சமத்துவ சமுதாயத்தை </span> 
            படைக்க உறுதி பூண்டுள்ளது. அரசியல் என்பது ஒரு தொழில் அல்ல, அது ஒரு 
            புனிதமான மக்கள் சேவை என்பதை உணர்ந்து, எளிய மக்களின் குரலாக நாங்கள் 
            ஒலிக்கிறோம். ஊழலற்ற, நேர்மையான மற்றும் வெளிப்படையான நிர்வாகத்தை 
            வழங்குவதே எங்கள் லட்சியம்.
          </p>

          <p className="text-lg noto-sans-bold text-[#990500]">
            "பிறப்பொக்கும் எல்லா உயிர்க்கும்"
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
            src={AboutImage}
            alt="About TVK"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AHome;