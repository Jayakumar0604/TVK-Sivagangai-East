import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Music } from "lucide-react"; // Ensure you have lucide-react installed

const TvkSong = () => {
  const [showVideo, setShowVideo] = useState(false);

  // --- Animation Variants ---
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, backgroundColor: "#ffffff", color: "#990500" },
    tap: { scale: 0.95 },
  };

  const pulseRing = {
    initial: { scale: 1, opacity: 0.6 },
    animate: {
      scale: 1.5,
      opacity: 0,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <>
      {/* --- Header --- */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-20"
      >
        <div className="bg-[#990500] text-center py-6 shadow-lg relative overflow-hidden">
           {/* Abstract Pattern Overlay */}
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
           <h2 className="text-lg md:text-2xl noto-sans-bold text-white uppercase tracking-wider relative z-10 flex items-center justify-center gap-3">
             <Music className="w-6 h-6 animate-pulse" />
             கழகத்தின் கொள்கைப் பாடல்
             <Music className="w-6 h-6 animate-pulse" />
           </h2>
        </div>
        <div className="h-2 bg-white w-full" />
      </motion.div>

      {/* --- Main Section --- */}
      <section className="relative bg-[#FFDD00] py-12 sm:py-16 px-4 sm:px-6 overflow-hidden min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center">
        
        {/* Background Decor (Strictly Palette Colors) */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#990500] rounded-full mix-blend-multiply opacity-5 blur-xl animate-bounce duration-[3000ms]"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full opacity-40 blur-2xl"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-4xl"
        >
          {/* Context Text */}
          <div className="text-center mb-8 space-y-2">
            <h3 className="text-[#990500] noto-sans-bold text-xl md:text-2xl">
              "வெற்றிக் கொடி ஏந்தும் நேரம்..."
            </h3>
            <p className="text-[#3D3D3D] text-sm md:text-base opacity-80">
              நம் இலட்சியத்தை முழங்கும் எழுச்சி கீதம்
            </p>
          </div>

          {/* Video Container Frame */}
          <div className="bg-white p-2 md:p-4 rounded-2xl shadow-2xl border-b-8 border-[#990500]">
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-inner ring-1 ring-gray-200">
              
              <AnimatePresence mode="wait">
                {!showVideo ? (
                  /* --- Thumbnail View --- */
                  <motion.div
                    key="thumbnail"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setShowVideo(true)}
                  >
                    {/* Image */}
                    <img
                      src="https://img.youtube.com/vi/NHM1Y_lll6o/maxresdefault.jpg"
                      alt="Flag Anthem Thumbnail"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    
                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                    {/* Play Button Wrapper */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Pulse Ring */}
                        <motion.div 
                          variants={pulseRing}
                          initial="initial"
                          animate="animate"
                          className="absolute inset-0 bg-[#FFDD00] rounded-full"
                        />
                        {/* Button */}
                        <motion.div
                          variants={buttonVariants}
                          initial="initial"
                          whileHover="hover"
                          whileTap="tap"
                          className="relative h-20 w-20 md:h-24 md:w-24 bg-[#FFDD00] rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-10"
                        >
                          <Play className="h-10 w-10 md:h-12 md:w-12 text-[#990500] fill-current ml-1" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Bottom Label */}
                    <div className="absolute bottom-4 left-4 bg-[#990500]/90 text-white px-3 py-1 rounded text-sm noto-sans-medium backdrop-blur-sm">
                      இப்பொழுதே பாருங்கள்
                    </div>
                  </motion.div>
                ) : (
                  /* --- Video View --- */
                  <motion.div
                    key="video"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full bg-black"
                  >
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/NHM1Y_lll6o?autoplay=1"
                      title="FLAG ANTHEM"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
          
          {/* Decorative Footer */}
          <div className="mt-6 flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#990500] opacity-40"></div>
            ))}
          </div>

        </motion.div>
      </section>
    </>
  );
};

export default TvkSong;