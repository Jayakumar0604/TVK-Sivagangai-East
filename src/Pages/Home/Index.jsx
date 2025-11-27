import React from "react";
import { Link } from "react-router-dom"; 
import { ArrowRight, Calendar, MapPin } from "lucide-react"; 
import { motion } from "framer-motion"; 

// Replace with your actual image
import Back from "../../assets/tvk-home.jpg";
import SmallAbout from "./SmallAbout";
import TvkSong from "./TvkSong";
import Swiper from "./Swiper";
import TVKStats from "./TVKStats";

// --- Animation Variants (Keep for other sections) ---
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 50, damping: 20 } 
  },
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const Home = () => {
  return (
    <>
      {/* --- Hero Image Section (Fixed for Full View) --- */}
      <div className="relative w-full bg-[#FFDD00]"> {/* Added bg color to blend if image is short */}
        <div className="relative w-full h-auto"> {/* Changed to h-auto to show full image */}
          <img
            src={Back}
            alt="TVK Sivagangai East"
            className="w-full h-auto block" /* Removes object-cover to prevent cropping */
          />
          {/* Gradient Overlay - Adjusted to be subtle at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFDD00] opacity-90"></div>
        </div>
      </div>

      {/* --- Hero Text Content --- */}
      {/* Added negative margin (-mt) to pull text up over the gradient slightly */}
      <div className="bg-[#FFDD00] relative z-10 -mt-12 md:-mt-24">
        <section className="px-6 pb-16 pt-8 md:pt-12">
          
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#990500] rounded-full mix-blend-multiply opacity-5 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-40 blur-3xl pointer-events-none"></div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center space-y-8 relative z-10"
          >
            {/* District Badge */}
            <motion.div variants={itemVariants} className="flex justify-center">
                <div className="bg-white/90 backdrop-blur-md border border-[#990500]/20 text-[#990500] px-6 py-2 rounded-full shadow-lg flex items-center gap-2 transform -translate-y-4">
                   <MapPin className="w-5 h-5 fill-current" />
                   <span className="noto-sans-bold text-sm md:text-base tracking-widest uppercase">
                     சிவகங்கை கிழக்கு மாவட்டம்
                   </span>
                </div>
            </motion.div>

            {/* Main Slogan */}
            <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl noto-sans-bold leading-tight text-[#3D3D3D]">
              <span className="block text-[#990500]">இளைஞர்களின் எழுச்சி!</span>
              <span className="block mt-2">சிவகங்கையின் வளர்ச்சி!</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p variants={itemVariants} className="text-base md:text-lg text-[#3D3D3D] max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
              <span className="font-bold text-[#990500]">சிவகங்கை கிழக்கு மாவட்ட</span> மக்கள் அனைவரின் வாழ்விலும் 
              முற்போக்கான மாற்றத்தையும், வளமான எதிர்காலத்தையும் உருவாக்க ஒன்றிணைவோம்!
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-5 pt-6">
              
              {/* Join Button */}
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link
                  to="/join"
                  className="flex items-center justify-center gap-2 rounded-full text-white px-8 py-4 text-base noto-sans-bold bg-[#990500] shadow-xl hover:shadow-2xl hover:bg-[#7a0400] transition-all"
                >
                  இணைந்து செயல்பட <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* District Activities Button */}
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link
                  to="/activities"
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-[#990500] px-8 py-3.5 text-base noto-sans-bold text-[#990500] hover:bg-[#990500] hover:text-white transition-all shadow-md bg-white/50 backdrop-blur-sm"
                >
                  மாவட்ட நிகழ்வுகள் <Calendar className="w-5 h-5" />
                </Link>
              </motion.div>

            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* --- Swiper Section --- */}
      <div className="bg-[#FFDD00] pb-12">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
        >
            <div className="bg-[#990500] py-6 text-center shadow-md mb-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <h2 className="text-lg md:text-2xl noto-sans-bold text-white uppercase tracking-wider relative z-10">
                    கட்சியின் கொள்கை முன்னோடி தலைவர்கள்
                </h2>
            </div>
            
            <Swiper />
        </motion.div>
      </div>

      {/* --- Other Sections --- */}
      <SmallAbout />
      <TVKStats />
      <TvkSong />
    </>
  );
};

export default Home;