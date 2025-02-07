'use client';
import { motion } from "framer-motion";
import TrueFocus from "./react-bits/truefocus";

const TwistTheKnife = () => {
  return (
    <div className="w-full max-w-3xl mx-auto text-center p-6 bg-black text-white rounded-2xl shadow-lg">
      {/* Heading */}
      <TrueFocus 
        sentence="DOES THIS SOUND FAMILIAR?"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={0.6}
      />

      {/* Problem Statements */}
      <div className="space-y-6 mt-20 text-left text-xl text-gray-300">
        {[
          "You’ve wasted hours on free trading tutorials, only to get tangled in jargon that leads nowhere.",
          "You’ve handed over your hard-earned money to so-called ‘mentors’ who offer nothing but vague, generic advice.",
          "You’ve tried countless strategies, but every single one ends in frustration and dead ends."
        ].map((text, index) => (
          <motion.p
            key={index}
            className="flex items-start gap-3 text-lg md:text-xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <span className="text-red-500 text-2xl">❌</span> {text}
          </motion.p>
        ))}
      </div>

      {/* The Truth Section */}
      <motion.p
        className="mt-8 text-2xl font-semibold text-red-400"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        The truth? The system is designed to keep you trapped. <br /> They don’t want you to break free.
      </motion.p>

      {/* Call to Action */}
      <motion.p
        className="mt-6 text-xl md:text-2xl text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        But what if there’s a way out? A smarter, simpler path to reclaim control over your financial future.  
        <span className="block font-bold text-white mt-4 text-xl md:text-2xl">
          No fluff. No fake gurus. Just proven results that speak for themselves.
        </span>
      </motion.p>
    </div>
  );
};

export default TwistTheKnife;
