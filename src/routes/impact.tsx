import { createFileRoute } from '@tanstack/react-router';
import { SectionPage } from '@/components/section-page';
export const Route = createFileRoute('/impact')({
  head: () => ({ meta: [
    { title: "Impact & SDGs \u2014 Hunar Sakhi" },
    { name: 'description', content: "Our intended impact and links to the Sustainable Development Goals will be outlined here. No outcomes have been measured yet." },
    { property: 'og:title', content: "Impact & SDGs \u2014 Hunar Sakhi" },
    { property: 'og:description', content: "Our intended impact and links to the Sustainable Development Goals will be outlined here. No outcomes have been measured yet." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Page,
});
function Page() { return <SectionPage content={{"label": {"en": "Impact & SDGs", "te": "ప్రభావం & SDGs"}, "title": {"en": "Small beginnings. Meaningful possibilities.", "te": "చిన్న ప్రారంభం. మంచి అవకాశాలు."}, "description": {"en": "Our intended impact and links to the Sustainable Development Goals will be outlined here. No outcomes have been measured yet.", "te": "మా లక్ష్యాలు మరియు స్థిరమైన అభివృద్ధి లక్ష్యాలతో సంబంధాన్ని ఇక్కడ వివరిస్తాము. ఇంకా ఫలితాలను కొలవలేదు."}, "items": [{"title": {"en": "Women’s empowerment", "te": "మహిళా సాధికారత"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}, {"title": {"en": "Livelihood opportunities", "te": "జీవనోపాధి అవకాశాలు"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}, {"title": {"en": "Digital inclusion", "te": "డిజిటల్ అందుబాటు"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}]}} />; }
