'use client'
import { motion } from 'framer-motion';
import BlurText from './react-bits/blur-text';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-black mt-32">
      {/* Hero Copy */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-16 mb-12">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 mt-12 leading-tight"
          initial={{ opacity: 0, y: -50 }} // Start above the screen
          animate={{ opacity: 1, y: 0 }} // Move to normal position
          transition={{ duration: 1, type: 'spring', stiffness: 120 }} // Fun bounce effect
          style={{
            textShadow: '0px 0px 15px #00AEEF', // Glowing blue shadow effect
          }}
        >
          <BlurText
            text="You’re Broke Because You’ve Been Lied To Here’s How to Fix It Starting TODAY
"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-6xl font-extrabold text-white text-center"
            animationFrom={undefined} animationTo={undefined} onAnimationComplete={undefined} 
          />
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-4xl mx-auto font-light tracking-wide"
          initial={{ opacity: 0, scale: 0.8 }} // Start smaller and invisible
          animate={{ opacity: 1, scale: 1 }} // Zoom in and fade in
          transition={{ duration: 1.2, type: 'spring', stiffness: 100 }} // Fun zoom effect
          style={{
            textShadow: '0px 0px 10px #00AEEF', // Subtle blue glow for the paragraph
          }}
        >
          If you’re tired of watching others make bank while you’re stuck on the sidelines, it’s time to take control. Learn the exact trading strategies that cut through the noise and put real money in your pocket all for less than what you waste on fast food every month.
        </motion.p>
      </div>

      {/* Video Component */}
      <motion.div
  className="relative w-full max-w-5xl max-h-7xl rounded-lg overflow-hidden shadow-xl"
  initial={{ opacity: 0, scale: 0.8 }} // Start small and invisible
  animate={{ opacity: 1, scale: 1 }} // Pop up and fade in
  transition={{ duration: 1.5 }} // Duration for pop-up effect
>
  <iframe
    className="w-full h-full object-cover" // Increased video height to 90% of the viewport height
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
