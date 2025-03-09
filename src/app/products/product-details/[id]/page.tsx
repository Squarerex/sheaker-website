"use client";
import { motion } from "framer-motion";
import { FaShoppingCart, FaHeart, FaStar, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

// Sample product data (replace with dynamic data)
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  category: string;
  stock: number;
  options: { size: string[]; color: string[] };
}

const product: Product = {
  id: 1,
  name: "Luxury Smartwatch",
  price: 299.99,
  originalPrice: 349.99,
  image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid",
  description: "Elevate your style with this premium smartwatch featuring advanced health tracking, sleek design, and long battery life.",
  rating: 4.9,
  reviews: 127,
  category: "Electronics",
  stock: 5,
  options: { size: ["Small", "Medium", "Large"], color: ["Black", "Silver", "Gold"] },
};

const recommendedProducts: Product[] = [
  { id: 2, name: "Gold-Tone Earbuds", price: 129.99, image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid", description: "Elegant earbuds.", rating: 4.7, reviews: 85, category: "Electronics", stock: 10, options: { size: [], color: [] } },
  { id: 3, name: "Designer Backpack", price: 179.99, image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid", description: "Stylish backpack.", rating: 4.8, reviews: 62, category: "Fashion", stock: 8, options: { size: [], color: [] } },
  { id: 4, name: "Elite Speaker", price: 149.99, image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid", description: "High-quality sound.", rating: 4.7, reviews: 95, category: "Electronics", stock: 15, options: { size: [], color: [] } },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 0 15px rgba(255, 111, 97, 0.5)" },
  tap: { scale: 0.95 },
};

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.options.size[0] || "");
  const [selectedColor, setSelectedColor] = useState(product.options.color[0] || "");

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name} (Size: ${selectedSize}, Color: ${selectedColor}) to cart`);
  };

  const handleAddToWishlist = () => {
    console.log(`Added ${product.name} to wishlist`);
  };

  const handleBuyNow = () => {
    console.log(`Proceeding to payment for ${quantity} ${product.name}`);
  };

  return (
    <section className="bg-[#F5F5F5] mt-20 min-h-screen py-20 px-5 sm:px-22 font-poppins relative overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#FF6F61]/10 via-[#FFD700]/10 to-transparent opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[#757575] text-sm mb-6"
        >
          <Link href="/shops">All Products</Link> &gt; {product.category} &gt; {product.name}
        </motion.div>

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-4xl md:text-5xl font-extrabold text-[#212121] mb-12 text-center"
        >
          {product.name}
          <motion.span
            animate={{ textShadow: ["0 0 5px #FF6F61", "0 0 15px #FF6F61", "0 0 5px #FF6F61"] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#FF6F61]"
          >
            {" "}✨
          </motion.span>
        </motion.h1>

        {/* Main Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div variants={itemVariants} className="relative">
            <motion.img
              src={product.image}
              alt={product.name}
              whileHover="hover"
              variants={imageVariants}
              className="w-full h-[500px] object-cover rounded-xl shadow-lg transition-transform duration-300"
            />
            {product.originalPrice && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute top-4 left-4 bg-[#FF6F61] text-[#FFFFFF] px-3 py-1 rounded-full font-semibold"
              >
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </motion.div>
            )}
          </motion.div>

          {/* Product Details */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Price */}
            <div className="flex items-center gap-4">
              <p className="text-3xl font-extrabold text-[#FF6F61]">${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="text-lg text-[#757575] line-through">${product.originalPrice.toFixed(2)}</p>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(product.rating) ? "text-[#FFD700]" : "text-[#757575]"} />
              ))}
              <span className="text-[#757575] text-sm">({product.reviews} reviews)</span>
            </div>

            {/* Description */}
            <p className="text-[#757575] text-lg">{product.description}</p>

            {/* Options */}
            {product.options.size.length > 0 && (
              <div>
                <label className="text-[#212121] font-medium">Size:</label>
                <div className="flex gap-2 mt-2">
                  {product.options.size.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 ${selectedSize === size ? "border-[#FF6F61] bg-[#FF6F61] text-[#FFFFFF]" : "border-[#757575] text-[#212121]"} hover:border-[#FF6F61] transition-all duration-300`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {product.options.color.length > 0 && (
              <div>
                <label className="text-[#212121] font-medium">Color:</label>
                <div className="flex gap-2 mt-2">
                  {product.options.color.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? "border-[#FF6F61]" : "border-[#757575]"} hover:border-[#FF6F61] transition-all duration-300`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <label className="text-[#212121] font-medium">Quantity:</label>
              <div className="flex items-center border-2 border-[#757575] rounded-lg">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1 text-[#212121] hover:bg-[#FF6F61] hover:text-[#FFFFFF] transition-all duration-300"
                >
                  -
                </button>
                <span className="px-4 py-1 text-[#212121]">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => Math.min(product.stock, prev + 1))}
                  className="px-3 py-1 text-[#212121] hover:bg-[#FF6F61] hover:text-[#FFFFFF] transition-all duration-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Stock Status */}
            <p className={`text-sm font-medium ${product.stock > 0 ? "text-[#388E3C]" : "text-[#FF6F61]"}`}>
              {product.stock > 0 ? `Only ${product.stock} left in stock!` : "Out of stock"}
            </p>

            {/* Delivery Info */}
            <p className="text-[#757575] text-sm">Free shipping on orders over $50. Estimated delivery: 3-7 days.</p>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 bg-[#FF6F61] text-[#FFFFFF] py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:text-[#212121] transition-all duration-300 shadow-md ${product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <FaShoppingCart /> Add to Cart
              </motion.button>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleAddToWishlist}
                className="p-3 bg-[#FFFFFF] text-[#FF6F61] rounded-lg border-2 border-[#FF6F61] hover:bg-[#FF6F61] hover:text-[#FFFFFF] transition-all duration-300 shadow-md"
              >
                <FaHeart />
              </motion.button>
            </div>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleBuyNow}
              disabled={product.stock === 0}
              className={`w-full bg-[#388E3C] text-[#FFFFFF] py-3 rounded-lg font-semibold hover:bg-[#FFD700] hover:text-[#212121] transition-all duration-300 shadow-md ${product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Buy Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Recommended Products */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-[#212121] mb-6">Explore Similar Items</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {recommendedProducts.map((recProduct) => (
              <motion.div
                key={recProduct.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 111, 97, 0.3)" }}
                className="min-w-[250px] bg-[#FFFFFF] rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-[#FF6F61]/50 transition-all duration-300"
              >
                <img
                  src={recProduct.image}
                  alt={recProduct.name}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-[#212121]">{recProduct.name}</h3>
                  <p className="text-[#757575] text-sm">{recProduct.description}</p>
                  <p className="text-[#FF6F61] text-lg font-extrabold">${recProduct.price.toFixed(2)}</p>
                  <Link href={`/products/product-details/${recProduct.id}`}>
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-full bg-[#FF6F61] text-[#FFFFFF] py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:text-[#212121] transition-all duration-300"
                    >
                      <FaArrowRight /> View Details
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;