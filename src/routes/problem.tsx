import { createFileRoute } from '@tanstack/react-router';
import { SectionPage } from '@/components/section-page';
export const Route = createFileRoute('/problem')({
  head: () => ({ meta: [
    { title: "The Problem \u2014 Hunar Sakhi" },
    { name: 'description', content: "The challenges facing home-based women artisans will be explored here." },
    { property: 'og:title', content: "The Problem \u2014 Hunar Sakhi" },
    { property: 'og:description', content: "The challenges facing home-based women artisans will be explored here." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Page,
});
function Page() { return <SectionPage content={{"label": {"en": "The Problem", "te": "సమస్య"}, "title": {"en": "Good craft deserves to be seen.", "te": "మంచి చేతిపని అందరికీ కనిపించాలి."}, "description": {"en": "The challenges facing home-based women artisans will be explored here.", "te": "ఇంటి ఆధారిత మహిళా కళాకారుల సవాళ్ల గురించి వివరాలు ఇక్కడ వస్తాయి."}, "items": [{"title": {"en": "Everyday photography", "te": "రోజువారీ ఫోటోలు"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}, {"title": {"en": "Finding the words", "te": "సరైన పదాలు"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}, {"title": {"en": "Access to support", "te": "సహాయం అందుబాటు"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}]}} />; }
