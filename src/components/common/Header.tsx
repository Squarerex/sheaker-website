"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaChevronDown,
  FaUserCog,
  FaSignInAlt,
  FaUserPlus,
  FaLink,
  FaFilter,
  FaTrash,
  FaPlus,
  FaMinus
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import headerLogo from "../../../public/Sheaker_orange_portrait_lockup_1.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HeaderNavbar from "./HeaderNav";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    category: "",
    priceRange: "",
    brand: "",
    query: ""
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);
  const toggleCartDrawer = () => setIsCartDrawerOpen(!isCartDrawerOpen);
  const toggleWishlistDrawer = () => setIsWishlistDrawerOpen(!isWishlistDrawerOpen);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  // Filter options
  const categories = ["All", "Running", "Casual", "Sports", "Formal"];
  const priceRanges = ["All", "0-50", "50-100", "100-200", "200+"];
  const brands = ["All", "Nike", "Adidas", "Puma", "Reebok", "New Balance"];

  // Demo cart and wishlist data remains the same
  const cartItems = [
    { id: 1, name: "Running Shoes", price: 59.99, quantity: 1, image: headerLogo },
    { id: 2, name: "Casual T-Shirt", price: 19.99, quantity: 2, image: headerLogo },
  ];

  const wishlistItems = [
    { id: 1, name: "Running Shoes", price: 59.99, image: headerLogo },
    { id: 2, name: "Casual T-Shirt", price: 19.99, image: headerLogo },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSearchFilterChange = (key:string, value: string) => {
    setSearchFilters(prev => ({ ...prev, [key]: value }));
  };

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <header className="bg-gradient-to-r from-[#FB7E11] to-[#E56E00] text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center focus:outline-none rounded">
          <Image
            src={headerLogo}
            alt="Sheaker Logo"
            width={180}
            height={80}
            className="cursor-pointer transition-transform hover:scale-105"
            priority
          />
        </Link>

        {/* Search Bar with Filters - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={toggleUserDropdown}
              className="flex items-center p-2 rounded-full hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-expanded={isUserDropdownOpen}
              aria-label="User menu"
            >
              <FaUser size={18} />
              <FaChevronDown className="ml-1 text-xs" />
            </button>
            <AnimatePresence>
              {isUserDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 bg-white text-[#1F1F1F] shadow-xl rounded-lg w-48 py-2 border border-gray-100 z-90"
                >
                  <Link
                    href="/my-orders"
                    className=" px-4 py-2 text-sm hover:bg-[#FB7E11] rounded-sm hover:text-white transition-all flex items-center"
                  >
                    <FaLink  className="mr-2" />
                   My Orders
                  </Link>
                  <Link
                    href="/account/settings"
                    className=" px-4 py-2 text-sm hover:bg-[#FB7E11] rounded-sm hover:text-white transition-all flex items-center"
                  >
                    <FaUserCog className="mr-2" />
                    Account Settings
                  </Link>
                  <Link
                    href="/auth/login"
                    className=" px-4 py-2 text-sm hover:bg-[#FB7E11] rounded-sm hover:text-white transition-all flex items-center"
                  >
                    <FaSignInAlt className="mr-2" />
                    Sign In
                  </Link>
                  <Link
                    href="/auth/sign-up"
                    className=" px-4 py-2 text-sm hover:bg-[#FB7E11] rounded-sm hover:text-white transition-all flex items-center"
                  >
                    <FaUserPlus className="mr-2" />
                    Register
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Wishlist */}
          <button
            onClick={toggleWishlistDrawer}
            className="p-2 rounded-full hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 relative"
            aria-label="Open wishlist"
          >
            <FaHeart size={18} />
            <motion.span 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            >
              {wishlistItems.length}
            </motion.span>
          </button>

          {/* Cart Drawer */}
          <button
            onClick={toggleCartDrawer}
            className="p-2 rounded-full hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 relative"
            aria-label="Open cart"
          >
            <FaShoppingCart size={18} />
            <motion.span 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            >
              {cartItems.length}
            </motion.span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FB7E11] text-white shadow-lg"
          >
           <div className="flex flex-col space-y-3 p-4">
            {/* Existing navigation links */}
            <Link
              href="/"
              className="text-sm font-medium hover:text-[#FB7E11] transition-all px-2 py-1 rounded"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium hover:text-[#FB7E11] transition-all px-2 py-1 rounded"
            >
              Products
            </Link>
            <Link
              href="/hot-deals"
              className="text-sm font-medium hover:text-[#FB7E11] transition-all px-2 py-1 rounded"
            >
              Deals
            </Link>
            <Link
              href="/about-us"
              className="text-sm font-medium hover:text-[#FB7E11] transition-all px-2 py-1 rounded"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-[#FB7E11] transition-all px-2 py-1 rounded"
            >
              Contact
            </Link>

            {/* Mobile Search with Filters */}
            <div className="flex flex-col space-y-3 pt-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-full text-[#1F1F1F] bg-white focus:outline-none focus:ring-2 focus:ring-[#0836C1] shadow-sm transition-all"
                  aria-label="Search for products"
                  value={searchFilters.query}
                  onChange={(e) => handleSearchFilterChange("query", e.target.value)}
                />
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#4D0A51] hover:text-[#0836C1]"
                  onClick={toggleFilter}
                >
                  <FaFilter size={20} />
                </button>
              </div>

              {isFilterOpen && (
                <div className="space-y-3 bg-white/10 p-3 rounded-lg">
                  <Select
                    value={searchFilters.category}
                    onValueChange={(value) => handleSearchFilterChange("category", value)}
                  >
                    <SelectTrigger className="bg-white text-[#1F1F1F]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={searchFilters.priceRange}
                    onValueChange={(value) => handleSearchFilterChange("priceRange", value)}
                  >
                    <SelectTrigger className="bg-white text-[#1F1F1F]">
                      <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                      {priceRanges.map((range) => (
                        <SelectItem key={range} value={range.toLowerCase()}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={searchFilters.brand}
                    onValueChange={(value) => handleSearchFilterChange("brand", value)}
                  >
                    <SelectTrigger className="bg-white text-[#1F1F1F]">
                      <SelectValue placeholder="Brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand} value={brand.toLowerCase()}>
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {/* Existing mobile user actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleUserDropdown}
                className="p-2 rounded-full hover:bg-white/20 transition-all"
                aria-label="User menu"
              >
                <FaUser size={18} />
              </button>
              <button
                onClick={toggleWishlistDrawer}
                className="p-2 rounded-full hover:bg-white/20 transition-all relative"
                aria-label="Open wishlist"
              >
                <FaHeart size={18} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              </button>
              <button
                onClick={toggleCartDrawer}
                className="p-2 rounded-full hover:bg-white/20 transition-all relative"
                aria-label="Open cart"
              >
                <FaShoppingCart size={18} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Enhanced Cart Drawer */}
    <Drawer open={isCartDrawerOpen} onClose={toggleCartDrawer}>
      <DrawerContent className="bg-gradient-to-b from-white to-gray-50 text-[#1F1F1F] max-h-[80vh] rounded-t-xl">
        <DrawerHeader className="border-b border-gray-100">
          <DrawerTitle className="text-xl font-bold text-[#FB7E11]">
            Your Shopping Cart
          </DrawerTitle>
          <DrawerDescription className="text-gray-600">
            {cartItems.length} items in your cart
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="p-4 space-y-4 overflow-y-auto">
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex p-4">
                    <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover p-2"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                      <p className="text-[#FB7E11] font-medium mt-1">${item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#FB7E11] hover:text-white transition-colors">
                            <FaMinus size={12} />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[#FB7E11] hover:text-white transition-colors">
                            <FaPlus size={12} />
                          </button>
                        </div>
                        
                        <button
                          className="text-gray-400 hover:text-red-500 transition-colors p-2"
                        >
                          <FaTrash size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center">
              <FaShoppingCart size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400 mt-2">Add items to get started</p>
            </div>
          )}
        </div>
        
        <DrawerFooter className="border-t border-gray-100 bg-white py-4">
          {cartItems.length > 0 && (
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Shipping</span>
                <span>$4.99</span>
              </div>
              <div className="flex justify-between items-center font-bold text-lg pt-2 border-t border-dashed border-gray-200">
                <span>Total</span>
                <span className="text-[#FB7E11]">${(totalPrice + 4.99).toFixed(2)}</span>
              </div>
            </div>
          )}
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              className="w-full bg-[#FB7E11] hover:bg-[#E56E00] text-white py-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </Button>
          </motion.div>
          
          <button
            onClick={toggleCartDrawer}
            className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium mt-2"
          >
            Continue Shopping
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

    {/* Enhanced Wishlist Drawer */}
    <Drawer open={isWishlistDrawerOpen} onClose={toggleWishlistDrawer}>
      <DrawerContent className="bg-gradient-to-b from-white to-gray-50 text-[#1F1F1F] max-h-[80vh] rounded-t-xl">
        <DrawerHeader className="border-b border-gray-100">
          <DrawerTitle className="text-xl font-bold text-[#FB7E11] flex items-center">
            <FaHeart className="mr-2 text-red-500" /> Your Wishlist
          </DrawerTitle>
          <DrawerDescription className="text-gray-600">
            {wishlistItems.length} items saved for later
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="p-4 grid grid-cols-1 gap-4 overflow-y-auto">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute top-3 right-3 z-10">
                    <button className="w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                      <FaHeart size={14} />
                    </button>
                  </div>
                  
                  <div className="h-40 bg-gray-50 relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-4 transform group-hover:scale-110 transition-transform duration-500"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-[#FB7E11] font-medium">${item.price.toFixed(2)}</p>
                    
                    <div className="mt-4 flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-[#FB7E11] hover:bg-[#E56E00] text-white py-2 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                      >
                        <FaShoppingCart className="mr-2" size={14} />
                        Add to Cart
                      </motion.button>
                      
                      <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                        <FaTrash size={14} className="text-gray-500" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="py-8 text-center">
              <FaHeart size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Your wishlist is empty</p>
              <p className="text-gray-400 mt-2">Save items you love for later</p>
            </div>
          )}
        </div>
        
        <DrawerFooter className="border-t border-gray-100 bg-white py-4">
          {wishlistItems.length > 0 && (
            <Button
              className="w-full bg-gray-800 hover:bg-black text-white py-5 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all"
            >
              Add All to Cart
            </Button>
          )}
          
          <button
            onClick={toggleWishlistDrawer}
            className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium mt-2"
          >
            Continue Shopping
          </button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    
    {/* Navbar */}
    <HeaderNavbar />
  </header>
  );
}

export default Header;