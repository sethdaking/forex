'use client'
import { motion } from 'framer-motion'

export function CourseCards() {
  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      {/* Beginner Course Card */}
      <motion.div
        className="bg-black text-white p-8 border-4 rounded-3xl shadow-2xl max-w-xl w-full"
        style={{ boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.8)" }} // Red glow
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2
          className="text-4xl font-extrabold uppercase text-red-500 mb-4"
          style={{ textShadow: "0px 0px 15px rgba(255, 0, 0, 1)" }}
        >
          🔰 BEGINNER COURSE
        </h2>
        <p className="text-xl font-semibold mb-4">
          Perfect for you if you&apos;re just getting started with trading. We’ll take you from zero to knowing exactly how to trade with confidence.
        </p>
        <ul className="text-lg space-y-2 mb-6">
          <li>✅ <b>Step-by-Step Forex Breakdown</b> – Learn everything from scratch, no experience needed.</li>
          <li>✅ <b>My Exact Trading Strategy</b> – The proven method that works consistently.</li>
          <li>✅ <b>Risk Management 101</b> – Protect your money and grow it safely.</li>
          <li>✅ <b>Exclusive Weekly Calls</b> – Stay on track and get personal feedback.</li>
          <li>✅ <b>BONUS eBook</b> – Your ultimate shortcut to mastering the game.</li>
        </ul>
        <p className="text-2xl font-bold text-green-400 mb-4">No experience? No problem. This is your shortcut to trading success.</p>
        <motion.button
          className="bg-yellow-400 text-black font-bold text-xl px-6 py-3 rounded-lg shadow-lg uppercase"
          style={{ boxShadow: "0px 0px 15px rgba(255, 215, 0, 1)" }}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 20px rgba(255, 215, 0, 1)",
            boxShadow: "0px 0px 25px rgba(255, 215, 0, 1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Join Now – R3,500/month
        </motion.button>
      </motion.div>

      {/* Advanced Course Card */}
      <motion.div
        className="bg-black text-white p-8 border-4 rounded-3xl shadow-2xl max-w-xl w-full"
        style={{ boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.8)" }} // Gold glow
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2
          className="text-4xl font-extrabold uppercase text-yellow-400 mb-4"
          style={{ textShadow: "0px 0px 15px rgba(255, 215, 0, 1)" }}
        >
          ⚡ ADVANCED TRADER PROGRAM
        </h2>
        <p className="text-xl font-semibold mb-4">
          Already trading? Know the basics? This is for you. We’ll take you from just trading to dominating the markets.
        </p>
        <ul className="text-lg space-y-2 mb-6">
          <li>✅ <b>Advanced Chart Analysis</b> – Read the market like a pro and predict moves before they happen.</li>
          <li>✅ <b>Scaling Up Your Account</b> – Learn how to grow your profits without reckless risks.</li>
          <li>✅ <b>Institutional Trading Secrets</b> – The same tactics banks and hedge funds use.</li>
          <li>✅ <b>Exclusive Weekly Calls</b> – High-level insights to sharpen your edge.</li>
          <li>✅ <b>BONUS eBook</b> – The advanced playbook for serious traders.</li>
        </ul>
        <p className="text-2xl font-bold text-green-400 mb-4">Stop trading small. Start thinking BIG.</p>
        <motion.button
          className="bg-yellow-400 text-black font-bold text-xl px-6 py-3 rounded-lg shadow-lg uppercase"
          style={{ boxShadow: "0px 0px 15px rgba(255, 215, 0, 1)" }}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 20px rgba(255, 215, 0, 1)",
            boxShadow: "0px 0px 25px rgba(255, 215, 0, 1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Join Now – R1,500/month
        </motion.button>
      </motion.div>
    </div>
  )
}
