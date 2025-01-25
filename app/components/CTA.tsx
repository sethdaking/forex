'use client'
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-black p-16 rounded-lg shadow-lg mt-32">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      >
        <h2 className="text-4xl font-bold text-white">
          Ready to Transform Your Future?
        </h2>
        <p className="text-xl text-white mt-4">
          Don’t wait—start your journey to financial freedom today! Join our Forex trading course and unlock the skills to succeed.
        </p>
        <a
          href="#signup" // Replace with your sign-up page or action
          className="mt-8 inline-block bg-blue-500 text-white px-8 py-4 rounded-full text-2xl hover:bg-blue-600 transition duration-300"
        >
          Enroll Now
        </a>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
