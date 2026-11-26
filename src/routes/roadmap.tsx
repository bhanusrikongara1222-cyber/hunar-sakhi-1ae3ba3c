import { createFileRoute } from '@tanstack/react-router';
import { SectionPage } from '@/components/section-page';
export const Route = createFileRoute('/roadmap')({
  head: () => ({ meta: [
    { title: "Roadmap \u2014 Hunar Sakhi" },
    { name: 'description', content: "The project\u2019s stages and next steps will be shared here." },
    { property: 'og:title', content: "Roadmap \u2014 Hunar Sakhi" },
    { property: 'og:description', content: "The project\u2019s stages and next steps will be shared here." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Page,
});
function Page() { return <SectionPage content={{"label": {"en": "Roadmap", "te": "ప్రణాళిక", "hi": "आगे का रास्ता"}, "title": {"en": "One step at a time. Together.", "te": "ఒక్కో అడుగు. కలిసి.", "hi": "एक-एक कदम। साथ मिलकर।"}, "description": {"en": "The project’s stages and next steps will be shared here.", "te": "ప్రాజెక్ట్ దశలు మరియు తరువాతి అడుగులు ఇక్కడ పంచుకుంటాము.", "hi": "प्रोजेक्ट के चरण और आगे के कदम यहाँ बताएँगे।"}, "items": [{"title": {"en": "Now · Website foundation", "te": "ఇప్పుడు · వెబ్‌సైట్ పునాది", "hi": "अभी · वेबसाइट की शुरुआत"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}, {"title": {"en": "Next · Working web tool", "te": "తరువాత · వెబ్ సాధనం", "hi": "अगला चरण · काम करने वाला वेब टूल"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}, {"title": {"en": "Later · WhatsApp version", "te": "భవిష్యత్తులో · వాట్సాప్ వెర్షన్", "hi": "बाद में · WhatsApp वर्ज़न"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}]}} />; }
