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
function Page() { return <SectionPage content={{"label": {"en": "Features", "te": "ప్రత్యేకతలు", "hi": "क्या मिलेगा"}, "title": {"en": "Thoughtful tools. Familiar language.", "te": "సులభమైన సాధనాలు. పరిచయమైన భాష.", "hi": "आसान टूल। अपनी भाषा।"}, "description": {"en": "The planned features of Hunar Sakhi will be introduced here.", "te": "Hunar Sakhi ప్రణాళికలో ఉన్న సౌకర్యాలు ఇక్కడ పరిచయం చేస్తాము.", "hi": "Hunar Sakhi में आगे जो सुविधाएँ जोड़ेंगे, उनके बारे में यहाँ बताएँगे।"}, "items": [{"title": {"en": "Voice-first details", "te": "గొంతుతో వివరాలు", "hi": "बोलकर जानकारी दें"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}, {"title": {"en": "Product photos & captions", "te": "ఉత్పత్తి ఫోటోలు & క్యాప్షన్లు", "hi": "सामान की फोटो और कैप्शन"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}, {"title": {"en": "Telugu, English & Hindi", "te": "తెలుగు, ఇంగ్లీష్ & హిందీ", "hi": "तेलुगु, अंग्रेज़ी और हिंदी"}, "description": {"en": "This part of our project will be developed in an upcoming step.", "te": "ఈ భాగాన్ని తరువాతి దశలో అభివృద్ధి చేస్తాము.", "hi": "प्रोजेक्ट का यह हिस्सा अगले चरण में तैयार करेंगे।"}}]}} />; }
