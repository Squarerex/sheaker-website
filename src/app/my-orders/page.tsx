"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaTimes, FaExclamationTriangle } from "react-icons/fa";
import { useState } from "react";

// Sample order data (replace with API fetch)
interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: "Pending Payment" | "Paid";
  items: OrderItem[];
  shippingAddress: string;
  paymentMethod: string;
}

const orders: Order[] = [
  {
    id: "ORD001",
    date: "2025-03-01",
    total: 299.99,
    status: "Paid",
    items: [
      { id: 1, name: "Luxury Smartwatch", quantity: 1, price: 299.99 },
    ],
    shippingAddress: "123 Main St, New York, NY 10001",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD002",
    date: "2025-03-02",
    total: 129.99,
    status: "Pending Payment",
    items: [
      { id: 2, name: "Gold-Tone Earbuds", quantity: 1, price: 129.99 },
    ],
    shippingAddress: "456 Elm St, Los Angeles, CA 90001",
    paymentMethod: "PayPal",
  },
  {
    id: "ORD003",
    date: "2025-03-03",
    total: 179.99,
    status: "Paid",
    items: [
      { id: 3, name: "Designer Backpack", quantity: 1, price: 179.99 },
    ],
    shippingAddress: "789 Oak St, Chicago, IL 60601",
    paymentMethod: "Credit Card",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const drawerVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

const MyOrdersPage = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleResolveIssue = (orderId: string) => {
    console.log(`Resolving issue for order ${orderId}`);
    // Add logic to handle issue resolution (e.g., open a support modal or redirect)
  };

  return (
    <section className="bg-[#1A1A1A] mt-32 min-h-screen py-20 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden">
      {/* Neon Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00D4FF]/10 via-[#FF3366]/10 to-transparent opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFFFFF] tracking-tight">
            My <span className="text-[#00D4FF] drop-shadow-[0_0_5px_#00D4FF]">Orders</span>
          </h1>
          <p className="text-[#B0B0B0] text-lg mt-4">Track and manage your order history</p>
        </motion.div>

        {/* Orders List */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
          <div className="bg-[#2D2D2D] rounded-lg shadow-lg overflow-hidden">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-5 gap-4 px-6 py-4 bg-[#3A3A3A] text-[#B0B0B0] font-semibold text-sm uppercase">
              <div>Order ID</div>
              <div>Date</div>
              <div>Total</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            {/* Orders */}
            {orders.map((order) => (
              <motion.div
                key={order.id}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 px-6 py-4 border-b border-[#3A3A3A] last:border-b-0 hover:bg-[#3A3A3A]/50 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedOrder(order)}
              >
                <div className="text-[#FFFFFF] font-medium">{order.id}</div>
                <div className="text-[#B0B0B0]">{order.date}</div>
                <div className="text-[#FFFFFF] font-medium">${order.total.toFixed(2)}</div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      order.status === "Paid"
                        ? "bg-[#00C853]/20 text-[#00C853]"
                        : "bg-[#FFC107]/20 text-[#FFC107]"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="flex items-center justify-start md:justify-end">
                  <motion.button
                    whileHover={{ scale: 1.1, color: "#00D4FF" }}
                    whileTap={{ scale: 0.9 }}
                    className="text-[#B0B0B0] hover:text-[#00D4FF] transition-colors duration-300"
                  >
                    <FaEye size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Order Details Drawer */}
        <AnimatePresence>
          {selectedOrder && (
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-full md:w-1/3 bg-[#2D2D2D] shadow-2xl p-6 overflow-y-auto z-50"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#FFFFFF]">Order #{selectedOrder.id}</h2>
                <motion.button
                  whileHover={{ scale: 1.1, color: "#FF3366" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedOrder(null)}
                  className="text-[#B0B0B0] hover:text-[#FF3366] transition-colors duration-300"
                >
                  <FaTimes size={24} />
                </motion.button>
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <div>
                  <p className="text-[#B0B0B0] text-sm">Date</p>
                  <p className="text-[#FFFFFF] font-medium">{selectedOrder.date}</p>
                </div>
                <div>
                  <p className="text-[#B0B0B0] text-sm">Total</p>
                  <p className="text-[#FFFFFF] font-medium">${selectedOrder.total.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-[#B0B0B0] text-sm">Status</p>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedOrder.status === "Paid"
                        ? "bg-[#00C853]/20 text-[#00C853]"
                        : "bg-[#FFC107]/20 text-[#FFC107]"
                    }`}
                  >
                    {selectedOrder.status}
                  </span>
                </div>
                <div>
                  <p className="text-[#B0B0B0] text-sm">Shipping Address</p>
                  <p className="text-[#FFFFFF] font-medium">{selectedOrder.shippingAddress}</p>
                </div>
                <div>
                  <p className="text-[#B0B0B0] text-sm">Payment Method</p>
                  <p className="text-[#FFFFFF] font-medium">{selectedOrder.paymentMethod}</p>
                </div>

                {/* Order Items */}
                <div>
                  <p className="text-[#B0B0B0] text-sm mb-2">Items</p>
                  {selectedOrder.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center py-2 border-b border-[#3A3A3A] last:border-b-0"
                    >
                      <div>
                        <p className="text-[#FFFFFF] font-medium">{item.name}</p>
                        <p className="text-[#B0B0B0] text-sm">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-[#FFFFFF] font-medium">${item.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                {/* Resolve Issue Button */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleResolveIssue(selectedOrder.id)}
                  className="w-full bg-[#00D4FF] text-[#1A1A1A] py-3 rounded-lg font-semibold hover:bg-[#FF3366] transition-all duration-300 shadow-md"
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaExclamationTriangle /> Resolve Issue
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay for Drawer */}
        {selectedOrder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setSelectedOrder(null)}
          />
        )}
      </div>
    </section>
  );
};

export default MyOrdersPage;