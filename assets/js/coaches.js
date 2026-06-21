/**
 * coaches.js — Renders coach cards from data/coaches.js
 * @module coaches
 */

import { coaches, coachesGroupPhoto } from '../../data/coaches.js';

const PERSON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
  <circle cx="12" cy="7" r="4"/>
</svg>`;

function buildCoach(coach) {
  const img = coach.image
    ? `<img src="${coach.image}" alt="${coach.name}" loading="lazy">`
    : `<div class="coach-placeholder" aria-hidden="true">${PERSON_SVG}</div>`;

  return `
<article class="coach-card reveal" aria-label="${coach.name}">
  <div class="coach-img">
    ${img}
    <span class="coach-initials" aria-hidden="true">${coach.initials}</span>
  </div>
  <div class="coach-info">
    <div class="coach-name">${coach.name}</div>
    <div class="coach-role">${coach.role}</div>
  </div>
</article>`;
}

export function renderCoaches() {
  const grid = document.getElementById('coaches-grid');
  if (grid) grid.innerHTML = coaches.map(buildCoach).join('');

  const banner = document.getElementById('coaches-group');
  if (banner && coachesGroupPhoto) {
    banner.innerHTML = `<img src="${coachesGroupPhoto}" alt="Треньорският екип на Левски" loading="lazy">`;
  }
}
