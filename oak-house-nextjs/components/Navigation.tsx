'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (page: string) => {
    if (currentPage) return currentPage === page;
    return pathname === `/${page}` || 
           (page === 'home' && pathname === '/') ||
           (page === 'marketing' && pathname === '/marketing-services') ||
           (page === 'websites' && pathname === '/web-services') ||
           (page === 'process' && pathname === '/process') ||
           (page === 'contact' && pathname === '/get-started');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-[#ffc807] py-1 px-8">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <Link href="/" className="w-[200px] max-w-[200px] block">
            <Image src="/img/logo.svg" alt="Oak House Co." width={200} height={60} className="w-full h-auto" unoptimized />
          </Link>
          <div className="flex items-center">
            <ul className="flex items-center space-x-0">
              <li className={`text-sm ${isActive('marketing') ? 'active' : ''}`}>
                <Link href="/marketing-services" className="px-12 py-10 text-black hover:text-black no-underline relative z-10">
                  Marketing Services
                  {isActive('marketing') && (
                    <span className="absolute bg-[#f9f9f9] w-[90%] h-2 left-8 top-[85%] -z-10" />
                  )}
                </Link>
              </li>
              <li className={`text-sm ${isActive('websites') ? 'active' : ''}`}>
                <Link href="/web-services" className="px-12 py-10 text-black hover:text-black no-underline relative z-10">
                  Web Services
                  {isActive('websites') && (
                    <span className="absolute bg-[#f9f9f9] w-[90%] h-2 left-8 top-[85%] -z-10" />
                  )}
                </Link>
              </li>
              <li className={`text-sm ${isActive('process') ? 'active' : ''}`}>
                <Link href="/process" className="px-12 py-10 text-black hover:text-black no-underline relative z-10">
                  Process
                  {isActive('process') && (
                    <span className="absolute bg-[#f9f9f9] w-[90%] h-2 left-8 top-[85%] -z-10" />
                  )}
                </Link>
              </li>
              <li className={`text-sm ${isActive('contact') ? 'active' : ''}`}>
                <Link href="/get-started" className="px-12 py-10 text-black hover:text-black no-underline relative z-10">
                  Get Started
                  {isActive('contact') && (
                    <span className="absolute bg-[#f9f9f9] w-[90%] h-2 left-8 top-[85%] -z-10" />
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Brand */}
      <div className="lg:hidden bg-[#ffc807] px-8 py-2">
        <Link href="/" className="block">
          <Image src="/img/logo.svg" alt="Oak House Co." width={150} height={45} className="max-w-[150px] h-auto" unoptimized />
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden fixed top-2 right-0 h-10 w-[75px] z-[9999]">
        <button
          onClick={toggleMobileMenu}
          className={`w-10 h-10 absolute right-[27px] top-[10px] cursor-pointer transition-all duration-300 ${
            isMobileMenuOpen ? 'fixed top-[17px]' : ''
          }`}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute block h-1 w-full bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'top-[18px] w-0 left-1/2' : 'top-0'
            }`}
          />
          <span
            className={`absolute block h-1 w-full bg-black transition-all duration-300 top-[10px] ${
              isMobileMenuOpen ? 'rotate-45 bg-[#fdf9f6]' : ''
            }`}
          />
          <span
            className={`absolute block h-1 w-full bg-black transition-all duration-300 top-[10px] ${
              isMobileMenuOpen ? '-rotate-45 bg-[#fdf9f6]' : ''
            }`}
          />
          <span
            className={`absolute block h-1 w-full bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'top-[18px] w-0 left-1/2' : 'top-5'
            }`}
          />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black transition-all duration-300 z-[6000] ${
          isMobileMenuOpen
            ? 'opacity-100 visible h-full'
            : 'opacity-0 invisible h-0'
        }`}
        onClick={toggleMobileMenu}
      >
        <div className="relative pt-20 px-8">
          <Image
            src="/img/OH.svg"
            alt=""
            width={400}
            height={400}
            className="absolute bottom-0 w-[40%] opacity-10"
          />
          <nav className="relative">
            <ul className="list-none text-left">
              <li className="text-2xl leading-16 mb-4">
                <Link
                  href="/marketing-services"
                  className="font-montserrat text-[#ffc807] uppercase hover:text-[#f9f9f9] no-underline py-1"
                  onClick={toggleMobileMenu}
                >
                  Marketing Services
                </Link>
              </li>
              <li className="text-2xl leading-16 mb-4">
                <Link
                  href="/web-services"
                  className="font-montserrat text-[#ffc807] uppercase hover:text-[#f9f9f9] no-underline py-1"
                  onClick={toggleMobileMenu}
                >
                  Web Services
                </Link>
              </li>
              <li className="text-2xl leading-16 mb-4">
                <Link
                  href="/process"
                  className="font-montserrat text-[#ffc807] uppercase hover:text-[#f9f9f9] no-underline py-1"
                  onClick={toggleMobileMenu}
                >
                  Process
                </Link>
              </li>
              <li className="text-2xl leading-16 mb-4">
                <Link
                  href="/get-started"
                  className="font-montserrat text-[#ffc807] uppercase hover:text-[#f9f9f9] no-underline py-1"
                  onClick={toggleMobileMenu}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

