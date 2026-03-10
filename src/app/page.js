export const metadata = {
  title: 'ainettside.no — Enkel nettside for alle',
  description: 'Trenger du en enkel nettside? Vi lager den for deg. 299 kr/mnd. Ingen oppstart. Ring oss om du trenger hjelp.',
  alternates: { canonical: 'https://ainettside.no/' },
};

export default function Home() {
  return (
    <div className="sec" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="sec-label">AINETTSIDE.NO</div>
      <div className="sec-title" style={{ textAlign: 'center' }}>FORSIDEN KOMMER<br /><span className="grd">SNART HIT.</span></div>
      <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto' }}>
        Forsiden fra index.html migreres i neste steg. Alle undersider (kommuner, personvern, vilkår, cookies) fungerer allerede.
      </p>
    </div>
  );
}
