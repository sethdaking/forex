'use client';
import { motion } from 'framer-motion';

const WhatYoullLearnSection = () => {
  const sections = [
    {
      title: 'Forex Basics',
      description:
        'Learn the fundamentals of Forex trading, including currency pairs, pips, and spreads.',
    },
    {
      title: 'Technical Analysis',
      description:
        'Understand key indicators, chart patterns, and how to interpret market data for successful trades.',
    },
    {
      title: 'Risk Management',
      description:
        'Learn how to manage risk, set stop losses, and use proper trade size to protect your capital.',
    },
    {
      title: 'Trade Psychology',
      description:
        'Master the mental aspects of trading, including discipline, emotions, and mindset.',
    },
    {
      title: 'Advanced Strategies',
      description:
        'Dive into advanced trading strategies to refine your skills and improve your profitability.',
    },
    {
      title: 'Live Trading Sessions',
      description:
        'Participate in live trading sessions to gain real-time experience with expert guidance.',
    },
  ];

  return (
    <section className="bg-black p-8 sm:p-10 lg:p-12 rounded-xl shadow-lg mt-32 space-y-8">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center blue-shadow-text text-shadow-blue-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        What You&apos;ll Learn
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.6, staggerChildren: 0.2 }}
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="black border border-shadow-blue-text p-6 shadow-md hover:shadow-blue-text transition-shadow duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
            <p className="text-sm text-gray-300">{section.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhatYoullLearnSection;
