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
function Page() { return <SectionPage content={{"label": {"en": "The Problem", "te": "సమస్య", "hi": "दिक्कतें"}, "title": {"en": "Good craft deserves to be seen.", "te": "మంచి చేతిపని అందరికీ కనిపించాలి.", "hi": "अच्छा हुनर सबको दिखना चाहिए।"}, "description": {"en": "The challenges facing home-based women artisans will be explored here.", "te": "ఇంటి ఆధారిత మహిళా కళాకారుల సవాళ్ల గురించి వివరాలు ఇక్కడ వస్తాయి.", "hi": "घर से काम करने वाली महिलाओं को आने वाली दिक्कतों के बारे में यहाँ बताएँगे।"}, "items": [{"title": {"en": "Everyday photography", "te": "రోజువారీ ఫోటోలు", "hi": "रोज़ की फोटो"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}, {"title": {"en": "Finding the words", "te": "సరైన పదాలు", "hi": "सही शब्द ढूँढना"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}, {"title": {"en": "Access to support", "te": "సహాయం అందుబాటు", "hi": "मदद मिलना"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}]}} />; }
