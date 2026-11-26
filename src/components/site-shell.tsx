import { useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Flower2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { languages, useLanguage } from '@/components/language-provider';
export { useLanguage } from '@/components/language-provider';
const navigation = [
  { to: '/', en: 'Home', te: 'హోమ్', hi: 'होम' },
  { to: '/problem', en: 'Problem', te: 'సమస్య', hi: 'दिक्कतें' },
  { to: '/how-it-works', en: 'How It Works', te: 'ఎలా పనిచేస్తుంది', hi: 'कैसे काम करता है' },
  { to: '/features', en: 'Features', te: 'ప్రత్యేకతలు', hi: 'क्या मिलेगा' },
  { to: '/impact', en: 'Impact & SDGs', te: 'ప్రభావం & SDGs', hi: 'असर और SDGs' },
  { to: '/roadmap', en: 'Roadmap', te: 'ప్రణాళిక', hi: 'आगे का रास्ता' },
  { to: '/about', en: 'About & Contact', te: 'మా గురించి', hi: 'हमारे बारे में और संपर्क' },
] as const;
export function SiteShell({ children }: { children: ReactNode }) {
  const { language, setLanguage, text } = useLanguage();
  const [open, setOpen] = useState(false);
  return <div lang={language}>
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label={text('Hunar Sakhi home', 'Hunar Sakhi హోమ్', 'Hunar Sakhi होम')} onClick={() => setOpen(false)}>
          <Flower2 className="brand-icon" strokeWidth={1.4} />
          <div><div className="brand-name">Hunar Sakhi<span className="text-primary">.</span></div><div className="brand-sub">{text('YOUR CRAFT. YOUR VOICE.', 'మీ నైపుణ్యం. మీ కథ.', 'आपका हुनर। आपकी आवाज़।')}</div></div>
        </Link>
        <nav className="desktop-nav" aria-label={text('Main navigation', 'ప్రధాన మెనూ', 'मुख्य मेन्यू')}>
          {navigation.map(item => <Link key={item.to} to={item.to} className="nav-link" activeOptions={{ exact: true }}>{item[language]}</Link>)}
          <Button asChild><Link to="/try-it">{text('Try It', 'ప్రయత్నించండి', 'आज़माएँ')}<ArrowUpRight /></Link></Button>
        </nav>
        <div className="language-switch" role="group" aria-label={text('Language', 'భాష', 'भाषा')}>
          {languages.map(code => <Button key={code} size="sm" variant={language === code ? 'secondary' : 'ghost'} aria-pressed={language === code} lang={code} onClick={() => setLanguage(code)}>{({ en: 'EN', te: 'తెలుగు', hi: 'हिंदी' })[code]}</Button>)}
        </div>
        <Button className="mobile-menu-button" variant="ghost" size="icon" aria-label={open ? text('Close menu', 'మెనూ మూసివేయండి', 'मेन्यू बंद करें') : text('Open menu', 'మెనూ తెరవండి', 'मेन्यू खोलें')} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="mobile-nav" aria-label={text('Mobile navigation', 'మొబైల్ మెనూ', 'मोबाइल मेन्यू')}>
        {navigation.map(item => <Link key={item.to} to={item.to} className="nav-link" onClick={() => setOpen(false)}>{item[language]}</Link>)}
        <Button asChild><Link to="/try-it" onClick={() => setOpen(false)}>{text('Try It', 'ప్రయత్నించండి', 'आज़माएँ')}<ArrowUpRight /></Link></Button>
      </nav>}
    </header>
    {children}
    <footer className="site-footer"><span>Hunar Sakhi · {text('A student project', 'విద్యార్థి ప్రాజెక్ట్', 'छात्रों का एक प्रोजेक्ट')}</span><span>{text('Working prototype (web version)', 'ప్రారంభ దశ నమూనా (వెబ్ వెర్షన్)', 'शुरुआती प्रोटोटाइप (वेब वर्ज़न)')}</span><span>{text('Rooted in craft. Made for women.', 'నైపుణ్యానికి తోడు. మహిళలకు అండ.', 'हुनर से जुड़ा। महिलाओं के लिए।')}</span></footer>
  </div>;
}
