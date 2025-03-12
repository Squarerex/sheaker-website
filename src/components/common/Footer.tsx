"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaLock,
  FaShieldAlt,
  FaCheckCircle,
  FaApple,
  FaGoogle,
  FaCreditCard
} from "react-icons/fa";
import Link from "next/link";

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  return (
    <footer className="bg-[#2D2D2D] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#FB7E11]">About Us</h3>
            <p className="text-gray-300 text-sm">
              We’re a leading dropshipping platform, bringing you the trendiest
              products at unbeatable prices. Shop smart, ship fast!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-[#FB7E11] font-semibold flex items-center gap-2"
            >
              <Link href="/about-us">Learn More</Link>
              <FaArrowRight className="text-sm animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#FB7E11]">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Shop", path: "/shop" },
                { name: "FAQ", path: "/faqs" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 10, color: "#FB7E11" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-300 hover:text-[#FB7E11]"
                >
                  <Link href={link.path}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#FB7E11]">Support</h3>
            <ul className="space-y-2">
              {[
                { name: "Return Policy", path: "/return-policy" },
                { name: "Shipping", path: "/shipping-policies" },
                { name: "Terms", path: "/terms" },
                { name: "Privacy", path: "/privacy" },
              ].map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 10, color: "#FB7E11" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-300 hover:text-[#FB7E11]"
                >
                  <Link href={link.path}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Signup and Social Media */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-[#FB7E11]">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for exclusive deals and updates!
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-[#333333] bg-white focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all"
                aria-label="Email for newsletter"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-[#FB7E11] text-white rounded-lg hover:bg-[#E56E00] transition-all focus:outline-none focus:ring-2 focus:ring-[#FB7E11]"
              >
                <FaArrowRight className="animate-bounce" />
              </motion.button>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              {[
                {
                  Icon: FaFacebookF,
                  path: "https://facebook.com/dropshipdeals",
                  name: "Facebook",
                },
                {
                  Icon: FaTwitter,
                  path: "https://twitter.com/dropshipdeals",
                  name: "Twitter",
                },
                {
                  Icon: FaInstagram,
                  path: "https://instagram.com/dropshipdeals",
                  name: "Instagram",
                },
                {
                  Icon: FaLinkedinIn,
                  path: "https://linkedin.com/company/dropshipdeals",
                  name: "LinkedIn",
                },
              ].map(({ Icon, path, name }, index) => (
                <motion.a
                  key={index}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-300 hover:text-[#FB7E11]"
                  aria-label={`Follow us on ${name}`}
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-8 h-px bg-gray-600"
        />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Privacy Policy */}
          <motion.p variants={itemVariants} className="text-gray-300 text-sm text-center">
            We value your privacy. Your personal and payment information is securely stored and never shared.{" "}
            <Link href="/privacy-policy" className="text-[#FB7E11] hover:underline">
              Privacy Policy
            </Link>
          </motion.p>

          {/* Payment Methods */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-4">
            <FaCcVisa className="text-2xl text-gray-300 hover:text-[#FB7E11] transition-all" />
            <FaCcMastercard className="text-2xl text-gray-300 hover:text-[#FB7E11] transition-all" />
            <FaCcPaypal className="text-2xl text-gray-300 hover:text-[#FB7E11] transition-all" />
            <FaApple className="text-2xl text-gray-300 hover:text-[#FB7E11] transition-all" />
            <FaGoogle className="text-2xl text-gray-300 hover:text-[#FB7E11] transition-all" />
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-1">
              <FaLock className="text-[#FB7E11]" />
              <span className="text-xs text-gray-300">SSL Encryption</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCreditCard className="text-[#FB7E11]" />
              <span className="text-xs text-gray-300">Secure Payments</span>
            </div>
            <div className="flex items-center gap-1">
              <FaShieldAlt className="text-[#FB7E11]" />
              <span className="text-xs text-gray-300">Privacy Protection</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCheckCircle className="text-[#FB7E11]" />
              <span className="text-xs text-gray-300">Money-Back Guarantee</span>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.p variants={itemVariants} className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Sheaker Deals. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;