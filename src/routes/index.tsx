import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Heart, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/site-shell';
import craft from '@/assets/hunar-craft.png.asset.json';
import { ProductExample } from '@/components/product-example';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Hunar Sakhi — Your craft. Your voice.' },
    { name: 'description', content: 'Meet Hunar Sakhi, an early-stage student prototype for a voice-first product listing assistant for women artisans.' },
    { property: 'og:title', content: 'Hunar Sakhi — Your craft. Your voice.' },
    { property: 'og:description', content: 'An early-stage student project supporting women artisans in Telugu, English and Hindi.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'og:image', content: craft.url },
    { name: 'twitter:image', content: craft.url },
  ] }),
  component: Home,
});
function Home() {
  const { language, text } = useLanguage();
  return <main>
    <section className="home-hero">
      <img src={craft.url} className="hero-photo" alt={text('Hands working with handwoven sari fabric, thread and a wooden shuttle', 'చేతితో నేసిన చీర, దారం మరియు చెక్క మగ్గం పనిముట్టుతో పని చేస్తున్న చేతులు', 'हाथ से बुनी साड़ी, धागे और लकड़ी के औज़ार के साथ काम करते हाथ')} />
      <div className="hero-shade" />
      <div className="hero-content">
        <span className="prototype-badge"><span className="status-dot" />{text("Working prototype (web version) - SDG 5 | SDG 8 | SDG 10", "ప్రారంభ దశ నమూనా (వెబ్ వెర్షన్) - SDG 5 | SDG 8 | SDG 10", "शुरुआती प्रोटोटाइप (वेब वर्ज़न) - SDG 5 | SDG 8 | SDG 10")}</span>
        <h1 className="hero-title">Hunar Sakhi</h1>
        <p className="hero-tagline">{language === 'hi' ? <>कुछ साथ उन हाथों के लिए,<br /><em>जो सुंदर चीज़ें बनाते हैं।</em></> : language === 'te' ? <>మీ నైపుణ్యానికి,<br /><em>మీ గొంతే తోడు.</em></> : <>A little support for<br /><em>the hands that create.</em></>}</p>
        <p className="hero-promise">{text('Upload a photo, speak the details, and get a professional image and caption - free, with nothing to install.', 'ఫోటో అప్‌లోడ్ చేయండి, వివరాలు చెప్పండి, చక్కని ఫోటో మరియు క్యాప్షన్ పొందండి - ఉచితంగా, ఏదీ ఇన్‌స్టాల్ చేయాల్సిన అవసరం లేదు.', 'फोटो डालें, बोलकर जानकारी दें और पाएँ एक बढ़िया फोटो और कैप्शन - मुफ़्त, बिना कुछ इंस्टॉल किए।')}</p>
        <p className="hero-description">{text("A voice-first companion for women artisans, turning product details into stories in Telugu, English and Hindi.", "మహిళా చేతివృత్తి కళాకారుల కోసం తెలుగు, ఇంగ్లీష్, హిందీలో ఉత్పత్తి వివరాలను చెప్పే వాయిస్-ఫస్ట్ సహాయకురాలు.", "हाथ से चीज़ें बनाने वाली महिलाओं की साथी। सामान की जानकारी को तेलुगु, अंग्रेज़ी और हिंदी में कहानी की तरह बताने में मदद।")}</p>
        <div className="hero-actions">
          <Button variant="hero" size="lg" asChild><Link to="/try-it"><Mic />{text("Try Hunar Sakhi", "ప్రయత్నించండి", "Hunar Sakhi आज़माएँ")}<ArrowUpRight /></Link></Button>
          <Button variant="heroOutline" size="lg" asChild><Link to="/how-it-works">{text("How it works", "ఎలా పనిచేస్తుంది", "कैसे काम करता है")}<ArrowRight /></Link></Button>
        </div>
        <ProductExample />
        <p className="hero-footnote"><Heart size={13} />{text("A student project with women artisans at its heart", "మహిళా కళాకారుల కోసం ఒక విద్యార్థి ప్రాజెక్ట్", "हाथ से चीज़ें बनाने वाली महिलाओं के लिए छात्रों का एक प्रोजेक्ट")}</p>
      </div>
    </section>
    <section className="home-intro">
      <div><p className="eyebrow">{text("A friend to your craft", "నైపుణ్యానికి ఒక తోడు", "आपके हुनर की साथी")}</p><h2 className="intro-title">{language === 'hi' ? 'हाथ से बनी हर चीज़ की एक कहानी है।' : language === 'te' ? 'ప్రతి చేతిపనికి ఒక కథ ఉంది.' : <>Every handmade piece<br />has a story worth sharing.</>}</h2></div>
      <div><p className="intro-copy">{text("Hunar Sakhi begins with a simple idea: make it easier for women to share the things they make. Our story, and the people we hope to support, will take shape here.", "Hunar Sakhi మహిళల ఇంటి ఆధారిత వ్యాపారాలకు తోడుగా ఉండాలనే ఆలోచనతో మొదలైంది. మా కథ గురించి మరిన్ని వివరాలు త్వరలో.", "Hunar Sakhi एक छोटे से विचार से शुरू हुई: महिलाएँ जो चीज़ें बनाती हैं, उन्हें दूसरों तक पहुँचाना आसान हो। हमारी कहानी और जिन महिलाओं का हम साथ देना चाहते हैं, उनके बारे में जानकारी यहाँ आएगी।")}</p><Link to="/about" className="intro-link">{text("Meet the project", "మా ప్రాజెక్ట్ గురించి", "हमारे प्रोजेक्ट के बारे में")}<ArrowRight size={16} /></Link></div>
    </section>
  </main>;
}
