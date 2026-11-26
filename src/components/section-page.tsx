import { useLanguage } from '@/components/site-shell';
import { Sparkles, HeartHandshake, Sprout } from 'lucide-react';

import type { LocalText } from '@/components/language-provider';
export type SectionContent = { label: LocalText; title: LocalText; description: LocalText; items: { title: LocalText; description: LocalText }[] };
export function SectionPage({ content }: { content: SectionContent }) {
  const { language, text: translate } = useLanguage();
  const text = (value: LocalText) => value[language];
  const icons = [Sparkles, HeartHandshake, Sprout];
  return <main className="page-main">
    <p className="eyebrow">{text(content.label)}</p>
    <h1 className="page-heading">{text(content.title)}</h1>
    <p className="page-description">{text(content.description)}</p>
    <div className="placeholder-grid">{content.items.map((item, index) => {
      const Icon = icons[index % icons.length] ?? Sparkles;
      return <article key={item.title.en} className="placeholder-item"><Icon className="placeholder-icon" strokeWidth={1.5} /><h2>{text(item.title)}</h2><p>{text(item.description)}</p><span className="placeholder-label">{translate('More details coming soon', 'మరిన్ని వివరాలు త్వరలో', 'और जानकारी जल्द आएगी')}</span></article>;
    })}</div>
  </main>;
}
