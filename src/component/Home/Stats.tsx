"use client";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface StatsProps {
  value: number | string;
  label: string;
  suffix?: string;
}

const Stats = ({ value, label, suffix = "" }: StatsProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 }
      });
    }
  }, [controls, inView]);

  return (
    <div className="text-center">
      <motion.div
        ref={ref}
        animate={controls}
        className="text-5xl font-bold text-indigo-600 mb-2"
      >
        {value}{suffix}
      </motion.div>
      <p className="text-gray-600 text-lg">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stats value={50} suffix="K+" label="Active Users" />
          <Stats value={10} suffix="M+" label="Transactions" />
          <Stats value={95} suffix="%" label="Satisfaction Rate" />
          <Stats value={24} suffix="/7" label="Support Available" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection