'use client';

import { motion } from 'framer-motion';

const WhyThisIsDifferentSection = () => {
  return (
    <motion.div
      className="w-full max-w-3xl mx-auto text-center p-8 text-white mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
    >
      {/* Title Animation */}
      <motion.h2
        className="text-4xl font-extrabold"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why This Is Different
      </motion.h2>

      {/* Content */}
      <motion.p
        className="text-lg mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Most trading courses give you a <span className="text-blue-500 text-shadow-blue">“one-size-fits-all” approach</span> and leave you guessing when things don’t work. Not here.
      </motion.p>

      <motion.p
        className="text-lg mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        You’ll learn <span className="text-blue-500 text-shadow-blue">real strategies</span> that cut out the noise and get you <span className="text-green-500 text-shadow-green">results FAST</span>.
      </motion.p>

      <motion.p
        className="text-lg mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        You’ll have <span className="text-blue-500 text-shadow-blue">direct access</span> to your mentor (no overpriced, useless calls).
      </motion.p>

      <motion.p
        className="text-lg mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        And you won’t just learn—you’ll get equipped to <span className="text-red-500 text-shadow-red">WIN</span>.
      </motion.p>
    </motion.div>
  );
};

export default WhyThisIsDifferentSection;
