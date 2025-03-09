"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";
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

const TermsOfServicePage = () => {
  return (
    <section className="bg-[#E5E5E5] pt-52 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#333333]">
            Terms of Service: The Rules of{" "}
            <span className="text-[#FB7E11]">Engagement</span>
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            These terms lay out how we operate and what we expect when you shop
            with us. Let’s keep things clear and fair.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Effective Date */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4">
              Effective Date: March 4, 2025
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              These terms apply to all interactions with DropShip Deals, whether
              you&apos;re browsing, ordering, or reaching out.
            </p>
          </motion.div>

          {/* Acceptance of Terms */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Acceptance of Terms
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              Using our site means you’re agreeing to these terms. If you don’t
              vibe with them, no hard feelings—just don’t use the site. We’ll
              update these rules as needed, so check back now and then.
            </p>
          </motion.div>

          {/* Use of Service */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Use of Service
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              Our site’s for personal shopping—no reselling our stuff without
              permission. Don’t mess with our systems, post shady stuff, or
              break laws while you’re here. We can suspend your access if you
              don’t play fair.
            </p>
          </motion.div>

          {/* Orders and Products */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Orders and Products
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              When you place an order, we’ll do our best to get it to you. But
              sometimes stuff’s out of stock or delayed—life happens. We’ll let
              you know if there’s an issue.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#666666] text-base">
              <li>
                <strong>Accuracy:</strong> We try to keep product descriptions
                spot-on, but we don’t guarantee perfection.
              </li>
              <li>
                <strong>Availability:</strong> If something’s unavailable, we’ll
                refund or substitute with your okay.
              </li>
              <li>
                <strong>Pricing:</strong> Prices can change without notice—grab
                ‘em while they’re hot.
              </li>
            </ul>
          </motion.div>

          {/* Payments */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Payments
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              We accept major credit cards, PayPal, and Apple Pay. You’re
              responsible for any taxes or customs fees on international orders.
              Payment’s due when you order—no IOUs here.
            </p>
          </motion.div>

          {/* Shipping */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Shipping
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              We ship to most countries, with costs and delivery times shown at
              checkout. Once your order’s out the door, we’ll send a tracking
              number. Delays can happen—we’ll keep you posted if they do.
            </p>
          </motion.div>

          {/* Returns and Refunds */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Returns and Refunds
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              Got an issue? We’ve got a 30-day return policy for most items.
              Contact us within 30 days of delivery for a refund or
              exchange—items must be unused and in original packaging. You cover
              return shipping unless it’s our mistake.
            </p>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Intellectual Property
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              Everything on our site—logos, images, text—is ours or licensed to
              us. Don’t copy, sell, or mess with it without our okay. Same goes
              for our name and branding.
            </p>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Limitation of Liability
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              We’re not liable for stuff beyond our control—like shipping
              delays, product defects, or your misuse of items. Our liability
              caps at the price of your order. Use our site at your own risk.
            </p>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Governing Law
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              These terms are governed by the laws of [Your Jurisdiction, e.g.,
              California, USA]. Any disputes get settled there—no road trips
              required.
            </p>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Changes to These Terms
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              We might tweak these terms down the road. Changes get posted here,
              with the effective date at the top. Keep an eye out or drop us a
              line if you’re curious about updates.
            </p>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4 md:border-l-0 md:pl-0">
              Need to Talk About These Terms?
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              If something’s unclear or you’ve got questions, we’re a message
              away.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(251, 126, 17, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FB7E11] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#E56E00] focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <FaEnvelope />
                Contact Us
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Back to Home CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#FB7E11] font-semibold text-lg hover:text-[#E56E00] transition-all flex items-center justify-center gap-2"
          >
            <span>Back to Home</span>
            <FaArrowRight className="animate-bounce" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfServicePage;
