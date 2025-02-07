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
      className="w-full max-w-3xl mx-auto text-center p-10 text-white rounded-3xl shadow-2xl border-4 border-gray-600 mt-32"
      style={{ boxShadow: '0 15px 30px rgba(0, 123, 255, 0.5)' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-extrabold text-yellow-400 tracking-wide"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.6 }}
        style={{ textShadow: '0px 0px 15px rgba(255, 215, 0, 0.8)' }}
      >
        The Solution, This is your Chance to Break Free
      </motion.h2>

      <p className="text-xl text-gray-300 mt-6">
        Welcome to <span className="text-white font-semibold">Forex Dream Catchers</span>, the <span className="text-red-400 font-bold">ONLY</span> course that actually <span className="font-semibold">cuts through the noise</span> and gives you what you <span className="font-semibold text-green-400">really</span> need to win in trading.
      </p>

      {/* Features List */}
      <div className="mt-10 space-y-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6, type: 'spring', bounce: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(0, 255, 150, 0.7)' }}
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-lg text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.p
        className="mt-10 text-2xl font-semibold text-green-400 cursor-pointer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8, type: 'spring', stiffness: 100 }}
        whileHover={{ scale: 1.1, rotate: 2 }}
      >
        Ready to trade <span className="font-bold">smarter</span> and finally take control? 🚀
      </motion.p>
    </motion.div>
  );
};

export default SolutionSection;