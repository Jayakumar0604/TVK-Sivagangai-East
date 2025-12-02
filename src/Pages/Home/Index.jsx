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
import Slider from "../../Components/Slider/Slider";
import HomeNewsSection from "../../Components/HomeNews";

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
    transition: { type: "spring", stiffness: 50, damping: 20 },
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
      <div className="relative w-full bg-[#FFDD00]">
        {" "}
        {/* Added bg color to blend if image is short */}
        <div className="relative w-full h-auto">
          {" "}
          {/* Changed to h-auto to show full image */}
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
      <Slider />
      <HomeNewsSection />
      {/* --- Swiper Section --- */}
      <div className="bg-[#FFDD00] px-4 sm:px-6 pb-10 sm:pb-12">
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
