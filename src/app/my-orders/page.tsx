"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaTimes, FaExclamationTriangle, FaShippingFast, FaBox, FaWarehouse, FaCheckCircle } from "react-icons/fa";
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
  trackingStatus: "Processing" | "Shipped" | "In Transit" | "Delivered";
  estimatedDelivery?: string;
  trackingNumber?: string;
  trackingHistory?: Array<{
    date: string;
    status: string;
    location: string;
  }>;
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
    trackingStatus: "Delivered",
    estimatedDelivery: "2025-03-05",
    trackingNumber: "TRK7891234",
    trackingHistory: [
      { date: "2025-03-01", status: "Order Processed", location: "Warehouse" },
      { date: "2025-03-02", status: "Shipped", location: "Distribution Center" },
      { date: "2025-03-04", status: "In Transit", location: "New York" },
      { date: "2025-03-05", status: "Delivered", location: "New York" }
    ]
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
    trackingStatus: "Processing",
    estimatedDelivery: "Pending Payment",
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
    trackingStatus: "In Transit",
    estimatedDelivery: "2025-03-14",
    trackingNumber: "TRK4567890",
    trackingHistory: [
      { date: "2025-03-03", status: "Order Processed", location: "Warehouse" },
      { date: "2025-03-05", status: "Shipped", location: "Distribution Center" },
      { date: "2025-03-08", status: "In Transit", location: "Chicago Hub" }
    ]
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

// Tracking step icons
const trackingIcons = {
  "Processing": <FaWarehouse className="text-lg" />,
  "Shipped": <FaBox className="text-lg" />,
  "In Transit": <FaShippingFast className="text-lg" />,
  "Delivered": <FaCheckCircle className="text-lg" />
};

const trackingColors = {
  "Processing": "#FFC107",
  "Shipped": "#2196F3",
  "In Transit": "#9C27B0",
  "Delivered": "#00C853"
};

const MyOrdersPage = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleResolveIssue = (orderId: string) => {
    console.log(`Resolving issue for order ${orderId}`);
    // Add logic to handle issue resolution (e.g., open a support modal or redirect)
  };

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
    setTimeout(() => setIsVisible(true), 100);
  };

  const handleCloseDrawer = () => {
    setIsVisible(false);
    setTimeout(() => setSelectedOrder(null), 300);
  };

  const getTrackingStatusIcon = (status: string) => {
    return trackingIcons[status as keyof typeof trackingIcons] || <FaWarehouse />;
  };

  const getTrackingColor = (status: string) => {
    return trackingColors[status as keyof typeof trackingColors] || "#FFC107";
  };

  return (
    <section className="bg-[#121212] min-h-screen py-32 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#121212] via-[#20203A] to-[#121212] opacity-70" />
      
      {/* Glass Panel */}
      <div className="absolute top-10 left-0 right-0 h-64 bg-gradient-to-r from-[#00D4FF]/5 to-[#FF3366]/5 backdrop-blur-3xl rounded-3xl mx-8 transform -skew-y-2" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] to-[#FF3366]">Orders</span>
          </h1>
          <p className="text-[#B0B0B0] text-lg mt-3">View status and track your purchases</p>
        </motion.div>

        {/* Orders List */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
          {orders.map((order) => (
            <motion.div
              key={order.id}
              variants={itemVariants}
              className="bg-[#1E1E2D] rounded-xl overflow-hidden border border-[#2D2D3A] hover:border-[#3D3D4A] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div 
                className="grid grid-cols-1 md:grid-cols-8 gap-4 p-5 cursor-pointer"
                onClick={() => handleOrderClick(order)}
              >
                <div className="md:col-span-2">
                  <div className="text-[#8E8E9A] text-xs uppercase tracking-wider mb-1">Order ID</div>
                  <div className="text-white font-medium">{order.id}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-[#8E8E9A] text-xs uppercase tracking-wider mb-1">Date</div>
                  <div className="text-[#D0D0D5]">{order.date}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-[#8E8E9A] text-xs uppercase tracking-wider mb-1">Total</div>
                  <div className="text-white font-medium">${order.total.toFixed(2)}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-[#8E8E9A] text-xs uppercase tracking-wider mb-1">Status</div>
                  <div className="flex items-center">
                    <span
                      className="flex items-center rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        backgroundColor: `${getTrackingColor(order.trackingStatus)}20`,
                        color: getTrackingColor(order.trackingStatus)
                      }}
                    >
                      {getTrackingStatusIcon(order.trackingStatus)}
                      <span className="ml-1.5">{order.trackingStatus}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Order progress indicator (mini version) */}
              <div className="px-5 pb-5 pt-2">
                <div className="w-full h-1.5 bg-[#2A2A3A] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ 
                      width: order.trackingStatus === "Processing" ? "25%" : 
                             order.trackingStatus === "Shipped" ? "50%" :
                             order.trackingStatus === "In Transit" ? "75%" : "100%" 
                    }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ backgroundColor: getTrackingColor(order.trackingStatus) }}
                    className="h-full rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Order Details Drawer */}
        <AnimatePresence>
          {selectedOrder && (
            <>
              <motion.div
                variants={drawerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                exit="exit"
                className="fixed top-0 right-0 h-full w-full md:w-2/5 lg:w-1/3 bg-[#1A1A28] shadow-2xl p-6 overflow-y-auto z-50 border-l border-[#2D2D3A]"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Order #{selectedOrder.id}</h2>
                  <motion.button
                    whileHover={{ scale: 1.1, color: "#FF3366" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCloseDrawer}
                    className="text-[#B0B0B0] hover:text-[#FF3366] transition-colors duration-300"
                  >
                    <FaTimes size={20} />
                  </motion.button>
                </div>

                {/* Order Tracking Timeline */}
                <div className="mb-8 bg-[#20203A] p-5 rounded-xl">
                  <h3 className="text-white text-lg font-medium mb-4">Order Tracking</h3>
                  
                  {selectedOrder.status === "Pending Payment" ? (
                    <div className="flex items-center justify-center py-4 text-[#FFC107]">
                      <FaExclamationTriangle className="mr-2" />
                      <p>Payment required to process order</p>
                    </div>
                  ) : (
                    <>
                      {/* Tracking number and estimated delivery */}
                      {selectedOrder.trackingNumber && (
                        <div className="flex justify-between mb-4">
                          <div>
                            <p className="text-[#8E8E9A] text-xs">Tracking Number</p>
                            <p className="text-white font-medium">{selectedOrder.trackingNumber}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[#8E8E9A] text-xs">Estimated Delivery</p>
                            <p className="text-white font-medium">{selectedOrder.estimatedDelivery}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Tracking steps */}
                      <div className="relative flex justify-between mb-2">
                        {["Processing", "Shipped", "In Transit", "Delivered"].map((step, index) => {
                          const isCompleted = 
                            (selectedOrder.trackingStatus === "Processing" && index === 0) ||
                            (selectedOrder.trackingStatus === "Shipped" && index <= 1) ||
                            (selectedOrder.trackingStatus === "In Transit" && index <= 2) ||
                            (selectedOrder.trackingStatus === "Delivered" && index <= 3);
                          
                          const isActive = selectedOrder.trackingStatus === step;
                          
                          return (
                            <div key={step} className="flex flex-col items-center relative z-10">
                              <div 
                                className={`w-8 h-8 rounded-full flex items-center justify-center
                                  ${isCompleted 
                                    ? `bg-${getTrackingColor(isActive ? step : selectedOrder.trackingStatus)} text-white` 
                                    : 'bg-[#2A2A3A] text-[#8E8E9A]'
                                  }`}
                                style={{
                                  backgroundColor: isCompleted ? getTrackingColor(isActive ? step : selectedOrder.trackingStatus) : '#2A2A3A'
                                }}
                              >
                                {getTrackingStatusIcon(step)}
                              </div>
                              <p className={`text-xs mt-1 ${isActive ? 'text-white font-medium' : 'text-[#8E8E9A]'}`}>
                                {step}
                              </p>
                            </div>
                          );
                        })}
                        
                        {/* Progress bar */}
                        <div className="absolute top-4 left-0 w-full h-0.5 bg-[#2A2A3A] -z-0">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ 
                              width: selectedOrder.trackingStatus === "Processing" ? "8%" : 
                                    selectedOrder.trackingStatus === "Shipped" ? "36%" :
                                    selectedOrder.trackingStatus === "In Transit" ? "64%" : "100%" 
                            }}
                            transition={{ duration: 1.5 }}
                            style={{ backgroundColor: getTrackingColor(selectedOrder.trackingStatus) }}
                            className="h-full"
                          />
                        </div>
                      </div>
                      
                      {/* Tracking history */}
                      {selectedOrder.trackingHistory && (
                        <div className="mt-6 space-y-3">
                          {selectedOrder.trackingHistory.map((event, index) => (
                            <div key={index} className="flex">
                              <div className="mr-3 w-12 text-xs text-[#8E8E9A]">{event.date.split('-')[2]}</div>
                              <div className="flex-1">
                                <p className="text-white text-sm">{event.status}</p>
                                <p className="text-[#8E8E9A] text-xs">{event.location}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Order Summary */}
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <p className="text-[#8E8E9A] text-xs uppercase tracking-wider mb-1">Date</p>
                      <p className="text-white">{selectedOrder.date}</p>
                    </div>
                    <div>
                      <p className="text-[#8E8E9A] text-xs uppercase tracking-wider mb-1">Payment</p>
                      <p className="text-white">{selectedOrder.paymentMethod}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-[#8E8E9A] text-xs uppercase tracking-wider mb-1">Shipping Address</p>
                    <p className="text-white">{selectedOrder.shippingAddress}</p>
                  </div>

                  {/* Order Items */}
                  <div className="mt-6">
                    <p className="text-[#8E8E9A] text-xs uppercase tracking-wider mb-3">Items</p>
                    <div className="bg-[#20203A] rounded-lg overflow-hidden">
                      {selectedOrder.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center p-4 border-b border-[#2D2D3A] last:border-b-0"
                        >
                          <div>
                            <p className="text-white font-medium">{item.name}</p>
                            <p className="text-[#8E8E9A] text-sm">Qty: {item.quantity}</p>
                          </div>
                          <p className="text-white font-medium">${item.price.toFixed(2)}</p>
                        </div>
                      ))}
                      
                      <div className="p-4 bg-[#252540] flex justify-between">
                        <p className="text-white font-medium">Total</p>
                        <p className="text-white font-bold">${selectedOrder.total.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3 mt-8">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="py-3 rounded-lg font-medium bg-[#2A2A3A] text-white hover:bg-[#35354A] transition-colors duration-300"
                    >
                      Contact Support
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleResolveIssue(selectedOrder.id)}
                      className="py-3 rounded-lg font-medium bg-gradient-to-r from-[#00D4FF] to-[#2196F3] text-white hover:opacity-90 transition-all duration-300 shadow-md"
                    >
                      Track Package
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={handleCloseDrawer}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MyOrdersPage;