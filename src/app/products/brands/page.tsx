"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

// Sample brand data (replace with API fetch)
interface Brand {
  id: number;
  name: string;
  logo: string;
  productCount: number;
}

const brands: Brand[] = [
  {
    id: 1,
    name: "TechTrend Innovations",
    logo: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    productCount: 120,
  },
  {
    id: 2,
    name: "EliteWear",
    logo: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    productCount: 85,
  },
  {
    id: 3,
    name: "GlowLux",
    logo: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    productCount: 95,
  },
  {
    id: 4,
    name: "UrbanPulse",
    logo: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    productCount: 60,
  },
  {
    id: 5,
    name: "NovaGear",
    logo: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    productCount: 110,
  },
  {
    id: 6,
    name: "PureVibe",
    logo: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    productCount: 75,
  },
  {
    id: 7,
    name: "SkyHigh",
    logo: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    productCount: 65,
  },
  {
    id: 8,
    name: "TrendSpark",
    logo: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    productCount: 90,
  },
];

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = (index: number) => ({
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: index * 0.05,
    },
  },
});

const flickerVariants = {
  animate: {
    textShadow: [
      "0 0 2px #00D4FF, 0 0 5px #00D4FF",
      "0 0 5px #00D4FF, 0 0 10px #00D4FF",
      "0 0 2px #00D4FF, 0 0 5px #00D4FF",
    ],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const BrandsPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#1A1A1A] min-h-screen mt-32 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-inter">
      {/* Neon Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#00D4FF]/10 via-[#FF3366]/10 to-transparent opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`, // Parallax effect
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
          {/* Floating Decorative Elements */}
          <motion.div
            className="absolute -top-8 left-1/4 text-[#00D4FF] text-5xl"
            animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            ⚡️
          </motion.div>
          <motion.div
            className="absolute -top-4 right-1/4 text-[#FF3366] text-4xl"
            animate={{ y: [10, -10, 10], rotate: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            💥
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#FFFFFF] relative tracking-tight">
            Our{" "}
            <motion.span
              variants={flickerVariants}
              animate="animate"
              className="text-[#00D4FF] inline-block"
            >
              Brands
            </motion.span>
          </h1>
          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto font-medium">
            Discover the future of style with our curated selection of
            innovative brands.
          </p>
        </motion.div>

        {/* Hexagonal Honeycomb Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 justify-items-center"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "0.5rem",
          }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              variants={itemVariants(index)} // Staggered entrance animation
              whileHover={{
                scale: 1.05,
                rotate: 3,
                boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
              style={{
                width: "140px",
                height: "161px", // Height for a regular hexagon (sqrt(3)/2 * width)
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                backgroundColor: "#2D2D2D",
                marginTop: index % 2 === 1 ? "80px" : "0", // Offset for honeycomb effect
                marginBottom: index % 2 === 1 ? "80px" : "0",
              }}
            >
              {/* Brand Logo */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#00D4FF]/20 group-hover:to-[#FF3366]/20">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-14 h-14 object-contain mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_#00D4FF]"
                />
                <h3 className="text-lg font-bold text-[#FFFFFF] text-center drop-shadow-[0_0_2px_#FFFFFF]">
                  {brand.name}
                </h3>
                <p className="text-xs text-[#B0B0B0] text-center">
                  {brand.productCount} Products
                </p>
                {/* View Products Link */}
                <motion.div
                  className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  <Link href={`/brands/${brand.id}`}>
                    <motion.span
                      className="text-[#00D4FF] text-sm font-medium flex items-center gap-1 relative group/link"
                      whileHover={{ color: "#FF3366" }}
                    >
                      View Products
                      <FaArrowRight />
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00D4FF] transition-all duration-300 group-hover/link:w-full group-hover/link:bg-[#FF3366]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
              {/* Glowing Border on Hover */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent transition-all duration-300 group-hover:border-[#00D4FF]/70"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 5px rgba(0, 212, 255, 0.3)",
                    "0 0 15px rgba(0, 212, 255, 0.5)",
                    "0 0 5px rgba(0, 212, 255, 0.3)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Brands Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(0, 212, 255, 0.3)",
                "0 0 20px rgba(0, 212, 255, 0.5)",
                "0 0 10px rgba(0, 212, 255, 0.3)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-[#00D4FF] text-[#1A1A1A] px-10 py-4 rounded-full text-xl font-semibold hover:bg-[#FF3366] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all duration-300 shadow-lg"
          >
            Load More Brands
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsPage;
