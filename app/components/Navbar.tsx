'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-transparent p-4 shadow-md">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link href="/">
            Logo
          </Link>
        </div>

        {/* Button (Visible on all screen sizes) */}
        <div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/get-started"
              className="px-6 py-2 bg-black text-white rounded-full border border-blue-600 hover:shadow-blue-text"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
