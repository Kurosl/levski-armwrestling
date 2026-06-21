/**
 * ════════════════════════════════════════════════════════
 * SITE CONFIGURATION  —  assets/js/config.js
 * ════════════════════════════════════════════════════════
 *
 * Edit this file to update:
 *   • Club name, tagline
 *   • Contact info (phone, email, address)
 *   • Social media links
 *   • About section stats & text
 *   • Google Maps embed URL
 *
 * After editing, just save — the page updates automatically.
 */

export const config = {

  // ── Club identity ──────────────────────────────────────
  club: {
    name:    'Левски Канадска Борба',
    nameEn:  'Levski Armwrestling',
    tagline: 'Клуб по канадска борба — София, България',
    founded: 2023,
  },

  // ── Contact info ───────────────────────────────────────
  contact: {
    phone:     '+359 89 852 7243',
    phoneHref: 'tel:+359898527243',
    email:     'levski.armwrestling@gmail.com',
    emailHref: 'mailto:levski.armwrestling@gmail.com',
    address:   'Стадион „Георги Аспарухов“, ул. „Тодорини кукли“ №47, София',
  },

  // ── Social media ───────────────────────────────────────
  social: {
    instagram: {
      handle: '@levski_armwrestling',
      url: 'https://www.instagram.com/levski_armwrestling',
    },
    facebook: {
      handle: 'Levski Armwrestling',
      url: 'https://www.facebook.com',
    },
    youtube: {
      handle: 'Levski Armwrestling',
      url: 'https://www.youtube.com',
    },
  },

  // ── About section stats ────────────────────────────────
  stats: [
    { value: '2023', label: 'Основан (декември)' },
    { value: '30',   label: 'Картотекирани състезатели' },
    { value: '50+',  label: 'Медала от турнири' },
    { value: 'БФКБ', label: 'Лицензиран клуб' },
  ],

  // ── About section text ─────────────────────────────────
  about: {
    paragraphs: [
      'Спортен клуб по канадска борба „ЛЕВСКИ АРМРЕСТЛИНГ“ е основан през декември 2023 година под знамето на легендарния „Левски“. Клубът е пълноправен член на Обединени спортни клубове Левски (ОСК Левски).',
      '„ЛЕВСКИ АРМРЕСТЛИНГ“ е вписан в Регистъра на лицензираните спортни федерации и спортните клубове — техни членове по чл. 9, ал. 1, т. 1 от ЗФВС, с регистрационен №115-036 от 23.01.2025 г., като член на Българска федерация канадска борба (БФКБ).',
      'Днес клубът обединява 30 картотекирани състезатели за 2026 г. и е спечелил над 50 медала от републикански и международни турнири. Вратите ни са отворени за всеки — от начинаещи до състезатели, които искат да открият силата в себе си.',
    ],
  },

  // ── Google Maps embed ──────────────────────────────────
  // To update: Google Maps → Share → Embed a map → copy the src="" URL
  mapEmbedUrl: 'https://maps.google.com/maps?q=%D0%A1%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD%20%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%20%D0%90%D1%81%D0%BF%D0%B0%D1%80%D1%83%D1%85%D0%BE%D0%B2%2C%20%D0%A1%D0%BE%D1%84%D0%B8%D1%8F&z=16&output=embed',

};
