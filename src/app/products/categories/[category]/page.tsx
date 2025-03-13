"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaHeart, FaShoppingCart, FaStar, FaFilter, FaChevronDown, FaEye } from "react-icons/fa";
import Link from "next/link";

// Demo product data for different categories
const categoryProducts = {
  "men's-fashion": [
    {
      id: 1,
      name: "Men's Shirt",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 49.99,
      rating: 4.5,
      amountSold: 120,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "A stylish and comfortable shirt for men.",
    },
    {
      id: 2,
      name: "Men's Jeans",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 59.99,
      rating: 4.2,
      amountSold: 85,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Durable and trendy jeans for men.",
    },
  ],
  "women's-fashion": [
    {
      id: 3,
      name: "Women's Dress",
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300/FF00FF",
        "https://via.placeholder.com/300/00FFFF",
      ],
      price: 79.99,
      rating: 4.8,
      amountSold: 200,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Elegant and fashionable dress for women.",
    },
    {
      id: 4,
      name: "Women's Jacket",
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300/FFA500",
        "https://via.placeholder.com/300/800080",
      ],
      price: 99.99,
      rating: 4.7,
      amountSold: 150,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Warm and stylish jacket for women.",
    },
  ],
  electronics: [
    {
      id: 5,
      name: "Ultra HD Smart TV",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 599.99,
      rating: 4.9,
      amountSold: 300,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Experience stunning visuals with this Ultra HD Smart TV.",
    },
    {
      id: 6,
      name: "Wireless Noise-Cancelling Headphones",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 249.99,
      rating: 4.7,
      amountSold: 450,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Immerse yourself in music with these noise-cancelling headphones.",
    },
    {
      id: 7,
      name: "Smart Home Hub",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 129.99,
      rating: 4.6,
      amountSold: 200,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Control your smart home devices with this hub.",
    },
  ],
  "home & kitchen": [
    {
      id: 8,
      name: "Multi-function Air Fryer",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 149.99,
      rating: 4.8,
      amountSold: 500,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Cook healthier meals with this multi-function air fryer.",
    },
    {
      id: 9,
      name: "Egyptian Cotton Bed Set",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 89.99,
      rating: 4.7,
      amountSold: 300,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Sleep in luxury with this Egyptian cotton bed set.",
    },
    {
      id: 10,
      name: "Robot Vacuum Cleaner",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 299.99,
      rating: 4.9,
      amountSold: 400,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Keep your home clean with this smart robot vacuum.",
    },
  ],
  "sports & fitness": [
    {
      id: 11,
      name: "Smart Fitness Tracker",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 89.99,
      rating: 4.6,
      amountSold: 600,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Track your fitness goals with this smart tracker.",
    },
    {
      id: 12,
      name: "Premium Yoga Mat",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 49.99,
      rating: 4.5,
      amountSold: 350,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Practice yoga comfortably with this premium mat.",
    },
    {
      id: 13,
      name: "Adjustable Dumbbell Set",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 199.99,
      rating: 4.8,
      amountSold: 250,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Build strength with this adjustable dumbbell set.",
    },
  ],
  "beauty & personal care": [
    {
      id: 14,
      name: "Anti-Aging Serum",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 79.99,
      rating: 4.7,
      amountSold: 400,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Reduce signs of aging with this powerful serum.",
    },
    {
      id: 15,
      name: "Professional Hair Dryer",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 129.99,
      rating: 4.6,
      amountSold: 300,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Achieve salon-quality results with this hair dryer.",
    },
    {
      id: 16,
      name: "Luxury Makeup Set",
      images: [
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
        "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      ],
      price: 149.99,
      rating: 4.9,
      amountSold: 500,
      colors: ["#1F1F1F", "#FB7E11"],
      description: "Enhance your beauty with this luxury makeup set.",
    },
  ],
};

// Filter options
const filters = {
  price: ["All", "0-50", "50-100", "100+"],
  rating: ["All", "4+", "3+", "2+"],
  color: ["All", "#1F1F1F", "#FB7E11"],
};

// Magnified View Component
const MagnifiedView = ({ product, onClose }: { product: any; onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-3xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="relative">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md"
          >
            &gt;
          </button>
        </div>
        <p className="mt-4 text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const [sortBy, setSortBy] = useState("default");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    price: "All",
    rating: "All",
    color: "All",
  });
  const [magnifiedProduct, setMagnifiedProduct] = useState<any>(null);

  const category = params.category.replace(/-/g, " "); // Convert "men's-fashion" to "men's fashion"
  const products = categoryProducts[params.category as keyof typeof categoryProducts] || [];

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "sold") return b.amountSold - a.amountSold;
    return a.id - b.id; // Default sorting by ID
  });

  // Filtering logic
  const filteredProducts = sortedProducts.filter((product) => {
    const priceMatch =
      selectedFilters.price === "All" ||
      (selectedFilters.price === "0-50" && product.price <= 50) ||
      (selectedFilters.price === "50-100" && product.price > 50 && product.price <= 100) ||
      (selectedFilters.price === "100+" && product.price > 100);

    const ratingMatch =
      selectedFilters.rating === "All" ||
      (selectedFilters.rating === "4+" && product.rating >= 4) ||
      (selectedFilters.rating === "3+" && product.rating >= 3) ||
      (selectedFilters.rating === "2+" && product.rating >= 2);

    const colorMatch =
      selectedFilters.color === "All" || product.colors.includes(selectedFilters.color);

    return priceMatch && ratingMatch && colorMatch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Handlers for button actions
  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    console.log(`Added Product ${productId} to cart`);
  };

  const handleAddToWishlist = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    console.log(`Added Product ${productId} to wishlist`);
  };

  const handleQuickView = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    setMagnifiedProduct(product);
  };

  return (
    <section className="bg-[#E5E5E5] pt-[8rem] pb-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-12"
      >
        {/* Title and Description */}
        <div className="text-center mt-10 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1F1F1F] capitalize">
            {category}
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Explore our curated collection of {category}—shop now before they’re gone!
          </p>
        </div>

        {/* Sorting and Filters */}
        <div className="mt-6 flex justify-between items-center">
          <div className="relative inline-block">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white text-[#1F1F1F] px-4 py-2 pr-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all"
              aria-label="Sort products"
            >
              <option value="default">Sort By: Default</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="sold">Most Sold</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FB7E11]" />
          </div>

          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 bg-white text-[#1F1F1F] px-4 py-2 rounded-lg shadow-md hover:bg-gray-50 transition-all"
          >
            <FaFilter />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters Dropdown */}
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 bg-white p-6 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1F1F1F]">Price</label>
                <select
                  value={selectedFilters.price}
                  onChange={(e) =>
                    setSelectedFilters({ ...selectedFilters, price: e.target.value })
                  }
                  className="mt-1 block w-full bg-white text-[#1F1F1F] px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#FB7E11]"
                >
                  {filters.price.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F1F1F]">Rating</label>
                <select
                  value={selectedFilters.rating}
                  onChange={(e) =>
                    setSelectedFilters({ ...selectedFilters, rating: e.target.value })
                  }
                  className="mt-1 block w-full bg-white text-[#1F1F1F] px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#FB7E11]"
                >
                  {filters.rating.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F1F1F]">Color</label>
                <select
                  value={selectedFilters.color}
                  onChange={(e) =>
                    setSelectedFilters({ ...selectedFilters, color: e.target.value })
                  }
                  className="mt-1 block w-full bg-white text-[#1F1F1F] px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#FB7E11]"
                >
                  {filters.color.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Product Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all cursor-pointer"
            >
              {/* Product Image */}
              <Link href={`/products/product-details/${product.id}`} passHref>
                <div className="relative h-56 w-full">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Link>

              {/* Wishlist Icon */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                onClick={(e) => handleAddToWishlist(e, product.id)}
                className="absolute top-3 right-3 p-2 bg-white/80 rounded-full shadow-md"
              >
                <FaHeart
                  className="text-gray-400 hover:text-[#FB7E11] transition-all"
                  aria-label={`Add ${product.name} to wishlist`}
                />
              </motion.div>

              {/* Quick View Icon */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                onClick={(e) => handleQuickView(e, product)}
                className="absolute top-3 left-3 p-2 bg-white/80 rounded-full shadow-md"
              >
                <FaEye
                  className="text-gray-400 hover:text-[#FB7E11] transition-all"
                  aria-label={`Quick view of ${product.name}`}
                />
              </motion.div>

              {/* Product Details */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#1F1F1F] truncate">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-[#FB7E11] mt-2">
                  ${product.price.toFixed(2)}
                </p>

                {/* Rating and Amount Sold */}
                <div className="flex items-center mt-3 space-x-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-sm ${
                          index < Math.floor(product.rating)
                            ? "text-[#FB7E11]"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#666666]">
                    ({product.amountSold} sold)
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center mt-4 space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => handleAddToCart(e, product.id)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-[#FB7E11] text-white py-2 rounded-lg hover:bg-[#E56E00] transition-all focus:outline-none focus:ring-2 focus:ring-[#FB7E11]"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <FaShoppingCart />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Magnified View Modal */}
      {magnifiedProduct && (
        <MagnifiedView product={magnifiedProduct} onClose={() => setMagnifiedProduct(null)} />
      )}
    </section>
  );
};

export default CategoryPage;