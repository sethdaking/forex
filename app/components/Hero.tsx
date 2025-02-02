// components/Hero.tsx

'use client'
import { motion } from 'framer-motion';
import BlurText from './react-bits/blur-text';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
      {/* Hero Copy */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-16 mb-12">
        <motion.h1
          className="text-3xl md:text-5xl font-semibold mb-6 mt-12 leading-tight"
          initial={{ opacity: 0, y: -50 }} // Start above the screen (for fun effect)
          animate={{ opacity: 1, y: 0 }} // Move to normal position
          transition={{ duration: 1, type: 'spring', stiffness: 120 }} // Fun bounce effect
        >
          <BlurText
            text="You’ve Been Misled—Here’s Your Blueprint to Financial Freedom Starting TODAY!"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-5xl font-semibold text-shadow-blue text-center" animationFrom={undefined} animationTo={undefined} onAnimationComplete={undefined}          />
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }} // Start smaller and invisible
          animate={{ opacity: 1, scale: 1 }} // Zoom in and fade in
          transition={{ duration: 1.2, type: 'spring', stiffness: 100 }} // Fun zoom effect
        >
          Stop being left behind while others capitalize. It’s time to break free from the noise and discover the exact trading strategies that can put real money in your pocket—at a fraction of what you’re spending on daily distractions.
        </motion.p>
      </div>

      {/* Video Component */}
      <motion.div
        className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }} // Start small and invisible
        animate={{ opacity: 1, scale: 1 }} // Pop up and fade in
        transition={{ duration: 1.5 }} // Duration for pop up effect
      >
        <iframe
          className="w-full h-[80vh] object-cover" // Increased video height to 80% of the viewport height
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
          title="Forex Dream Catchers Video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Hero;
