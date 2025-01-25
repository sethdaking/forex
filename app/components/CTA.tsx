'use client';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-black p-16 rounded-lg shadow-lg mt-32">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, type: 'spring', stiffness: 80 }}
      >
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Ready to Transform Your Future?
        </motion.h2>
        <motion.p
          className="text-xl text-white mt-4 text-blue-shadow-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Don’t wait—start your journey to financial freedom today! Join our Forex trading course and unlock the skills to succeed.
        </motion.p>
        <motion.a
          href="#signup" // Replace with your sign-up page or action
          className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full text-2xl shadow-blue-text hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600 transition-transform duration-500 transform hover:scale-110"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95, rotate: -5 }}
        >
          Enroll Now
        </motion.a>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
