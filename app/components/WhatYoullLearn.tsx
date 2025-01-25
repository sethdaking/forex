'use client';
import { motion } from 'framer-motion';

const WhatYoullLearnSection = () => {
  return (
    <section className="bg-black p-8 sm:p-6 lg:p-8 rounded-lg shadow-lg mt-32 space-y-8">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-shadow-blue text-white"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      >
        What You&apos;ll Learn
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-between gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      >
        <motion.div
          className="bg-black p-6 rounded-lg shadow-lg flex-1 min-w-[250px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-shadow-blue">✅ Forex Basics</h3>
          <p className="mt-2 text-sm sm:text-base text-white">
            Learn the fundamentals of Forex trading, including currency pairs, pips, and spreads.
          </p>
        </motion.div>

        <motion.div
          className="bg-black p-6 rounded-lg shadow-lg flex-1 min-w-[250px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-shadow-blue">✅ Technical Analysis</h3>
          <p className="mt-2 text-sm sm:text-base text-white">
            Understand key indicators, chart patterns, and how to interpret market data for successful trades.
          </p>
        </motion.div>

        <motion.div
          className="bg-black p-6 rounded-lg shadow-lg flex-1 min-w-[250px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-shadow-blue">✅ Risk Management</h3>
          <p className="mt-2 text-sm sm:text-base text-white">
            Learn how to manage risk, set stop losses, and use proper trade size to protect your capital.
          </p>
        </motion.div>

        <motion.div
          className="bg-black p-6 rounded-lg shadow-lg flex-1 min-w-[250px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-shadow-blue">✅ Trade Psychology</h3>
          <p className="mt-2 text-sm sm:text-base text-white">
            Master the mental aspects of trading, including discipline, emotions, and mindset.
          </p>
        </motion.div>

        <motion.div
          className="bg-black p-6 rounded-lg shadow-lg flex-1 min-w-[250px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-shadow-blue">✅ Advanced Strategies</h3>
          <p className="mt-2 text-sm sm:text-base text-white">
            Dive into advanced trading strategies to refine your skills and improve your profitability.
          </p>
        </motion.div>

        <motion.div
          className="bg-black p-6 rounded-lg shadow-lg flex-1 min-w-[250px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-shadow-blue">✅ Live Trading Sessions</h3>
          <p className="mt-2 text-sm sm:text-base text-white">
            Participate in live trading sessions to gain real-time experience with expert guidance.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatYoullLearnSection;
