import kommuner from '@/data/kommuner.json';
import Link from 'next/link';
import FAQ from '@/components/FAQ';

export function generateStaticParams() {
  return kommuner.map(k => ({ kommune: k.slug }));
}

export function generateMetadata({ params }) {
  const k = kommuner.find(k => k.slug === params.kommune);
  if (!k) return {};
  return {
    title: `Nettside i ${k.name} — Enkel nettside for bedrifter i ${k.name}`,
    description: `Trenger du en enkel nettside i ${k.name}? ainettside lager en profesjonell nettside for bedriften din på 24 timer. 299 kr/mnd. Ingen oppstart.`,
    alternates: { canonical: `https://ainettside.no/${k.slug}/` },
    openGraph: {
      title: `Nettside i ${k.name} — ainettside`,
      description: `Enkel, profesjonell nettside for bedrifter i ${k.name}. 299 kr/mnd.`,
    },
  };
}

export default function KommunePage({ params }) {
  const k = kommuner.find(k => k.slug === params.kommune);
  if (!k) return <div className="legal-wrap"><h1>Fant ikke kommunen</h1></div>;

  const nearby = k.nearby
    ?.map(slug => kommuner.find(kk => kk.slug === slug))
    .filter(Boolean) || [];

  const faqItems = [
    { q: `Hva koster en nettside i ${k.name} med ainettside?`, a: `ainettside koster 299 kr i måneden for en ferdig, profesjonell nettside i ${k.name}. Ingen oppstartskostnad. Hosting, SSL, domene og endringer er inkludert. Ingen bindingstid.` },
    { q: `Hvor lang tid tar det å lage nettside i ${k.name}?`, a: `ainettside leverer ferdig nettside innen 24 timer. Du fyller inn et skjema med informasjon om bedriften din i ${k.name}, og vi gjør resten.` },
    { q: `Blir bedriften min i ${k.name} synlig på Google?`, a: `Ja. Alle nettsider fra ainettside er optimalisert for søkemotorer med riktige titler, metabeskrivelser og strukturert data. Vi optimaliserer for lokale søk slik at kunder i ${k.name} finner deg.` },
    { q: `Lager ainettside nettsider for alle bransjer i ${k.name}?`, a: `Ja. ainettside lager nettsider for rørleggere, elektrikere, frisører, kafeer, restauranter, rengjøringsfirmaer, fotografer og alle andre småbedrifter i ${k.name}.` },
    { q: `Hva skiller ainettside fra webbyråer i ${k.name}?`, a: `Et webbyrå tar gjerne 20 000-60 000 kr og bruker uker. ainettside koster 299 kr/mnd uten oppstart og leverer på 24 timer med norsk kundeservice.` },
  ];

  const bransjer = [
    'Rørlegger', 'Elektriker', 'Snekker', 'Frisør',
    'Kafé', 'Restaurant', 'Fotograf', 'Rengjøring',
    'Bilverksted', 'Massør', 'Blomster', 'PT / Trener',
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: `ainettside ${k.name}`,
        description: `ainettside lager enkle, profesjonelle nettsider for små bedrifter i ${k.name}. 299 kr/mnd. Ferdig innen 24 timer.`,
        url: `https://ainettside.no/${k.slug}/`,
        priceRange: '299 NOK/mnd',
        address: { '@type': 'PostalAddress', addressLocality: k.name, addressRegion: k.fylke, addressCountry: 'NO' },
        geo: { '@type': 'GeoCoordinates', latitude: k.lat, longitude: k.lng },
        areaServed: [
          { '@type': 'City', name: k.name },
          ...nearby.map(n => ({ '@type': 'City', name: n.name })),
        ],
        parentOrganization: { '@type': 'Organization', name: 'ainettside', url: 'https://ainettside.no' },
        makesOffer: {
          '@type': 'Offer', price: '299', priceCurrency: 'NOK',
          itemOffered: { '@type': 'Service', name: 'ainettside nettside-tjeneste', serviceType: 'Webdesign' },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map(f => ({
          '@type': 'Question', name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ainettside', item: 'https://ainettside.no/' },
          { '@type': 'ListItem', position: 2, name: `Nettside i ${k.name}`, item: `https://ainettside.no/${k.slug}/` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div style={{ padding: '80px clamp(20px,5vw,48px) 0', maxWidth: 1200, margin: '0 auto' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'rgba(148,163,184,.3)' }}>
          <Link href="/" style={{ color: 'rgba(148,163,184,.3)', textDecoration: 'none' }}>ainettside.no</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          {k.name}
        </span>
      </div>

      {/* Hero */}
      <div className="sec" style={{ paddingTop: 24 }}>
        <div className="sec-inner">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(0,255,136,.04)', border: '1px solid rgba(0,255,136,.1)', marginBottom: 20, fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: 'rgba(0,255,136,.6)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00FF88', boxShadow: '0 0 8px rgba(0,255,136,.5)' }} />
            {k.name.toUpperCase()} · NETTSIDE · 24 TIMER
          </div>
          <div className="sec-title">NETTSIDE FOR<br />BEDRIFTER I<br /><span className="grd">{k.name.toUpperCase()}.</span></div>
          <p className="sec-sub">Driver du en liten bedrift i {k.name}? ainettside lager en profesjonell nettside for deg innen 24 timer. Du trenger ikke kunne noe teknisk.</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link href="/#bestill" className="btn-g">BESTILL NETTSIDE →</Link>
            <Link href="/#demo" className="btn-o">SE DEMO</Link>
          </div>
          <p style={{ marginTop: 16, fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: 'rgba(148,163,184,.2)' }}>
            <strong style={{ color: '#00FF88' }}>299 KR/MND</strong> · INGEN OPPSTART · ALT INKLUDERT
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="sec" style={{ paddingTop: 0 }}>
        <div className="sec-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, borderRadius: 14, overflow: 'hidden', background: 'rgba(148,163,184,.06)' }}>
            {[['299,-', 'PER MÅNED'], ['24T', 'LEVERT'], ['0,-', 'OPPSTART'], [k.population?.toLocaleString('nb-NO') || '—', 'INNBYGGERE']].map(([v, l], i) => (
              <div key={i} style={{ padding: '28px 16px', background: '#1E293B', textAlign: 'center' }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: i === 0 ? '#00FF88' : '#fff' }}>{v}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: 'rgba(148,163,184,.25)', letterSpacing: '.12em', textTransform: 'uppercase' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bransjer */}
      <div className="sec">
        <div className="sec-inner">
          <div className="sec-label">BRANSJER I {k.name.toUpperCase()}</div>
          <div className="sec-title">NETTSIDE FOR DIN<br /><span className="grd">BRANSJE I {k.name.toUpperCase()}.</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 8 }}>
            {bransjer.map(b => (
              <div key={b} style={{ padding: '18px 14px', borderRadius: 12, border: '1px solid rgba(148,163,184,.06)', background: '#1E293B', textAlign: 'center', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: 'rgba(148,163,184,.45)' }}>
                {b}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(148,163,184,.2)' }}>
            Finner du ikke din bransje? <span style={{ color: '#00FF88' }}>Vi lager nettsider for alle bedrifter i {k.name}.</span>
          </p>
        </div>
      </div>

      {/* Long-form content */}
      <div className="sec">
        <div className="sec-inner">
          <div className="sec-label">NETTSIDE I {k.name.toUpperCase()}</div>
          <div className="sec-title">ALT DU TRENGER Å VITE OM<br /><span className="grd">NETTSIDE I {k.name.toUpperCase()}.</span></div>
          <div style={{ maxWidth: 680 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, textTransform: 'uppercase', margin: '36px 0 12px' }}>Hvorfor trenger bedrifter i {k.name} en nettside?</h2>
            <p style={{ fontSize: 15, color: 'rgba(148,163,184,.45)', lineHeight: 1.8, marginBottom: 16 }}>
              {k.name} {k.population > 100000 ? `er en av Norges største byer med over ${Math.round(k.population / 1000) * 1000} innbyggere` : `har ${k.population?.toLocaleString('nb-NO')} innbyggere`}. Konkurransen mellom lokale bedrifter er {k.population > 50000 ? 'høy' : 'økende'}, og de fleste potensielle kunder starter med et Google-søk. Uten en nettside er du usynlig for disse kundene.
            </p>
            <p style={{ fontSize: 15, color: 'rgba(148,163,184,.45)', lineHeight: 1.8, marginBottom: 16 }}>
              En <strong style={{ color: 'rgba(255,255,255,.65)' }}>nettside i {k.name}</strong> gir deg synlighet på Google, et profesjonelt førsteinntrykk, og gjør at kundene finner kontaktinfo med en gang. For en rørlegger, frisør eller kafé i {k.name} kan en enkel nettside bety forskjellen mellom å bli valgt og å bli oversett.
            </p>

            <h2 style={{ fontSize: 20, fontWeight: 800, textTransform: 'uppercase', margin: '36px 0 12px' }}>Hva koster en nettside i {k.name}?</h2>
            <p style={{ fontSize: 15, color: 'rgba(148,163,184,.45)', lineHeight: 1.8, marginBottom: 16 }}>
              Et webbyrå tar gjerne 20 000 til 50 000 kroner for en enkel nettside, pluss månedlige kostnader. Med <strong style={{ color: 'rgba(255,255,255,.65)' }}>ainettside</strong> koster en profesjonell nettside i {k.name} <strong style={{ color: 'rgba(255,255,255,.65)' }}>299 kroner i måneden</strong>. Ingen oppstartskostnad. Hosting, SSL, domene, SEO og endringer er inkludert.
            </p>

            <h2 style={{ fontSize: 20, fontWeight: 800, textTransform: 'uppercase', margin: '36px 0 12px' }}>Slik fungerer ainettside i {k.name}</h2>
            <p style={{ fontSize: 15, color: 'rgba(148,163,184,.45)', lineHeight: 1.8, marginBottom: 16 }}>
              Du fyller inn et skjema på ainettside.no med firmanavn, bransje og kontaktinfo. Eller du ringer oss direkte. ainettside bruker kunstig intelligens til å bygge en profesjonell nettside tilpasset din bransje og ditt område i {k.name}. Innen 24 timer er nettsiden din klar.
            </p>

            {k.bydeler && k.bydeler.length > 0 && (
              <>
                <h2 style={{ fontSize: 20, fontWeight: 800, textTransform: 'uppercase', margin: '36px 0 12px' }}>Områder i {k.name} vi dekker</h2>
                <p style={{ fontSize: 15, color: 'rgba(148,163,184,.45)', lineHeight: 1.8, marginBottom: 16 }}>
                  ainettside lager nettsider for bedrifter i hele {k.name}: {k.bydeler.map((b, i) => (
                    <strong key={b} style={{ color: 'rgba(255,255,255,.65)' }}>{b}{i < k.bydeler.length - 1 ? ', ' : ''}</strong>
                  ))}{nearby.length > 0 ? `. Vi dekker også nabokommunene ${nearby.map(n => n.name).join(', ')}.` : '.'}
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="sec">
        <div className="sec-inner">
          <div className="sec-label">SPØRSMÅL OG SVAR</div>
          <div className="sec-title">VANLIGE SPØRSMÅL OM<br /><span className="grd">NETTSIDE I {k.name.toUpperCase()}.</span></div>
          <div style={{ maxWidth: 680 }}>
            <FAQ items={faqItems} />
          </div>
        </div>
      </div>

      {/* Nearby kommuner */}
      {nearby.length > 0 && (
        <div className="sec">
          <div className="sec-inner">
            <div className="sec-label">NÆRLIGGENDE KOMMUNER</div>
            <div className="sec-title">NETTSIDE FOR BEDRIFTER<br /><span className="grd">RUNDT {k.name.toUpperCase()}.</span></div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {nearby.map(n => (
                <Link key={n.slug} href={`/${n.slug}/`} style={{ padding: '10px 20px', borderRadius: 10, border: '1px solid rgba(148,163,184,.06)', background: '#1E293B', fontSize: 13, color: 'rgba(148,163,184,.4)', fontWeight: 600, textDecoration: 'none' }}>
                  {n.name} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="sec">
        <div className="sec-inner">
          <div style={{ padding: 48, borderRadius: 20, background: 'linear-gradient(135deg,rgba(0,255,136,.04),rgba(0,204,255,.02))', border: '1px solid rgba(0,255,136,.1)', textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: 8 }}>KLAR FOR EN NETTSIDE<br /><span className="grd">I {k.name.toUpperCase()}?</span></div>
            <p style={{ fontSize: 14, color: 'rgba(148,163,184,.35)', marginBottom: 24 }}>299 kr/mnd · Ingen oppstart · Ferdig på 24 timer</p>
            <Link href="/#bestill" className="btn-g">BESTILL DIN NETTSIDE →</Link>
          </div>
        </div>
      </div>
    </>
  );
}
