/**
 * schedule.js — Renders training schedule + feature cards
 * @module schedule
 */

import { schedule, features } from '../../data/schedule.js';

export function renderSchedule() {
  const body = document.getElementById('schedule-body');
  if (!body) return;
  body.innerHTML = schedule.map(s => `
<div class="sched-row reveal">
  <span class="s-day">${s.day}</span>
  <span class="s-time">${s.time}</span>
  <span class="s-loc">${s.location}</span>
</div>`).join('');
}

export function renderFeatures() {
  const grid = document.getElementById('features-grid');
  if (!grid) return;
  grid.innerHTML = features.map(f => `
<div class="feature-card reveal">
  <div class="feature-icon" aria-hidden="true">${f.icon}</div>
  <div>
    <div class="feature-title">${f.title}</div>
    <div class="feature-text">${f.text}</div>
  </div>
</div>`).join('');
}
