'use client'
import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <motion.div
      className="bg-black  rounded-3xl text-white p-12 shadow-lg text-center max-w-3xl mx-auto mt-20"
      style={{ boxShadow: "0px 0px 25px rgba(15, 10, 222, 0.8)" }} // Glowing effect
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-extrabold uppercase mb-6 text-red-500"
        style={{ textShadow: "0px 0px 15px rgba(255, 0, 0, 1)" }} // Glowing red title
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        🚀 The Window is Closing—Claim Your Spot! 🚀
      </motion.h2>

      <motion.p
        className="text-3xl font-bold mb-6 leading-relaxed"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        👉 Are you ready to <span className="text-red-500 font-extrabold">stop making excuses</span> and <span className="text-green-400">start making money</span>?
      </motion.p>

      <motion.p
        className="text-2xl font-semibold mb-6"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Click the button below to grab your spot <span className="text-yellow-400 font-bold">before someone else does.</span>
      </motion.p>

      <motion.button
        className="bg-yellow-400 text-black font-extrabold text-2xl px-10 py-5 rounded-xl shadow-lg uppercase tracking-wider mt-4"
        style={{ boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.8)" }}
        initial={{ scale: 0.9 }}
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 20px rgba(255, 215, 0, 1)",
          boxShadow: "0px 0px 30px rgba(255, 215, 0, 1)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        JOIN NOW—LIMITED TO 500 SPOTS
      </motion.button>
    </motion.div>
  )
}
