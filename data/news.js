/**
 * ════════════════════════════════════════════════════════
 * NEWS DATA  —  data/news.js
 * ════════════════════════════════════════════════════════
 *
 * HOW TO ADD A NEWS ITEM
 * ──────────────────────
 *  • date    — display date, e.g. '30 май 2026'
 *  • badge   — short tag, e.g. 'Признание', 'Турнир'
 *  • title   — headline
 *  • source  — who/where it came from (optional)
 *  • text    — the news body (1–2 short paragraphs)
 *  • link    — URL to a document/page (optional). For a PDF,
 *              drop the file in assets/docs/ and point here.
 *  • linkLabel — button text (optional, default 'Виж повече')
 *  • image   — optional cover image path
 */

export const news = [
  {
    id: 1,
    date: '30 май 2026',
    badge: 'Признание',
    title: 'Благодарствено писмо от Район „Подуяне"',
    source: 'Столична община — Район „Подуяне"',
    text: 'Клуб по канадска борба „Левски" получи благодарствено писмо от кмета на район „Подуяне" за участието в Спортния полуден, поставил началото на Празника на района на 30 май 2026 г. в парк „Герена" — за атрактивните демонстрации, спортсменския дух и възможността посетителите да изпробват своята сила и воля.',
    link: 'assets/docs/blagodarstveno-pismo-poduyane.pdf',
    linkLabel: 'Виж писмото',
  },
];
