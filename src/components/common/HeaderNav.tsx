"use client";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  FaArrowRight,
  FaTimes,
  FaRocket,
  FaFire,
  FaTag,
  FaChartLine,
  FaStar,
  FaTrademark,
  FaHeadset,
  FaChevronDown,
  FaShoppingCart,
  FaHeart,
  FaCrown
} from "react-icons/fa";
import { FiFilter } from 'react-icons/fi';

// Define the type for a category
interface Category {
  name: string;
  image: string;
  description: string;
  featuredContent: {
    image: string;
    description: string;
  };
  popularItems: Array<{
    name: string;
    image: string;
    price: string;
    discount?: string;
  }>;
}

// Demo data for categories with enhanced details
const categories: Category[] = [
  {
    name: "Men's Fashion",
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Explore the latest trends in men's fashion.",
    featuredContent: {
      image:
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      description:
        "Check out our new collection of men's suits and casual wear.",
    },
    popularItems: [
      {
        name: "Classic Oxford Shirt",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$59.99",
        discount: "$79.99",
      },
      {
        name: "Slim Fit Trousers",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$49.99",
      },
      {
        name: "Premium Leather Jacket",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$199.99",
        discount: "$249.99",
      },
    ],
  },
  {
    name: "Women's Fashion",
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Discover stylish outfits for women.",
    featuredContent: {
      image:
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      description: "Explore the latest dresses, tops, and accessories.",
    },
    popularItems: [
      {
        name: "Floral Summer Dress",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$79.99",
        discount: "$99.99",
      },
      {
        name: "Designer Handbag",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$129.99",
      },
      {
        name: "Statement Earrings",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$34.99",
        discount: "$49.99",
      },
    ],
  },
  {
    name: "Electronics",
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Shop the latest gadgets and electronics.",
    featuredContent: {
      image:
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      description: "Discover smartphones, laptops, and smart home devices.",
    },
    popularItems: [
      {
        name: "Ultra HD Smart TV",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$599.99",
        discount: "$799.99",
      },
      {
        name: "Wireless Noise-Cancelling Headphones",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$249.99",
      },
      {
        name: "Smart Home Hub",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$129.99",
        discount: "$159.99",
      },
    ],
  },
  {
    name: "Home & Kitchen",
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Upgrade your home with our top picks.",
    featuredContent: {
      image:
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      description: "Find the best appliances and kitchen tools.",
    },
    popularItems: [
      {
        name: "Multi-function Air Fryer",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$149.99",
        discount: "$199.99",
      },
      {
        name: "Egyptian Cotton Bed Set",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$89.99",
      },
      {
        name: "Robot Vacuum Cleaner",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$299.99",
        discount: "$399.99",
      },
    ],
  },
  {
    name: "Sports & Fitness",
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Gear up for your fitness journey.",
    featuredContent: {
      image:
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      description: "Shop for workout gear, yoga mats, and more.",
    },
    popularItems: [
      {
        name: "Smart Fitness Tracker",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$89.99",
        discount: "$119.99",
      },
      {
        name: "Premium Yoga Mat",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$49.99",
      },
      {
        name: "Adjustable Dumbbell Set",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$199.99",
        discount: "$249.99",
      },
    ],
  },
  {
    name: "Beauty & Personal Care",
    image:
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    description: "Pamper yourself with our beauty products.",
    featuredContent: {
      image:
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      description: "Explore skincare, makeup, and haircare products.",
    },
    popularItems: [
      {
        name: "Anti-Aging Serum",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$79.99",
        discount: "$99.99",
      },
      {
        name: "Professional Hair Dryer",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$129.99",
      },
      {
        name: "Luxury Makeup Set",
        image:
          "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        price: "$149.99",
        discount: "$199.99",
      },
    ],
  },
  
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const HeaderNavbar = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isHoverCardOpen, setIsHoverCardOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCategory = (category: Category | null) => {
    setSelectedCategory(category);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#1F1F1F] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Typography className="text-xl font-bold text-[#FB7E11]">
            Shop Smart, Live Better
          </Typography>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={toggleMobileMenu}
            className="text-white hover:text-[#FB7E11]"
          >
            <FiFilter  className="text-2xl" />
          </Button>
        </div>

        {/* Navigation Menus */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Categories Hover Card */}
          <HoverCard open={isHoverCardOpen} onOpenChange={setIsHoverCardOpen}>
            <HoverCardTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-2 text-white hover:text-[#FB7E11] hover:bg-transparent"
                >
                  <span>Categories</span>
                  <motion.div
                    animate={isHoverCardOpen ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-sm" />
                  </motion.div>
                </Button>
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="w-[90vw] p-0 border-2 border-[#FB7E11]/20 left-16 shadow-2xl rounded-xl overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1F1F1F] relative transform">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                className="flex"
              >
                {/* Left Side: List of Categories with Scrollbar */}
                <div className="w-1/3 p-6 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FB7E11]/50 scrollbar-track-[#2D2D2D] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl font-bold text-[#FB7E11] mb-6 tracking-wide flex items-center gap-2"
                  >
                    <FaCrown className="text-[#FB7E11]" /> Shop by Category
                  </motion.h3>
                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 gap-4"
                  >
                    {categories.map((category, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 8px 20px rgba(251, 126, 17, 0.2)",
                        }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`flex items-center space-x-4 p-4 bg-[#3A3A3A]/50 rounded-lg cursor-pointer hover:bg-[#3A3A3A]/80 transition-all backdrop-blur-sm ${
                          selectedCategory?.name === category.name
                            ? "ring-2 ring-[#FB7E11] bg-[#3A3A3A]"
                            : ""
                        }`}
                        onClick={() => toggleCategory(category)}
                      >
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FB7E11]/50"
                        >
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div>
                          <p className="text-white font-semibold text-lg">
                            {category.name}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {category.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Right Side: Dynamic Content */}
                <motion.div
                  className="w-2/3 p-8 relative overflow-y-auto bg-gradient-to-br from-[#FB7E11]/10 to-[#1F1F1F] backdrop-blur-md max-h-[70vh]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FB7E11_0%,transparent_70%)] opacity-20" />

                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl font-bold text-white mb-6 tracking-wide"
                  >
                    {selectedCategory ? "Featured Highlight" : "Discover Our Collections"}
                    {selectedCategory && (
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          toggleCategory(null);
                        }}
                        className="absolute top-4 right-4 text-[#FB7E11] hover:text-[#E56E00]"
                      >
                        <FaTimes />
                      </motion.button>
                    )}
                  </motion.h3>
                  <AnimatePresence mode="wait">
                    {selectedCategory ? (
                      <motion.div
                        key={selectedCategory.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-6"
                      >
                        {/* Featured Image with Animated Overlay */}
                        <div className="relative w-full h-48 rounded-lg overflow-hidden group">
                          <motion.img
                            src={selectedCategory.featuredContent.image}
                            alt="Featured Product"
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                          <motion.div
                            className="absolute bottom-4 left-4 text-white text-lg font-semibold"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <motion.p
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.4 }}
                            >
                              {selectedCategory.featuredContent.description}
                            </motion.p>
                          </motion.div>
                        </div>

                        {/* Popular Items Section */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="mt-6"
                        >
                          <h4 className="text-lg font-semibold text-[#FB7E11] mb-4">
                            Popular Items
                          </h4>
                          <div className="grid grid-cols-3 gap-4">
                            {selectedCategory.popularItems.map((item, idx) => (
                              <HoverCard key={idx}>
                                <HoverCardTrigger asChild>
                                  <motion.div
                                    whileHover={{
                                      scale: 1.05,
                                      y: -5,
                                      boxShadow: "0 10px 25px rgba(251, 126, 17, 0.2)",
                                    }}
                                    className="bg-[#2A2A2A] rounded-lg overflow-hidden cursor-pointer relative group"
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                  >
                                    <div className="w-full h-24 overflow-hidden">
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      />
                                    </div>
                                    <div className="p-3">
                                      <h5 className="text-white font-medium text-sm truncate">
                                        {item.name}
                                      </h5>
                                      <div className="flex items-center mt-1">
                                        <span className="text-[#FB7E11] font-bold">
                                          {item.price}
                                        </span>
                                        {item.discount && (
                                          <span className="text-gray-400 text-xs line-through ml-2">
                                            {item.discount}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    {/* Quick action buttons that appear on hover */}
                                    <motion.div
                                      initial={{ opacity: 0 }}
                                      animate={{
                                        opacity: hoveredItem === item.name ? 1 : 0,
                                      }}
                                      transition={{ duration: 0.2 }}
                                      className="absolute top-2 right-2 flex flex-col space-y-2"
                                    >
                                      <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-[#FB7E11] text-white p-1 rounded-full"
                                      >
                                        <FaHeart size={14} />
                                      </motion.button>
                                      <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-white text-[#FB7E11] p-1 rounded-full"
                                      >
                                        <FaShoppingCart size={14} />
                                      </motion.button>
                                    </motion.div>
                                  </motion.div>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-64 p-0 bg-[#1F1F1F] border border-[#FB7E11]/30 shadow-xl rounded-lg">
                                  <div className="p-4">
                                    <h3 className="text-lg font-bold text-white mb-2">
                                      {item.name}
                                    </h3>
                                    <div className="flex items-center mb-2">
                                      <span className="text-[#FB7E11] font-bold text-lg">
                                        {item.price}
                                      </span>
                                      {item.discount && (
                                        <span className="text-gray-400 text-sm line-through ml-2">
                                          {item.discount}
                                        </span>
                                      )}
                                    </div>
                                    <div className="mb-3 flex items-center text-yellow-400">
                                      <FaStar />
                                      <FaStar />
                                      <FaStar />
                                      <FaStar />
                                      <FaStar className="text-gray-500" />
                                      <span className="text-gray-400 text-xs ml-2">(42)</span>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-4">
                                      This premium product offers exceptional quality and style. Limited stock available.
                                    </p>
                                    <div className="space-y-2">
                                      <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="w-full bg-[#FB7E11] text-white py-2 rounded-md flex items-center justify-center gap-2 font-medium"
                                      >
                                        <FaShoppingCart size={14} />
                                        Add to Cart
                                      </motion.button>
                                      <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="w-full bg-[#2D2D2D] text-white py-2 rounded-md flex items-center justify-center gap-2 font-medium"
                                      >
                                        <FaHeart size={14} />
                                        Add to Wishlist
                                      </motion.button>
                                    </div>
                                  </div>
                                </HoverCardContent>
                              </HoverCard>
                            ))}
                          </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="flex justify-center mt-6"
                        >
                          <Link
                            href={`/products/categories/${selectedCategory.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            <motion.button
                              whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 15px rgba(251, 126, 17, 0.6)",
                              }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-2 bg-[#FB7E11] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#E56E00] transition-all duration-300"
                            >
                              Shop Now <FaArrowRight className="animate-bounce" />
                            </motion.button>
                          </Link>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <p className="text-gray-300 text-lg">
                          Click a category to see what’s trending.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </HoverCardContent>
          </HoverCard>

          {/* Other Navigation Links */}
          <motion.div
            className="flex items-center space-x-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {[
              { icon: <FaRocket />, text: "New Arrivals", href: "/products/new-arrivals" },
              { icon: <FaFire />, text: "Best Selling", href: "/products/best-sellers" },
              { icon: <FaTag />, text: "Hot Deals", href: "/products/hot-deals" },
              { icon: <FaChartLine />, text: "Trending", href: "/products/trending" },
              { icon: <FaStar />, text: "Featured", href: "/products/featured" },
              { icon: <FaTrademark />, text: "Brands", href: "/products/brands" },
              { icon: <FaHeadset />, text: "Support", href: "/support" },
            ].map((link, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={link.href}
                  className="flex items-center space-x-2 text-white hover:text-[#FB7E11] transition-all"
                >
                  {link.icon}
                  <span>{link.text}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1F1F1F] p-4 space-y-4"
          >
            {/* Categories Dropdown */}
            {/* <div>
              <Button
                variant="ghost"
                className="w-full flex justify-between items-center text-white hover:text-[#FB7E11]"
                onClick={() => setIsHoverCardOpen(!isHoverCardOpen)}
              >
                <span>Categories</span>
                <FaChevronDown
                  className={`text-sm transition-transform ${
                    isHoverCardOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
              {isHoverCardOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="mt-2 space-y-2"
                >
                  {categories.map((category, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="p-2 bg-[#3A3A3A]/50 rounded-lg"
                      onClick={() => toggleCategory(category)}
                    >
                      <p className="text-white font-semibold">{category.name}</p>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div> */}

            {/* Other Navigation Links */}
            <div className="space-y-2">
              {[
                { icon: <FaRocket />, text: "New Arrivals", href: "/products/new-arrivals" },
                { icon: <FaFire />, text: "Best Selling", href: "/products/best-sellers" },
                { icon: <FaTag />, text: "Hot Deals", href: "/products/hot-deals" },
                { icon: <FaChartLine />, text: "Trending", href: "/products/trending" },
                { icon: <FaStar />, text: "Featured", href: "/products/featured" },
                { icon: <FaTrademark />, text: "Brands", href: "/products/brands" },
                { icon: <FaHeadset />, text: "Support", href: "/support" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-white hover:text-[#FB7E11]"
                >
                  {link.icon}
                  <span>{link.text}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default HeaderNavbar;