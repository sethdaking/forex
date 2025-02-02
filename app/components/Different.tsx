'use client';

import { motion } from 'framer-motion';

const WhyThisIsDifferentSection = () => {
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto text-center p-8 text-white mt-20 mb-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
    >
      {/* Title Animation */}
      <motion.h2
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why This Is Different
      </motion.h2>

      {/* Content */}
      <motion.p
        className="text-2xl mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Most trading courses give you a <motion.span 
          className="text-blue-500 text-shadow-blue text-3xl font-bold" 
          whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(59, 130, 246, 0.7)" }}
          transition={{ duration: 0.3 }}
        >
          “one-size-fits-all” approach
        </motion.span> and leave you guessing when things don’t work. Not here.
      </motion.p>

      <motion.p
        className="text-3xl mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        You’ll learn <motion.span 
          className="text-blue-500 text-shadow-blue text-3xl font-bold" 
          whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(59, 130, 246, 0.7)" }}
          transition={{ duration: 0.3 }}
        >
          real strategies
        </motion.span> that cut out the noise and get you <motion.span
          className="text-green-500 text-shadow-green text-3xl font-bold"
          whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(34, 197, 94, 0.7)" }}
          transition={{ duration: 0.3 }}
        >
          results FAST
        </motion.span>.
      </motion.p>

      <motion.p
        className="text-2xl mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        You’ll have <motion.span 
          className="text-blue-500 text-shadow-blue text-4xl font-bold" 
          whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(59, 130, 246, 0.7)" }}
          transition={{ duration: 0.3 }}
        >
          direct access
        </motion.span> to your mentor (no overpriced, useless calls).
      </motion.p>

      <motion.p
        className="text-2xl mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        And you won’t just learn—you’ll get equipped to <motion.span
          className="text-red-500 text-shadow-red text-5xl font-extrabold"
          whileHover={{ scale: 1.1, textShadow: "0px 0px 15px rgba(239, 68, 68, 0.7)" }}
          transition={{ duration: 0.3 }}
        >
          WIN
        </motion.span>.
      </motion.p>
    </motion.div>
  );
};

export default WhyThisIsDifferentSection;
