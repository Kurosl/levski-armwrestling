/**
 * nav.js — Sticky navbar, hamburger, smooth scroll
 * @module nav
 */

export function initNav() {
  const navbar     = document.getElementById('navbar');
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // ── Sticky / scrolled state ────────────────────────────
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 32);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Hamburger toggle ───────────────────────────────────
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // ── Smooth scroll for all anchor links ────────────────
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY
                - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10);

    window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });

    // Close mobile menu if open
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}
