// components/Hero.tsx

'use client'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
      {/* Hero Copy */}
      <div className="relative z-10 text-center text-white px-4 md:px-12 mb-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }} // Start above the screen (for fun effect)
          animate={{ opacity: 1, y: 0 }} // Move to normal position
          transition={{ duration: 1, type: 'spring', stiffness: 120 }} // Fun bounce effect
        >
           <span className='text-shadow-blue'>Forex Dream Catchers</span> 
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, scale: 0.8 }} // Start smaller and invisible
          animate={{ opacity: 1, scale: 1 }} // Zoom in and fade in
          transition={{ duration: 1.2, type: 'spring', stiffness: 100 }} // Fun zoom effect
        >
          Master the art of Forex trading with our exclusive insights and tools.
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
