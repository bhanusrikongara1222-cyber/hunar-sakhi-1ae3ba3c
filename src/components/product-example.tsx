import { useLanguage } from '@/components/language-provider';

function ProductIllustration({ clean, label }: { clean: boolean; label: string }) {
  return <svg viewBox="0 0 160 108" role="img" aria-label={label} className={clean ? 'example-image example-clean' : 'example-image example-messy'}>
    <rect width="160" height="108" className="example-backdrop" />
    {!clean && <g className="example-clutter">
      <path d="M0 10 L63 0 L82 108 L0 108Z" className="example-cloth" />
      <path d="M8 15 L29 108 M22 9 L44 108 M37 4 L59 108" className="example-cloth-stripe" />
      <rect x="126" y="8" width="24" height="35" rx="3" transform="rotate(16 138 25)" />
      <path d="M110 88 Q128 65 146 89 T160 100" className="example-thread" />
    </g>}
    <g transform={clean ? 'translate(0 0)' : 'rotate(-12 80 54)'}>
      <path d="M58 20 C47 48 47 68 80 85 C113 68 113 48 102 20" className="example-necklace" />
      <path d="M59 41 C55 62 64 70 80 79 C96 70 105 62 101 41" className="example-beads" />
      <path d="M80 78 L89 88 L80 100 L71 88Z" className="example-pendant" />
      <circle cx="60" cy="19" r="3" className="example-pendant" />
      <circle cx="100" cy="19" r="3" className="example-pendant" />
    </g>
  </svg>;
}

export function ProductExample() {
  const { text } = useLanguage();
  return <figure className="product-example">
    <figcaption className="example-label">{text('Illustrative example', 'ఊహాత్మక ఉదాహరణ', 'समझाने के लिए एक उदाहरण')}</figcaption>
    <div className="example-comparison">
      <div><span className="example-stage">{text('Before', 'ముందు', 'पहले')}</span><ProductIllustration clean={false} label={text('Illustration of a necklace on a cluttered surface', 'చిందరవందరగా ఉన్న వస్తువుల మధ్య హారం బొమ్మ', 'बिखरे सामान के बीच हार का चित्र')} /></div>
      <div><span className="example-stage">{text('After', 'తరువాత', 'बाद में')}</span><ProductIllustration clean label={text('Illustration of the same necklace against a clean background', 'శుభ్రమైన నేపథ్యంపై అదే హారం బొమ్మ', 'साफ़ पृष्ठभूमि पर उसी हार का चित्र')} /></div>
    </div>
    <p className="example-caption">{text('“A beaded necklace, made with care.”', '“శ్రద్ధగా తయారు చేసిన పూసల హారం.”', '“प्यार से बनाया गया मोतियों का हार।”')}</p>
  </figure>;
}