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
function Page() { return <SectionPage content={{"label": {"en": "Impact & SDGs", "te": "ప్రభావం & SDGs", "hi": "असर और SDGs"}, "title": {"en": "Small beginnings. Meaningful possibilities.", "te": "చిన్న ప్రారంభం. మంచి అవకాశాలు.", "hi": "छोटी शुरुआत। अच्छे बदलाव की उम्मीद।"}, "description": {"en": "Our intended impact and links to the Sustainable Development Goals will be outlined here. No outcomes have been measured yet.", "te": "మా లక్ష్యాలు మరియు స్థిరమైన అభివృద్ధి లక్ష్యాలతో సంబంధాన్ని ఇక్కడ వివరిస్తాము. ఇంకా ఫలితాలను కొలవలేదు.", "hi": "हम क्या बदलाव लाना चाहते हैं और यह SDGs से कैसे जुड़ता है, यहाँ बताएँगे। अभी किसी नतीजे को मापा नहीं गया है।"}, "items": [{"title": {"en": "Women’s empowerment", "te": "మహిళా సాధికారత", "hi": "महिलाओं को आगे बढ़ने में मदद"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}, {"title": {"en": "Livelihood opportunities", "te": "జీవనోపాధి అవకాశాలు", "hi": "कमाई के मौके"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}, {"title": {"en": "Digital inclusion", "te": "డిజిటల్ అందుబాటు", "hi": "डिजिटल साधन सबके लिए"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}]}} />; }
