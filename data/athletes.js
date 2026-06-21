/**
 * ════════════════════════════════════════════════════════
 * ATHLETES DATA  —  data/athletes.js
 * ════════════════════════════════════════════════════════
 *
 * HOW TO ADD AN ATHLETE
 * ─────────────────────
 *  1. Copy one of the objects below and paste it at the end
 *     of the `athletes` array (before the closing `]`).
 *  2. Fill in: name, badge (short tag), achievement, bio, initials.
 *  3. Set `image` to the photo path (see below) or null.
 *
 * FIELDS
 * ──────
 *  • name        — full name (Cyrillic)
 *  • badge       — short tag shown over the photo (optional).
 *                  e.g. weight class "85 кг", or "Световно 2025".
 *  • achievement — one-line headline under the name
 *  • bio         — longer text shown on hover (keep it factual)
 *  • initials    — 2 letters watermark, e.g. "ДТ"
 *
 * HOW TO ADD A PHOTO
 * ──────────────────
 *  1. Save the photo to:  assets/images/athletes/
 *  2. Recommended: a clear shot of the athlete, face upper-centre.
 *  3. Update `image` to the file path, e.g.:
 *       image: 'assets/images/athletes/david-totev.png'
 */

export const athletes = [
  {
    id: 1,
    name: 'Давид Тотев',
    badge: 'Първи медалист',
    achievement: 'Първият медалист в историята на отбора',
    bio: 'Давид Тотев е първият медалист в историята на нашия отбор — спортистът, който постави началото на успехите на клуба.',
    image: 'assets/images/athletes/david-totev.png',
    initials: 'ДТ',
  },
  {
    id: 2,
    name: 'Ясер Ал Нури',
    badge: 'Световно 2025',
    achievement: 'Световно първенство 2025 — гр. Албена',
    bio: 'Представи отбора на Световното първенство 2025 г. в гр. Албена, носейки гордо синьото знаме на Левски на световната сцена.',
    image: 'assets/images/athletes/yaser-al-nuri.png',
    initials: 'ЯН',
  },
  {
    id: 3,
    name: 'Румен Канев',
    badge: 'Шампион 2026',
    achievement: 'Републикански шампион 2026',
    bio: 'Републикански шампион за 2026 г. и 6-о място на Европейското първенство 2026 г. в гр. Будапеща.',
    image: 'assets/images/athletes/rumen-kanev.png',
    initials: 'РК',
  },
  {
    id: 4,
    name: 'Христо Делиджаков',
    badge: 'Съдия',
    achievement: 'Международен съдия',
    bio: 'Международен съдия по канадска борба — представя клуба на родната и международната състезателна сцена.',
    image: 'assets/images/athletes/hristo-delidzhakov.png',
    initials: 'ХД',
  },
];
