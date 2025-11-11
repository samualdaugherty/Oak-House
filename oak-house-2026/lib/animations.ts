import { Spring } from 'framer-motion';

/**
 * Bouncy spring animation configuration for interactive elements.
 * 
 * Use this for:
 * - Position changes (x, y transforms)
 * - Scale changes (hover effects, button presses)
 * - Size changes (height, width)
 * - Any transform that needs to feel interactive and playful
 * 
 * Do NOT use for:
 * - Opacity transitions (use a quick fade instead)
 * - Color changes (use CSS transitions)
 */
export const quickSpring: Spring = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
  mass: 1,
};

