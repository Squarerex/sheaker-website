"use client";
import { motion } from "framer-motion";
import { FaShoppingCart, FaArrowRight, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

// Sample product data (replace with API fetch)
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Trendy Sneakers",
    price: 79.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Stylish and comfortable sneakers for all-day wear.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smartwatch Pro",
    price: 129.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Track your fitness and stay connected on the go.",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 199.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "A classic leather jacket for a timeless look.",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 59.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Crystal-clear sound with noise cancellation.",
    rating: 4.3,
  },
  {
    id: 5,
    name: "Backpack Deluxe",
    price: 89.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Spacious and durable for all your adventures.",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Sunglasses Elite",
    price: 39.99,
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "UV-protected stylish shades for sunny days.",
    rating: 4.4,
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
  hidden: { opacity: 0, y: 50, rotate: -5 },
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

const NewArrivalsPage = () => {
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
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FB7E11_0%,transparent_70%)] opacity-20"
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
            className="absolute -top-8 left-1/4 text-[#FB7E11] text-5xl"
            animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute -top-4 right-1/4 text-[#FB7E11] text-4xl"
            animate={{ y: [10, -10, 10], rotate: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            ★
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#333333] relative tracking-tight drop-shadow-lg">
            Freshly <span className="text-[#FB7E11] inline-block">Dropped</span>
            <motion.span
              className="absolute -top-4 -right-4 text-[#FB7E11] text-7xl"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              🔥
            </motion.span>
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto font-medium">
            Discover the hottest new arrivals—crafted for trendsetters like you!
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
              Sort by Price
            </button>
          </div>
          <div className="text-[#666666] text-sm">
            Showing {products.length} products
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
              variants={itemVariants(index)} // Cascading entrance animation
              whileHover={{
                scale: 1.05,
                rotate: 2,
                boxShadow: "0 20px 40px rgba(251, 126, 17, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden relative group border-2 border-transparent hover:border-[#FB7E11]/30"
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

                {/* Rating Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-[#FB7E11] text-white px-4 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: 20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <FaStar className="text-yellow-300" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3 relative">
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
                <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleAddToCart(product.id)}
                    className="flex items-center gap-2 bg-[#FB7E11] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#E56E00] transition-all duration-300 shadow-md"
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

              {/* Decorative Element */}
              <motion.div
                className="absolute -top-3 -left-3 w-16 h-16 bg-[#FB7E11]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{ repeat: Infinity, duration: 5 }}
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
              boxShadow: "0 0 30px rgba(251, 126, 17, 0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 10px rgba(251, 126, 17, 0.3)",
                "0 0 20px rgba(251, 126, 17, 0.6)",
                "0 0 10px rgba(251, 126, 17, 0.3)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-[#FB7E11] text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-[#E56E00] focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all duration-300 shadow-lg"
          >
            Load More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivalsPage;
