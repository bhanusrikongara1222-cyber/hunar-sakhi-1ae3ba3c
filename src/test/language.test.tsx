import { fireEvent, render, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { LanguageProvider, languages, useLanguage, type Language } from '@/components/language-provider';
afterEach(cleanup);
function Probe({ page, observe }: { page: string; observe: (language: Language, page: string) => void }) {
  const { language, setLanguage } = useLanguage();
  observe(language, page);
  return <button aria-label="select language" onClick={() => setLanguage('hi')} />;
}
describe('Website language rules', () => {
  it('supports English, Telugu and Hindi', () => {
    expect(languages).toEqual(['en', 'te', 'hi']);
  });
  it('retains the selected language when the page changes', () => {
    let state: { language: Language; page: string } = { language: 'en', page: '/' };
    const observe = (language: Language, page: string) => { state = { language, page }; };
    const view = render(<LanguageProvider><Probe page="/" observe={observe} /></LanguageProvider>);
    fireEvent.click(view.getByRole('button', { name: 'select language' }));
    view.rerender(<LanguageProvider><Probe page="/try-it" observe={observe} /></LanguageProvider>);
    expect(state).toEqual({ language: 'hi', page: '/try-it' });
  });
});
