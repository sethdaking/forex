'use client'
import { motion } from 'framer-motion'

export function SpecialOfferSection() {
  return (
    <motion.div
      className="bg-black text-white p-10 rounded-3xl text-center max-w-3xl mx-auto mt-32"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-extrabold uppercase mb-6 text-green-400"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        🎯 THIS IS YOUR SHOT TO BREAK FREE 🎯
      </motion.h2>

      <p className="text-2xl mb-6">
        No more sitting around hoping things will get better. No more excuses. This is <motion.span
          className="text-green-400 font-bold"
          initial={{ textShadow: "0px 0px 0px rgba(34, 197, 94, 0)" }}
          animate={{ textShadow: "0px 0px 20px rgba(34, 197, 94, 0.7)" }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          YOUR time
        </motion.span>.<br />
        But the window is small, and once it closes, you’re back to square one.
      </p>

      <p className="text-2xl mb-6">
        This is your chance to learn from the <motion.span
          className="font-bold"
          style={{ color: '#3B82F6' }} // Apply blue color
          initial={{ textShadow: "0px 0px 0px rgba(59, 130, 246, 0)" }}
          animate={{ textShadow: "0px 0px 20px rgba(59, 130, 246, 0.7)" }} // Glowing blue effect
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          FxDream team
        </motion.span>, a group of forex specialists with 5 years of experience crushing the market. We&apos;ve packaged everything into this step-by-step program so you can skip the trial and error and get straight to results.
      </p>

      <motion.button
        className="bg-green-500 text-black font-extrabold text-2xl px-10 py-5 rounded-xl shadow-lg uppercase tracking-wider mt-4"
        style={{ boxShadow: "0px 0px 20px rgba(147, 250, 165, 1)" }}
        initial={{ scale: 0.9 }}
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 20px rgba(147, 250, 165, 1)",
          boxShadow: "0px 0px 30px rgba(147, 250, 165, 1)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        JOIN NOW—LIMITED TO 500 SPOTS
      </motion.button>

      <motion.p
        className="text-2xl font-bold mt-8 leading-relaxed"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="text-red-400 font-bold"
          initial={{ textShadow: "0px 0px 0px rgba(239, 68, 68, 0)" }}
          animate={{ textShadow: "0px 0px 20px rgba(239, 68, 68, 0.7)" }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          Act now
        </motion.span>, or miss out forever.
      </motion.p>
    </motion.div>
  )
}
