import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Calendar } from "lucide-react";

const HeroContent = ({ variants }) => {
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <>
      {/* 1. District Badge */}
      <motion.div variants={variants} className="flex justify-center">
        <div className="bg-white/90 backdrop-blur-md border border-[#990500]/20 text-[#990500] px-6 py-2 rounded-full shadow-lg flex items-center gap-2 transform -translate-y-4">
          <MapPin className="w-5 h-5 fill-current" />
          <span className="noto-sans-bold text-sm md:text-base tracking-widest uppercase">
            சிவகங்கை கிழக்கு மாவட்டம்
          </span>
        </div>
      </motion.div>

      {/* 2. Main Slogan (Note: Slider comes before this in parent) */}
      
      {/* 3. Text Content */}
      <div className="space-y-6">
        <motion.h1
          variants={variants}
          className="text-xl md:text-3xl lg:text-4xl noto-sans-bold leading-tight text-[#3D3D3D]"
        >
          <span className="block text-[#990500]">இளைஞர்களின் எழுச்சி!</span>
          <span className="block mt-1">சிவகங்கையின் வளர்ச்சி!</span>
        </motion.h1>

        <motion.p
          variants={variants}
          className="text-sm md:text-base text-[#3D3D3D] max-w-2xl mx-auto noto-sans-medium leading-relaxed opacity-90"
        >
          <span className="font-bold text-[#990500]">
            சிவகங்கை கிழக்கு மாவட்ட
          </span>{" "}
          மக்கள் அனைவரின் வாழ்விலும் முற்போக்கான மாற்றத்தையும், வளமான
          எதிர்காலத்தையும் உருவாக்க ஒன்றிணைவோம்!
        </motion.p>

        {/* 4. Action Buttons */}
        <motion.div
          variants={variants}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/join"
              className="flex items-center justify-center gap-2 rounded-full text-white px-6 py-3 text-sm md:text-base noto-sans-bold bg-[#990500] shadow-xl hover:shadow-2xl hover:bg-[#7a0400] transition-all"
            >
              இணைந்து செயல்பட <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/activities"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-[#990500] px-6 py-3 text-sm md:text-base noto-sans-bold text-[#990500] hover:bg-[#990500] hover:text-white transition-all shadow-md bg-white/50 backdrop-blur-sm"
            >
              மாவட்ட நிகழ்வுகள் <Calendar className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroContent;