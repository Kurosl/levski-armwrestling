/**
 * team.js — Renders athlete cards from data/athletes.js
 * @module team
 */

import { athletes } from '../../data/athletes.js';

const PERSON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
  <circle cx="12" cy="7" r="4"/>
</svg>`;

function buildCard(athlete) {
  const img = athlete.image
    ? `<img src="${athlete.image}" alt="${athlete.name}" loading="lazy">`
    : `<div class="athlete-placeholder" aria-hidden="true">${PERSON_SVG}</div>`;

  // Support both `badge` (new) and `weightClass` (legacy) — render only if present
  const label = athlete.badge ?? athlete.weightClass ?? '';
  const badge = label ? `<span class="weight-badge">${label}</span>` : '';

  return `
<article class="athlete-card reveal" aria-label="${athlete.name}">
  <div class="athlete-img">
    ${img}
    <span class="athlete-initials" aria-hidden="true">${athlete.initials}</span>
  </div>

  <div class="athlete-info">
    ${badge}
    <div class="athlete-name">${athlete.name}</div>
    <div class="athlete-achievement">${athlete.achievement}</div>
  </div>

  <div class="athlete-hover" aria-hidden="true">
    <div class="hover-content">
      <div class="athlete-name">${athlete.name}</div>
      ${badge}
      <p class="athlete-bio">${athlete.bio}</p>
    </div>
  </div>
</article>`;
}

export function renderTeam() {
  const grid = document.getElementById('athletes-grid');
  if (!grid) return;
  grid.innerHTML = athletes.map(buildCard).join('');
}
