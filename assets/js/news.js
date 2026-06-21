/**
 * news.js — Renders news cards from data/news.js
 * @module news
 */

import { news } from '../../data/news.js';

const LETTER_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
  <path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h8"/><path d="M8 9h2"/>
</svg>`;

function buildCard(item) {
  const cover = item.image
    ? `<div class="news-cover"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>`
    : `<div class="news-cover news-cover--icon" aria-hidden="true">${LETTER_SVG}</div>`;

  const source = item.source ? `<span class="news-source">${item.source}</span>` : '';

  const link = item.link
    ? `<a class="news-link" href="${item.link}" target="_blank" rel="noopener noreferrer">
         ${item.linkLabel ?? 'Виж повече'} <span aria-hidden="true">→</span>
       </a>`
    : '';

  return `
<article class="news-card reveal" aria-label="${item.title}">
  ${cover}
  <div class="news-body">
    <div class="news-meta">
      <span class="news-badge">${item.badge}</span>
      <time class="news-date">${item.date}</time>
    </div>
    <h3 class="news-title">${item.title}</h3>
    ${source}
    <p class="news-text">${item.text}</p>
    ${link}
  </div>
</article>`;
}

export function renderNews() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  grid.innerHTML = news.map(buildCard).join('');
}
