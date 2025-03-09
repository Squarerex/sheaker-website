"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaRocket } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Sample product data (replace with dynamic data)
interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const orderItems: OrderItem[] = [
  { id: 1, name: "Luxury Smartwatch", price: 299.99, quantity: 1 },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.7)" },
  tap: { scale: 0.95 },
  success: { backgroundColor: "#FFD700", scale: 1.1, rotate: 360, transition: { duration: 0.5 } },
};

const particleVariants = {
  animate: {
    y: [0, -15, 0],
    opacity: [0.5, 1, 0.5],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
  },
};

const ProductPurchasePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    orderNotes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const shippingCost = 5.99;
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // try {
    //   const response = await fetch("/api/checkout", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ ...formData, orderItems, total }),
    //   });

    //   if (response.ok) {
    //     setIsSuccess(true);
    //     setTimeout(() => router.push("/payment-success"), 2000); // Redirect after animation
    //   } else {
    //     throw new Error("Order failed");
    //   }
    // } catch (error) {
    //   console.error("Error processing order:", error);
    //   alert("Order failed. Please try again.");
    //   setIsSubmitting(false);
    // }
    router.push("/payment-success"); 
  };

  return (
    <section className="bg-[#1E1E2F] mt-32 min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Cosmic Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/20 via-[#FF3366]/20 to-transparent opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />
      {/* Orbiting Particles */}
      <motion.div
        className="absolute top-20 left-1/4 text-[#00D4FF] text-2xl"
        variants={particleVariants}
        animate="animate"
      >
        ✧
      </motion.div>
      <motion.div
        className="absolute top-40 right-1/4 text-[#FF3366] text-2xl"
        variants={particleVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        ✧
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-4xl md:text-6xl font-extrabold text-[#FFFFFF] mb-12 text-center font-orbitron"
        >
          Secure <span className="text-[#00D4FF] drop-shadow-[0_0_10px_#00D4FF]">Checkout</span>
        </motion.h1>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            {/* Billing Information */}
            <div className="bg-[#2D2D3F] rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-[#00D4FF]/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-[#FFFFFF] mb-4 font-orbitron">Billing Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-poppins">
                <div>
                  <label className="block text-[#FFFFFF] font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-[#1E1E2F] text-[#FFFFFF] border border-[#B0B0B0]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[#FFFFFF] font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-[#1E1E2F] text-[#FFFFFF] border border-[#B0B0B0]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[#FFFFFF] font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-[#1E1E2F] text-[#FFFFFF] border border-[#B0B0B0]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-[#2D2D3F] rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-[#00D4FF]/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-[#FFFFFF] mb-4 font-orbitron">Shipping Address</h2>
              <div className="space-y-4 font-poppins">
                <div>
                  <label className="block text-[#FFFFFF] font-medium mb-1">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-[#1E1E2F] text-[#FFFFFF] border border-[#B0B0B0]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all duration-300"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#FFFFFF] font-medium mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-[#1E1E2F] text-[#FFFFFF] border border-[#B0B0B0]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[#FFFFFF] font-medium mb-1">State / Province</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-[#1E1E2F] text-[#FFFFFF] border border-[#B0B0B0]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#FFFFFF] font-medium mb-1">ZIP / Postal Code</label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-[#1E1E2F] text-[#FFFFFF] border border-[#B0B0B0]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[#FFFFFF] font-medium mb-1">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-[#1E1E2F] text-[#FFFFFF] border border-[#B0B0B0]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all duration-300"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      {/* Add more countries as needed */}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Notes */}
            <div className="bg-[#2D2D3F] rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-[#00D4FF]/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-[#FFFFFF] mb-4 font-orbitron">Order Notes</h2>
              <div className="font-poppins">
                <label className="block text-[#FFFFFF] font-medium mb-1">Special Instructions (Optional)</label>
                <textarea
                  name="orderNotes"
                  value={formData.orderNotes}
                  onChange={handleInputChange}
                  placeholder="e.g., Leave package at the front door"
                  className="w-full p-3 bg-[#1E1E2F] text-[#FFFFFF] border border-[#B0B0B0]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D4FF] transition-all duration-300 h-32 resize-none"
                />
              </div>
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            variants={itemVariants}
            className="bg-[#2D2D3F] rounded-xl shadow-lg p-6 h-fit sticky top-20 border-2 border-transparent hover:border-[#00D4FF]/50 transition-all duration-300"
            animate={{ scale: [1, 1.02, 1], transition: { repeat: Infinity, duration: 2 } }}
          >
            <h2 className="text-2xl font-bold text-[#FFFFFF] mb-4 font-orbitron">Order Summary</h2>
            <div className="space-y-4 font-poppins">
              {orderItems.map((item) => (
                <div key={item.id} className="flex justify-between text-[#B0B0B0]">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between text-[#B0B0B0]">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#B0B0B0]">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#FFFFFF] font-bold text-lg border-t border-[#B0B0B0]/50 pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleSubmit}
              disabled={isSubmitting}
              animate={isSuccess ? "success" : ""}
              className="w-full bg-[#00D4FF] text-[#1E1E2F] py-3 rounded-lg font-semibold font-poppins flex items-center justify-center gap-2 mt-6 transition-all duration-300 shadow-md disabled:opacity-50"
            >
              {isSubmitting ? (
                isSuccess ? (
                  <>
                    <FaRocket /> Order Launched!
                  </>
                ) : (
                  "Launching..."
                )
              ) : (
                <>
                  <FaArrowRight /> Place Order
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPurchasePage;