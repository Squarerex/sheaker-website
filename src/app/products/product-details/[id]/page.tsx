"use client";
import { motion } from "framer-motion";
import { FaShoppingCart, FaHeart, FaStar, FaArrowRight, FaInfoCircle, FaTshirt, FaPalette, FaRuler, FaBook, FaLock, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaLink, FaCamera, FaVideo } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Sample product data (unchanged)
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
  materials: string[];
  specifications: { key: string; value: string }[];
  usageInstructions: string[];
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
  materials: ["Stainless Steel", "Ceramic", "Sapphire Glass"],
  specifications: [
    { key: "Display", value: "1.78\" AMOLED" },
    { key: "Battery Life", value: "Up to 7 days" },
    { key: "Water Resistance", value: "5 ATM" },
    { key: "Connectivity", value: "Bluetooth 5.0, GPS" },
  ],
  usageInstructions: [
    "Charge the device fully before first use.",
    "Download the companion app to sync data.",
    "Wear the watch snugly for accurate health tracking.",
  ],
};

// Sample review data (unchanged)
interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  images?: string[];
  videos?: string[];
}

const initialReviews: Review[] = [
  {
    id: 1,
    user: "Jane Doe",
    rating: 5,
    comment: "Amazing smartwatch! The battery life is incredible and it looks stunning.",
    date: "2025-03-01",
    helpful: 25,
    images: ["https://via.placeholder.com/150"],
    videos: [],
  },
  {
    id: 2,
    user: "John Smith",
    rating: 4,
    comment: "Great product, but the app could use some improvement.",
    date: "2025-02-28",
    helpful: 10,
    images: [],
    videos: ["https://www.w3schools.com/html/mov_bbb.mp4"],
  },
  {
    id: 3,
    user: "Alice Brown",
    rating: 3,
    comment: " Decent watch, but the strap feels cheap.",
    date: "2025-02-25",
    helpful: 5,
    images: [],
    videos: [],
  },
];

const recommendedProducts: Product[] = [
  { id: 2, name: "Gold-Tone Earbuds", price: 129.99, image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid", description: "Elegant earbuds.", rating: 4.7, reviews: 85, category: "Electronics", stock: 10, options: { size: [], color: [] }, materials: [], specifications: [], usageInstructions: [] },
  { id: 3, name: "Designer Backpack", price: 179.99, image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid", description: "Stylish backpack.", rating: 4.8, reviews: 62, category: "Fashion", stock: 8, options: { size: [], color: [] }, materials: [], specifications: [], usageInstructions: [] },
  { id: 4, name: "Elite Speaker", price: 149.99, image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid", description: "High-quality sound.", rating: 4.7, reviews: 95, category: "Electronics", stock: 15, options: { size: [], color: [] }, materials: [], specifications: [], usageInstructions: [] },
];

// Animation variants (unchanged)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(255, 111, 97, 0.4)" },
  tap: { scale: 0.98 },
};

const ProductDetailsPage = () => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.options.size[0] || "");
  const [selectedColor, setSelectedColor] = useState(product.options.color[0] || "");
  const [copySuccess, setCopySuccess] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "", images: [], videos: [] });
  const [sortOption, setSortOption] = useState("Most Recent");

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name} (Size: ${selectedSize}, Color: ${selectedColor}) to cart`);
  };

  const handleAddToWishlist = () => {
    console.log(`Added ${product.name} to wishlist`);
  };

  const handleBuyNow = () => {
    router.push("/products/product-purchase/1");
    console.log(`Proceeding to payment for ${quantity} ${product.name}`);
  };

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `Check out this amazing ${product.name} for $${product.price.toFixed(2)}!`;

  const shareUrls = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
    instagram: "",
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&description=${encodeURIComponent(shareText)}&media=${encodeURIComponent(product.image)}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const review: Review = {
      id: reviews.length + 1,
      user: "Current User",
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split("T")[0],
      helpful: 0,
      images: newReview.images,
      videos: newReview.videos,
    };
    setReviews([review, ...reviews]);
    setNewReview({ rating: 0, comment: "", images: [], videos: [] });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "images" | "videos") => {
    const files = Array.from(e.target.files || []);
    const urls = files.map((file) => URL.createObjectURL(file));
    setNewReview((prev) => ({
      ...prev,
      [type]: [...prev[type], ...urls],
    }));
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortOption) {
      case "Most Helpful":
        return b.helpful - a.helpful;
      case "Most Recent":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "Highest Rating":
        return b.rating - a.rating;
      case "Lowest Rating":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  return (
    <section className="bg-[#F9FAFB] mt-20 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-poppins relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#FF6F61]/10 via-[#FFD700]/10 to-[#388E3C]/10 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[#6B7280] text-sm mb-6"
        >
          <Link href="/shops" className="hover:text-[#FF6F61] transition-colors">All Products</Link> / {product.category} / {product.name}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2937] mb-10 text-center"
        >
          {product.name}
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-[#FF6F61]"
          >
            {" "}✨
          </motion.span>
        </motion.h1>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div variants={itemVariants} className="relative">
            <motion.img
              src={product.image}
              alt={product.name}
              whileHover="hover"
              variants={imageVariants}
              className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl shadow-xl border border-[#E5E7EB]"
            />
            {product.originalPrice && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute top-4 left-4 bg-[#FF6F61] text-white px-3 py-1 rounded-full font-semibold text-sm"
              >
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </motion.div>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-4">
              <p className="text-3xl font-extrabold text-[#FF6F61]">${product.price.toFixed(2)}</p>
              {product.originalPrice && (
                <p className="text-lg text-[#9CA3AF] line-through">${product.originalPrice.toFixed(2)}</p>
              )}
            </div>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(product.rating) ? "text-[#FBBF24]" : "text-[#D1D5DB]"} />
              ))}
              <span className="text-[#6B7280] text-sm">({product.reviews} reviews)</span>
            </div>

            <p className="text-[#6B7280] text-base leading-relaxed">{product.description}</p>

            {product.options.size.length > 0 && (
              <div>
                <label className="text-[#1F2937] font-medium flex items-center gap-2">
                  <FaTshirt className="text-[#FF6F61]" /> Size:
                </label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.options.size.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${
                        selectedSize === size
                          ? "border-[#FF6F61] bg-[#FF6F61] text-white"
                          : "border-[#D1D5DB] text-[#1F2937] hover:border-[#FF6F61]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {product.options.color.length > 0 && (
              <div>
                <label className="text-[#1F2937] font-medium flex items-center gap-2">
                  <FaPalette className="text-[#FF6F61]" /> Color:
                </label>
                <div className="flex gap-2 mt-2">
                  {product.options.color.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                        selectedColor === color ? "border-[#FF6F61] ring-2 ring-[#FF6F61]" : "border-[#D1D5DB]"
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-4">
              <label className="text-[#1F2937] font-medium">Quantity:</label>
              <div className="flex items-center border-2 border-[#D1D5DB] rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1 text-[#1F2937] hover:bg-[#FF6F61] hover:text-white transition-all duration-300"
                >
                  -
                </button>
                <span className="px-4 py-1 text-[#1F2937] font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => Math.min(product.stock, prev + 1))}
                  className="px-3 py-1 text-[#1F2937] hover:bg-[#FF6F61] hover:text-white transition-all duration-300"
                >
                  +
                </button>
              </div>
            </div>

            <p className={`text-sm font-medium ${product.stock > 0 ? "text-[#388E3C]" : "text-[#EF4444]"}`}>
              {product.stock > 0 ? `Only ${product.stock} left in stock!` : "Out of Stock"}
            </p>

            <p className="text-[#6B7280] text-sm">Free shipping on orders over $50. Estimated delivery: 3-7 days.</p>

            {/* Sticky Buttons Container for Mobile */}
            <div className="sticky-buttons sm:static bottom-0 left-0 right-0 bg-[#F9FAFB] z-20">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className={`flex-1 bg-[#FF6F61] text-white py-2 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#F97316] transition-all duration-300 shadow-lg text-sm sm:text-base ${
                    product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <FaShoppingCart /> Add to Cart
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={handleAddToWishlist}
                  className="p-2 sm:p-3 bg-white text-[#FF6F61] rounded-lg border-2 border-[#FF6F61] hover:bg-[#FF6F61] hover:text-white transition-all duration-300 shadow-lg sm:flex-none"
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
                className={`w-full bg-[#388E3C] text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#16A34A] transition-all duration-300 shadow-lg mt-2 sm:mt-4 text-sm sm:text-base ${
                  product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Buy Now
              </motion.button>
            </div>

            <div className="mt-6">
              <p className="text-[#1F2937] font-medium mb-2">Share this product:</p>
              <div className="flex gap-4 flex-wrap">
                <motion.a href={shareUrls.whatsapp} target="_blank" rel="noopener noreferrer" variants={buttonVariants} whileHover="hover" whileTap="tap" className="p-2 bg-[#25D366] text-white rounded-full hover:bg-[#20BD5A] transition-all duration-300"><FaWhatsapp size={20} /></motion.a>
                <motion.a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer" variants={buttonVariants} whileHover="hover" whileTap="tap" className="p-2 bg-[#3B5998] text-white rounded-full hover:bg-[#2D4373] transition-all duration-300"><FaFacebook size={20} /></motion.a>
                <motion.a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer" variants={buttonVariants} whileHover="hover" whileTap="tap" className="p-2 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1A91DA] transition-all duration-300"><FaTwitter size={20} /></motion.a>
                <motion.a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer" variants={buttonVariants} whileHover="hover" whileTap="tap" className="p-2 bg-[#E1306C] text-white rounded-full hover:bg-[#C13584] transition-all duration-300" onClick={(e) => { e.preventDefault(); alert("Copy the link below and share it on Instagram manually!"); }}><FaInstagram size={20} /></motion.a>
                <motion.a href={shareUrls.pinterest} target="_blank" rel="noopener noreferrer" variants={buttonVariants} whileHover="hover" whileTap="tap" className="p-2 bg-[#BD081C] text-white rounded-full hover:bg-[#A50716] transition-all duration-300"><FaPinterest size={20} /></motion.a>
                <motion.button onClick={handleCopyLink} variants={buttonVariants} whileHover="hover" whileTap="tap" className="p-2 bg-[#6B7280] text-white rounded-full hover:bg-[#4B5563] transition-all duration-300 relative"><FaLink size={20} />{copySuccess && <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#388E3C] text-white text-xs px-2 py-1 rounded">Link Copied!</span>}</motion.button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-4">
              <FaLock className="text-[#388E3C]" />
              <p className="text-[#1F2937] font-medium text-sm">100% Secure Checkout</p>
              <div className="flex gap-2">
                <img src="https://img.icons8.com/color/24/000000/visa.png" alt="Visa" />
                <img src="https://img.icons8.com/color/24/000000/mastercard.png" alt="MasterCard" />
                <img src="https://img.icons8.com/color/24/000000/paypal.png" alt="PayPal" />
              </div>
            </div>

            <div className="mt-10 space-y-6">
              <h2 className="text-2xl font-bold text-[#1F2937] flex items-center gap-2"><FaInfoCircle className="text-[#FF6F61]" /> Product Details</h2>
              <div className="space-y-6 bg-white p-6 rounded-xl shadow-md">
                <div><h3 className="text-xl font-semibold text-[#1F2937] flex items-center gap-2"><FaTshirt className="text-[#FF6F61]" /> Materials</h3><ul className="list-disc list-inside text-[#6B7280] mt-2">{product.materials.map((material, index) => (<li key={index}>{material}</li>))}</ul></div>
                <div><h3 className="text-xl font-semibold text-[#1F2937] flex items-center gap-2"><FaRuler className="text-[#FF6F61]" /> Specifications</h3><ul className="space-y-2 mt-2">{product.specifications.map((spec, index) => (<li key={index} className="text-[#6B7280]"><span className="font-medium text-[#1F2937]">{spec.key}:</span> {spec.value}</li>))}</ul></div>
                <div><h3 className="text-xl font-semibold text-[#1F2937] flex items-center gap-2"><FaBook className="text-[#FF6F61]" /> Usage Instructions</h3><ul className="list-disc list-inside text-[#6B7280] mt-2">{product.usageInstructions.map((instruction, index) => (<li key={index}>{instruction}</li>))}</ul></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Customer Reviews Section */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-16">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Customer Reviews</h2>
          
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 className="text-xl font-semibold text-[#1F2937] mb-4">Write a Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="text-[#1F2937] font-medium">Rating:</label>
                <div className="flex gap-2 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < newReview.rating ? "text-[#FBBF24] cursor-pointer" : "text-[#D1D5DB] cursor-pointer"}
                      onClick={() => setNewReview((prev) => ({ ...prev, rating: i + 1 }))}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[#1F2937] font-medium">Comment:</label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview((prev) => ({ ...prev, comment: e.target.value }))}
                  className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F61]"
                  rows={4}
                  placeholder="Share your thoughts..."
                  required
                />
              </div>
              <div className="flex gap-4">
                <div>
                  <label className="text-[#1F2937] font-medium flex items-center gap-2"><FaCamera /> Upload Images:</label>
                  <input type="file" accept="image/*" multiple onChange={(e) => handleFileUpload(e, "images")} className="mt-1" />
                </div>
                <div>
                  <label className="text-[#1F2937] font-medium flex items-center gap-2"><FaVideo /> Upload Videos:</label>
                  <input type="file" accept="video/*" multiple onChange={(e) => handleFileUpload(e, "videos")} className="mt-1" />
                </div>
              </div>
              <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#FF6F61] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#F97316] transition-all duration-300"
              >
                Submit Review
              </motion.button>
            </form>
          </div>

          <div className="flex justify-between items-center mb-6">
            <p className="text-[#6B7280]">{reviews.length} Reviews</p>
            <div className="flex gap-2">
              <label className="text-[#1F2937] font-medium">Sort by:</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F61]"
              >
                <option value="Most Helpful">Most Helpful</option>
                <option value="Most Recent">Most Recent</option>
                <option value="Highest Rating">Highest Rating</option>
                <option value="Lowest Rating">Lowest Rating</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {sortedReviews.map((review) => (
              <motion.div
                key={review.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-[#1F2937] font-semibold">{review.user}</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < review.rating ? "text-[#FBBF24]" : "text-[#D1D5DB]"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#6B7280] text-sm">{review.date}</p>
                </div>
                <p className="text-[#6B7280] mt-2">{review.comment}</p>
                {review.images && review.images.length > 0 && (
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {review.images.map((img, idx) => (
                      <img key={idx} src={img} alt={`Review ${idx}`} className="w-20 h-20 object-cover rounded-lg" />
                    ))}
                  </div>
                )}
                {review.videos && review.videos.length > 0 && (
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {review.videos.map((vid, idx) => (
                      <video key={idx} src={vid} controls className="w-40 h-24 rounded-lg" />
                    ))}
                  </div>
                )}
                <p className="text-[#6B7280] text-sm mt-2">{review.helpful} people found this helpful</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-16">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Explore Similar Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProducts.map((recProduct) => (
              <motion.div
                key={recProduct.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-[#E5E7EB] transition-all duration-300"
              >
                <img src={recProduct.image} alt={recProduct.name} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold text-[#1F2937]">{recProduct.name}</h3>
                  <p className="text-[#6B7280] text-sm line-clamp-2">{recProduct.description}</p>
                  <p className="text-[#FF6F61] text-lg font-extrabold">${recProduct.price.toFixed(2)}</p>
                  <Link href={`/products/product-details/${recProduct.id}`}>
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-full bg-[#FF6F61] text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#F97316] transition-all duration-300"
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

      {/* CSS for Sticky Buttons */}
      <style jsx>{`
        @media (max-width: 640px) {
          .sticky-buttons {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 8px; /* Reduced padding */
            background: #F9FAFB;
            z-index: 20;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
          }
          .sticky-buttons .mt-2 {
            margin-top: 8px; /* Reduced margin */
          }
          .sticky-buttons button {
            padding: 8px 12px; /* Smaller padding for mobile */
            font-size: 14px; /* Smaller font size */
          }
          .sticky-buttons .p-2 {
            padding: 6px; /* Smaller padding for wishlist button */
          }
        }
        @media (min-width: 641px) {
          .sticky-buttons {
            position: static;
            padding: 0;
            background: none;
            box-shadow: none;
          }
          .sticky-buttons button {
            padding: 12px 16px; /* Restore original padding for desktop */
            font-size: 16px; /* Restore original font size for desktop */
          }
          .sticky-buttons .p-3 {
            padding: 12px; /* Restore original padding for wishlist button */
          }
        }
      `}</style>
    </section>
  );
};

export default ProductDetailsPage;