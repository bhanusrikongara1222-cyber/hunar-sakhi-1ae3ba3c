import { createFileRoute } from '@tanstack/react-router';
import { SectionPage } from '@/components/section-page';
export const Route = createFileRoute('/about')({
  head: () => ({ meta: [
    { title: "About & Contact \u2014 Hunar Sakhi" },
    { name: 'description', content: "Meet the project, its purpose and the people behind it. Team and contact details will be added here." },
    { property: 'og:title', content: "About & Contact \u2014 Hunar Sakhi" },
    { property: 'og:description', content: "Meet the project, its purpose and the people behind it. Team and contact details will be added here." },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Page,
});
function Page() { return <SectionPage content={{"label": {"en": "About & Contact", "te": "మా గురించి & సంప్రదించండి", "hi": "हमारे बारे में और संपर्क"}, "title": {"en": "A student idea, rooted in real craft.", "te": "నిజమైన చేతిపని నుంచి పుట్టిన విద్యార్థి ఆలోచన.", "hi": "असली हुनर से जुड़ा, छात्रों का एक विचार।"}, "description": {"en": "Meet the project, its purpose and the people behind it. Team and contact details will be added here.", "te": "ప్రాజెక్ట్, దాని లక్ష్యం మరియు బృందాన్ని ఇక్కడ పరిచయం చేస్తాము. బృందం మరియు సంప్రదింపు వివరాలు తరువాత జోడిస్తాము.", "hi": "यह प्रोजेक्ट क्या है, क्यों बना है और इसके पीछे कौन है, यहाँ जानेंगे। टीम और संपर्क की जानकारी जल्द जोड़ेंगे।"}, "items": [{"title": {"en": "Our purpose", "te": "మా లక్ష్యం", "hi": "हमारा मकसद"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}, {"title": {"en": "The student team", "te": "విద్యార్థి బృందం", "hi": "छात्रों की टीम"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}, {"title": {"en": "Get in touch", "te": "సంప్రదించండి", "hi": "हमसे बात करें"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}]}} />; }
