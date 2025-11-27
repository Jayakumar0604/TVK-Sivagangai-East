import React, { useState, useEffect } from 'react';

// Importing your assets
import Client1 from "../../assets/ambedkar.webp";
import Client2 from "../../assets/periyar.webp";
import Client3 from "../../assets/kamarajar.jpg";
import Client4 from "../../assets/velu-nachiyar.webp";
import Client5 from "../../assets/anjalai-ammal.webp";

const Swiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderData = [
    { id: 1, image: Client1, text: "சட்டமேதை அம்பேத்கர்" },
    { id: 2, image: Client2, text: "தந்தை பெரியார்" },
    { id: 3, image: Client3, text: "பெருந்தலைவர் காமராஜர்" },
    { id: 4, image: Client4, text: "வீரமங்கை வேலுநாச்சியார்" },
    { id: 5, image: Client5, text: "கடலூர் அஞ்சலை அம்மாள்" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [sliderData.length]);

  const getPositionClass = (index) => {
    const total = sliderData.length;
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    if (index === activeIndex) return "center";
    if (index === prevIndex) return "left";
    if (index === nextIndex) return "right";
    return "hidden";
  };

  return (
    // Adjusted container height: h-[500px] on mobile, h-[650px] on desktop
    <div className="relative w-full h-[500px] md:h-[650px] bg-yellow-400 overflow-hidden font-sans flex flex-col items-center justify-center">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 z-0"></div>

      {/* --- CAROUSEL CONTAINER --- */}
      <div className="relative w-full max-w-7xl h-full flex items-center justify-center perspective-1000">
        
        {sliderData.map((item, index) => {
          const position = getPositionClass(index);
          
          let cardStyle = "absolute transition-all duration-700 ease-in-out flex flex-col items-center";
          
          let transformStyle = "";
          let zIndex = "z-0";
          let opacity = "opacity-0";
          let imageSize = ""; 
          let frameColor = ""; 
          let textColor = "opacity-0";

          if (position === "center") {
            // CENTER CARD
            transformStyle = "left-1/2 -translate-x-1/2 scale-100 top-16 md:top-10"; 
            zIndex = "z-20";
            opacity = "opacity-100";
            // FIXED: Smaller width for mobile (w-64), larger for desktop (md:w-80)
            imageSize = "w-64 h-80 md:w-80 md:h-[450px]"; 
            frameColor = "from-red-600 via-red-500 to-red-700"; 
            textColor = "text-red-900 scale-100 noto-sans-bold drop-shadow-sm opacity-100";
          
          } else if (position === "left") {
            // LEFT CARD
            // FIXED: Uses left-0 on mobile to tuck it to edge, left-10% on desktop
            transformStyle = "left-0 md:left-[10%] -translate-y-4 scale-75 md:scale-90 top-24 md:top-20 blur-[1px]"; 
            zIndex = "z-10";
            opacity = "opacity-60 md:opacity-80"; // More transparent on mobile to focus on center
            // FIXED: Smaller side images on mobile
            imageSize = "w-48 h-64 md:w-64 md:h-80";
            frameColor = "from-red-800/80 to-red-900/80"; 

          } else if (position === "right") {
            // RIGHT CARD
            // FIXED: Uses right-0 on mobile, right-10% on desktop
            transformStyle = "right-0 md:right-[10%] -translate-y-4 scale-75 md:scale-90 top-24 md:top-20 blur-[1px]";
            zIndex = "z-10";
            opacity = "opacity-60 md:opacity-80";
            imageSize = "w-48 h-64 md:w-64 md:h-80";
            frameColor = "from-red-800/80 to-red-900/80"; 

          } else {
            // HIDDEN CARDS
            transformStyle = "left-1/2 -translate-x-1/2 scale-50 opacity-0 top-20";
          }

          return (
            <div key={item.id} className={`${cardStyle} ${transformStyle} ${zIndex} ${opacity}`}>
              {/* Image Frame */}
              <div className={`p-1.5 bg-gradient-to-b ${frameColor} shadow-2xl rounded-sm`}>
                <div className="bg-white p-1">
                  <img 
                    src={item.image} 
                    alt={item.text} 
                    className={`object-cover border border-gray-200 ${imageSize} transition-all duration-700`}
                  />
                </div>
              </div>

              {/* Text Label */}
              <div className="mt-4 md:mt-6 text-center h-16 flex items-center justify-center">
                 {/* FIXED: Smaller text on mobile (text-xl), larger on desktop (md:text-3xl) */}
                 <h3 className={`text-xl md:text-3xl transition-all duration-500 delay-100 ${textColor} whitespace-nowrap`}>
                   {item.text}
                 </h3>
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Swiper;