"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaCircle } from "react-icons/fa";
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

const timelineDotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 300 },
  },
};

const AboutUsPage = () => {
  return (
    <section className="bg-[#E5E5E5] pt-52 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#333333]">
            Who We Are: The Hustle Behind{" "}
            <span className="text-[#FB7E11]">Sheaker Deals</span>
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            No fluff, just facts. We’re a crew that thrives on spotting trends,
            cutting deals, and getting stuff to your door—fast.
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-[#333333] mb-4"
          >
            The Grind Started Here
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[#666666] text-base leading-relaxed"
          >
            Back in the early days, it was just a handful of us, burning the
            midnight oil in a crammed apartment, scouring the web for the next
            viral product. We didn’t have a fancy office—just a beat-up laptop
            and a dream to make shopping smarter. One late-night coffee run led
            to a breakthrough: why not build a platform that cuts the middleman
            and delivers straight-up value? That’s when DropShip Deals was
            born—not out of some glossy boardroom, but from grit, hustle, and a
            knack for sniffing out deals.
          </motion.p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-12"
        >
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-8">
            Our Journey
          </h2>
          <div className="relative space-y-12">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#FB7E11] opacity-20" />

            {[
              {
                year: "2019",
                title: "The First Spark",
                desc: "Started with a single product—a quirky phone accessory that blew up overnight. Sold out in 48 hours.",
                side: "left",
              },
              {
                year: "2020",
                title: "Scaling the Chaos",
                desc: "Expanded our supplier network to over 50 vendors across three continents. Sleepless nights paid off.",
                side: "right",
              },
              {
                year: "2022",
                title: "Global Reach",
                desc: "Shipped to 100+ countries, hitting our first million in sales. Celebrated with cheap pizza.",
                side: "left",
              },
              {
                year: "2024",
                title: "Still Hustling",
                desc: "Now serving thousands weekly, always hunting the next big thing. No plans to slow down.",
                side: "right",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col ${
                  event.side === "left"
                    ? "items-start md:flex-row"
                    : "items-end md:flex-row-reverse"
                } space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse relative`}
              >
                {/* Timeline Dot */}
                <motion.div
                  variants={timelineDotVariants}
                  className="absolute left-1/2 transform -translate-x-1/2 z-10"
                >
                  <FaCircle className="text-[#FB7E11] text-xl" />
                </motion.div>

                {/* Timeline Content */}
                <div
                  className={`w-full md:w-1/2 p-6 bg-white rounded-xl shadow-lg ${
                    event.side === "left" ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-[#333333]">
                    {event.year}: {event.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed mt-2">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why We Do This Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-[#333333] mb-4"
          >
            Why We Keep Going
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[#666666] text-base leading-relaxed"
          >
            It’s not about chasing trends for clout—it’s about finding what
            works for you and getting it to your door without the hassle. We’ve
            seen the retail game from every angle—overpriced middlemen, slow
            shipping, dodgy quality—and we’re done with it. Every product we
            list is a bet we’re placing on value, speed, and giving you
            something worth your cash. That’s the deal we stick to.
          </motion.p>
        </motion.div>

        {/* Meet the Team Teaser */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[#333333] text-center mb-8">
            The Crew Behind the Chaos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Alex",
                role: "Trend Hunter",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Maya",
                role: "Logistics Wizard",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Sam",
                role: "Customer Fixer",
                img: "https://randomuser.me/api/portraits/men/15.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-[#333333]">
                  {member.name}
                </h3>
                <p className="text-[#666666] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-[#333333] mb-4">
            Ready to See What We’ve Got?
          </h3>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(251, 126, 17, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FB7E11] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#E56E00] focus:outline-none focus:ring-2 focus:ring-[#FB7E11] transition-all duration-300"
          >
            <Link href="/shop" className="flex items-center gap-2">
              Shop Now <FaArrowRight className="animate-bounce" />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsPage;
