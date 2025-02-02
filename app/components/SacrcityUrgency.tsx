'use client'
import { motion } from 'framer-motion';
import FadeContent from "./react-bits/blur-content"

export default function ScarcityUrgency() {
  return (
    <div className="p-8 rounded-2xl shadow-lg text-center max-w-4xl mx-auto relative overflow-hidden mt-36">
      {/* Background Gradient and Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-500 to-pink-500 opacity-40 z-0"></div>

      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <motion.h2 
          className="text-4xl font-bold text-white uppercase mb-10 relative z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ⚠️ LIMITED TO 500 STUDENTS ONLY! ⚠️
        </motion.h2>
        
        <p className="text-2xl mb-10 text-white relative z-10">
          This isn’t just some random course open to anyone. We’re only taking on <b className='text-yellow-200'> 500 beginner and advanced students </b> 
          to ensure personalized attention and results.
        </p>
        
        <p className="text-2xl font-semibold text-white relative z-10">Once the spots are filled, that’s it. <b className='text-yellow-200'>No exceptions.</b></p>
        
        <motion.p 
          className="text-3xl font-bold text-white mt-10 relative z-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          ⏳ The clock is ticking: Doors close when the last spot is taken. Don’t wait until it’s too late.
        </motion.p>
      </FadeContent>
    </div>
  );
}
