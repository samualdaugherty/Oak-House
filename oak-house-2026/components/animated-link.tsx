'use client';

import { motion } from 'framer-motion';
import { quickSpring } from '@/lib/animations';

interface AnimatedLinkProps {
  text: string;
  href: string;
  className?: string;
}

export default function AnimatedLink({ text, href, className = '' }: AnimatedLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
      whileHover="hover"
      whileTap="tap"
      initial="initial"
    >
      <div className="flex flex-col items-start pb-[5px]">
        {/* Text */}
        <p className="font-bold leading-[0.8] relative text-[var(--color-oak)] text-2xl z-[2]">
          {text}
        </p>
        
        {/* Underline container */}
        <div className="flex items-center mb-[-5px] relative w-full z-[1]">
          {/* Animated rectangle underline */}
          <motion.div
            className="bg-[var(--color-sunburst)] h-2 rounded-lg"
            variants={{
              initial: { width: 0 },
              hover: { width: 164 },
              tap: { width: 164 },
            }}
            transition={quickSpring}
          />
          
          {/* Yellow dot - animates position to create gap */}
          <motion.div
            className="bg-[var(--color-sunburst)] rounded-lg size-2 flex-shrink-0"
            variants={{
              initial: { x: 0 },
              hover: { x: 164 },
              tap: { x: 164 },
            }}
            transition={quickSpring}
          />
        </div>
      </div>
    </motion.a>
  );
}

