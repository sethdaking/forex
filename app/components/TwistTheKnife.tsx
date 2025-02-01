'use client'
import { motion } from "framer-motion";
import TrueFocus from "./react-bits/truefocus";

const TwistTheKnife = () => {
  return (
    <div className="w-full max-w-2xl mx-auto text-center p-6 bg-black text-white rounded-2xl shadow-lg">
      {/* Heading */}
      <TrueFocus 
        sentence="The Problem"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />

      {/* Problem Statements */}
      <div className="space-y-6 mt-20 text-left text-lg text-gray-300">
        {[
          "You’ve tried watching free trading tutorials, but they’re a confusing mess of jargon.",
          "You’ve wasted money on so-called “mentors” who offer generic advice that gets you nowhere.",
          "You want to make serious money, but every path you’ve tried leads to dead ends."
        ].map((text, index) => (
          <motion.p
            key={index}
            className="flex items-start gap-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <span className="text-red-500 text-xl">❌</span> {text}
          </motion.p>
        ))}
      </div>

      {/* The Truth Section */}
      <motion.p
        className="mt-8 text-xl font-semibold text-red-400"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        The truth? The system is rigged against you. <br /> They don’t want you to win.
      </motion.p>

      {/* Call to Action */}
      <motion.p
        className="mt-6 text-lg text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        But what if I told you there’s a smarter, simpler way to finally take control of your financial future?  
        <span className="block font-bold text-white mt-2">
          No fluff. No fake gurus. Just results.
        </span>
      </motion.p>
    </div>
  );
};

export default TwistTheKnife;
