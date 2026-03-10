import Link from 'next/link';

export const metadata = {
  title: 'Vilkår',
  description: 'Brukervilkår for ainettside.no.',
  alternates: { canonical: 'https://ainettside.no/vilkar/' },
};

export default function Vilkar() {
  return (
    <div className="legal-wrap">
      <Link href="/" className="legal-back">← Tilbake til forsiden</Link>
      <h1>Brukervilkår</h1>
      <p className="legal-updated">Sist oppdatert: 9. mars 2026</p>
      <h2>1. Tjenesten</h2>
      <p>ainettside.no leverer nettside-tjenester for små bedrifter. Tjenesten inkluderer design, oppsett, hosting, SSL-sertifikat og løpende drift av nettsiden din.</p>
      <h2>2. Pris og betaling</h2>
      <p>Tjenesten koster <strong>299 kroner per måned</strong>. Det er ingen oppstartskostnad. Betaling skjer forskuddsvis per måned. Prisen kan endres med 30 dagers varsel.</p>
      <h2>3. Ingen bindingstid</h2>
      <p>Du kan kansellere tjenesten når som helst uten oppsigelsesgebyr. Ved kansellering vil nettsiden din tas ned ved utløpet av inneværende betalingsperiode.</p>
      <h2>4. Endringer</h2>
      <p>Endringer på nettsiden din er inkludert i prisen. Større endringer som krever nytt design kan medføre tilleggskostnader, som avtales på forhånd.</p>
      <h2>5. Ditt innhold</h2>
      <p>Du er ansvarlig for at innholdet på nettsiden din er korrekt og lovlig. Vi forbeholder oss retten til å fjerne innhold som er i strid med norsk lov.</p>
      <h2>6. Oppetid</h2>
      <p>Vi tilstreber høy oppetid, men kan ikke garantere 100 prosent tilgjengelighet.</p>
      <h2>7. Domene</h2>
      <p>Hvis du bruker et eget domene, eier du domenet selv. Gratis underdomener tilhører ainettside.no.</p>
      <h2>8. Ansvarsbegrensning</h2>
      <p>ainettside.no er ikke ansvarlig for indirekte tap, tapt fortjeneste eller andre følgeskader knyttet til bruk av tjenesten.</p>
      <h2>9. Tvister</h2>
      <p>Disse vilkårene er underlagt norsk lov. Verneting er Oslo tingrett.</p>
    </div>
  );
}
