"use client";
import { motion } from "framer-motion";
import { FaRocket, FaShippingFast, FaGlobe, FaUndo } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const particleVariants = {
  animate: {
    y: [0, -10, 0],
    opacity: [0.5, 1, 0.5],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
  },
};

const ShippingPolicyPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#0A1428] mt-32 min-h-screen py-20 px-4 sm:px-6 lg:px-8 font-orbitron relative overflow-hidden">
      {/* Cosmic Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00F5D4]/10 via-[#FF4A92]/10 to-transparent opacity-40"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      {/* Particles */}
      <motion.div
        className="absolute top-20 left-1/4 text-[#00F5D4] text-2xl"
        variants={particleVariants}
        animate="animate"
      >
        ✧
      </motion.div>
      <motion.div
        className="absolute top-40 right-1/4 text-[#FF4A92] text-2xl"
        variants={particleVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        ✧
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#F5F6F5] tracking-wide">
            Galactic <motion.span
              animate={{ textShadow: ["0 0 5px #00F5D4", "0 0 15px #00F5D4", "0 0 5px #00F5D4"] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[#00F5D4]"
            >
              Shipping
            </motion.span>
          </h1>
          <p className="text-[#A3BFFA] text-lg mt-4 font-roboto">
            Your interstellar guide to delivery across the cosmos
          </p>
        </motion.div>

        {/* Mission Cards */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Delivery Times */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 245, 212, 0.3)" }}
            className="bg-[#1E2A44] rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-[#00F5D4]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaRocket className="text-[#00F5D4] text-3xl" />
              <h2 className="text-2xl font-bold text-[#F5F6F5]">Launch Prep: Delivery Times</h2>
            </div>
            <p className="text-[#A3BFFA] font-roboto">
              Warp-speed deliveries! Standard orders arrive in <span className="text-[#00F5D4]">3-7 solar cycles</span> (business days). Expedited options blast off in <span className="text-[#00F5D4]">1-3 cycles</span>. Delays? Only if a meteor shower hits!
            </p>
          </motion.div>

          {/* Shipping Costs */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 245, 212, 0.3)" }}
            className="bg-[#1E2A44] rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-[#00F5D4]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaShippingFast className="text-[#00F5D4] text-3xl" />
              <h2 className="text-2xl font-bold text-[#F5F6F5]">Fuel Costs: Shipping Fees</h2>
            </div>
            <p className="text-[#A3BFFA] font-roboto">
              Free hyperdrive shipping on orders over <span className="text-[#00F5D4]">$50</span>! Below that, a flat <span className="text-[#00F5D4]">$5.99</span> fee powers your package’s journey. Expedited? Add <span className="text-[#00F5D4]">$9.99</span> for turbo boost.
            </p>
          </motion.div>

          {/* Tracking */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 245, 212, 0.3)" }}
            className="bg-[#1E2A44] rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-[#00F5D4]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaGlobe className="text-[#00F5D4] text-3xl" />
              <h2 className="text-2xl font-bold text-[#F5F6F5]">Orbit Tracking</h2>
            </div>
            <p className="text-[#A3BFFA] font-roboto">
              Track your cargo in real-time with our <span className="text-[#00F5D4]">Stellar Tracker</span>. Once launched, you’ll receive a cosmic signal (tracking link) to monitor your package’s orbit to your doorstep.
            </p>
          </motion.div>

          {/* International Shipping */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 245, 212, 0.3)" }}
            className="bg-[#1E2A44] rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-[#00F5D4]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaGlobe className="text-[#00F5D4] text-3xl" />
              <h2 className="text-2xl font-bold text-[#F5F6F5]">Intergalactic Routes</h2>
            </div>
            <p className="text-[#A3BFFA] font-roboto">
              We ship to over <span className="text-[#00F5D4]">150 planets</span> (countries)! Expect <span className="text-[#00F5D4]">7-15 solar cycles</span> for delivery. Costs vary by quadrant—starting at <span className="text-[#00F5D4]">$15</span>. Customs? Your local spaceport handles that.
            </p>
          </motion.div>

          {/* Returns/Issues */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 245, 212, 0.3)" }}
            className="bg-[#1E2A44] rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-[#00F5D4]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaUndo className="text-[#00F5D4] text-3xl" />
              <h2 className="text-2xl font-bold text-[#F5F6F5]">Landing Protocols: Returns</h2>
            </div>
            <p className="text-[#A3BFFA] font-roboto">
              Wrong galaxy? Return within <span className="text-[#00F5D4]">30 cycles</span>—unused, in original pod—for a full refund. Issues? Contact our <span className="text-[#00F5D4]">Mission Control</span> via the Orders page. We’ll resolve it faster than light speed!
            </p>
          </motion.div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 245, 212, 0.7)",
                background: "linear-gradient(45deg, #00F5D4, #FF4A92)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00F5D4] text-[#0A1428] px-10 py-4 rounded-full text-xl font-semibold font-roboto hover:bg-[#FF4A92] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mx-auto"
            >
              <FaRocket /> Start Your Journey
            </motion.button>
          </Link>
          <p className="text-[#A3BFFA] text-sm mt-4 font-roboto">Beam up your next order now!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ShippingPolicyPage;