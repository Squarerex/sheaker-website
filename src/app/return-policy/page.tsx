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

const ReturnsPolicyPage = () => {
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
            Returns Policy: Making Things{" "}
            <span className="text-[#FB7E11]">Right</span>
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Not happy with your order? Here&apos;s the rundown on how we handle
            returns and refunds.
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
              This policy applies to all purchases made through DropShip Deals.
              We aim to keep the process fair and straightforward.
            </p>
          </motion.div>

          {/* Eligibility for Returns */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Eligibility for Returns
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              We accept returns within 30 days of delivery, provided the item
              meets these conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#666666] text-base">
              <li>The item is unused and in its original condition.</li>
              <li>
                The item is in its original packaging, with tags and labels
                intact.
              </li>
              <li>
                You have proof of purchase (e.g., order confirmation email or
                receipt).
              </li>
            </ul>
            <p className="text-[#666666] text-base leading-relaxed mt-4">
              Some items aren’t eligible for returns—see the “Non-Returnable
              Items” section below.
            </p>
          </motion.div>

          {/* Return Process */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              How to Return an Item
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              Follow these steps to initiate a return:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-[#666666] text-base">
              <li>
                <strong>Contact Us:</strong> Reach out within 30 days of
                delivery via email at{" "}
                <motion.a
                  href="mailto:support@dropshipdeals.com"
                  whileHover={{ scale: 1.05 }}
                  className="text-[#FB7E11] hover:text-[#E56E00] transition-all"
                >
                  support@dropshipdeals.com
                </motion.a>{" "}
                or through our live chat.
              </li>
              <li>
                <strong>Get Approval:</strong> We’ll provide a return
                authorization and instructions. Don’t ship anything back without
                this first.
              </li>
              <li>
                <strong>Pack It Up:</strong> Securely pack the item in its
                original packaging, including all accessories.
              </li>
              <li>
                <strong>Ship It:</strong> Send it back using the provided
                shipping label (if applicable) or a carrier of your choice.
              </li>
              <li>
                <strong>Get Confirmation:</strong> Once we receive and inspect
                the item, we’ll process your refund or exchange within 5-7
                business days.
              </li>
            </ol>
          </motion.div>

          {/* Refunds */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Refunds
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              Once your return is approved, here’s how refunds work:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#666666] text-base">
              <li>
                <strong>Original Payment Method:</strong> Refunds go back to the
                payment method used for the purchase.
              </li>
              <li>
                <strong>Processing Time:</strong> Expect the refund to hit your
                account within 5-10 business days after we process it.
              </li>
              <li>
                <strong>Deducted Costs:</strong> Original shipping fees aren’t
                refunded unless the return is due to our error.
              </li>
            </ul>
          </motion.div>

          {/* Non-Returnable Items */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Non-Returnable Items
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              Some items can’t be returned due to hygiene, safety, or other
              reasons:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#666666] text-base">
              <li>Personalized or custom-made products.</li>
              <li>Items marked as “final sale” at the time of purchase.</li>
              <li>
                Underwear, swimwear, or other intimate apparel (unless
                defective).
              </li>
              <li>Opened software, digital downloads, or gift cards.</li>
            </ul>
          </motion.div>

          {/* Shipping Costs for Returns */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Shipping Costs for Returns
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              Unless the return is due to our error (e.g., wrong item shipped,
              defective product), you’ll cover the return shipping costs. If
              it’s on us, we’ll provide a prepaid shipping label or reimburse
              you for reasonable shipping expenses.
            </p>
          </motion.div>

          {/* Damaged, Defective, or Wrong Items */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Damaged, Defective, or Wrong Items
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              If your item arrives damaged, defective, or isn’t what you
              ordered, let us know within 7 days of delivery. We’ll cover return
              shipping and either replace the item or issue a full refund, your
              choice. Contact us with photos of the issue to speed things up.
            </p>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4 md:border-l-0 md:pl-0">
              Need to Start a Return?
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              Drop us a line, and we’ll walk you through the process.
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
                Contact Support
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

export default ReturnsPolicyPage;
