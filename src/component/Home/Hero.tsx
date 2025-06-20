"use client";
import Image from "next/image";
import banner1 from "../../../public/6029521.jpg";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleExploreClick = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="bg-full my-7"
      >
        <div className="container px-5 py-14 mx-auto bg-[#E9F9EF]">
          <div className="grid gap-7 grid-cols-1 md:grid-cols-2 items-center">
            {/* Left: Text with staggered animations */}
            <motion.div 
              className="text-center md:text-left"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.h1 
                className="font-bold leading-tight text-5xl"
                variants={item}
              >
                Take Control of Your <br />
                <motion.span 
                  className="text-indigo-600 text-5xl font-bold"
                  variants={item}
                >
                  Expenses
                </motion.span>
                <motion.span 
                  className="font-bold"
                  variants={item}
                >
                  —Smarter,
                </motion.span>
                <br />
                <motion.span 
                  className="font-bold"
                  variants={item}
                >
                  Simpler, Faster
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-[24px] font-normal leading-snug text-black/90 py-5 max-w-3xl mx-auto md:mx-0"
                variants={item}
              >
                <motion.span 
                  className="text-indigo-600"
                  whileHover={{ scale: 1.05 }}
                >
                  Expensify
                </motion.span> is an AI-powered expense tracking platform that automates your finances, provides real-time insights, and helps you save money effortlessly.
              </motion.p>

              <motion.div 
                className="flex flex-row justify-center md:justify-start gap-4 rounded-lg p-4"
                variants={item}
              >
                <motion.button
                  onClick={handleExploreClick}
                 className="animated-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Features</span>
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/signup"
                    className="animated-free-btn"
                  >
                    <span>Get Started Free</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ delay: 0.25 }}
              className="px-4 rounded-xl flex justify-center"
            >
              <Image 
                src={banner1} 
                alt="Expense management dashboard" 
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div ref={scrollRef}></div>
    </>
  );
}