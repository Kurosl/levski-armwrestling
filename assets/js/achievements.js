/**
 * achievements.js — Renders achievement cards from data/achievements.js
 * @module achievements
 */

import { achievements } from '../../data/achievements.js';

function buildCard(ach) {
  return `
<article class="ach-card reveal">
  <div class="ach-icon" aria-hidden="true">${ach.icon}</div>
  <div class="ach-year">${ach.year}</div>
  <div class="ach-title">${ach.title}</div>
  <div class="ach-location">${ach.location}</div>
</article>`;
}

export function renderAchievements() {
  const grid = document.getElementById('achievements-grid');
  if (!grid) return;
  grid.innerHTML = achievements.map(buildCard).join('');
}
