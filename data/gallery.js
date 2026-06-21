/**
 * ════════════════════════════════════════════════════════
 * GALLERY DATA  —  data/gallery.js
 * ════════════════════════════════════════════════════════
 *
 * HOW TO ADD A PHOTO
 * ──────────────────
 *  1. Save the image to: assets/images/gallery/
 *  2. Add an object to the `gallery` array below:
 *       { src: 'assets/images/gallery/my-photo.png',
 *         category: 'vasil-levski',     // must match a category id
 *         caption: 'Описание на снимката' }
 *
 * CATEGORIES — edit labels here; `id` is used to filter.
 */

export const galleryCategories = [
  { id: 'all',          label: 'Всички' },
  { id: 'vasil-levski', label: 'Турнир „Васил Левски"' },
  { id: 'cup-sofia',    label: 'Купа София' },
  { id: 'nationals',    label: 'Републиканско 2026' },
  { id: 'super-match',  label: 'Супер мачове' },
  { id: 'club',         label: 'Клубът' },
];

const range = (prefix, from, to, category, caption) =>
  Array.from({ length: to - from + 1 }, (_, i) => {
    const n = String(from + i).padStart(2, '0');
    return { src: `assets/images/gallery/${prefix}-${n}.png`, category, caption };
  });

export const gallery = [
  ...range('vasil-levski', 1, 10, 'vasil-levski', 'Международен турнир „Васил Левски"'),
  ...range('cup-sofia',    1, 12, 'cup-sofia',    'Купа София'),
  { src: 'assets/images/gallery/nationals-2026-panagyurishte.png', category: 'nationals', caption: 'Републиканско първенство 2026 — гр. Панагюрище' },
  ...range('super-match',  1, 2,  'super-match',  'Супер мач'),
  ...range('club',         1, 9,  'club',         'Левски Канадска Борба'),
];
