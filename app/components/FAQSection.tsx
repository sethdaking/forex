'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'; // Import icons

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null); // Track which FAQ is open

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index); // Close if the same FAQ is clicked, open the new one
  };

  return (
    <section className="bg-black p-8 rounded-lg shadow-lg mt-32 space-y-8">
      <motion.h2
        className="text-4xl font-bold text-center text-shadow-blue"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      >
        {[
          {
            question: 'What will I learn in this course?',
            answer:
              "You'll master Forex trading strategies, risk management, and learn how to trade in the global market with confidence.",
          },
          {
            question: 'Do I need any prior knowledge?',
            answer:
              'No prior experience is required! This course is designed for beginners and seasoned traders alike.',
          },
          {
            question: 'How long is the course?',
            answer: 'The course is 6 weeks long, with weekly lessons and quizzes to keep you engaged.',
          },
          {
            question: 'Will I get lifetime access?',
            answer: 'Yes, you will have lifetime access to the course materials and updates.',
          },
        ].map((faq, index) => (
          <motion.div
            key={index}
            className="bg-black border border-white p-6 rounded-lg shadow-lg cursor-pointer"
            onClick={() => toggleFAQ(index)}
            initial={{ opacity: 1 }}
            animate={{
              opacity: openFAQ === index ? 1 : 0.7,
              scale: openFAQ === index ? 1 : 0.98,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div className="flex justify-between items-center">
              <motion.h3
                className="text-xl font-semibold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {faq.question}
              </motion.h3>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: openFAQ === index ? 360 : 360, // Rotate icon on toggle
                  transition: { duration: 0.3 },
                }}
              >
                {openFAQ === index ? (
                  <AiOutlineUp className="text-white text-xl" />
                ) : (
                  <AiOutlineDown className="text-white text-xl" />
                )}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: openFAQ === index ? 1 : 0,
                y: openFAQ === index ? 0 : -20,
              }}
              transition={{
                duration: 0.4,
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
            >
              <p className="text-white mt-2 text-shadow-blue">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQSection;
