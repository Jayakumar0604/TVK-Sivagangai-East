import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Calendar, ChevronsRight } from "lucide-react"; // Added ChevronsRight

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Client1 from "../../assets/SlideImg/Slide1.jpg";
import Client2 from "../../assets/SlideImg/Slide2.jpg";
import Client3 from "../../assets/SlideImg/Slide3.jpg";
import Client4 from "../../assets/SlideImg/Slide4.jpg";
import Client5 from "../../assets/SlideImg/Slide5.jpg";
import Client6 from "../../assets/SlideImg/SlideH1.jpg";
import Client7 from "../../assets/SlideImg/SlideH2.jpg";

const Slider = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // Image Array for Slider
  const images = [Client1, Client2, Client3, Client4, Client5, Client6, Client7];

  return (
    <div className="bg-[#FFDD00] relative z-10 -mt-10 sm:-mt-12 md:-mt-20 overflow-hidden">
      <section className="px-0 sm:px-6 pb-12 sm:pb-16 pt-8 md:pt-12">
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#990500] rounded-full mix-blend-multiply opacity-5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-40 blur-3xl pointer-events-none"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-6xl text-center space-y-6 relative z-10"
        >
          {/* 1. District Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="bg-white/90 backdrop-blur-md border border-[#990500]/20 text-[#990500] px-6 py-2 rounded-full shadow-lg flex items-center gap-2 transform -translate-y-4">
              <MapPin className="w-5 h-5 fill-current" />
              <span className="noto-sans-bold text-sm md:text-base tracking-widest uppercase">
                சிவகங்கை கிழக்கு மாவட்டம்
              </span>
            </div>
          </motion.div>

          {/* 2. SLIDER SECTION */}
          <motion.div variants={itemVariants} className="w-full max-w-5xl mx-auto py-4">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="pb-6" // Reduced padding slightly to fit the text below
            >
              {images.map((_, index) => (
                index < images.length - 3 && (
                  <SwiperSlide key={index}>
                    {/* Mobile View (1 image) */}
                    <div className="flex gap-2 justify-center md:hidden px-">
                      {images.slice(index, index + 1).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`slide mobile ${index + i}`}
                          className="w-full h-68 object-cover shadow-lg "
                        />
                      ))}
                    </div>

                    {/* Desktop View (4 images) */}
                    <div className="hidden md:flex gap-4 justify-center px-4">
                      {images.slice(index, index + 4).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`slide desktop ${index + i}`}
                          className="w-1/4 h-40 lg:h-52 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-white bg-white"
                        />
                      ))}
                    </div>
                  </SwiperSlide>
                )
              ))}
            </Swiper>

            {/* --- ADDED: View More / மேலும் காண்க Link --- */}
            <div className="flex justify-end px-4 md:px-6 mt-2">
                <Link 
                  to="/gallery" 
                  className="flex items-center gap-1 text-[#990500] hover:text-[#7a0400] text-sm md:text-base noto-sans-bold transition-all hover:translate-x-1"
                >
                   மேலும் காண்க <ChevronsRight className="w-4 h-4" />
                </Link>
            </div>
            {/* ------------------------------------------- */}

          </motion.div>

          {/* 3. Main Slogan */}
          <motion.h1 
            variants={itemVariants} 
            className="text-xl md:text-3xl lg:text-4xl noto-sans-bold leading-tight text-[#3D3D3D]"
          >
            <span className="block text-[#990500]">இளைஞர்களின் எழுச்சி!</span>
            <span className="block mt-1">சிவகங்கையின் வளர்ச்சி!</span>
          </motion.h1>

          {/* 4. Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-[#3D3D3D] max-w-2xl mx-auto noto-sans-medium leading-relaxed opacity-90"
          >
            <span className="font-bold text-[#990500]">சிவகங்கை கிழக்கு மாவட்ட</span>{" "}
            மக்கள் அனைவரின் வாழ்விலும் முற்போக்கான மாற்றத்தையும், வளமான
            எதிர்காலத்தையும் உருவாக்க ஒன்றிணைவோம்!
          </motion.p>

          {/* 5. Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4 px-8 md:px-0"
          >
            {/* Join Button */}
            <motion.div  variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link
                to="/join"
                className="flex items-center justify-center gap-2 rounded-full text-white px-6 py-3 text-sm md:text-base noto-sans-bold bg-[#990500] shadow-xl hover:shadow-2xl hover:bg-[#7a0400] transition-all"
              >
                இணைந்து செயல்பட <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* District Activities Button */}
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link
                to="/activities"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-[#990500] px-6 py-3 text-sm md:text-base noto-sans-bold text-[#990500] hover:bg-[#990500] hover:text-white transition-all shadow-md bg-white/50 backdrop-blur-sm"
              >
                மாவட்ட நிகழ்வுகள் <Calendar className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
};

export default Slider;