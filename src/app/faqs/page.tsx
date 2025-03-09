"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

// FAQ data
const faqs = [
  {
    question: "What is dropshipping, and how does it work?",
    answer:
      "Dropshipping is a retail method where you don't keep products in stock. Instead, when you sell a product, we purchase the item from a third party and ship it directly to the customer. You only pay for what you sell, reducing risk and upfront costs.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on the product and destination. Typically, orders are processed within 1-3 business days, and delivery can take 5-15 business days for international shipping. Expedited options are available at checkout.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most products. If you're not satisfied with your purchase, you can return it within 30 days of delivery for a refund or exchange, provided the item is unused and in its original packaging. Contact our support team to initiate a return.",
  },
  {
    question: "Are the products authentic and high-quality?",
    answer:
      "Yes! We carefully vet our suppliers to ensure all products meet quality standards. While we offer trending items at affordable prices, we prioritize authenticity and customer satisfaction. If you encounter any issues, let us know!",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number on our website's tracking page or directly on the carrier's site to monitor your package's progress.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Absolutely! We ship to most countries worldwide. Shipping costs and delivery times will vary based on your location, and you can view these details at checkout. Customs fees may apply for international orders.",
  },
  {
    question: "Can I cancel or modify my order after placing it?",
    answer:
      "If your order hasn't shipped yet, we can usually cancel or modify it. Please contact our support team within 24 hours of placing your order to request changes. Once shipped, cancellation may not be possible, but we can assist with returns.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods, including major credit cards (Visa, MasterCard), PayPal, and Apple Pay. All transactions are secure and encrypted for your safety.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@dropshipdeals.com or through our live chat feature, available 24/7 on our website. We aim to respond to all inquiries within 24 hours.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees here! The price you see at checkout includes all applicable taxes and shipping costs. For international orders, customs duties may apply, which are the responsibility of the buyer.",
  },
];

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#E5E5E5] pt-52 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(45deg,#FB7E11_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333]">
            Straight Answers to Your{" "}
            <span className="text-[#FB7E11]">Questions</span>
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Dig into the details below to understand how we roll—shipping,
            returns, and everything in between.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 ${
                openIndex === index
                  ? "border-[#FB7E11] shadow-lg"
                  : "border-transparent"
              } transition-all duration-300`}
            >
              {/* Question */}
              <motion.div
                whileHover={{
                  backgroundColor: "#F5F5F5",
                  boxShadow: "0 0 15px rgba(251, 126, 17, 0.3)",
                }}
                className="flex items-center justify-between px-6 py-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaQuestionCircle className="text-[#FB7E11] text-xl" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-[#333333]">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {openIndex === index ? (
                    <FaChevronUp className="text-[#FB7E11] text-lg" />
                  ) : (
                    <FaChevronDown className="text-[#FB7E11] text-lg" />
                  )}
                </motion.div>
              </motion.div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, scaleY: 0 }}
                    animate={{ height: "auto", opacity: 1, scaleY: 1 }}
                    exit={{ height: 0, opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-[#666666] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA for More Queries */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-[#666666] text-lg">
            Need more details? Drop us a line or hit up our live chat.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(251, 126, 17, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FB7E11] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#E56E00] focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all duration-300"
            >
              <Link href="/contact">Send a Message</Link>
            </motion.button>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-[#FB7E11] font-semibold hover:text-[#E56E00] transition-all"
            >
              <FaEnvelope />
              <span>Chat with Us</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
