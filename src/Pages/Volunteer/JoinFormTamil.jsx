import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Heart 
} from "lucide-react";

// --- EMAIL CONFIGURATION ---
// We use FormSubmit.co to send emails directly from the frontend without a backend.
// The 'ajax' endpoint ensures we can handle the response in code without redirecting the user.
const EMAIL_ENDPOINT = "https://formsubmit.co/ajax/singlejaya929@gmail.com";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const successVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 120 } 
  },
};

const JoinFormTamil = () => {
  // 1. STATE MANAGEMENT
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    taluk: "",
    division: "",
    reason: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. OPTIONS DATA (Updated: Only 3 Taluks)
  const talukOptions = [
    { value: "karaikudi", label: "காரைக்குடி" },
    { value: "devakottai", label: "தேவகோட்டை" },
    { value: "thirupathur", label: "திருப்பத்தூர்" },
  ];

  const divisionOptions = [
    { value: "it", label: "IT பிரிவு (தொழில்நுட்பம்)" },
    { value: "media", label: "ஊடகப் பிரிவு" },
    { value: "engineering", label: "பொறியியல் பிரிவு" },
    { value: "social_service", label: "சமூக சேவை" },
    { value: "student_wing", label: "மாணவர் அணி" },
  ];

  // 3. HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // 4. VALIDATION LOGIC
  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = "உங்கள் பெயரை உள்ளிடவும்.";
    
    if (!formData.email.trim()) {
      newErrors.email = "மின்னஞ்சல் முகவரி அவசியம்.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "தொலைபேசி எண் அவசியம்.";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "சரியான 10 இலக்க எண்ணை உள்ளிடவும்.";
    }

    if (!formData.taluk) newErrors.taluk = "உங்கள் தாலுகாவைத் தேர்ந்தெடுக்கவும்.";
    if (!formData.division) newErrors.division = "ஒரு பிரிவைத் தேர்ந்தெடுக்கவும்.";
    if (!formData.reason.trim()) newErrors.reason = "காரணத்தைக் குறிப்பிடவும்.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 5. SUBMIT TO EMAIL
  const submitToEmail = async (data) => {
    try {
      await fetch(EMAIL_ENDPOINT, { 
        method: "POST", 
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "புதிய TVK தன்னார்வலர் பதிவு (New Application)", // Email Subject
            _template: "table", // Formats data as a nice table in the email
            ...data,
            timestamp: new Date().toLocaleString()
        })
      });
      
    } catch (error) {
      console.error("Email Submission Error:", error);
      throw error; 
    }
  };

  // 6. HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Send details to Email
      await submitToEmail({
         ...formData
      });

      // Success UI
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ fullName: "", email: "", phone: "", taluk: "", division: "", reason: "" });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1000);

    } catch (error) {
      console.error("Submission Error:", error);
      setIsSubmitting(false);
      alert("சமர்ப்பிப்பதில் பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்.");
    }
  };

  return (
    <section className="bg-[#FFDD00] min-h-screen py-12 md:py-20 px-4 font-sans flex items-center justify-center relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#990500] opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-3xl w-full mx-auto relative z-10"
      >
        
        {/* --- HEADER --- */}
        {!isSuccess && (
          <div className="text-center mb-8 md:mb-12 space-y-4">
            <motion.span 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-block px-4 py-1.5 bg-[#990500] text-yellow-400 text-xs font-bold rounded-full shadow-lg uppercase tracking-wider"
            >
              உறுப்பினர் சேர்க்கை
            </motion.span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#3D3D3D] leading-tight">
              இன்றே <span className="text-[#990500]">எங்களுடன்</span> சேருங்கள்
            </h1>
            <p className="text-gray-800 noto-sans-medium text-sm md:text-base max-w-xl mx-auto">
              மாற்றத்திற்கான முதல் படியை எடுத்து வையுங்கள். கீழே உள்ள படிவத்தை பூர்த்தி செய்து, மக்கள் பணியில் இணையுங்கள்.
            </p>
          </div>
        )}

        {/* --- MAIN CARD --- */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-t-8 border-[#990500]">
          
          <AnimatePresence mode="wait">
            {isSuccess ? (
              /* --- SUCCESS MESSAGE --- */
              <motion.div 
                key="success"
                variants={successVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="text-center py-8 md:py-12 space-y-6"
              >
                {/* Success Icon */}
                <div className="relative inline-block">
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1] }} 
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-green-100 rounded-full blur-xl opacity-60"
                    ></motion.div>
                    <div className="relative w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle size={48} strokeWidth={3} />
                    </div>
                </div>

                {/* Tamil Content */}
                <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#990500]">
                        வணக்கம்.
                    </h3>
                    
                    <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                        <p className="text-lg md:text-xl text-gray-800 font-bold leading-relaxed">
                            நீங்கள் தன்னார்வலராகப் பணியாற்ற அளிக்கப்பட்ட விண்ணப்பம் 
                            <br className="hidden md:block"/> 
                            <span className="text-[#990500]">(TVK Volunteer Application)</span> 
                            ஏற்றுக்கொள்ளப்பட்டது.
                        </p>
                    </div>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
                        கூடிய விரைவில் எங்களுடைய குழுவிலிருந்து உங்களைத் தொடர்புகொண்டு அடுத்தகட்டப் பணிகள் குறித்த விவரங்கள் பகிரப்படும்.
                    </p>

                    <h4 className="text-xl font-bold text-gray-800 pt-2">நன்றி.</h4>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-[#990500] text-white rounded-full font-bold shadow-lg hover:bg-[#7a0400] transition-colors"
                >
                  <User size={18} />
                  முகப்பு பக்கம் செல்ல
                </motion.button>
              </motion.div>
            ) : (
              /* --- FORM --- */
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6 md:space-y-8"
              >
                
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                            <User size={16} className="text-[#990500]" /> முழு பெயர் <span className="text-[#990500]">*</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="பெயர்"
                            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#990500]/20 outline-none transition-all ${
                            errors.fullName ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#990500]"
                            }`}
                        />
                        {errors.fullName && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/>{errors.fullName}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                            <Phone size={16} className="text-[#990500]" /> தொலைபேசி <span className="text-[#990500]">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="98765 43210"
                            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#990500]/20 outline-none transition-all ${
                            errors.phone ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#990500]"
                            }`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/>{errors.phone}</p>}
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Mail size={16} className="text-[#990500]" /> மின்னஞ்சல் <span className="text-[#990500]">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#990500]/20 outline-none transition-all ${
                        errors.email ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#990500]"
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/>{errors.email}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Taluk */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                            <MapPin size={16} className="text-[#990500]" /> தாலுகா <span className="text-[#990500]">*</span>
                        </label>
                        <div className="relative">
                            <select
                            name="taluk"
                            value={formData.taluk}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#990500]/20 outline-none appearance-none transition-all ${
                                errors.taluk ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#990500]"
                            }`}
                            >
                            <option value="">தேர்ந்தெடுக்கவும்</option>
                            {talukOptions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </div>
                        </div>
                        {errors.taluk && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/>{errors.taluk}</p>}
                    </div>

                    {/* Division */}
                    <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                            <Briefcase size={16} className="text-[#990500]" /> விருப்பமான பிரிவு <span className="text-[#990500]">*</span>
                        </label>
                        <div className="relative">
                            <select
                            name="division"
                            value={formData.division}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#990500]/20 outline-none appearance-none transition-all ${
                                errors.division ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#990500]"
                            }`}
                            >
                            <option value="">தேர்ந்தெடுக்கவும்</option>
                            {divisionOptions.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </div>
                        </div>
                        {errors.division && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/>{errors.division}</p>}
                    </div>
                </div>

                {/* Reason */}
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Heart size={16} className="text-[#990500]" /> தன்னார்வலராக காரணம்? <span className="text-[#990500]">*</span>
                    </label>
                    <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        rows="3"
                        placeholder="உங்கள் கருத்துக்களை இங்கே பகிரவும்..."
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#990500]/20 outline-none transition-all resize-none ${
                        errors.reason ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#990500]"
                        }`}
                    ></textarea>
                    {errors.reason && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12}/>{errors.reason}</p>}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#990500] hover:bg-[#7a0400] text-white text-lg font-bold py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      பதிவேற்றப்படுகிறது...
                    </>
                  ) : (
                    <>
                      பதிவு சமர்ப்பிக்கவும்
                      <span>→</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default JoinFormTamil;