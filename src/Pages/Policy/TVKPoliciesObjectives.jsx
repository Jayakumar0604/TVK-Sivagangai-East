import React from "react";
import { motion } from "framer-motion";
import VijayImage from "../../assets/TVK-Policies.webp"; 

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const TVKPoliciesObjectives = () => {
  return (
    // Added 'min-h-screen' to fill vertical empty space
    // Added 'flex items-center' to vertically center the content if you wish
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
          {/* Corrected 'கொள்ளைகள்' to 'கொள்கைகள்' */}
          <h1 className="text-2xl md:text-3xl noto-sans-bold text-[#990500]">
            கொள்கைகள் மற்றும் நோக்கம்
          </h1>
          <p className="text-sm md:text-base text-[#3D3D3D] leading-relaxed">
            தமிழக வெற்றி கழகத்தின் ஜீவ பிரிவு, நவீன தொழில்நுட்பத்தின் மூலம் சமூக மாற்றத்தை முன்னெடுத்து,
            மக்கள் நலத்திற்காக உறுதியுடன் செயல்படுகிறது. எங்கள் கொள்கைகள் மற்றும் நோக்கங்கள்
            தமிழகத்தில் <span className="text-[#990500] noto-sans-bold">சமத்துவம், நீதி, மற்றும் உறவாக்குவத்தில்</span> முக்கிய பங்கு வகிக்கின்றன.
          </p>
          <p className="text-lg noto-sans-bold text-[#990500]">
            மக்கள் விரும்பும் முதல்வர் வேட்பாளர் உங்கள் விஜய்
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
            src={VijayImage}
            alt="Thalapathy Vijay"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TVKPoliciesObjectives;