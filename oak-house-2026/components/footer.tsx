import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-oak)] py-8">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Top section: Logo and Contact Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 py-8">
          {/* Logo */}
          <div className="relative h-[72px] w-[213px]">
            <Image
              src="/logos/footer-logo.svg"
              alt="Oak House Co."
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Contact Links */}
          <div className="flex gap-16 items-center">
            <a
              href="mailto:hello@oakhouseco.com"
              className="font-bold leading-[1.5] text-[var(--color-sunburst)] text-2xl hover:opacity-80 transition-opacity"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/samualdaugherty/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold leading-[1.5] text-[var(--color-sunburst)] text-2xl hover:opacity-80 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-[22px] py-3 border-t border-[var(--color-birch)]/20">
          <p className="font-light leading-[1.5] text-[14px] text-[var(--color-birch)] text-right md:text-right">
            © 2025 - Oak House Co. LLC
          </p>
          {/* Vertical divider - hidden on mobile */}
          <div className="hidden md:block h-[30px] w-[1px] bg-[var(--color-birch)]/20" />
          {/* Horizontal divider - visible on mobile */}
          <div className="md:hidden h-[1px] w-[30px] bg-[var(--color-birch)]/20" />
          <p className="font-light leading-[1.5] text-[14px] text-[var(--color-birch)]">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

