'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-lg ${
        isScrolled ? 'bg-black/90' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo1.png" alt="Logo" width={120} height={40} priority />
          </Link>
        </div>

        {/* Call-to-Action Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <Link
            href="/get-started"
            className={`px-6 py-2 font-semibold text-white transition-all duration-300 rounded-full border-2 shadow-lg ${
              isScrolled
                ? 'bg-transparent border-blue-500 shadow-blue-500/50 hover:bg-blue-500 hover:text-white'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 border-transparent hover:shadow-blue-500/50'
            }`}
          >
            Get Started
          </Link>
          {/* Glowing Effect */}
          <div className="absolute inset-0 rounded-full animate-pulse opacity-50"></div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
