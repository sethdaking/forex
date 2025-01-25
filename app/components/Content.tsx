'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Content = () => {
  return (
    <div className="space-y-16 mt-32">
      {/* Who's this for? Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left pr-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-shadow-blue">Who&apos;s this for?</span>
          </h2>
          <p className="text-xl text-white mt-4">
            If you love numbers, enjoy solving puzzles, and dream of financial freedom—this course is for you!
          </p>
        </motion.div>
        <div className="border-r border-white h-full mx-4 hidden md:block"></div>
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <Image
            className="w-full h-auto rounded-lg shadow-lg"
            src="/img.jpg" // Replace with your image
            alt="Who's this for?"
            width={400}
            height={300}
          />
        </motion.div>
      </section>

      {/* Course Curriculum Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left pr-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-shadow-blue">Course Curriculum</span>
          </h2>
          <ul className="list-inside list-disc text-xl text-white mt-4">
            <li>Module 1: Introduction to Forex</li>
            <li>Module 2: Advanced Trading Strategies</li>
            <li>Module 3: Risk Management & Psychology</li>
            <li>Module 4: Real-World Case Studies</li>
          </ul>
        </motion.div>
        <div className="border-r border-white h-full mx-4 hidden md:block"></div>
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <Image
            className="w-full h-auto rounded-lg shadow-lg"
            src="/img.jpg" // Replace with your image
            alt="Course Curriculum"
            width={400}
            height={300}
          />
        </motion.div>
      </section>

      {/* Duration + Format Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left pr-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-shadow-blue">Duration + Format</span>
          </h2>
          <p className="text-xl text-white mt-4">
            This course is a 6-week rollercoaster ride! Expect weekly lessons, fun quizzes, and interactive sessions.
          </p>
        </motion.div>
        <div className="border-r border-white h-full mx-4 hidden md:block"></div>
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <Image
            className="w-full h-auto rounded-lg shadow-lg"
            src="/img.jpg" // Replace with your image
            alt="Duration + Format"
            width={400}
            height={300}
          />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left pr-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="text-shadow-blue">Introduction</span>
          </h2>
          <p className="text-xl text-white mt-4">
            Get ready to dive into the world of Forex trading, where you’ll learn the best strategies to conquer the market.
          </p>
        </motion.div>
        <div className="border-r border-white h-full mx-4 hidden md:block"></div>
        <motion.div
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <Image
            className="w-full h-auto rounded-lg shadow-lg"
            src="/img.jpg" // Replace with your image
            alt="Introduction"
            width={400}
            height={300}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Content;
