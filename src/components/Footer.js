import Link from 'next/link';

const kommuner = [
  { name: 'Oslo', slug: 'oslo' },
  { name: 'Bergen', slug: 'bergen' },
  { name: 'Trondheim', slug: 'trondheim' },
  { name: 'Stavanger', slug: 'stavanger' },
  { name: 'Drammen', slug: 'drammen' },
  { name: 'Kristiansand', slug: 'kristiansand' },
  { name: 'Tromsø', slug: 'tromso' },
  { name: 'Bodø', slug: 'bodo' },
];

export default function Footer() {
  return (
    <footer>
      {/* Kommune bar */}
      <div className="ft-kommune">
        <div className="ft-kommune-inner">
          <h4>Nettside etter kommune</h4>
          <div className="ft-kommune-cities">
            {kommuner.map(k => (
              <Link key={k.slug} href={`/${k.slug}/`}>{k.name}</Link>
            ))}
          </div>
          <Link href="/kommuner/" className="ft-kommune-all">Se alle kommuner →</Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer">
        <div className="ft-inner">
          <div className="ft-grid">
            <div className="ft-brand">
              <div className="ft-brand-logo"><span className="fm">ai</span>AINETTSIDE</div>
              <p>Vi lager enkle, profesjonelle nettsider for folk som bare vil ha en pen side uten det tekniske bryet. 299 kr/mnd, alt inkludert.</p>
            </div>
            <div className="ft-col">
              <h5>Kontakt</h5>
              <a href="mailto:hei@ainettside.no">hei@ainettside.no</a>
              <a href="tel:+4740000000">400 00 000</a>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,.25)' }}>Norge</span>
            </div>
            <div className="ft-col">
              <h5>Sidekart</h5>
              <Link href="/">Forside</Link>
              <Link href="/#demo">Se demo</Link>
              <Link href="/#pricing">Pris</Link>
              <Link href="/#bestill">Bestill</Link>
              <Link href="/kommuner/">Alle kommuner</Link>
              <Link href="/#faq">FAQ</Link>
            </div>
            <div className="ft-col">
              <h5>Juridisk</h5>
              <Link href="/personvern/">Personvernerklæring</Link>
              <Link href="/vilkar/">Vilkår og betingelser</Link>
              <Link href="/cookies/">Cookie-policy</Link>
            </div>
            <div className="ft-col">
              <h5>For maskiner</h5>
              <a href="/entity-index.json" className="ft-mono">entity-index.json</a>
              <a href="/llms.txt" className="ft-mono">llms.txt</a>
              <a href="/sitemap.xml" className="ft-mono">Sitemap</a>
              <a href="/rss.xml" className="ft-mono">RSS Feed</a>
            </div>
          </div>
          <div className="ft-divider" />
          <div className="ft-bottom">
            <span className="ft-copy">
              © 2026 ainettside.no — en tjeneste fra{' '}
              <a href="https://it-firma.no" target="_blank" rel="noopener">IT-Firma.no</a>.
              Alle rettigheter reservert.
            </span>
            <div className="ft-bottom-r">
              <Link href="/personvern/">Personvern</Link>
              <Link href="/vilkar/">Vilkår</Link>
              <Link href="/cookies/">Cookies</Link>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
