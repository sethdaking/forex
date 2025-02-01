// components/Hero.tsx

'use client'
import { motion } from 'framer-motion';
import BlurText from './react-bits/blur-text';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
      {/* Hero Copy */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 md:px-12 mb-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 mt-10"
          initial={{ opacity: 0, y: -50 }} // Start above the screen (for fun effect)
          animate={{ opacity: 1, y: 0 }} // Move to normal position
          transition={{ duration: 1, type: 'spring', stiffness: 120 }} // Fun bounce effect
        >
          <BlurText
            text="You’re Broke Because You’ve Been Lied To—Here’s How to Fix It Starting TODAY!"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-6xl font-bold text-shadow-blue text-center" animationFrom={undefined} animationTo={undefined} onAnimationComplete={undefined}          />
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-3xl"
          initial={{ opacity: 0, scale: 0.8 }} // Start smaller and invisible
          animate={{ opacity: 1, scale: 1 }} // Zoom in and fade in
          transition={{ duration: 1.2, type: 'spring', stiffness: 100 }} // Fun zoom effect
        >
          If you’re tired of watching others make bank while you’re stuck on the sidelines, it’s time to take control. Learn the exact trading strategies that cut through the noise and put real money in your pocket—all for less than what you waste on fast food every month.
        </motion.p>
      </div>

      {/* Video Component */}
      <motion.div
        className="relative w-full max-w-4xl rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }} // Start small and invisible
        animate={{ opacity: 1, scale: 1 }} // Pop up and fade in
        transition={{ duration: 1.5 }} // Duration for pop up effect
      >
        <iframe
          className="w-full h-96 object-cover"
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
