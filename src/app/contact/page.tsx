"use client";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";

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

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#E5E5E5] pt-44 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333]">
            Get in <span className="text-[#FB7E11]">Touch</span>
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            We’re here to help! Whether you have questions, feedback, or need
            support, feel free to reach out.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-[#333333] mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-[#333333] font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all"
                  placeholder="Your Name"
                  required
                  aria-label="Your name"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-[#333333] font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all"
                  placeholder="Your Email"
                  required
                  aria-label="Your email"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div whileHover={{ scale: 1.01 }} className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-[#333333] font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all"
                  placeholder="Your Message"
                  rows={5}
                  required
                  aria-label="Your message"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(251, 126, 17, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#FB7E11] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E56E00] focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-[#333333] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-3"
                >
                  <FaEnvelope className="text-[#FB7E11] text-xl" />
                  <div>
                    <p className="text-[#333333] font-medium">Email</p>
                    <a
                      href="mailto:support@dropshipdeals.com"
                      className="text-[#666666] hover:text-[#FB7E11] transition-all"
                    >
                      support@dropshipdeals.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-3"
                >
                  <FaPhone className="text-[#FB7E11] text-xl" />
                  <div>
                    <p className="text-[#333333] font-medium">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-[#666666] hover:text-[#FB7E11] transition-all"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center space-x-3"
                >
                  <FaMapMarkerAlt className="text-[#FB7E11] text-xl" />
                  <div>
                    <p className="text-[#333333] font-medium">Address</p>
                    <p className="text-[#666666]">
                      123 DropShip Lane, Commerce City, USA
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-[#333333] mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-[#666666] hover:text-[#FB7E11] transition-all"
                    aria-label={`Follow us on ${Icon.name.replace("Fa", "")}`}
                  >
                    <Icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Map Placeholder (Optional) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-[#333333] mb-4">
            Find Us on the Map
          </h3>
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0865363499867!2d-122.4194154846814!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e27e94cb%3A0x5f6a0e7d9b6f7e1e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1631234567890"
              className="w-full h-64 rounded-lg"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsPage;
