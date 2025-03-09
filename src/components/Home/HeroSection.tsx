"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaShippingFast, FaTags } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        {/* Dual Gradient */}
        <div className="w-full h-full bg-[radial-gradient(circle_at_top_left,#FB7E11_0%,#121212_50%),radial-gradient(circle_at_bottom_right,#E56E00_0%,#121212_50%)] opacity-30 animate-gradient-shift" />
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FB7E11_1px,transparent_1px),linear-gradient(to_bottom,#FB7E11_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      </div>

      {/* SVG Illustrations */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Global Shipping Icon */}
        <motion.svg
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 0.25, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-12 left-12 w-20 h-20 md:w-28 md:h-28"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#FB7E11"
          strokeWidth="2"
        >
          <circle cx="50" cy="50" r="40" />
          <path d="M10 50 H90 M50 10 V90 M20 20 L80 80 M80 20 L20 80" />
        </motion.svg>

        {/* Trending Product Box */}
        <motion.svg
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.25, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-16 right-12 w-24 h-24 md:w-32 md:h-32"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#FB7E11"
          strokeWidth="2"
        >
          <path d="M20 30 L80 30 L90 60 L70 90 L10 60 Z M40 30 V60 H60" />
          <path d="M45 45 L55 55" strokeWidth="3" />
        </motion.svg>

        {/* Deal Tag */}
        <motion.svg
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-1/4 right-1/5 w-16 h-16 md:w-24 md:h-24"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#FB7E11"
          strokeWidth="2"
        >
          <path d="M30 20 L70 20 L80 50 L70 80 L30 80 L20 50 Z" />
          <path d="M50 30 V70 M40 40 H60" strokeWidth="3" />
        </motion.svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center py-20">
        {/* Text and CTAs */}
        <div className="text-center space-y-10 max-w-4xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight"
          >
            Dropship{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-[#FB7E11]"
            >
              Deals
            </motion.span>{" "}
            That Deliver
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-gray-300 font-medium"
          >
            Unlock a world of trending products cheap, fast, and shipped
            globally. From viral gadgets to must-have fashion, grab them before
            they&apos;re gone!
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(251, 126, 17, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 bg-[#FB7E11] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#E56E00] focus:outline-none focus:ring-2 focus:ring-[#FB7E11] focus:ring-offset-2 transition-all duration-300"
            >
              <FaShippingFast />
              <span>Shop Fast</span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FB7E11",
                color: "#FFFFFF",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 bg-transparent border-2 border-[#FB7E11] text-[#FB7E11] px-8 py-4 rounded-full text-lg font-semibold hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FB7E11] focus:ring-offset-2 transition-all duration-300"
            >
              <FaTags />
              <span>Top Deals</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Urgency Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="mt-8 bg-[#FB7E11]/20 text-[#FB7E11] px-4 py-2 rounded-full text-sm font-bold animate-pulse"
        >
          Limited Stock – Act Now!
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <FaArrowRight className="text-[#FB7E11] text-2xl animate-bounce rotate-90" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
