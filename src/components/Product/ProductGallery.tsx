"use client";
import { motion } from "framer-motion";
import { FaHeart, FaShoppingCart, FaStar, FaSort, FaEye } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Static product data
const products = [
  {
    id: 1,
    name: "Product 1",
    images: [
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    ],
    price: 49.99,
    rating: 4.5,
    amountSold: 120,
    description: "This is a description for Product 1.",
  },
  {
    id: 2,
    name: "Product 2",
    images: [
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    ],
    price: 29.99,
    rating: 3.8,
    amountSold: 85,
    description: "This is a description for Product 2.",
  },
  {
    id: 3,
    name: "Product 1",
    images: [
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    ],
    price: 49.99,
    rating: 4.5,
    amountSold: 120,
    description: "This is a description for Product 1.",
  },
  {
    id: 4,
    name: "Product 2",
    images: [
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    ],
    price: 29.99,
    rating: 3.8,
    amountSold: 85,
    description: "This is a description for Product 2.",
  },
  {
    id: 5,
    name: "Product 1",
    images: [
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    ],
    price: 49.99,
    rating: 4.5,
    amountSold: 120,
    description: "This is a description for Product 1.",
  },
  {
    id: 6,
    name: "Product 2",
    images: [
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    ],
    price: 29.99,
    rating: 3.8,
    amountSold: 85,
    description: "This is a description for Product 2.",
  },
  {
    id: 7,
    name: "Product 1",
    images: [
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    ],
    price: 49.99,
    rating: 4.5,
    amountSold: 120,
    description: "This is a description for Product 1.",
  },
  {
    id: 8,
    name: "Product 2",
    images: [
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    ],
    price: 29.99,
    rating: 3.8,
    amountSold: 85,
    description: "This is a description for Product 2.",
  },
  {
    id: 9,
    name: "Product 1",
    images: [
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    ],
    price: 49.99,
    rating: 4.5,
    amountSold: 120,
    description: "This is a description for Product 1.",
  },
  {
    id: 10,
    name: "Product 2",
    images: [
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    ],
    price: 29.99,
    rating: 3.8,
    amountSold: 85,
    description: "This is a description for Product 2.",
  },
  {
    id: 11,
    name: "Product 1",
    images: [
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    ],
    price: 49.99,
    rating: 4.5,
    amountSold: 120,
    description: "This is a description for Product 1.",
  },
  {
    id: 12,
    name: "Product 2",
    images: [
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
    ],
    price: 29.99,
    rating: 3.8,
    amountSold: 85,
    description: "This is a description for Product 2.",
  },

];

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

const ProductGallery = () => {
  const [sortBy, setSortBy] = useState("default"); // State for sorting products
  const [magnifiedProduct, setMagnifiedProduct] = useState<any>(null); // State for magnified view

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "sold") return b.amountSold - a.amountSold;
    return a.id - b.id; // Default sorting by ID
  });

  // Animation variants for staggered entrance of cards
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

  // Handlers for button actions to prevent redirect
  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation(); // Prevent Link redirect
    console.log(`Added Product ${productId} to cart`);
  };

  const handleAddToWishlist = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation(); // Prevent Link redirect
    console.log(`Added Product ${productId} to wishlist`);
  };

  const handleQuickView = (e: React.MouseEvent, product: any) => {
    e.stopPropagation(); // Prevent Link redirect
    setMagnifiedProduct(product);
  };

  return (
    <section
      id="product-gallery"
      className="bg-[#E5E5E5] pt-[8rem] pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-12"
      >
        {/* Title and Description */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333]">
            Trending <span className="text-[#FB7E11]">Products</span>
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Explore our curated collection of top-selling items—shop now before
            they’re gone!
          </p>
        </div>

        {/* Sorting Options */}
        <div className="mt-6 flex justify-center">
          <div className="relative inline-block">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white text-[#333333] px-4 py-2 pr-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all"
              aria-label="Sort products"
            >
              <option value="default">Sort By: Default</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="sold">Most Sold</option>
            </select>
            <FaSort className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FB7E11]" />
          </div>
        </div>
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
          {sortedProducts.map((product) => (
            <div key={product.id} className="relative">
              <motion.div
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

                {/* Product Details */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#333333] truncate">
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
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => handleQuickView(e, product)}
                      className="p-2 bg-[#FB7E11] text-white rounded-lg hover:bg-[#E56E00] transition-all focus:outline-none focus:ring-2 focus:ring-[#FB7E11]"
                      aria-label={`Quick view of ${product.name}`}
                    >
                      <FaEye />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Magnified View */}
      {magnifiedProduct && (
        <MagnifiedView product={magnifiedProduct} onClose={() => setMagnifiedProduct(null)} />
      )}
    </section>
  );
};

export default ProductGallery;