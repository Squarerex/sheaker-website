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

const PrivacyPolicyPage = () => {
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
            Privacy Policy: How We Handle Your{" "}
            <span className="text-[#FB7E11]">Data</span>
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Transparency matters. Here&apos;s the straight scoop on how we collect,
            use, and protect your information.
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
              This policy applies to all interactions with DropShip Deals,
              whether you&apos;re browsing, shopping, or chatting with us.
            </p>
          </motion.div>

          {/* What We Collect */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              What We Collect
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              We gather only the essentials to make your shopping experience
              smooth. Think of it like taking your order at a drive-thru—no
              fluff, just the necessities.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#666666] text-base">
              <li>
                <strong>Order Details:</strong> Name, shipping address, email,
                and payment info when you buy something.
              </li>
              <li>
                <strong>Browsing Info:</strong> IP address, device type, and
                pages you visit to keep our site running and relevant.
              </li>
              <li>
                <strong>Messages:</strong> Anything you share through our
                contact forms or live chat.
              </li>
            </ul>
          </motion.div>

          {/* How We Use It */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              How We Use Your Data
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              We don’t mess around with your info—it’s strictly for getting your
              orders out the door and keeping things running.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#666666] text-base">
              <li>
                <strong>Process Orders:</strong> To ship your stuff and keep you
                updated on delivery.
              </li>
              <li>
                <strong>Site Functionality:</strong> To fix bugs, tweak
                performance, and show you stuff you might actually like.
              </li>
              <li>
                <strong>Communication:</strong> To reply to your messages or
                send order confirmations—no spam, we promise.
              </li>
            </ul>
          </motion.div>

          {/* Who We Share With */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Who We Share It With
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              Your data stays close—we only share what’s needed to get your
              order to you or keep the lights on.
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#666666] text-base">
              <li>
                <strong>Shipping Partners:</strong> To deliver your orders.
              </li>
              <li>
                <strong>Payment Processors:</strong> To handle transactions
                securely (e.g., PayPal, Stripe).
              </li>
              <li>
                <strong>Legal Requirements:</strong> If the law knocks, we’ve
                got to answer—but only what’s required.
              </li>
            </ul>
          </motion.div>

          {/* Cookies and Tracking */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Cookies and Tracking
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              Yeah, we use cookies—not the edible kind. They help us keep your
              cart saved, analyze traffic, and tweak ads so they’re not totally
              irrelevant. You can opt out or manage preferences in your browser
              settings anytime.
            </p>
          </motion.div>

          {/* Security */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              How We Keep It Safe
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              We use industry-standard encryption (SSL) to lock down your data
              during transmission. Our servers are secured, and access is
              limited to a small, trusted crew. No system’s perfect, but we’re
              always on guard.
            </p>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Your Rights
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              You’ve got control. Here’s what you can do with your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#666666] text-base">
              <li>
                <strong>Access:</strong> Ask us what info we’ve got on you.
              </li>
              <li>
                <strong>Correct:</strong> Tell us if something’s off, and we’ll
                fix it.
              </li>
              <li>
                <strong>Delete:</strong> Request we scrub your data (we’ll
                comply unless legally required to keep it).
              </li>
              <li>
                <strong>Opt-Out:</strong> Unsubscribe from marketing emails
                anytime.
              </li>
            </ul>
            <p className="text-[#666666] text-base leading-relaxed mt-4">
              Drop us a line at{" "}
              <motion.a
                href="mailto:support@dropshipdeals.com"
                whileHover={{ scale: 1.05 }}
                className="text-[#FB7E11] hover:text-[#E56E00] transition-all"
              >
                support@dropshipdeals.com
              </motion.a>{" "}
              to exercise these rights.
            </p>
          </motion.div>

          {/* Updates to This Policy */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4">
              Updates to This Policy
            </h2>
            <p className="text-[#666666] text-base leading-relaxed">
              Things change—we’ll tweak this policy as needed. Updates will be
              posted here, with the effective date at the top. Check back now
              and then, or drop us a line if you’re curious about what’s new.
            </p>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <h2 className="text-2xl font-semibold text-[#333333] mb-4 border-l-4 border-[#FB7E11] pl-4 md:border-l-0 md:pl-0">
              Got Questions About Your Data?
            </h2>
            <p className="text-[#666666] text-base leading-relaxed mb-6">
              We’re just an email away. Reach out if you’ve got concerns or need
              clarity.
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

export default PrivacyPolicyPage;
