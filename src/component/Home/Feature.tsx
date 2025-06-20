"use client";
import { motion } from "motion/react";
import { FiPieChart, FiDollarSign, FiCreditCard, FiTrendingUp, FiAlertCircle, FiFileText } from "react-icons/fi";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiPieChart className="w-8 h-8" />,
      title: "Expense Tracking",
      description: "Automatically categorize and track all your expenses in real-time"
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: "Budget Management",
      description: "Set budgets and get alerts when you're approaching your limits"
    },
    {
      icon: <FiCreditCard className="w-8 h-8" />,
      title: "Receipt Scanning",
      description: "Snap a photo of receipts and we'll extract the details automatically"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Financial Insights",
      description: "Get personalized reports and visualizations of your spending"
    },
    {
      icon: <FiAlertCircle className="w-8 h-8" />,
      title: "Smart Alerts",
      description: "Receive notifications for unusual spending patterns"
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "Tax Ready Reports",
      description: "Generate tax-ready reports with just one click"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to take control of your finances
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-indigo-50 text-indigo-600 mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;