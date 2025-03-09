"use client";
import { motion } from "framer-motion";
import { FaShoppingCart, FaArrowRight, FaCrown, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

// Sample featured product data (replace with API fetch)
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  featuredLabel: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Luxury Smartwatch",
    price: 299.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "A premium smartwatch for the modern elite.",
    rating: 4.9,
    featuredLabel: "Editor's Choice",
  },
  {
    id: 2,
    name: "Gold-Tone Earbuds",
    price: 129.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Elegant earbuds with crystal-clear sound.",
    rating: 4.7,
    featuredLabel: "Top Pick",
  },
  {
    id: 3,
    name: "Designer Backpack",
    price: 179.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Crafted for style and functionality.",
    rating: 4.8,
    featuredLabel: "Best in Class",
  },
  {
    id: 4,
    name: "Elegant Sunglasses",
    price: 99.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Timeless shades for a sophisticated look.",
    rating: 4.6,
    featuredLabel: "Highly Rated",
  },
  {
    id: 5,
    name: "Premium Hoodie",
    price: 89.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Soft luxury in every thread.",
    rating: 4.5,
    featuredLabel: "Fan Favorite",
  },
  {
    id: 6,
    name: "Elite Speaker",
    price: 149.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Sound that resonates with elegance.",
    rating: 4.7,
    featuredLabel: "Must-Have",
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
  hidden: { opacity: 0, y: 50, rotate: 3 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: index * 0.1,
    },
  },
});

// const spotlightVariants = {
//   animate: {
//     scale: [1, 1.2, 1],
//     transition: {
//       repeat: Infinity,
//       duration: 4,
//       ease: "easeInOut",
//     },
//   },
// };

const FeaturedProductsPage = () => {
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
      {/* Spotlight Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFD700_0%,transparent_70%)] opacity-20"
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
          {/* Floating Decorative Elements */}
          <motion.div
            className="absolute -top-8 left-1/4 text-[#FFD700] text-5xl"
            animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🏆
          </motion.div>
          <motion.div
            className="absolute -top-4 right-1/4 text-[#FB7E11] text-4xl"
            animate={{ y: [10, -10, 10], rotate: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            🌟
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#333333] relative tracking-tight drop-shadow-lg">
            Featured <span className="text-[#FB7E11] inline-block">Gems</span>
            <motion.span
              className="absolute -top-4 -right-4 text-[#FFD700] text-7xl"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ✨
            </motion.span>
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto font-medium">
            Discover our hand-picked selection of premium products—crafted for
            the discerning buyer.
          </p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants(index)} // Luxurious slide-in animation
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="break-inside-avoid bg-white rounded-2xl shadow-xl overflow-hidden group border-2 border-transparent hover:border-[#FFD700]/50"
            >
              {/* Product Image */}
              <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                />
                {/* Spotlight Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                {/* Featured Badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-[#FFD700] text-[#333333] px-4 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  animate={{
                    boxShadow: [
                      "0 0 10px #FFD700",
                      "0 0 20px #FFD700",
                      "0 0 10px #FFD700",
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <FaCrown className="text-[#FB7E11]" />
                  <span className="text-sm font-medium">
                    {product.featuredLabel}
                  </span>
                </motion.div>
                {/* Rating */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/90 text-[#333333] px-4 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: 20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <FaStar className="text-[#FB7E11]" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-[#333333] group-hover:text-[#FB7E11] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-[#666666] text-base leading-relaxed">
                  {product.description}
                </p>
                <p className="text-[#FB7E11] text-xl font-extrabold drop-shadow-sm">
                  ${product.price.toFixed(2)}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleAddToCart(product.id)}
                    className="flex items-center gap-2 bg-[#FB7E11] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#FFD700] hover:text-[#333333] transition-all duration-300 shadow-md"
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

              {/* Decorative Spotlight Element */}
              <motion.div
                className="absolute -top-3 -left-3 w-16 h-16 bg-[#FFD700]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(255, 215, 0, 0.3)",
                "0 0 20px rgba(255, 215, 0, 0.6)",
                "0 0 10px rgba(255, 215, 0, 0.3)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-[#FB7E11] text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-[#FFD700] hover:text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300 shadow-lg"
          >
            Load More Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProductsPage;
