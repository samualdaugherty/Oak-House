// Smooth scroll helper with focus management for accessibility
export function smoothScrollTo(targetId: string) {
  const target = document.getElementById(targetId);
  if (!target) return;

  // Scroll smoothly to target
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Set focus to the target for keyboard/screen reader users
  // Add tabIndex if not already present
  if (!target.hasAttribute('tabindex')) {
    target.setAttribute('tabindex', '-1');
  }
  
  // Focus the target after a short delay to allow scroll to complete
  setTimeout(() => {
    target.focus();
  }, 500);
}

