"use client";
import { motion } from "framer-motion";
import { FaShoppingCart, FaArrowRight, FaEye, FaFire } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

// Sample trending product data (replace with API fetch)
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  views: number;
  trendingRank: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Viral Sneakers",
    price: 89.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "These sneakers are taking the streets by storm!",
    views: 2450,
    trendingRank: 1,
  },
  {
    id: 2,
    name: "Glow Earbuds",
    price: 59.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Light up your music with these trending earbuds.",
    views: 1800,
    trendingRank: 2,
  },
  {
    id: 3,
    name: "Eco Smartwatch",
    price: 129.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Sustainable tech that's trending everywhere.",
    views: 1500,
    trendingRank: 3,
  },
  {
    id: 4,
    name: "Neon Hoodie",
    price: 69.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Brighten up your wardrobe with this viral pick.",
    views: 1200,
    trendingRank: 4,
  },
  {
    id: 5,
    name: "Minimalist Backpack",
    price: 79.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Sleek design, trending for all the right reasons.",
    views: 900,
    trendingRank: 5,
  },
  {
    id: 6,
    name: "Tech Sunglasses",
    price: 49.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Smart shades that everyone's talking about.",
    views: 750,
    trendingRank: 6,
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
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: index * 0.1,
    },
  },
});

const waveVariants = {
  animate: {
    x: [0, -20, 20, 0],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "easeInOut",
    },
  },
};

const TrendingProductsPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`);
    // Add actual add-to-cart logic here
  };

  return (
    <section className="bg-[#E5E5E5] min-h-screen mt-32 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Wave Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#00C4B4]/10 via-[#FB7E11]/10 to-transparent opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`, // Parallax effect
        }}
      >
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fill="#00C4B4"
            fillOpacity="0.1"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            variants={waveVariants}
            animate="animate"
          />
        </svg>
      </motion.div>

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
            className="absolute -top-8 left-1/4 text-[#00C4B4] text-5xl"
            animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🌟
          </motion.div>
          <motion.div
            className="absolute -top-4 right-1/4 text-[#FB7E11] text-4xl"
            animate={{ y: [10, -10, 10], rotate: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            📈
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#333333] relative tracking-tight drop-shadow-lg">
            Trending <span className="text-[#00C4B4] inline-block">Now</span>
            <motion.span
              className="absolute -top-4 -right-4 text-[#00C4B4] text-7xl"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ✨
            </motion.span>
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto font-medium">
            Catch the wave of what’s hot—don’t miss out on these viral picks!
          </p>
        </motion.div>

        {/* Filter Bar (Placeholder) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="sticky top-0 z-20 bg-white/80 backdrop-blur-md rounded-lg shadow-md p-4 mb-8 flex justify-between items-center"
        >
          <div className="flex gap-3">
            <button className="text-[#333333] hover:text-[#FB7E11] font-medium transition-all">
              Filter by Category
            </button>
            <button className="text-[#333333] hover:text-[#FB7E11] font-medium transition-all">
              Sort by Popularity
            </button>
          </div>
          <div className="text-[#666666] text-sm">
            Showing {products.length} trending products
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants(index)} // Wave-like entrance animation
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 196, 180, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden relative group border-2 border-transparent hover:border-[#00C4B4]/50"
            >
              {/* Product Image */}
              <div className="relative w-full h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                />
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Trending Rank Badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-[#00C4B4] text-white px-4 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <FaFire className="text-[#FF4500]" />
                  <span className="text-sm font-medium">
                    Rank #{product.trendingRank}
                  </span>
                </motion.div>

                {/* Views Count */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 text-[#333333] px-4 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: 20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <FaEye className="text-[#00C4B4]" />
                  <span className="text-sm font-medium">
                    {product.views} Views
                  </span>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3 relative">
                <h3 className="text-2xl font-bold text-[#333333] group-hover:text-[#00C4B4] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-[#666666] text-base leading-relaxed">
                  {product.description}
                </p>
                <p className="text-[#FB7E11] text-xl font-extrabold drop-shadow-sm">
                  ${product.price.toFixed(2)}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleAddToCart(product.id)}
                    className="flex items-center gap-2 bg-[#FB7E11] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#00C4B4] transition-all duration-300 shadow-md"
                  >
                    <FaShoppingCart /> Add to Cart
                  </motion.button>
                  <Link href={`/products/product-details/${product.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 border-2 border-[#FB7E11] text-[#FB7E11] px-5 py-2 rounded-lg font-semibold hover:bg-[#FB7E11] hover:text-white transition-all duration-300 relative overflow-hidden group/button"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <FaArrowRight /> Shop Now
                      </span>
                      <motion.span
                        className="absolute inset-x-0 bottom-0 h-0 bg-[#FB7E11] transition-all duration-300 group-hover/button:h-1"
                        initial={{ height: 0 }}
                        whileHover={{ height: "100%" }}
                      />
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Decorative Wave Element */}
              <motion.div
                className="absolute -top-3 -left-3 w-16 h-16 bg-[#00C4B4]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
              boxShadow: "0 0 30px rgba(0, 196, 180, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(0, 196, 180, 0.3)",
                "0 0 20px rgba(0, 196, 180, 0.6)",
                "0 0 10px rgba(0, 196, 180, 0.3)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-[#FB7E11] text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-[#00C4B4] focus:outline-none focus:ring-2 focus:ring-[#00C4B4] transition-all duration-300 shadow-lg"
          >
            Load More Trends
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingProductsPage;
