import { createFileRoute } from '@tanstack/react-router';
import { SectionPage } from '@/components/section-page';
export const Route = createFileRoute('/features')({
  head: () => ({ meta: [
    { title: "Features \u2014 Hunar Sakhi" },
    { name: 'description', content: "The planned features of Hunar Sakhi will be introduced here." },
    { property: 'og:title', content: "Features \u2014 Hunar Sakhi" },
    { property: 'og:description', content: "The planned features of Hunar Sakhi will be introduced here." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Page,
});
function Page() { return <SectionPage content={{"label": {"en": "Features", "te": "ప్రత్యేకతలు"}, "title": {"en": "Thoughtful tools. Familiar language.", "te": "సులభమైన సాధనాలు. పరిచయమైన భాష."}, "description": {"en": "The planned features of Hunar Sakhi will be introduced here.", "te": "హునర్ సఖి ప్రణాళికలో ఉన్న సౌకర్యాలు ఇక్కడ పరిచయం చేస్తాము."}, "items": [{"title": {"en": "Voice-first details", "te": "గొంతుతో వివరాలు"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}, {"title": {"en": "Product photos & captions", "te": "ఉత్పత్తి ఫోటోలు & క్యాప్షన్లు"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}, {"title": {"en": "Telugu & English", "te": "తెలుగు & ఇంగ్లీష్"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}]}} />; }
