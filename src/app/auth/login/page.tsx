"use client";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";
import { useState } from "react";
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

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign-in attempted with:", formData);
    // Add actual sign-in logic here (e.g., Firebase, NextAuth.js)
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
    // Add Google OAuth sign-in logic here
  };

  const handleFacebookSignIn = () => {
    console.log("Facebook Sign-In clicked");
    // Add Facebook OAuth sign-in logic here
  };

  return (
    <section className="bg-[#E5E5E5] mt-32 min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Background Gradient Animation */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FB7E11_0%,transparent_70%)] opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <div className="relative z-10 max-w-md w-full">
        {/* Sign-In Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-2xl p-8 space-y-8 border-t-4 border-[#FB7E11]"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl font-extrabold text-[#333333]">
              Sign In to <span className="text-[#FB7E11]">DropShip Deals</span>
            </h2>
            <p className="text-[#666666] text-base">
              Access your account and dive into the best deals.
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <motion.div variants={itemVariants} className="space-y-2">
              <label
                htmlFor="email"
                className="block text-[#333333] font-medium"
              >
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50"
                  placeholder="your@email.com"
                  required
                  aria-label="Email address"
                />
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div variants={itemVariants} className="space-y-2">
              <label
                htmlFor="password"
                className="block text-[#333333] font-medium"
              >
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50"
                  placeholder="••••••••"
                  required
                  aria-label="Password"
                />
              </div>
            </motion.div>

            {/* Forgot Password Link */}
            <motion.div variants={itemVariants} className="text-right">
              <Link
                href="/forgot-password"
                className="text-[#FB7E11] hover:text-[#E56E00] text-sm transition-all"
              >
                Forgot Password?
              </Link>
            </motion.div>

            {/* Sign-In Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(251, 126, 17, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#FB7E11] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E56E00] focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all duration-300"
            >
              Sign In
            </motion.button>
          </form>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <span className="absolute bg-[#E5E5E5] px-4 text-[#666666] text-sm">
              or
            </span>
            <div className="w-full h-px bg-gray-300"></div>
          </motion.div>

          {/* Social Sign-In Buttons */}
          <div className="space-y-4">
            {/* Google Sign-In */}
            <motion.button
              variants={itemVariants}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(251, 126, 17, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-3 bg-gray-100 text-[#333333] px-6 py-3 rounded-lg font-semibold hover:border-[#FB7E11] border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all duration-300"
            >
              <FaGoogle className="text-[#DB4437]" />
              Sign In with Google
            </motion.button>

            {/* Facebook Sign-In */}
            <motion.button
              variants={itemVariants}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(251, 126, 17, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleFacebookSignIn}
              className="w-full flex items-center justify-center gap-3 bg-gray-100 text-[#333333] px-6 py-3 rounded-lg font-semibold hover:border-[#FB7E11] border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all duration-300"
            >
              <FaFacebookF className="text-[#4267B2]" />
              Sign In with Facebook
            </motion.button>
          </div>

          {/* Sign-Up Link */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-[#666666] text-sm">
              Don’t have an account?{" "}
              <Link
                href="/auth/sign-up"
                className="text-[#FB7E11] hover:text-[#E56E00] font-semibold transition-all"
              >
                Sign Up Here
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignInPage;
