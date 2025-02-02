'use client'
import { motion } from 'framer-motion'

export function OfferSection() {
  return (
    <motion.div
      className="bg-black text-white p-12 rounded-3xl shadow-lg text-center max-w-3xl mx-auto mt-32 mb-32"
      style={{
        boxShadow: "0px 8px 25px rgba(34, 197, 94, 0.3)", // Softer glowing effect
        border: "1px solid rgba(34, 197, 94, 0.3)" // Subtle green border for a trustworthy vibe
      }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-5xl font-extrabold uppercase mb-10 text-green-400"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        🎯 The Opportunity You’ve Been Waiting For! 🎯
      </motion.h2>

      <p className="text-2xl mb-6">
        For just{" "}
        <motion.span
          className="text-green-400 font-bold"
          initial={{ textShadow: "0px 0px 0px rgba(34, 197, 94, 0)" }}
          animate={{ textShadow: "0px 0px 10px rgba(34, 197, 94, 0.4)" }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        >
          R3500 per month
        </motion.span>
        , you’ll get access to:
      </p>

      <div className="text-2xl text-left mx-auto max-w-lg mb-6 space-y-4">
        {[
          "A proven roadmap to transform your trading skills.",
          "Weekly calls to keep you on track.",
          "A mentor who actually answers your questions.",
          "The tools and knowledge to secure your financial freedom.",
        ].map((item, index) => (
          <motion.p
            key={index}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-3xl">✅</span>
            <span>{item}</span>
          </motion.p>
        ))}
      </div>

      <motion.p
        className="text-3xl font-bold mt-6 leading-relaxed"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        Think about it:{" "}
        <motion.span
          className="text-green-400 font-extrabold"
          initial={{ textShadow: "0px 0px 0px rgba(34, 197, 94, 0)" }}
          animate={{ textShadow: "0px 0px 15px rgba(34, 197, 94, 0.4)" }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          R3500
        </motion.span>{" "}
        is less than the{" "}
        <motion.span
          className="text-red-400 font-extrabold"
          initial={{ textShadow: "0px 0px 0px rgba(239, 68, 68, 0)" }}
          animate={{ textShadow: "0px 0px 15px rgba(239, 68, 68, 0.4)" }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          junk you blow on nights out
        </motion.span>{" "}
        or useless subscriptions—<br />
        and this investment will <span className="text-green-300">actually change your life.</span>
      </motion.p>
    </motion.div>
  )
}
