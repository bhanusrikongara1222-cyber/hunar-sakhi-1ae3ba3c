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
function Page() { return <SectionPage content={{"label": {"en": "Roadmap", "te": "ప్రణాళిక"}, "title": {"en": "One step at a time. Together.", "te": "ఒక్కో అడుగు. కలిసి."}, "description": {"en": "The project’s stages and next steps will be shared here.", "te": "ప్రాజెక్ట్ దశలు మరియు తరువాతి అడుగులు ఇక్కడ పంచుకుంటాము."}, "items": [{"title": {"en": "Now · Website foundation", "te": "ఇప్పుడు · వెబ్‌సైట్ పునాది"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}, {"title": {"en": "Next · Working web tool", "te": "తరువాత · వెబ్ సాధనం"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}, {"title": {"en": "Later · WhatsApp version", "te": "భవిష్యత్తులో · వాట్సాప్ వెర్షన్"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}]}} />; }
