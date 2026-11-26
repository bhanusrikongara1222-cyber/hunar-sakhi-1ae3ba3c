import { useLanguage } from '@/components/site-shell';
import { Sparkles, HeartHandshake, Sprout } from 'lucide-react';

type LocalText = { en: string; te: string };
export type SectionContent = { label: LocalText; title: LocalText; description: LocalText; items: { title: LocalText; description: LocalText }[] };
export function SectionPage({ content }: { content: SectionContent }) {
  const { telugu } = useLanguage();
  const text = (value: LocalText) => telugu ? value.te : value.en;
  const icons = [Sparkles, HeartHandshake, Sprout];
  return <main className="page-main">
    <p className="eyebrow">{text(content.label)}</p>
    <h1 className="page-heading">{text(content.title)}</h1>
    <p className="page-description">{text(content.description)}</p>
    <div className="placeholder-grid">{content.items.map((item, index) => {
      const Icon = icons[index % icons.length] ?? Sparkles;
      return <article key={item.title.en} className="placeholder-item"><Icon className="placeholder-icon" strokeWidth={1.5} /><h2>{text(item.title)}</h2><p>{text(item.description)}</p><span className="placeholder-label">{telugu ? 'మరిన్ని వివరాలు త్వరలో' : 'More details coming soon'}</span></article>;
    })}</div>
  </main>;
}
