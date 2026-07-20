'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { companyProfile } from '@/lib/data/company';

const navLinks = [
  { href: '/about', label: 'Our Story' },
  { href: '/programs', label: 'Programs' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Capsule Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
      >
        <div className="pointer-events-auto flex items-center bg-[#1C1C1C] rounded-full p-1.5 shadow-2xl shadow-black/20 border border-white/10">
          
          {/* Logo (Left) */}
          <Link
            href="/"
            className="flex items-center gap-2 pl-5 pr-3 text-white font-bold text-[15px]"
          >
            <Image src="/logo.png" alt="CrestSow" width={36} height={36} className="h-9 w-9 rounded-full object-cover" priority />
          </Link>

          {/* Navigation Links (Middle) */}
          <nav className="hidden md:flex items-center gap-6 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-white hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-2 md:pl-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center bg-white text-[#1C1C1C] font-semibold text-[14px] px-5 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              Contact
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-8 h-8 bg-[#2A2A2A] rounded-full flex items-center justify-center text-white ml-2"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#EFEFF1]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden transition-colors duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-[#0A0A0A] hover:opacity-70"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <span className="font-bold text-2xl mb-4 text-[#0A0A0A]">
            {companyProfile.name}
          </span>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light tracking-wide transition-opacity hover:opacity-70 text-[#0A0A0A]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-lg font-light text-[#6B7280] hover:text-[#0A0A0A]"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
