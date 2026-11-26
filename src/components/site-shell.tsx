import { createContext, useContext, useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Flower2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LanguageContext = createContext({ telugu: false, setTelugu: (_value: boolean) => {} });
export const useLanguage = () => useContext(LanguageContext);
const navigation = [
  { to: '/', en: 'Home', te: 'హోమ్' },
  { to: '/problem', en: 'Problem', te: 'సమస్య' },
  { to: '/how-it-works', en: 'How It Works', te: 'ఎలా పనిచేస్తుంది' },
  { to: '/features', en: 'Features', te: 'ప్రత్యేకతలు' },
  { to: '/impact', en: 'Impact & SDGs', te: 'ప్రభావం & SDGs' },
  { to: '/roadmap', en: 'Roadmap', te: 'ప్రణాళిక' },
  { to: '/about', en: 'About & Contact', te: 'మా గురించి' },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [telugu, setTelugu] = useState(false);
  const [open, setOpen] = useState(false);
  return <LanguageContext.Provider value={{ telugu, setTelugu }}>
    <div lang={telugu ? 'te' : 'en'}>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="Hunar Sakhi home" onClick={() => setOpen(false)}>
            <Flower2 className="brand-icon" strokeWidth={1.4} />
            <div><div className="brand-name">Hunar Sakhi<span className="text-primary">.</span></div><div className="brand-sub">{telugu ? 'మీ నైపుణ్యం. మీ కథ.' : 'YOUR CRAFT. YOUR VOICE.'}</div></div>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map(item => <Link key={item.to} to={item.to} className="nav-link" activeOptions={{ exact: true }}>{telugu ? item.te : item.en}</Link>)}
            <Button asChild variant="default"><Link to="/try-it">{telugu ? 'ప్రయత్నించండి' : 'Try It'}<ArrowUpRight /></Link></Button>
          </nav>
          <div className="language-switch" aria-label="Language">
            <Button size="sm" variant={!telugu ? 'secondary' : 'ghost'} aria-pressed={!telugu} onClick={() => setTelugu(false)}>EN</Button>
            <Button size="sm" variant={telugu ? 'secondary' : 'ghost'} aria-pressed={telugu} onClick={() => setTelugu(true)}>తెలుగు</Button>
          </div>
          <Button className="mobile-menu-button" variant="ghost" size="icon" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
        {open && <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map(item => <Link key={item.to} to={item.to} className="nav-link" onClick={() => setOpen(false)}>{telugu ? item.te : item.en}</Link>)}
          <Button asChild><Link to="/try-it" onClick={() => setOpen(false)}>{telugu ? 'ప్రయత్నించండి' : 'Try It'}<ArrowUpRight /></Link></Button>
        </nav>}
      </header>
      {children}
      <footer className="site-footer"><span>Hunar Sakhi · {telugu ? 'విద్యార్థి ప్రాజెక్ట్' : 'A student project'}</span><span>{telugu ? 'ప్రారంభ దశ నమూనా (వెబ్ వెర్షన్)' : 'Working prototype (web version)'}</span><span>{telugu ? 'నైపుణ్యానికి తోడు. మహిళలకు అండ.' : 'Rooted in craft. Made for women.'}</span></footer>
    </div>
  </LanguageContext.Provider>;
}
