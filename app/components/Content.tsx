'use client';
import { motion } from 'framer-motion';

const Content = () => {
  return (
    <div className="space-y-16 mt-32">
      {/* Who's this for? Section */}
      <section className="relative flex flex-col items-center justify-center bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <motion.div
          className="w-full max-w-3xl text-center"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-shadow-blue">Who&apos;s this for?</span>
          </h2>
          <p className="text-xl text-white">
            If you love numbers, enjoy solving puzzles, and dream of financial freedom—this course is for you!
          </p>
        </motion.div>
      </section>

      {/* Course Curriculum Section */}
      <section className="relative flex flex-col items-center justify-center bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <motion.div
          className="w-full max-w-3xl text-center"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-shadow-blue">Course Curriculum</span>
          </h2>
        </motion.div>
        {/* Curriculum Container with Gray BG */}
        <div className="w-full max-w-3xl px-8 bg-gray-800 rounded-lg">
          <ul className="list-inside list-disc text-xl text-white mt-4">
            <li>Module 1: Introduction to Forex</li>
            <li>Module 2: Advanced Trading Strategies</li>
            <li>Module 3: Risk Management & Psychology</li>
            <li>Module 4: Real-World Case Studies</li>
          </ul>
        </div>
      </section>

      {/* Duration + Format Section */}
      <section className="relative flex flex-col items-center justify-center bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <motion.div
          className="w-full max-w-3xl text-center"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-shadow-blue">Duration + Format</span>
          </h2>
          <p className="text-xl text-white">
            This course is a 6-week rollercoaster ride! Expect weekly lessons, fun quizzes, and interactive sessions.
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="relative flex flex-col items-center justify-center bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <motion.div
          className="w-full max-w-3xl text-center"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-shadow-blue">Introduction</span>
          </h2>
          <p className="text-xl text-white">
            Get ready to dive into the world of Forex trading, where you&apos;ll learn the best strategies to conquer the market.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Content;
