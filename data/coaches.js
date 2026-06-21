/**
 * ════════════════════════════════════════════════════════
 * COACHES DATA  —  data/coaches.js
 * ════════════════════════════════════════════════════════
 *
 * HOW TO ADD / EDIT A COACH
 * ─────────────────────────
 *  • name   — full name (Cyrillic)
 *  • role   — title, e.g. "Старши треньор"
 *  • image  — photo in assets/images/athletes/  (or null)
 *  • initials — 2 letters watermark
 *
 * The `groupPhoto` (optional) is shown as a wide banner under
 * the coach cards. Set to null to hide it.
 */

export const coaches = [
  {
    id: 1,
    name: 'Омър Ясер Ал Нури',
    role: 'Старши треньор',
    image: 'assets/images/athletes/omar-al-nuri.png',
    initials: 'ОН',
  },
  {
    id: 2,
    name: 'Георги Петров',
    role: 'Помощник треньор',
    image: 'assets/images/athletes/georgi-petrov.png',
    initials: 'ГП',
  },
  {
    id: 3,
    name: 'Мирослав Димитров',
    role: 'Помощник треньор',
    image: 'assets/images/athletes/miroslav-dimitrov.png',
    initials: 'МД',
  },
];

export const coachesGroupPhoto = 'assets/images/athletes/coaches-group.png';
