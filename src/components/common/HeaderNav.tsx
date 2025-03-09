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
} from "react-icons/fa";

// Define the type for a category
interface Category {
  name: string;
  image: string;
  description: string;
  featuredContent: {
    image: string;
    description: string;
  };
}

// Demo data for categories
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
  },
];

const HeaderNavbar = () => {
  // State for selected category (replacing hoveredCategory)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [isHoverCardOpen, setIsHoverCardOpen] = useState(false);

  // Toggle category selection
  const toggleCategory = (category: Category | null) => {
    setSelectedCategory(category);
  };

  return (
    <nav className="bg-[#1F1F1F] text-white shadow-lg hidden md:block">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Typography className="text-xl font-bold text-[#FB7E11]">
          Shop Smart, Live Better
        </Typography>

        {/* Navigation Menus */}
        <div className="flex items-center space-x-8">
          {/* Categories Hover Card */}
          <HoverCard open={isHoverCardOpen} onOpenChange={setIsHoverCardOpen}>
            <HoverCardTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center space-x-2 text-white hover:text-[#FB7E11] hover:bg-transparent"
              >
                <span>Categories</span>
                <FaChevronDown className="text-sm" />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-[900px] p-0 border-2 border-[#FB7E11]/20 shadow-2xl rounded-xl overflow-hidden bg-gradient-to-b from-[#2D2D2D] to-[#1F1F1F]">
              <div className="flex">
                {/* Left Side: List of Categories with Scrollbar */}
                <div className="w-1/3 p-6 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FB7E11]/50 scrollbar-track-[#2D2D2D] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                  <h3 className="text-xl font-bold text-[#FB7E11] mb-6 tracking-wide">
                    Shop by Category
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {categories.map((category, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 8px 20px rgba(251, 126, 17, 0.2)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`flex items-center space-x-4 p-4 bg-[#3A3A3A]/50 rounded-lg cursor-pointer hover:bg-[#3A3A3A]/80 transition-all backdrop-blur-sm ${
                          selectedCategory?.name === category.name
                            ? " ring-2 ring-[#FB7E11]"
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
                  </div>
                </div>

                {/* Right Side: Dynamic Content */}
                <motion.div
                  className="w-2/3 p-8 relative bg-gradient-to-br from-[#FB7E11]/10 to-[#1F1F1F] backdrop-blur-md"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FB7E11_0%,transparent_70%)] opacity-20" />

                  <h3 className="text-xl font-bold text-white mb-6 tracking-wide">
                    Featured Highlight
                    {selectedCategory && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          toggleCategory(null);
                        }}
                        className="absolute top-4 right-4 text-[#FB7E11] hover:text-[#E56E00]"
                      >
                        <FaTimes />
                      </motion.button>
                    )}
                  </h3>
                  <AnimatePresence mode="wait">
                    {selectedCategory ? (
                      <motion.div
                        key={selectedCategory.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-4"
                      >
                        {/* Featured Image with Overlay */}
                        <div className="relative w-full h-48 rounded-lg overflow-hidden">
                          <img
                            src={selectedCategory.featuredContent.image}
                            alt="Featured Product"
                            className="w-full h-full object-cover"
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                          <motion.p
                            className="absolute bottom-4 left-4 text-white text-lg font-semibold"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {selectedCategory.featuredContent.description}
                          </motion.p>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <Link
                            href={`/category/${selectedCategory.name
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
                              Shop Now{" "}
                              <FaArrowRight className="animate-bounce" />
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
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* Other Navigation Links */}
          <Link
            href="/products/new-arrivals"
            className="flex items-center space-x-2 text-white hover:text-[#FB7E11] transition-all"
          >
            <FaRocket />
            <span>New Arrivals</span>
          </Link>
          <Link
            href="/products/best-sellers"
            className="flex items-center space-x-2 text-white hover:text-[#FB7E11] transition-all"
          >
            <FaFire />
            <span>Best Selling</span>
          </Link>
          <Link
            href="/products/hot-deals"
            className="flex items-center space-x-2 text-white hover:text-[#FB7E11] transition-all"
          >
            <FaTag />
            <span>Hot Deals</span>
          </Link>
          <Link
            href="/products/trending"
            className="flex items-center space-x-2 text-white hover:text-[#FB7E11] transition-all"
          >
            <FaChartLine />
            <span>Trending</span>
          </Link>
          <Link
            href="/products/featured"
            className="flex items-center space-x-2 text-white hover:text-[#FB7E11] transition-all"
          >
            <FaStar />
            <span>Featured</span>
          </Link>
          <Link
            href="/products/brands"
            className="flex items-center space-x-2 text-white hover:text-[#FB7E11] transition-all"
          >
            <FaTrademark />
            <span>Brands</span>
          </Link>
          <Link
            href="/support"
            className="flex items-center space-x-2 text-white hover:text-[#FB7E11] transition-all"
          >
            <FaHeadset />
            <span>Support</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
