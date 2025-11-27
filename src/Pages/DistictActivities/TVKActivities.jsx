import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- IMPORTANT: Replace these placeholder URLs with imports to your actual local images ---
const placeholderBase = "https://placehold.co/600x400";
import Event5 from "../../assets/Tvk-E1.jpg";
// ---------------------------------------------------------------------------------------

const activitiesData = [
  {
    id: 1,
    taluk: "Karaikudi",
    talukLabel: "காரைக்குடி",
    category: "விவசாயம்",
    categoryEnglish: "Agriculture",
    image: `${placeholderBase}/FFDD00/990500?text=Agriculture+Camp`,
    title: "இளைஞர் வேலைவாய்ப்பு முகாம்",
    description:
      "முன்னணி நிறுவனங்களுடன் 150+ இளைஞர்களுக்கு நேர்காணல் வாய்ப்பு.",
    date: "நவம்பர் 18, 2024",
    location: "விவசாய சமூக மையம், காரைக்குடி",
    participants: "180 பங்கேற்பாளர்கள்",
  },
  {
    id: 2,
    taluk: "Devakottai",
    talukLabel: "தேவகோட்டை",
    category: "கருத்தரங்கம்",
    categoryEnglish: "Seminar",
    image: `${placeholderBase}/FFDD00/990500?text=Welfare+Seminar`,
    title: "சமூத நலம் முகாம்",
    description: "இளைஞர் சங்கங்கள் மற்றும் சமூக நலத்துறை சார்பாக ஏற்பாடு.",
    date: "நவம்பர் 20, 2024",
    location: "நகராட்சி அரங்கம், தேவகோட்டை",
    participants: "120 பங்கேற்பாளர்கள்",
  },
  {
    id: 3,
    taluk: "Thirupathur",
    talukLabel: "திருப்பத்தூர்",
    category: "கல்விக்கூடம்",
    categoryEnglish: "Education School",
    image: `${placeholderBase}/FFDD00/990500?text=Education+Training`,
    title: "கல்வி பயிற்சி முகாம்",
    description: "தகுதி பெற்ற ஆசிரியர்கள் மூலம் மாணவர்களுக்கு பயிற்சி.",
    date: "நவம்பர் 22, 2024",
    location: "அரசு பள்ளி வளாகம், திருப்பத்தூர்",
    participants: "140 பங்கேற்பாளர்கள்",
  },
  {
    id: 4,
    taluk: "Karaikudi",
    talukLabel: "காரைக்குடி",
    category: "இளையோர்",
    categoryEnglish: "Youth",
    image: `${placeholderBase}/FFDD00/990500?text=Youth+Rally`,
    title: "மக்கள் மேம்பாட்டு நிகழ்ச்சி",
    description: "சமூக நீதிக்காக மாணவர்கள் நடத்தும் பேரணி.",
    date: "நவம்பர் 25, 2024",
    location: "புதிய பேருந்து நிலையம், காரைக்குடி",
    participants: "600 பங்கேற்பாளர்கள்",
  },
  {
    id: 5,
    taluk: "Karaikudi",
    talukLabel: "காரைக்குடி",
    category: "நலத்திட்ட உதவிகள்",
    categoryEnglish: "Welfare",
    image: Event5,
    title: "நலத்திட்ட உதவிகள் வழங்கும் விழா",
    description:
      "காரைக்குடியில் 200க்கும் மேற்பட்ட பொதுமக்களுக்கு வேட்டி, சேலை மற்றும் மரக்கன்றுகள் வழங்கப்பட்டன.",
    date: "நவம்பர் 26, 2024",
    location: "நகர மையம், காரைக்குடி",
    participants: "200+ பயனாளிகள்",
  },
  {
    id: 6,
    taluk: "Thirupathur",
    talukLabel: "திருப்பத்தூர்",
    category: "கருத்தரங்கம்",
    categoryEnglish: "Seminar Awareness",
    image: `${placeholderBase}/FFDD00/990500?text=Legal+Awareness`,
    title: "விதிவிலக்கான பயணம்",
    description: "சமூக பாதுகாப்பு மற்றும் சட்டம் தொடர்பான விழிப்புணர்வு.",
    date: "நவம்பர் 30, 2024",
    location: "சமுதாய கூடம், திருப்பத்தூர்",
    participants: "300 பங்கேற்பாளர்கள்",
  },
];

const TVKActivities = () => {
  const [selectedTaluk, setSelectedTaluk] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActivities = activitiesData.filter((activity) => {
    const lowerQuery = searchQuery.toLowerCase();
    const matchesTaluk =
      selectedTaluk === "All" || activity.taluk === selectedTaluk;
    const matchesSearch =
      activity.title.toLowerCase().includes(lowerQuery) ||
      activity.description.toLowerCase().includes(lowerQuery) ||
      activity.talukLabel.includes(lowerQuery) ||
      activity.taluk.toLowerCase().includes(lowerQuery) ||
      activity.categoryEnglish.toLowerCase().includes(lowerQuery);

    return matchesTaluk && matchesSearch;
  });

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#990500] to-[#700300] py-12 px-4 shadow-md z-10 relative border-b-4 border-yellow-400">
        <div className="max-w-5xl mx-auto text-center">
          {/* <span className="inline-block px-3 py-1 bg-yellow-400 text-[#990500] text-xs font-bold rounded-full mb-3 uppercase tracking-wider shadow-sm">
            களப்பணிகள்
          </span> */}
          <h1 className="text-3xl md:text-5xl noto-sans-bold text-white tracking-wider drop-shadow-md">
            சிவகங்கை கிழக்கு மாவட்டத்தின்{" "}
            <span className="text-yellow-400">முக்கிய நிகழ்வுகள்</span>
          </h1>
        </div>
      </div>
      <section className="bg-[#FFDD00] text-black px-4 py-12 min-h-screen noto-sans-semi">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Controls Section */}
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex flex-col md:flex-row gap-4 items-center justify-between sticky top-4 z-10 border border-yellow-500/30">
            <div className="w-full md:w-1/3 relative">
              <select
                value={selectedTaluk}
                onChange={(e) => setSelectedTaluk(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#990500] focus:ring-2 focus:ring-red-100 outline-none appearance-none bg-white noto-sans-medium cursor-pointer transition-all"
              >
                <option value="All">அனைத்து தாலுகாக்கள்</option>
                <option value="Karaikudi">காரைக்குடி (Karaikudi)</option>
                <option value="Devakottai">தேவகோட்டை (Devakottai)</option>
                <option value="Thirupathur">திருப்பத்தூர் (Thirupathur)</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="w-full md:w-2/3 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search (Ex: Karaikudi, Agriculture, கல்வி...)"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#990500] focus:ring-2 focus:ring-red-100 outline-none transition-all"
              />
              <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <motion.div
            layout
            className="flex justify-between items-center text-[#990500] noto-sans-bold px-2"
          >
            <span>
              {filteredActivities.length} செயல்பாடுகள் கண்டறியப்பட்டது
            </span>
          </motion.div>

          {/* Animated Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredActivities.map((activity) => (
                <motion.div
                  layout
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-default group"
                >
                  {/* Image Container */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-[#990500]/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider shadow-sm">
                      {activity.talukLabel}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-5 space-y-3 relative">
                    <span className="text-xs text-[#990500] font-bold uppercase tracking-wider block mb-1">
                      {activity.category}
                    </span>

                    <div>
                      <h3 className="text-xl noto-sans-bold text-[#222] leading-tight mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {activity.description}
                      </p>
                    </div>

                    <div className="h-px bg-gray-100 my-3"></div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[#990500]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <span>{activity.date}</span>
                      </div>

                      {activity.location && (
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-[#990500]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                          <span className="truncate">{activity.location}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2 pt-1">
                        <svg
                          className="w-5 h-5 text-[#990500]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          ></path>
                        </svg>
                        <span className="font-semibold text-[#990500] text-md">
                          {activity.participants}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredActivities.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <svg
                className="w-16 h-16 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="text-xl text-gray-600 font-semibold">
                தகவல்கள் எதுவும் இல்லை.
              </p>
              <p className="text-gray-500">வேறு தேடல் சொல்லை முயற்சிக்கவும்.</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default TVKActivities;
