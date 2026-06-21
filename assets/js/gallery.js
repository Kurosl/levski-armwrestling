/**
 * gallery.js — Renders a filterable photo grid with a lightbox.
 * @module gallery
 */

import { gallery, galleryCategories } from '../../data/gallery.js';

function buildTile(item, index) {
  return `
<button class="gallery-tile reveal" data-category="${item.category}" data-index="${index}"
        aria-label="Отвори снимка: ${item.caption}">
  <img src="${item.src}" alt="${item.caption}" loading="lazy">
  <span class="gallery-tile-caption">${item.caption}</span>
</button>`;
}

function buildFilters() {
  return galleryCategories.map((c, i) =>
    `<button class="gallery-filter${i === 0 ? ' active' : ''}" data-filter="${c.id}">${c.label}</button>`
  ).join('');
}

export function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const filters = document.getElementById('gallery-filters');
  if (!grid) return;

  if (filters) filters.innerHTML = buildFilters();
  grid.innerHTML = gallery.map(buildTile).join('');

  // ── Filtering ────────────────────────────────────────
  if (filters) {
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('.gallery-filter');
      if (!btn) return;
      const id = btn.dataset.filter;
      filters.querySelectorAll('.gallery-filter').forEach(b => b.classList.toggle('active', b === btn));
      grid.querySelectorAll('.gallery-tile').forEach(tile => {
        const show = id === 'all' || tile.dataset.category === id;
        tile.style.display = show ? '' : 'none';
      });
    });
  }

  initLightbox(grid);
}

/* ── Lightbox ──────────────────────────────────────────── */
function initLightbox(grid) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg = lb.querySelector('.lightbox-img');
  const lbCaption = lb.querySelector('.lightbox-caption');
  const btnClose = lb.querySelector('.lightbox-close');
  const btnPrev = lb.querySelector('.lightbox-prev');
  const btnNext = lb.querySelector('.lightbox-next');

  let visible = [];   // currently visible tiles (respecting filter)
  let pos = 0;

  function show(i) {
    pos = (i + visible.length) % visible.length;
    const tile = visible[pos];
    const img = tile.querySelector('img');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCaption.textContent = img.alt;
  }

  function open(tile) {
    visible = Array.from(grid.querySelectorAll('.gallery-tile'))
      .filter(t => t.style.display !== 'none');
    pos = visible.indexOf(tile);
    show(pos);
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  grid.addEventListener('click', (e) => {
    const tile = e.target.closest('.gallery-tile');
    if (tile) open(tile);
  });

  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', () => show(pos - 1));
  btnNext.addEventListener('click', () => show(pos + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(pos - 1);
    else if (e.key === 'ArrowRight') show(pos + 1);
  });
}
