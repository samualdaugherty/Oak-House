'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './logo';
import { smoothScrollTo } from '@/lib/smooth-scroll';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    smoothScrollTo(targetId);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[var(--color-sunburst)] text-[var(--color-oak)] transition-all duration-300">
        <div className={`max-w-full mx-auto px-4 md:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? 'py-1.5' : 'py-3'}`}>
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Logo className={`transition-all duration-300 ${isScrolled ? 'h-12 w-[150px]' : 'h-16 w-[200px]'}`} />
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <a
                href="#who-i-am"
                onClick={(e) => handleNavClick(e, 'who-i-am')}
                className="font-bold text-2xl leading-[1.5] text-[var(--color-oak)] hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                Who I am
              </a>
              <a
                href="#what-i-do"
                onClick={(e) => handleNavClick(e, 'what-i-do')}
                className="font-bold text-2xl leading-[1.5] text-[var(--color-oak)] hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                What I Do
              </a>
              <a
                href="#how-i-can-help"
                onClick={(e) => handleNavClick(e, 'how-i-can-help')}
                className="font-bold text-2xl leading-[1.5] text-[var(--color-oak)] hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                How I Can Help
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="flex flex-col gap-1 items-end w-12"
                aria-label="Main menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="bg-[var(--color-oak)] h-2 rounded-full w-9" />
                <div className="bg-[var(--color-oak)] h-2 rounded-full w-9" />
                <div className="bg-[var(--color-birch)] h-2 rounded-full w-full" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[60] bg-[var(--color-sunburst)] w-screen h-screen flex flex-col"
          >
            {/* Header with logo and close button */}
            <div className="flex items-center justify-between px-4 py-3">
              <Logo className="h-12 w-[150px]" />
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="relative w-9 h-9 flex items-center justify-center"
                aria-label="Close menu"
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M9 9L27 27M27 9L9 27"
                    stroke="var(--color-oak)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation links - bottom aligned */}
            <div className="flex flex-col gap-10 items-start justify-end pb-6 pt-24 px-4 flex-1">
              <a
                href="#who-i-am"
                onClick={(e) => handleNavClick(e, 'who-i-am')}
                className="font-bold leading-[1.5] text-[var(--color-oak)] text-4xl hover:opacity-80 transition-opacity"
              >
                Who I am
              </a>
              <a
                href="#what-i-do"
                onClick={(e) => handleNavClick(e, 'what-i-do')}
                className="font-bold leading-[1.5] text-[var(--color-oak)] text-4xl hover:opacity-80 transition-opacity"
              >
                What I Do
              </a>
              <a
                href="#how-i-can-help"
                onClick={(e) => handleNavClick(e, 'how-i-can-help')}
                className="font-bold leading-[1.5] text-[var(--color-oak)] text-4xl hover:opacity-80 transition-opacity"
              >
                How I Can Help
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

