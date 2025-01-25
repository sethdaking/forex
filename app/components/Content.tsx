'use client';
import { motion } from 'framer-motion';

const Content = () => {
  return (
    <div className="space-y-16 mt-32">
      {/* Who's this for? Section */}
      <section className="relative flex flex-col items-center justify-center bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-shadow-blue">Who&apos;s this for?</span>
          </h2>
          <p className="text-xl text-white mb-6">
            If you love numbers, enjoy solving puzzles, and dream of financial freedom, this course is designed for you!
          </p>
          <p className="text-lg text-white">
            Whether you&apos;re a complete beginner or looking to level up your trading skills, our comprehensive modules will guide you every step of the way.
          </p>
        </motion.div>
      </section>

      {/* Course Curriculum Section */}
      <section className="relative flex flex-col items-center justify-center bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-shadow-blue">Course Curriculum</span>
          </h2>
          <p className="text-xl text-white mb-6">
            Our course is packed with practical insights and techniques, carefully crafted to give you a deep understanding of the Forex market. Here&apos;s what you&apos;ll learn:
          </p>
          <ul className="list-inside list-disc text-xl text-white space-y-4">
            <li>Module 1: Introduction to Forex</li>
            <li>Module 2: Advanced Trading Strategies</li>
            <li>Module 3: Risk Management & Trading Psychology</li>
            <li>Module 4: Real-World Case Studies and Applications</li>
          </ul>
        </motion.div>
      </section>

      {/* Duration + Format Section */}
      <section className="relative flex flex-col items-center justify-center bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-shadow-blue">Duration + Format</span>
          </h2>
          <p className="text-xl text-white mb-6">
            This is a 6-week course that will take you on an exciting journey to mastery. Expect:
          </p>
          <ul className="list-inside list-disc text-xl text-white space-y-4">
            <li>Weekly interactive lessons</li>
            <li>Quizzes and assignments to reinforce your learning</li>
            <li>Live sessions to discuss strategies and insights</li>
          </ul>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="relative flex flex-col items-center justify-center bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-shadow-blue">Introduction</span>
          </h2>
          <p className="text-xl text-white mb-6">
            Ready to dive into the world of Forex? Our course is your perfect starting point. Learn proven trading strategies, risk management, and psychology that will help you succeed in the global markets.
          </p>
          <p className="text-lg text-white">
            Get equipped with the tools and mindset of a professional trader and start your journey towards financial freedom today!
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Content;
