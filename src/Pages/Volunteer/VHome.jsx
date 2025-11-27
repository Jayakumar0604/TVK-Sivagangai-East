import React from "react";
import { motion } from "framer-motion";
import VijayImage from "../../assets/Policy-tvk.jpg";

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const VHome = () => {
  return (
    <section className="bg-[#FFDD00] text-black px-4 sm:px-6 py-10 sm:py-12 noto-sans-semi overflow-hidden">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Left: Tamil Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
          className="space-y-6"
        >
          <h1 className="text-2xl md:text-3xl noto-sans-bold text-[#990500]">
            மாற்றத்தின் முன்னெடுப்பாளர்கள்
          </h1>
          <p className="text-sm md:text-base text-[#3D3D3D] leading-relaxed">
            தமிழக வெற்றிக் கழகத்தின் தன்னார்வலராக இணையுங்கள். நவீன
            தொழில்நுட்பத்தையும், சமூக நீதியையும் இரு கண்களாகக் கொண்டு, புதியதொரு
            தமிழகத்தைப் படைக்கும் பெரும் பணியில் நீங்களும் ஒருவராகும் வாய்ப்பு
            இது.{" "}
            <span className="text-[#990500] noto-sans-bold">
              சமத்துவம் மற்றும் நேர்மையான நிர்வாகத்தை
            </span>{" "}
            உருவாக்குவதே நமது இலக்கு.
          </p>
          <p className="text-lg noto-sans-bold text-[#990500]">
            வழிநடத்துபவர்: தளபதி விஜய்!
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

export default VHome;
