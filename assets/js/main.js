/**
 * main.js — Entry point. Imports all modules and boots the site.
 * @module main
 */

import { config }              from './config.js';
import { initNav }             from './nav.js';
import { initAnimations }      from './animations.js';
import { renderTeam }          from './team.js';
import { renderCoaches }       from './coaches.js';
import { renderGallery }       from './gallery.js';
import { renderNews }          from './news.js';
import { renderSchedule, renderFeatures } from './schedule.js';
import { initForm }            from './form.js';

// ── Boot ────────────────────────────────────────────────
initNav();
renderTeam();
renderCoaches();
renderGallery();
renderNews();
renderSchedule();
renderFeatures();
initForm();

// ── Stats grid ──────────────────────────────────────────
const statsGrid = document.getElementById('stats-grid');
if (statsGrid) {
  statsGrid.innerHTML = config.stats.map(s => `
<div class="stat-card reveal">
  <div class="stat-number">${s.value}</div>
  <div class="stat-label">${s.label}</div>
</div>`).join('');
}

// ── About prose ─────────────────────────────────────────
const aboutProse = document.getElementById('about-prose-text');
if (aboutProse) {
  aboutProse.innerHTML = config.about.paragraphs
    .map(p => `<p>${p}</p>`)
    .join('');
}

// ── Contact info ────────────────────────────────────────
const contactItems = {
  '#ci-phone': config.contact.phone,
  '#ci-email': config.contact.email,
  '#ci-addr':  config.contact.address,
};
for (const [sel, val] of Object.entries(contactItems)) {
  const el = document.querySelector(sel);
  if (el) el.textContent = val;
}

// ── Map embed ────────────────────────────────────────────
const mapFrame = document.getElementById('map-frame');
if (mapFrame && config.mapEmbedUrl) {
  mapFrame.src = config.mapEmbedUrl;
}

// ── Footer contact links ─────────────────────────────────
const fPhone = document.getElementById('f-phone');
const fEmail = document.getElementById('f-email');
if (fPhone) { fPhone.href = `tel:${config.contact.phone.replace(/\s/g,'')}`;  fPhone.textContent = config.contact.phone; }
if (fEmail) { fEmail.href = `mailto:${config.contact.email}`;                 fEmail.textContent = config.contact.email; }

// ── Social links ─────────────────────────────────────────
for (const [key, url] of Object.entries(config.social)) {
  const el = document.querySelector(`[data-social="${key}"]`);
  if (el && url) el.href = url;
}

// ── Current year in footer ───────────────────────────────
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Run scroll animations last (after DOM is populated) ─
initAnimations();
