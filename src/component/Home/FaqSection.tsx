"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface faqProps {
  question:string;
  answer: string;
  index: number;
}


const FaqSection =({ question, answer, index  }: faqProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 py-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <FiMinus className="text-indigo-600 w-5 h-5" />
        ) : (
          <FiPlus className="text-indigo-600 w-5 h-5" />
        )}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pt-2 text-gray-600">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How does Expensify track my expenses?",
      answer: "Expensify connects to your bank accounts and credit cards to automatically import and categorize transactions. You can also manually add expenses or scan receipts."
    },
    {
      question: "Is my financial data secure?",
      answer: "Yes, we use bank-level 256-bit encryption and never store your banking credentials. Your data is protected with multiple security layers."
    },
    {
      question: "Can I use Expensify with my team?",
      answer: "Absolutely! Our Pro and Enterprise plans include team features that let you manage expenses across your organization with custom permissions and approvals."
    },
    {
      question: "What happens if I cancel my subscription?",
      answer: "You'll revert to our free Basic plan and retain access to all your historical data, but some advanced features will be limited."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Expensify
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqSection
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;