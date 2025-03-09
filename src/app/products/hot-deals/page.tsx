"use client";
import { motion } from "framer-motion";
import { FaShoppingCart, FaArrowRight, FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

// Sample deal data (replace with API fetch)
interface Deal {
  id: number;
  name: string;
  originalPrice: number;
  dealPrice: number;
  image: string;
  description: string;
  timeLeft: string; // Format: "DD:HH:MM:SS"
}

const deals: Deal[] = [
  {
    id: 1,
    name: "Blazing Headphones",
    originalPrice: 99.99,
    dealPrice: 59.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Immerse yourself in sound with a sizzling deal!",
    timeLeft: "12:15:30:00", // 12 days, 15 hours, 30 minutes
  },
  {
    id: 2,
    name: "Fiery Sneakers",
    originalPrice: 129.99,
    dealPrice: 89.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Step up your game with scorching savings!",
    timeLeft: "05:22:45:00", // 5 days, 22 hours, 45 minutes
  },
  {
    id: 3,
    name: "Red-Hot Smartwatch",
    originalPrice: 199.99,
    dealPrice: 149.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Track time in style—grab it before it burns out!",
    timeLeft: "03:10:20:00", // 3 days, 10 hours, 20 minutes
  },
  {
    id: 4,
    name: "Ember Backpack",
    originalPrice: 79.99,
    dealPrice: 49.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Pack up savings with this smoldering deal!",
    timeLeft: "01:05:15:00", // 1 day, 5 hours, 15 minutes
  },
  {
    id: 5,
    name: "Scorching Sunglasses",
    originalPrice: 59.99,
    dealPrice: 29.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Shade yourself with a deal hotter than the sun!",
    timeLeft: "00:18:50:00", // 18 hours, 50 minutes
  },
  {
    id: 6,
    name: "Inferno Speaker",
    originalPrice: 89.99,
    dealPrice: 59.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Blast music and savings with this fiery offer!",
    timeLeft: "00:02:30:00", // 2 hours, 30 minutes
  },
];

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = (index: number) => ({
  hidden: { opacity: 0, x: -50, rotate: -10 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: index * 0.1,
    },
  },
});

const HotDealsPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = (dealId: number) => {
    console.log(`Added deal ${dealId} to cart`);
    // Add actual add-to-cart logic here
  };

  return (
    <section className="bg-[#E5E5E5] min-h-screen mt-32 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Fiery Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#FF4500]/20 via-[#FB7E11]/20 to-transparent opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`, // Parallax effect
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 mb-16 relative"
        >
          {/* Floating Fiery Elements */}
          <motion.div
            className="absolute -top-8 left-1/4 text-[#FF4500] text-5xl"
            animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🔥
          </motion.div>
          <motion.div
            className="absolute -top-4 right-1/4 text-[#FB7E11] text-4xl"
            animate={{ y: [10, -10, 10], rotate: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            💥
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#333333] relative tracking-tight drop-shadow-lg">
            Hot <span className="text-[#FF4500] inline-block">Deals</span>
            <motion.span
              className="absolute -top-4 -right-4 text-[#FF4500] text-7xl"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🔥
            </motion.span>
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto font-medium">
            Don’t miss out—these scorching discounts won’t last long!
          </p>

          {/* Overall Countdown Timer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-[#FF4500]/20 text-[#333333] px-6 py-3 rounded-full inline-flex items-center gap-2 mx-auto shadow-lg"
          >
            <FaClock className="text-[#FF4500]" />
            <span className="text-lg font-semibold">
              Sale Ends in 03:12:45:30
            </span>
          </motion.div>
        </motion.div>

        {/* Deal Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              variants={itemVariants(index)} // Fiery slide-in animation
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 69, 0, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-b from-[#2D2D2D] to-[#1F1F1F] rounded-2xl shadow-xl overflow-hidden relative group border-2 border-[#FF4500]/10 hover:border-[#FF4500]/50"
            >
              {/* Product Image */}
              <div className="relative w-full h-72 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                />
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Countdown Timer */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-[#FF4500] text-white px-4 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  animate={{
                    scale: deal.timeLeft.startsWith("00:") ? [1, 1.05, 1] : 1,
                    boxShadow: deal.timeLeft.startsWith("00:")
                      ? [
                          "0 0 10px #FF4500",
                          "0 0 20px #FF4500",
                          "0 0 10px #FF4500",
                        ]
                      : "none",
                  }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <FaClock className="text-white" />
                  <span className="text-sm font-medium">{deal.timeLeft}</span>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3 relative">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#FF4500] transition-colors duration-300">
                  {deal.name}
                </h3>
                <p className="text-[#BBBBBB] text-base leading-relaxed">
                  {deal.description}
                </p>
                <div className="flex gap-2 items-center">
                  <p className="text-[#FF4500] text-xl font-extrabold">
                    ${deal.dealPrice.toFixed(2)}
                  </p>
                  <p className="text-[#666666] line-through">
                    ${deal.originalPrice.toFixed(2)}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleAddToCart(deal.id)}
                    className="flex items-center gap-2 bg-[#FF4500] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#FB7E11] transition-all duration-300 shadow-md"
                  >
                    <FaShoppingCart /> Add to Cart
                  </motion.button>
                  <Link href={`/products/product-details/${deal.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        boxShadow: [
                          "0 0 10px #FF4500",
                          "0 0 20px #FF4500",
                          "0 0 10px #FF4500",
                        ],
                      }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="flex items-center gap-2 bg-[#FB7E11] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#FF4500] transition-all duration-300 shadow-md"
                    >
                      <FaArrowRight /> Grab Deal Now
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Decorative Flame Element */}
              <motion.div
                className="absolute -top-3 -left-3 w-16 h-16 bg-[#FF4500]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 69, 0, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(255, 69, 0, 0.3)",
                "0 0 20px rgba(255, 69, 0, 0.6)",
                "0 0 10px rgba(255, 69, 0, 0.3)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-[#FF4500] text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-[#FB7E11] focus:outline-none focus:ring-2 focus:ring-[#FF4500] transition-all duration-300 shadow-lg"
          >
            Load More Deals
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HotDealsPage;
