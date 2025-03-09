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
  FaLink 
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
import HeaderNavbar from "./HeaderNav";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);
  const toggleCartDrawer = () => setIsCartDrawerOpen(!isCartDrawerOpen);
  const toggleWishlistDrawer = () =>
    setIsWishlistDrawerOpen(!isWishlistDrawerOpen);

  // Demo cart data
  const cartItems = [
    {
      id: 1,
      name: "Running Shoes",
      price: 59.99,
      quantity: 1,
      image: headerLogo,
    },
    {
      id: 2,
      name: "Casual T-Shirt",
      price: 19.99,
      quantity: 2,
      image: headerLogo,
    },
  ];

  // Demo wishlist data
  const wishlistItems = [
    { id: 1, name: "Running Shoes", price: 59.99, image: headerLogo },
    { id: 2, name: "Casual T-Shirt", price: 19.99, image: headerLogo },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <header className="bg-gradient-to-r from-[#FB7E11] to-[#E56E00] text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center focus:outline-none rounded"
        >
          <Image
            src={headerLogo}
            alt="Sheaker Logo"
            width={180}
            height={80}
            className="cursor-pointer transition-transform hover:scale-105"
            priority
          />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow mx-6 max-w-xl relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-5 py-2.5 rounded-full text-[#1F1F1F] bg-white shadow-sm transition-all duration-300"
            aria-label="Search for products"
          />
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#4D0A51] hover:text-[#0836C1] transition-all focus:outline-none"
            aria-label="Search"
          >
            <FaSearch size={20} />
          </button>
        </div>

        {/* User Actions */}
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
                  className="absolute right-0 mt-2 bg-white text-[#1F1F1F] shadow-xl rounded-lg w-48 py-2 border border-gray-100"
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
            className="p-2 rounded-full hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Open wishlist"
          >
            <FaHeart size={18} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {wishlistItems.length}
            </span>
          </button>

          {/* Cart Drawer */}
          <button
            onClick={toggleCartDrawer}
            className="p-2 rounded-full hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Open cart"
          >
            <FaShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
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
              <div className="flex flex-col space-y-3 pt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-full text-[#1F1F1F] bg-white focus:outline-none focus:ring-2 focus:ring-[#0836C1] shadow-sm transition-all"
                  aria-label="Search for products"
                />
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
                    className="p-2 rounded-full hover:bg-white/20 transition-all"
                    aria-label="Open wishlist"
                  >
                    <FaHeart size={18} />
                  </button>
                  <button
                    onClick={toggleCartDrawer}
                    className="p-2 rounded-full hover:bg-white/20 transition-all"
                    aria-label="Open cart"
                  >
                    <FaShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <Drawer open={isCartDrawerOpen} onClose={toggleCartDrawer}>
        <DrawerContent className="bg-white text-[#1F1F1F] max-h-[80vh]">
          <DrawerHeader>
            <DrawerTitle className="text-lg font-semibold">
              Your Cart
            </DrawerTitle>
            <DrawerDescription>
              Review your items before checkout.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4 overflow-y-auto">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </Button>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
          </div>
          <DrawerFooter>
            {cartItems.length > 0 && (
              <div className="flex justify-between items-center">
                <p className="font-medium">Total:</p>
                <p className="font-bold text-lg">${totalPrice.toFixed(2)}</p>
              </div>
            )}
            <Button
              className="w-full bg-[#FB7E11] hover:bg-[#E56E00] transition-all"
              disabled={cartItems.length === 0}
            >
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Wishlist Drawer */}
      <Drawer open={isWishlistDrawerOpen} onClose={toggleWishlistDrawer}>
        <DrawerContent className="bg-white text-[#1F1F1F] max-h-[80vh]">
          <DrawerHeader>
            <DrawerTitle className="text-lg font-semibold">
              Your Wishlist
            </DrawerTitle>
            <DrawerDescription>
              Your favorite items are saved here.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4 overflow-y-auto">
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="hover:shadow-lg transition-shadow"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">{item.name}</CardTitle>
                      <CardDescription>
                        ${item.price.toFixed(2)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        className="w-full bg-[#FB7E11] hover:bg-[#E56E00] transition-all"
                        onClick={() => alert(`Added ${item.name} to cart`)}
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                Your wishlist is empty.
              </p>
            )}
          </div>
        </DrawerContent>
      </Drawer>

      {/* Navbar */}
      <HeaderNavbar />
    </header>
  );
};

export default Header;
