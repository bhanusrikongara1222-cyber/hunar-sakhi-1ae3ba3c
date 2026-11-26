import { createFileRoute } from '@tanstack/react-router';
import { Mic, Info } from 'lucide-react';
import { useLanguage } from '@/components/site-shell';
export const Route = createFileRoute('/try-it')({
  head: () => ({ meta: [
    { title: 'Try It — Hunar Sakhi' },
    { name: 'description', content: 'The future home of Hunar Sakhi’s Telugu, English and Hindi product listing tool. The tool is not available yet.' },
    { property: 'og:title', content: 'Try It — Hunar Sakhi' },
    { property: 'og:description', content: 'A voice-first product listing tool for women artisans, coming in the next stage.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: TryIt,
});
function TryIt() {
  const { language, text } = useLanguage();
  return <main className="page-main">
    <p className="eyebrow">{text("Your craft. Your voice.", "మీ నైపుణ్యం. మీ గొంతు.", "आपका हुनर। आपकी आवाज़।")}</p>
    <h1 className="page-heading">{text('Try Hunar Sakhi', 'Hunar Sakhi ప్రయత్నించండి', 'Hunar Sakhi आज़माएँ')}</h1>
    <p className="page-description">{text("A space for your next product story.", "మీ ఉత్పత్తి కథ ఇక్కడ మొదలవుతుంది.", "आपके अगले सामान की कहानी के लिए एक जगह।")}</p>
    <section className="tool-placeholder"><Mic size={38} strokeWidth={1.4} /><h2>{text("Your Sakhi is on the way", "మీ సఖి త్వరలో వస్తుంది", "आपकी सखी जल्द आ रही है")}</h2><p>{text("Photo upload, voice details, captions and audio read-back will be added in the next stage. The tool is not available yet.", "ఉత్పత్తి ఫోటో, వాయిస్ వివరాలు, క్యాప్షన్ మరియు ఆడియో సౌకర్యాలు తరువాతి దశలో జోడిస్తాము. ప్రస్తుతానికి సాధనం అందుబాటులో లేదు.", "अगले चरण में फोटो डालने, बोलकर जानकारी देने, कैप्शन बनाने और उसे सुनने की सुविधा जोड़ेंगे। अभी यह टूल उपलब्ध नहीं है।")}</p></section>
    <p className="prototype-note"><Info size={16} className="mt-0.5 shrink-0" />{text("Prototype - results may not be perfect. Please check the caption before sharing.", "నమూనా - ఫలితాలు పూర్తిగా సరైనవి కాకపోవచ్చు. షేర్ చేసే ముందు క్యాప్షన్‌ను తనిఖీ చేయండి.", "यह एक प्रोटोटाइप है — नतीजों में गलती हो सकती है। शेयर करने से पहले कैप्शन ज़रूर जाँच लें।")}</p>
  </main>;
}
