import { createFileRoute } from '@tanstack/react-router';
import { Mic, Info } from 'lucide-react';
import { useLanguage } from '@/components/site-shell';
export const Route = createFileRoute('/try-it')({
  head: () => ({ meta: [
    { title: 'Try It — Hunar Sakhi' },
    { name: 'description', content: 'The future home of Hunar Sakhi’s Telugu and English product listing tool. The tool is not available yet.' },
    { property: 'og:title', content: 'Try It — Hunar Sakhi' },
    { property: 'og:description', content: 'A voice-first product listing tool for women artisans, coming in the next stage.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: TryIt,
});
function TryIt() {
  const { telugu } = useLanguage();
  return <main className="page-main">
    <p className="eyebrow">{telugu ? 'మీ నైపుణ్యం. మీ గొంతు.' : 'Your craft. Your voice.'}</p>
    <h1 className="page-heading">{telugu ? 'హునర్ సఖిని ప్రయత్నించండి' : 'Try Hunar Sakhi'}</h1>
    <p className="page-description">{telugu ? 'మీ ఉత్పత్తి కథ ఇక్కడ మొదలవుతుంది.' : 'A space for your next product story.'}</p>
    <section className="tool-placeholder"><Mic size={38} strokeWidth={1.4} /><h2>{telugu ? 'మీ సఖి త్వరలో వస్తుంది' : 'Your Sakhi is on the way'}</h2><p>{telugu ? 'ఉత్పత్తి ఫోటో, వాయిస్ వివరాలు, క్యాప్షన్ మరియు ఆడియో సౌకర్యాలు తరువాతి దశలో జోడిస్తాము. ప్రస్తుతానికి సాధనం అందుబాటులో లేదు.' : 'Photo upload, voice details, captions and audio read-back will be added in the next stage. The tool is not available yet.'}</p></section>
    <p className="prototype-note"><Info size={16} className="mt-0.5 shrink-0" />{telugu ? 'నమూనా - ఫలితాలు పూర్తిగా సరైనవి కాకపోవచ్చు. షేర్ చేసే ముందు క్యాప్షన్‌ను తనిఖీ చేయండి.' : 'Prototype - results may not be perfect. Please check the caption before sharing.'}</p>
  </main>;
}
