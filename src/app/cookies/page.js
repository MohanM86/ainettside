import Link from 'next/link';

export const metadata = {
  title: 'Informasjonskapsler',
  description: 'Informasjon om informasjonskapsler (cookies) på ainettside.no.',
  alternates: { canonical: 'https://ainettside.no/cookies/' },
};

export default function Cookies() {
  return (
    <div className="legal-wrap">
      <Link href="/" className="legal-back">← Tilbake til forsiden</Link>
      <h1>Informasjonskapsler</h1>
      <p className="legal-updated">Sist oppdatert: 9. mars 2026</p>
      <h2>Hva er informasjonskapsler?</h2>
      <p>Informasjonskapsler (cookies) er små tekstfiler som lagres på enheten din når du besøker en nettside.</p>
      <h2>Hvilke cookies bruker vi?</h2>
      <p>ainettside.no bruker kun <strong>nødvendige informasjonskapsler</strong>. Vi bruker ikke analyseverktøy, sporingscookies eller tredjeparts markedsføringscookies.</p>
      <h2>Tredjeparts cookies</h2>
      <p>Vi laster inn fonter fra Google Fonts. Google kan sette cookies i forbindelse med dette.</p>
      <h2>Administrere cookies</h2>
      <p>Du kan slette eller blokkere informasjonskapsler i nettleserens innstillinger.</p>
    </div>
  );
}
