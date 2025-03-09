"use client";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  country: string;
  phoneNumber: string;
  billingAddress: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  city?: string;
  state?: string;
  country?: string;
  phoneNumber?: string;
  billingAddress?: string;
  password?: string;
  confirmPassword?: string;
}

const SignUpPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    country: "",
    phoneNumber: "",
    billingAddress: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number is invalid (e.g., +1234567890)";
    }
    if (!formData.billingAddress.trim())
      newErrors.billingAddress = "Billing address is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Sign-up attempted with:", formData);
    // Add actual sign-up logic here (e.g., Firebase, NextAuth.js)
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign-Up clicked");
    // Add Google OAuth sign-up logic here
  };

  const handleFacebookSignUp = () => {
    console.log("Facebook Sign-Up clicked");
    // Add Facebook OAuth sign-up logic here
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

      <div className="relative z-10 max-w-5xl w-full">
        {/* Sign-Up Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-2xl p-8 space-y-8 border-t-4 border-[#FB7E11]"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl font-extrabold text-[#333333]">
              Join <span className="text-[#FB7E11]">Sheaker Deals</span>
            </h2>
            <p className="text-[#666666] text-base">
              Create an account to unlock the best deals.
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#333333]">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-[#333333] font-medium"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                      placeholder="John"
                      required
                      aria-label="First name"
                    />
                    {errors.firstName && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.firstName}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                {/* Last Name */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-[#333333] font-medium"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                      placeholder="Doe"
                      required
                      aria-label="Last name"
                    />
                    {errors.lastName && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.lastName}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Email */}
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
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                    placeholder="your@email.com"
                    required
                    aria-label="Email address"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#333333]">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* City */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block text-[#333333] font-medium"
                  >
                    City
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.city ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                      placeholder="New York"
                      required
                      aria-label="City"
                    />
                    {errors.city && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.city}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                {/* State */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    htmlFor="state"
                    className="block text-[#333333] font-medium"
                  >
                    State / Province
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.state ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                      placeholder="NY"
                      required
                      aria-label="State or province"
                    />
                    {errors.state && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.state}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                {/* Country */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    htmlFor="country"
                    className="block text-[#333333] font-medium"
                  >
                    Country
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.country ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                      placeholder="United States"
                      required
                      aria-label="Country"
                    />
                    {errors.country && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.country}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Phone Number */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-[#333333] font-medium"
                >
                  Phone Number (preferably WhatsApp)
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                    placeholder="+1234567890"
                    required
                    aria-label="Phone number"
                  />
                  {errors.phoneNumber && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.phoneNumber}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Billing Address */}
            <div className="space-y-4">
              {/* <h3 className="text-lg font-semibold text-[#333333]">
                Billing Address
              </h3> */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label
                  htmlFor="billingAddress"
                  className="block text-[#333333] text-lg font-semibold"
                >
                  Billing Address
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                  <input
                    type="text"
                    id="billingAddress"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                      errors.billingAddress
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                    placeholder="123 Main St, Apt 4B"
                    required
                    aria-label="Billing address"
                  />
                  {errors.billingAddress && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.billingAddress}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Password */}
            <div className="space-y-4">
              {/* <h3 className="text-lg font-semibold text-[#333333]">Password</h3> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Password */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-[#333333] text-lg font-semibold"
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
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                      placeholder="••••••••"
                      required
                      aria-label="Password"
                    />
                    {errors.password && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.password}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                {/* Confirm Password */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-[#333333] font-medium"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666]" />
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                        errors.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all bg-gray-50`}
                      placeholder="••••••••"
                      required
                      aria-label="Confirm password"
                    />
                    {errors.confirmPassword && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.confirmPassword}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Sign-Up Button */}
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
              Sign Up
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

          {/* Social Sign-Up Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Google Sign-Up */}
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
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center gap-3 bg-gray-100 text-[#333333] px-6 py-3 rounded-lg font-semibold hover:border-[#FB7E11] border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all duration-300"
            >
              <FaGoogle className="text-[#DB4437]" />
              Sign Up with Google
            </motion.button>

            {/* Facebook Sign-Up */}
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
              onClick={handleFacebookSignUp}
              className="w-full flex items-center justify-center gap-3 bg-gray-100 text-[#333333] px-6 py-3 rounded-lg font-semibold hover:border-[#FB7E11] border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all duration-300"
            >
              <FaFacebookF className="text-[#4267B2]" />
              Sign Up with Facebook
            </motion.button>
          </div>

          {/* Sign-In Link */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-[#666666] text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-[#FB7E11] hover:text-[#E56E00] font-semibold transition-all"
              >
                Sign In Here
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignUpPage;
