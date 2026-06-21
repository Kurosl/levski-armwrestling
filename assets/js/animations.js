/**
 * animations.js — Scroll-reveal via IntersectionObserver
 * @module animations
 */

export function initAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // Immediately show everything — respect user preference
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  // Stagger siblings that share a parent container
  document.querySelectorAll('.reveal').forEach((el, i) => {
    // Only apply stagger when element has siblings in same grid/flex container
    const siblings = Array.from(el.parentElement.querySelectorAll(':scope > .reveal'));
    if (siblings.length > 1) {
      const idx = siblings.indexOf(el);
      el.style.transitionDelay = `${idx * 60}ms`;
    }
    observer.observe(el);
  });
}
