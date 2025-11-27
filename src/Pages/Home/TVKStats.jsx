import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBullseye, FaCalendarAlt } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-white text-3xl" />,
    label: "களப்பணியாளர்கள்",
    target: 8000,
    suffix: "+",
  },
  {
    icon: <FaBullseye className="text-white text-3xl" />,
    label: "இலக்கு நிர்ணயிக்கப்பட்ட தாலுகாக்கள்",
    target: 3,
    suffix: "",
  },
  {
    icon: <FaCalendarAlt className="text-white text-3xl" />,
    label: "நடப்பாண்டு நிகழ்வுகள்",
    target: 50,
    suffix: "+",
  },
];

const StatCard = ({ icon, label, target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center bg-[#990500] text-white rounded-lg px-6 py-8 shadow-md"
    >
      <div className="mb-4">{icon}</div>
      <div className="text-4xl noto-sans-bold">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-center noto-sans-semi">{label}</p>
    </motion.div>
  );
};

const TVKStats = () => {
  return (
    <section className="bg-yellow-400 py-12 px-6 noto-sans-semi">
      <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default TVKStats;