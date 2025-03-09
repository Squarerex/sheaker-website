"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaArrowRight, FaStar, FaTimes, FaArrowUp } from "react-icons/fa";
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
  category: string;
  isBestSeller: boolean;
  isNewArrival: boolean;
}

const products: Product[] = [
  { id: 1, name: "Luxury Smartwatch", price: 299.99, image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid", description: "A premium smartwatch.", rating: 4.9, category: "Electronics", isBestSeller: true, isNewArrival: false },
  { id: 2, name: "Gold-Tone Earbuds", price: 129.99, image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid", description: "Elegant earbuds.", rating: 4.7, category: "Electronics", isBestSeller: false, isNewArrival: true },
  { id: 3, name: "Designer Backpack", price: 179.99, image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid", description: "Stylish backpack.", rating: 4.8, category: "Fashion", isBestSeller: true, isNewArrival: false },
  { id: 4, name: "Elegant Sunglasses", price: 99.99, image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid", description: "Timeless shades.", rating: 4.6, category: "Fashion", isBestSeller: false, isNewArrival: true },
  { id: 5, name: "Premium Hoodie", price: 89.99, image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid", description: "Soft luxury hoodie.", rating: 4.5, category: "Fashion", isBestSeller: false, isNewArrival: false },
  { id: 6, name: "Elite Speaker", price: 149.99, image: "https://img.freepik.com/free-photo/3d-render-vs-company-metal-letter-logo-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-7192.jpg?ga=GA1.1.343461677.1733769822&semt=ais_hybrid", description: "High-quality sound.", rating: 4.7, category: "Electronics", isBestSeller: true, isNewArrival: true },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = (index: number) => ({
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 } },
});

const filterVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: 100, transition: { duration: 0.3, ease: "easeIn" } },
};

const AllProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortOption, setSortOption] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [showBestSellers, setShowBestSellers] = useState<boolean>(false);
  const [showNewArrivals, setShowNewArrivals] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let filtered = [...products];
    if (categoryFilter !== "All") filtered = filtered.filter((p) => p.category === categoryFilter);
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (showBestSellers) filtered = filtered.filter((p) => p.isBestSeller);
    if (showNewArrivals) filtered = filtered.filter((p) => p.isNewArrival);

    if (sortOption === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (sortOption === "price-desc") filtered.sort((a, b) => b.price - a.price);
    if (sortOption === "rating") filtered.sort((a, b) => b.rating - a.rating);
    if (sortOption === "alphabetical") filtered.sort((a, b) => a.name.localeCompare(b.name));

    setFilteredProducts(filtered);
  }, [sortOption, categoryFilter, priceRange, showBestSellers, showNewArrivals]);

  const handleAddToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <section className="bg-[#0D1B2A] mt-32 min-h-screen py-20 px-4 sm:px-6 lg:px-8 font-poppins relative overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#FFB703]/10 via-[#FF6F61]/10 to-transparent opacity-30"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#E0E1DD] tracking-tight">
            All <motion.span
              initial={{ y: 10 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-[#FFB703] drop-shadow-[0_0_10px_#FFB703]"
            >
              Products
            </motion.span>
          </h1>
          <p className="text-[#E0E1DD] text-lg mt-4 opacity-80">Explore our vast collection of premium goods</p>
        </motion.div> */}

        {/* Top Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="sticky top-0 z-20 bg-[#1B263B]/90 backdrop-blur-md rounded-lg p-4 mb-8 flex justify-between items-center shadow-lg"
        >
          <div className="text-[#E0E1DD] font-medium">Sort By:</div>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-[#2D2D2D] text-[#E0E1DD] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB703] transition-all"
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </motion.div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Sticky Sidebar Filters */}
          <motion.div
            variants={filterVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block sticky top-20 h-fit w-64 bg-[#1B263B]/90 backdrop-blur-md rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-[#E0E1DD] text-xl font-semibold mb-4">Filters</h3>
            {/* Category Filter */}
            <div className="mb-6">
              <label className="text-[#E0E1DD] font-medium">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full bg-[#2D2D2D] text-[#E0E1DD] mt-2 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
              >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
              </select>
            </div>
            {/* Price Range Filter */}
            <div>
              <label className="text-[#E0E1DD] font-medium">Price Range</label>
              <div className="flex justify-between text-[#E0E1DD] text-sm mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                className="w-full accent-[#FFB703] mt-2"
              />
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                className="w-full accent-[#FFB703] mt-2"
              />
            </div>
          </motion.div>

          {/* Product Grid */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex-1 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants(index)}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(255, 183, 3, 0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="break-inside-avoid bg-[#1B263B] rounded-xl shadow-lg overflow-hidden group border-2 border-transparent hover:border-[#FFB703]/50"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => setSelectedProduct(product)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer brightness-90 group-hover:brightness-100"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.div
                    className="absolute top-4 right-4 bg-[#FFB703] text-[#1B263B] px-3 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ y: -20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <FaStar />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </motion.div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#E0E1DD] group-hover:text-[#FFB703] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-[#E0E1DD] text-sm opacity-80">{product.description}</p>
                  <p className="text-[#FFB703] text-lg font-extrabold">${product.price.toFixed(2)}</p>
                  <div className="flex gap-4 mt-4">
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleAddToCart(product.id)}
                      className="flex items-center gap-2 bg-[#FFB703] text-[#1B263B] px-4 py-2 rounded-lg font-semibold hover:bg-[#FF6F61] transition-all duration-300 shadow-md"
                    >
                      <FaShoppingCart /> Add to Cart
                    </motion.button>
                    <Link href={`/products/product-details/${product.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 border-2 border-[#FFB703] text-[#FFB703] px-4 py-2 rounded-lg font-semibold hover:bg-[#FFB703] hover:text-[#1B263B] transition-all duration-300"
                      >
                        <FaArrowRight /> Shop Now
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-30"
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255, 183, 3, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowBestSellers(!showBestSellers)}
            className={`px-4 py-2 rounded-full font-semibold text-[#1B263B] ${showBestSellers ? "bg-[#FF6F61]" : "bg-[#FFB703]"} shadow-md`}
          >
            Best Sellers
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255, 183, 3, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowNewArrivals(!showNewArrivals)}
            className={`px-4 py-2 rounded-full font-semibold text-[#1B263B] ${showNewArrivals ? "bg-[#FF6F61]" : "bg-[#FFB703]"} shadow-md`}
          >
            New Arrivals
          </motion.button>
        </motion.div>

        {/* Quick View Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 flex items-center justify-center z-50"
            >
              <div className="bg-[#1B263B] rounded-xl shadow-2xl p-6 max-w-lg w-full mx-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-[#E0E1DD]">{selectedProduct.name}</h3>
                  <motion.button
                    whileHover={{ scale: 1.1, color: "#FF6F61" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProduct(null)}
                    className="text-[#E0E1DD]"
                  >
                    <FaTimes size={24} />
                  </motion.button>
                </div>
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <p className="text-[#E0E1DD] text-sm opacity-80 mb-2">{selectedProduct.description}</p>
                <p className="text-[#FFB703] text-lg font-extrabold mb-4">${selectedProduct.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mb-4">
                  <FaStar className="text-[#FFB703]" />
                  <span className="text-[#E0E1DD]">{selectedProduct.rating}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 183, 3, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToCart(selectedProduct.id)}
                  className="w-full bg-[#FFB703] text-[#1B263B] py-3 rounded-lg font-semibold hover:bg-[#FF6F61] transition-all duration-300"
                >
                  Add to Cart
                </motion.button>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black"
                onClick={() => setSelectedProduct(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollY > 300 ? 1 : 0 }}
          className="fixed bottom-8 right-8 z-30"
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255, 183, 3, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#FFB703] text-[#1B263B] p-4 rounded-full shadow-md"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AllProductsPage;