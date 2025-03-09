"use client";
import { motion } from "framer-motion";
import { FaCheckCircle, FaShoppingBag, FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } },
};

const checkmarkVariants = {
  hidden: { opacity: 0, rotate: -180, scale: 0 },
  visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 0 15px rgba(76, 175, 80, 0.5)" },
  tap: { scale: 0.95 },
};

const PaymentSuccessPage = () => {
  useEffect(() => {
    // Confetti burst on page load
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#4CAF50", "#FFD700", "#FF5722"],
    });

    // Additional burst after 1 second
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.4 },
        colors: ["#4CAF50", "#FFD700"],
      });
    }, 1000);
  }, []);

  // Generic order details (replace with dynamic data from your backend)
  const orderDetails = {
    orderId: "ORD123456",
    date: "March 07, 2025",
    total: 149.99,
    email: "user@example.com",
  };

  return (
    <section className="bg-[#F7F9F8] mt-32 min-h-screen flex items-center justify-center py-44 px-4 font-montserrat relative overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/20 via-[#FFD700]/20 to-[#FF5722]/20 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 max-w-md w-full mx-auto">
        {/* Header */}
        <motion.div variants={headerVariants} className="text-center mb-8">
          <motion.div
            variants={checkmarkVariants}
            className="text-[#4CAF50] text-6xl mx-auto mb-4"
            animate={{ textShadow: ["0 0 10px #4CAF50", "0 0 20px #4CAF50", "0 0 10px #4CAF50"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaCheckCircle />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#212121] tracking-tight">
            Payment <span className="text-[#4CAF50]">Confirmed!</span>
          </h1>
          <p className="text-[#757575] text-lg mt-2">
            Your galactic haul is on its way, prepare for landing!
          </p>
        </motion.div>

        {/* Order Details Card */}
        <motion.div
          variants={cardVariants}
          className="bg-[#FFFFFF] rounded-xl shadow-2xl p-6 border-2 border-[#4CAF50]/20"
          whileHover={{ boxShadow: "0 0 20px rgba(76, 175, 80, 0.3)" }}
        >
          <h2 className="text-2xl font-bold text-[#212121] mb-4">Order Summary</h2>
          <div className="space-y-3 text-[#757575]">
            <div className="flex justify-between">
              <span>Order ID:</span>
              <span className="font-medium text-[#212121]">{orderDetails.orderId}</span>
            </div>
            <div className="flex justify-between">
              <span>Date:</span>
              <span className="font-medium text-[#212121]">{orderDetails.date}</span>
            </div>
            <div className="flex justify-between">
              <span>Total:</span>
              <span className="font-medium text-[#212121]">${orderDetails.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Email:</span>
              <span className="font-medium text-[#212121]">{orderDetails.email}</span>
            </div>
            <div className="text-center text-[#757575] mt-4">
              <p>A confirmation has been sent to your inbox.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <Link href="/my-orders">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex-1 bg-[#4CAF50] text-[#FFFFFF] p-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:text-[#212121] transition-all duration-300 shadow-md"
              >
                <FaShoppingBag /> View Order
              </motion.button>
            </Link>
            <Link href="/shop">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex-1 bg-[#FF5722] text-[#FFFFFF] p-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:text-[#212121] transition-all duration-300 shadow-md"
              >
                <FaArrowRight /> Continue Shopping
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-10 -left-10 text-[#FFD700] text-4xl"
          animate={{ rotate: [0, 360], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          ★
        </motion.div>
        <motion.div
          className="absolute -bottom-10 -right-10 text-[#4CAF50] text-4xl"
          animate={{ rotate: [360, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
        >
          ★
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PaymentSuccessPage;