"use client";
import { motion } from "motion/react";
import { FiCheck, FiZap, FiStar, FiAward } from "react-icons/fi";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      period: "forever",
      features: ["Track up to 50 transactions", "Basic reports", "Email support"],
      icon: <FiZap className="w-6 h-6" />,
      highlight: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      features: ["Unlimited transactions", "Advanced reports", "Receipt scanning", "Priority support"],
      icon: <FiStar className="w-6 h-6" />,
      highlight: true
    },
    {
      name: "Enterprise",
      price: "$29",
      period: "per month",
      features: ["All Pro features", "Team management", "Custom categories", "Dedicated account manager"],
      icon: <FiAward className="w-6 h-6" />,
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your financial needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`relative rounded-xl p-6 shadow-sm transition-all duration-300 ${plan.highlight ? "border-2 border-indigo-500 bg-white" : "border border-gray-200 bg-white"}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Popular
                </div>
              )}
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full mr-4 ${plan.highlight ? "bg-indigo-100 text-indigo-600" : "bg-gray-100 text-gray-600"}`}>
                  {plan.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <FiCheck className="text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${plan.highlight ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing