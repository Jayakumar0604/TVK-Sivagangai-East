import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Award, Stethoscope } from "lucide-react";
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
    transition: { type: "spring", stiffness: 50 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "backOut" },
  },
};

const SmallAbout = () => {
  return (
    <section className="relative bg-[#FFDD00] text-[#3D3D3D] py-12 sm:py-16 lg:py-24 overflow-hidden noto-sans-semi">
      {/* --- Background Decorative Elements --- */}
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-[#990500] rounded-full mix-blend-multiply opacity-5 blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-white rounded-full opacity-40 blur-3xl"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* --- Section Header --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-[#990500] text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
            <MapPin className="w-5 h-5 text-[#FFDD00]" />
            {/* Changed md:text-base to lg:text-base */}
            <span className="noto-sans-bold uppercase tracking-wider text-sm lg:text-base">
              சிவகங்கை கிழக்கு மாவட்டம்
            </span>
          </div>
        </motion.div>

        {/* --- MAIN GRID --- */}
        {/* Changed md:grid-cols-2 to lg:grid-cols-2. 
            Now MD screens will stack vertically like SM screens. */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* --- Left: Text Content --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              variants={textVariants}
              className="text-sm font-bold text-[#990500] uppercase tracking-widest flex items-center gap-2"
            >
              <span className="w-8 h-1 bg-[#990500]"></span>
              மாவட்டச் செயலாளர்
            </motion.h2>

            {/* Changed md:text-4xl to lg:text-4xl */}
            <motion.h1
              variants={textVariants}
              className="text-xl lg:text-5xl noto-sans-bold text-[#3D3D3D] leading-relaxed"
            >
              மருத்துவத் துறையில் சாதனை,{" "}
              <span className="text-white text-shadow-sm bg-[#990500] px-2 py-1 box-decoration-clone rounded-md">
                மக்கள் பணியில் அர்ப்பணிப்பு!
              </span>
            </motion.h1>

            <motion.div variants={textVariants} className="space-y-6">
              {/* Changed md:text-lg to lg:text-lg */}
              <p className="text-base lg:text-lg text-[#3D3D3D] leading-relaxed text-left">
                <span className="noto-sans-bold text-[#990500]">
                  டாக்டர் டி.கே. பிரபு
                </span>{" "}
                அவர்கள், தலைவர் தளபதி மற்றும் பொதுச் செயலாளர் என். ஆனந்த்
                ஆகியோரின் நம்பிக்கையைப் பெற்று, தமிழக வெற்றிக் கழகத்தின் (TVK){" "}
                <span className="font-bold">
                  சிவகங்கை கிழக்கு மாவட்டச் செயலாளராக
                </span>{" "}
                நியமிக்கப்பட்டுள்ளார்.
              </p>

              {/* Changed md:text-base to lg:text-base */}
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed text-left">
                காரைக்குடியை மையமாகக் கொண்டு செயல்படும் இவர்,{" "}
                <span className="font-bold">Prabu Dental கிளினிக்கின்</span>{" "}
                நிர்வாக இயக்குனராகவும், புகழ்பெற்ற பல் உள்வைப்பு நிபுணராகவும்
                உள்ளார். கோத்த பல்கலைக்கழகத்தில் (Goethe University) கல்வி
                பயின்ற இவர், 10,000-க்கும் மேற்பட்ட பல் உள்வைப்புகளை (Implants)
                வெற்றிகரமாகச் செய்துள்ளார்.
              </p>
            </motion.div>

            {/* Achievement Box */}
            <motion.div
              variants={textVariants}
              className="bg-white/60 border-l-4 border-[#990500] p-5 rounded-r-md shadow-sm"
            >
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-[#990500] shrink-0" />
                {/* Changed md:text-base to lg:text-base */}
                <p className="text-sm lg:text-base noto-sans-medium leading-relaxed">
                  "CNN News18 மூலம்{" "}
                  <span className="font-bold text-[#990500]">
                    சிறந்த உள்வைப்பு நிபுணராக
                  </span>{" "}
                  (Best Implantologist) விருது பெற்று மருத்துவத்துறையில்
                  முத்திரை பதித்துள்ளார்."
                </p>
              </div>
            </motion.div>

            <motion.div variants={textVariants} className="pt-2">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 bg-[#3D3D3D] text-[#FFDD00] px-8 py-3.5 rounded-md noto-sans-bold shadow-lg hover:bg-[#990500] hover:text-white transition-all duration-300"
              >
                மேலும் விபரங்கள்{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                alt="Dr. T.K. Prabhu - TVK Sivagangai"
                // Changed md:min-h to lg:min-h
                className="w-full h-auto object-cover min-h-[350px] lg:min-h-[450px]"
              />

              {/* Floating Caption inside Image */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
                <p className="text-[#FFDD00] text-sm font-bold uppercase tracking-widest">
                  டாக்டர் டி.கே. பிரபு
                </p>
                <p className="text-white text-xs opacity-80">
                  மாவட்டச் செயலாளர் & மருத்துவர்
                </p>
              </div>
            </div>

            {/* Floating Icon Badge - Changed hidden md:block to hidden lg:block */}
            <div className="absolute -top-6 -right-6 bg-[#FFDD00] border-4 border-white p-4 rounded-full shadow-xl z-20 hidden lg:block animate-bounce-slow">
              <Stethoscope className="w-8 h-8 text-[#990500]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmallAbout;
