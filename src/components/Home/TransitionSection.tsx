"use client";
import { motion } from "framer-motion";
import { FaShippingFast, FaTags, FaStar, FaArrowDown } from "react-icons/fa";

const TransitionSection = () => {
  // Smooth scroll function to navigate to the product gallery
  const scrollToProductGallery = () => {
    const productGallery = document.getElementById("product-gallery");
    if (productGallery) {
      productGallery.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants for staggered entrance of elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative bg-gradient-to-b from-[#666666] to-[#999999] py-16 overflow-hidden mt-22">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight"
          >
            Discover <span className="text-[#FB7E11]">Hot Products</span> Ready
            to Drop
          </motion.h2>

          {/* Perks/Categories Preview */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {/* Perk 1: Fast Shipping */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-[#4D4D4D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaShippingFast className="text-[#FB7E11] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Swift Delivery
              </h3>
              <p className="text-gray-300 text-sm">
                Your orders arrive fast, no matter where you are.
              </p>
            </motion.div>

            {/* Perk 2: Hot Deals */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-[#4D4D4D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaTags className="text-[#FB7E11] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Steal Deals
              </h3>
              <p className="text-gray-300 text-sm">
                Grab the best discounts before they vanish.
              </p>
            </motion.div>

            {/* Perk 3: Top Rated */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 bg-[#4D4D4D] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaStar className="text-[#FB7E11] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Best Picks
              </h3>
              <p className="text-gray-300 text-sm">
                Shop crowd-favorite items with top reviews.
              </p>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(251, 126, 17, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProductGallery}
              className="flex items-center mx-auto gap-3 bg-[#FB7E11] text-white px-8 py-4 rounded-full text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#FB7E11] focus:ring-offset-2 transition-all duration-300"
            >
              <span>Dive In</span>
              <FaArrowDown className="animate-bounce" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransitionSection;
