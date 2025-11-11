'use client';

import Link from 'next/link';
import Logo from './logo';
import { smoothScrollTo } from '@/lib/smooth-scroll';

export default function Nav() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-sunburst)] text-[var(--color-oak)]">
      <div className="max-w-full mx-auto px-4 md:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo className="h-16 w-[200px]" />
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
          {/* Mobile menu button - to be implemented */}
          <div className="md:hidden">
            <button
              type="button"
              className="flex flex-col gap-1 items-end w-12"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <div className="bg-[var(--color-oak)] h-2 rounded-full w-9" />
              <div className="bg-[var(--color-oak)] h-2 rounded-full w-9" />
              <div className="bg-[var(--color-birch)] h-2 rounded-full w-full" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

