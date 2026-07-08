'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { companyProfile } from '@/lib/data/company';

const navLinks = [
  { href: '/about', label: 'Our Story' },
  { href: '/programs', label: 'Programs' },
  { href: '/contact', label: 'Inquiries' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Pill navbar — hangs from top edge, rounded only at bottom */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <nav className="pointer-events-auto bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
          <div className="flex items-center gap-3 sm:gap-6 md:gap-10 lg:gap-14">
            {/* Logo */}
            <Link
              href="/"
              className="text-sm md:text-base font-bold tracking-tight transition-opacity hover:opacity-70"
              style={{ color: '#E1E0CC' }}
            >
              {companyProfile.name}
            </Link>

            {/* Nav links — hidden on mobile */}
            <div className="hidden md:flex items-center gap-6 lg:gap-14">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[10px] sm:text-xs md:text-sm transition-opacity hover:opacity-100"
                  style={{ color: 'rgba(225, 224, 204, 0.7)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Login + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-[10px] sm:text-xs md:text-sm hidden sm:block transition-opacity hover:opacity-100"
                style={{ color: 'rgba(225, 224, 204, 0.5)' }}
              >
                Login
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-1 transition-opacity hover:opacity-70"
                style={{ color: '#E1E0CC' }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[28px] flex flex-col items-center justify-center gap-10 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6"
            style={{ color: 'rgba(225, 224, 204, 0.6)' }}
          >
            <X size={24} />
          </button>

          <span className="font-bold text-2xl mb-4" style={{ color: '#E1E0CC' }}>
            {companyProfile.name}
          </span>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light tracking-wide transition-opacity hover:opacity-70"
              style={{ color: '#E1E0CC' }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="text-lg font-light"
            style={{ color: 'rgba(225, 224, 204, 0.4)' }}
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
}
