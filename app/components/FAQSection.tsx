'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  const [faqs] = useState<FAQ[]>([
    {
      id: "1",
      question: "What is Forex trading?",
      answer: "Forex trading is the exchange of one currency for another on a decentralized global market.",
    },
    {
      id: "2",
      question: "How much money do I need to start trading?",
      answer: "The amount varies, but many brokers allow you to start trading with as little as $100.",
    },
    {
      id: "3",
      question: "What is leverage in Forex?",
      answer: "Leverage allows traders to control a larger position with a smaller amount of money by borrowing funds from their broker.",
    },
    {
      id: "4",
      question: "Can I trade Forex on weekends?",
      answer: "No, the Forex market is closed on weekends, operating from Monday to Friday.",
    },
    {
      id: "5",
      question: "What tools do I need to start trading?",
      answer: "You will need a trading platform, internet connection, and a reliable broker to begin trading Forex.",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container py-8 px-4 mx-auto">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center mt-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.id}
            className="border-b pb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <div
              className="flex items-center justify-between cursor-pointer text-lg font-semibold"
              onClick={() => toggleAnswer(index)}
            >
              <span>{faq.question}</span>
              <span>
                {activeIndex === index ? (
                  <FiChevronUp size={20} />
                ) : (
                  <FiChevronDown size={20} />
                )}
              </span>
            </div>

            {activeIndex === index && (
              <motion.div
                className=" mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-shadow-blue">
                    {faq.answer}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
