import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

// Placeholder Images - Replace these with your actual imports like in the Slider component
import Client1 from "../../assets/Gallery/Gallery1.jpg";
import Client2 from "../../assets/Gallery/Gallery2.jpg";
import Client3 from "../../assets/Gallery/Gallery3.jpg";
import Client4 from "../../assets/Gallery/Gallery4.jpg";
import Client5 from "../../assets/Gallery/Gallery5.jpg";
import Client6 from "../../assets/Gallery/Gallery6.jpg";
import Client7 from "../../assets/Gallery/Gallery7.jpg";
import Client8 from "../../assets/Gallery/Gallery8.jpg";
import Client9 from "../../assets/Gallery/Gallery9.jpg";
import Client10 from "../../assets/Gallery/Gallery10.jpg";
import Client11 from "../../assets/Gallery/Gallery11.jpg";
import Client12 from "../../assets/Gallery/Gallery12.jpg";
import Client13 from "../../assets/Gallery/Gallery13.jpg";
import Client14 from "../../assets/Gallery/Gallery14.jpg";

const galleryImages = [
  Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10,Client11, Client12, Client13, Client14
];

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Function to handle opening the lightbox
  const openLightbox = (index) => {
    setSelectedId(index);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setSelectedId(null);
  };

  // Navigate Previous
  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedId((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  // Navigate Next
  const showNext = (e) => {
    e.stopPropagation();
    setSelectedId((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Section */}
      <div className="bg-[#FFDD00] pt-24 pb-12 px-6 rounded-b-[3rem] shadow-sm mb-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-[#990500] text-sm font-bold shadow-sm mb-4"
          >
            <ImageIcon className="w-4 h-4" />
            <span>நிகழ்வுத் தொகுப்பு</span>
          </motion.div>
          <h1 className="text-3xl md:text-4xl noto-sans-bold text-[#3D3D3D]">
            புகைப்பட <span className="text-[#990500]">கேலரி</span>
          </h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div 
          layout 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              layoutId={`image-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(index)}
              className="relative cursor-pointer group overflow-hidden rounded-xl shadow-md aspect-square bg-gray-200"
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Full Screen View */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={closeLightbox} // Click outside to close
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={showPrev}
              className="absolute left-2 md:left-8 p-3 bg-white/10 hover:bg-[#990500] hover:border-[#990500] border border-white/20 rounded-full text-white transition-all z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={showNext}
              className="absolute right-2 md:right-8 p-3 bg-white/10 hover:bg-[#990500] hover:border-[#990500] border border-white/20 rounded-full text-white transition-all z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <motion.div
              layoutId={`image-${selectedId}`}
              className="w-full max-w-5xl px-4 flex justify-center items-center h-full"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              <img
                src={galleryImages[selectedId]}
                alt="Full screen"
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-md shadow-2xl"
              />
            </motion.div>
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-0 right-0 text-center text-white/80 font-mono text-sm">
                {selectedId + 1} / {galleryImages.length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;