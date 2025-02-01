'use client';

import { motion } from 'framer-motion';

const SolutionSection = () => {
  const features = [
    {
      title: '📈 Straightforward Trading Strategies',
      description: 'No B.S. ❌ No fluff. ❌ Just the exact methods that work.',
    },
    {
      title: '📺 Pre-Recorded Videos You Can Rewatch Anytime',
      description: 'Learn at your own pace—no awkward Zoom calls or boring one-on-ones.',
    },
    {
      title: '💬 Access to a Real Mentor',
      description: 'Got questions? Your teacher is just a message away, ready to guide you personally.',
    },
    {
      title: '📞 Exclusive Weekly Calls',
      description: 'Get live feedback and stay sharp with weekly group calls.',
    },
    {
      title: '📖 Bonus eBook',
      description: 'A cheat sheet for success you can take anywhere.',
    },
  ];

  return (
    <motion.div
      className="w-full max-w-3xl mx-auto text-center p-8 text-white rounded-2xl shadow-xl border-4 border-white mt-20"
      style={{ boxShadow: '0 0 30px rgba(0, 123, 255, 0.7)' }}  // Bigger shadow
      initial={{ opacity: 0, y: 50 }}  // Start below the view
      animate={{ opacity: 1, y: 0 }}  // Move to normal position
      transition={{ duration: 1, type: 'spring', bounce: 0.5 }} // Bounce effect
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold text-yellow-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 The Solution (Your Trading Breakthrough Starts Here!)
      </motion.h2>

      <p className="text-lg text-gray-300 mt-4">
        Welcome to <span className="text-white font-semibold">[Insert Course Name]</span>, the <span className="text-red-400 font-bold">ONLY</span> course that actually **cuts through the noise** and gives you what you **really** need to win in trading.
      </p>

      {/* Features List */}
      <div className="mt-8 space-y-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.p
        className="mt-8 text-lg font-semibold text-green-400"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Ready to trade **smarter** and finally take control? 🚀
      </motion.p>
    </motion.div>
  );
};

export default SolutionSection;
