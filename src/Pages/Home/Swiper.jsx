import React, { useState, useEffect } from 'react';

// Importing your assets
import Client1 from "../../assets/ambedkar.webp";
import Client2 from "../../assets/periyar.jpg";
import Client3 from "../../assets/kamarajar.jpg";
import Client4 from "../../assets/velu-nachiyar.webp";
import Client5 from "../../assets/anjalai-ammal.webp";

const Swiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderData = [
    { id: 1, image: Client1, text: "சட்டமேதை அம்பேத்கர்", isSymbol: false },
    { id: 2, image: Client2, text: "தந்தை பெரியார்", isSymbol: false },
    { id: 3, image: Client3, text: "பெருந்தலைவர் காமராஜர்", isSymbol: false },
    { id: 4, image: Client4, text: "வீரமங்கை வேலுநாச்சியார்", isSymbol: false },
    { id: 5, image: Client5, text: "கடலூர் அஞ்சலை அம்மாள்", isSymbol: false },
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
    <div className="relative w-full h-[650px] bg-yellow-400 overflow-hidden font-sans flex flex-col items-center justify-center">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 z-0"></div>

      {/* --- TOP BADGE --- */}
      {/* <div className="absolute top-8 z-30">
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white px-8 py-2 rounded-md shadow-xl border-2 border-white/30">
           <h2 className="text-xl md:text-2xl font-bold drop-shadow-md tracking-wider">
             கழகத்தின் வேர்கள்
           </h2>
        </div>
      </div> */}

      {/* --- CAROUSEL CONTAINER --- */}
      <div className="relative w-full max-w-7xl h-[500px] flex items-center justify-center perspective-1000">
        
        {sliderData.map((item, index) => {
          const position = getPositionClass(index);
          
          let cardStyle = "absolute transition-all duration-700 ease-in-out flex flex-col items-center";
          
          let transformStyle = "";
          let zIndex = "z-0";
          let opacity = "opacity-0";
          let imageSize = "w-48 h-64"; 
          let frameColor = "from-red-600 to-red-800"; 
          let textColor = "opacity-0"; // Default hidden text

          if (position === "center") {
            transformStyle = "left-1/2 -translate-x-1/2 scale-100 top-10"; 
            zIndex = "z-20";
            opacity = "opacity-100";
            imageSize = "w-72 h-96"; 
            frameColor = "from-red-600 via-red-500 to-red-700"; 
            // SHOW TEXT ONLY FOR CENTER
            textColor = "text-red-900 scale-100 noto-sans-bold drop-shadow-sm opacity-100";
          
          } else if (position === "left") {
            transformStyle = "left-[2%] md:left-[5%] -translate-y-4 scale-90 top-20 blur-[1px]"; 
            zIndex = "z-10";
            opacity = "opacity-80";
            imageSize = "w-56 h-72";
            frameColor = "from-red-800/80 to-red-900/80"; 
            // Text remains hidden (default)

          } else if (position === "right") {
            transformStyle = "right-[2%] md:right-[5%] -translate-y-4 scale-90 top-20 blur-[1px]";
            zIndex = "z-10";
            opacity = "opacity-80";
            imageSize = "w-56 h-72";
            frameColor = "from-red-800/80 to-red-900/80"; 
            // Text remains hidden (default)
          } else {
            transformStyle = "left-1/2 -translate-x-1/2 scale-50 opacity-0";
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

              {/* Text Label - Shows only when centered */}
              <div className="mt-6 text-center h-16 flex items-center justify-center">
                 <h3 className={`text-2xl md:text-3xl transition-all duration-500 delay-100 ${textColor}`}>
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