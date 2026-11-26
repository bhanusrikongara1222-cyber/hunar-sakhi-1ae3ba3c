import { createFileRoute } from '@tanstack/react-router';
import { SectionPage } from '@/components/section-page';
export const Route = createFileRoute('/how-it-works')({
  head: () => ({ meta: [
    { title: "How It Works \u2014 Hunar Sakhi" },
    { name: 'description', content: "The planned journey will be explained here, one simple step at a time." },
    { property: 'og:title', content: "How It Works \u2014 Hunar Sakhi" },
    { property: 'og:description', content: "The planned journey will be explained here, one simple step at a time." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Page,
});
function Page() { return <SectionPage content={{"label": {"en": "How It Works", "te": "ఎలా పనిచేస్తుంది"}, "title": {"en": "From your craft to your customers.", "te": "మీ చేతిపని నుంచి మీ కస్టమర్ల వరకు."}, "description": {"en": "The planned journey will be explained here, one simple step at a time.", "te": "ప్రణాళికలో ఉన్న ప్రక్రియను ఇక్కడ ఒక్కో దశగా వివరిస్తాము."}, "items": [{"title": {"en": "Share a photo", "te": "ఫోటో పంచుకోండి"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}, {"title": {"en": "Tell your story", "te": "మీ కథ చెప్పండి"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}, {"title": {"en": "Review and share", "te": "తనిఖీ చేసి పంచుకోండి"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము."}}]}} />; }
