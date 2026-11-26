import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Heart, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/site-shell';
import craft from '@/assets/hunar-craft.png.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Hunar Sakhi — Your craft. Your voice.' },
    { name: 'description', content: 'Meet Hunar Sakhi, an early-stage student prototype for a voice-first product listing assistant for women artisans.' },
    { property: 'og:title', content: 'Hunar Sakhi — Your craft. Your voice.' },
    { property: 'og:description', content: 'An early-stage student project supporting women artisans in Telugu and English.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'og:image', content: craft.url },
    { name: 'twitter:image', content: craft.url },
  ] }),
  component: Home,
});
function Home() {
  const { telugu } = useLanguage();
  return <main>
    <section className="home-hero">
      <img src={craft.url} className="hero-photo" alt="Hands working with handwoven sari fabric, thread and a wooden shuttle" />
      <div className="hero-shade" />
      <div className="hero-content">
        <span className="prototype-badge"><span className="status-dot" />{telugu ? 'ప్రారంభ దశ నమూనా (వెబ్ వెర్షన్)' : 'Working prototype (web version)'}</span>
        <h1 className="hero-title">{telugu ? 'హునర్ సఖి' : 'Hunar Sakhi'}</h1>
        <p className="hero-tagline">{telugu ? <>మీ నైపుణ్యానికి,<br /><em>మీ గొంతే తోడు.</em></> : <>A little support for<br /><em>the hands that create.</em></>}</p>
        <p className="hero-description">{telugu ? 'మహిళా చేతివృత్తి కళాకారుల కోసం తెలుగు, ఇంగ్లీషులో ఉత్పత్తి వివరాలను చెప్పే వాయిస్-ఫస్ట్ సహాయకురాలు.' : 'A voice-first companion for women artisans, turning product details into stories in Telugu and English.'}</p>
        <div className="hero-actions">
          <Button variant="hero" size="lg" asChild><Link to="/try-it"><Mic />{telugu ? 'ప్రయత్నించండి' : 'Try Hunar Sakhi'}<ArrowUpRight /></Link></Button>
          <Button variant="heroOutline" size="lg" asChild><Link to="/how-it-works">{telugu ? 'ఎలా పనిచేస్తుంది' : 'How it works'}<ArrowRight /></Link></Button>
        </div>
        <p className="hero-footnote"><Heart size={13} />{telugu ? 'మహిళా కళాకారుల కోసం ఒక విద్యార్థి ప్రాజెక్ట్' : 'A student project with women artisans at its heart'}</p>
      </div>
    </section>
    <section className="home-intro">
      <div><p className="eyebrow">{telugu ? 'నైపుణ్యానికి ఒక తోడు' : 'A friend to your craft'}</p><h2 className="intro-title">{telugu ? 'ప్రతి చేతిపనికి ఒక కథ ఉంది.' : <>Every handmade piece<br />has a story worth sharing.</>}</h2></div>
      <div><p className="intro-copy">{telugu ? 'హునర్ సఖి మహిళల ఇంటి ఆధారిత వ్యాపారాలకు తోడుగా ఉండాలనే ఆలోచనతో మొదలైంది. మా కథ గురించి మరిన్ని వివరాలు త్వరలో.' : 'Hunar Sakhi begins with a simple idea: make it easier for women to share the things they make. Our story, and the people we hope to support, will take shape here.'}</p><Link to="/about" className="intro-link">{telugu ? 'మా ప్రాజెక్ట్ గురించి' : 'Meet the project'}<ArrowRight size={16} /></Link></div>
    </section>
  </main>;
}
