"use client";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    quote:
      "Amazing products and super fast shipping! I got my order in just a few days and the quality is top-notch.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    quote:
      "The deals here are unbeatable. I’ve saved so much on trendy gadgets and fashion items. Highly recommend!",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    quote:
      "Customer service is fantastic! They helped me track my order and resolved my issue in no time.",
    rating: 4.5,
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 4,
    name: "Emily Brown",
    quote:
      "I love the variety of products available. It’s my go-to store for unique finds and gifts!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
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

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel navigation
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Determine visible testimonials based on screen size (simplified carousel)
  const visibleTestimonials = () => {
    const sliced = testimonials.slice(currentIndex, currentIndex + 3);
    if (sliced.length < 3) {
      return [...sliced, ...testimonials.slice(0, 3 - sliced.length)];
    }
    return sliced;
  };

  return (
    <section className="bg-[#D1D5DB] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333]">
            What Our <span className="text-[#FB7E11]">Customers Say</span>
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Hear from our happy customers who’ve shopped the best deals and
            experienced top-notch service!
          </p>
        </motion.div>

        {/* Testimonials Grid / Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Carousel Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials().map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white rounded-xl shadow-lg p-6 relative transition-all"
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="absolute top-4 left-4 text-[#FB7E11] text-2xl opacity-20" />

                {/* Avatar */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-[#333333]">
                      {testimonial.name}
                    </h4>
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={`text-sm ${
                            index < Math.floor(testimonial.rating)
                              ? "text-[#FB7E11]"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[#666666] text-sm italic leading-relaxed">
                &quot;{testimonial.quote}&quot;
                </p>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-3 bg-[#FB7E11] text-white rounded-full hover:bg-[#E56E00] transition-all focus:outline-none focus:ring-2 focus:ring-[#FB7E11]"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-3 bg-[#FB7E11] text-white rounded-full hover:bg-[#E56E00] transition-all focus:outline-none focus:ring-2 focus:ring-[#FB7E11]"
              aria-label="Next testimonial"
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
