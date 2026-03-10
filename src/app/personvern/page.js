import Link from 'next/link';

export const metadata = {
  title: 'Personvern',
  description: 'Personvernerklæring for ainettside.no.',
  alternates: { canonical: 'https://ainettside.no/personvern/' },
};

export default function Personvern() {
  return (
    <div className="legal-wrap">
      <Link href="/" className="legal-back">← Tilbake til forsiden</Link>
      <h1>Personvernerklæring</h1>
      <p className="legal-updated">Sist oppdatert: 9. mars 2026</p>
      <h2>Hvem er vi?</h2>
      <p>ainettside.no er en norsk tjeneste som lager nettsider for små bedrifter. Denne personvernerklæringen forklarer hvordan vi samler inn, bruker og beskytter personopplysningene dine.</p>
      <h2>Hvilke opplysninger samler vi inn?</h2>
      <p>Når du bestiller en nettside fra oss, samler vi inn: <strong>navn, bedriftsnavn, bransje, sted, telefonnummer, e-postadresse</strong> og eventuell beskrivelse av bedriften din. Vi samler kun inn opplysninger som er nødvendige for å lage og drifte nettsiden din.</p>
      <h2>Hvorfor samler vi inn opplysninger?</h2>
      <p>Vi bruker opplysningene til å lage nettsiden din, kontakte deg om nettsiden, sende deg viktige oppdateringer om tjenesten, og gi deg kundeservice.</p>
      <h2>Hvordan lagrer vi opplysningene?</h2>
      <p>Opplysningene lagres sikkert på servere i Europa. Vi bruker kryptering (SSL/TLS) for all dataoverføring. Vi deler ikke opplysningene dine med tredjeparter for markedsføring.</p>
      <h2>Dine rettigheter</h2>
      <p>Du har rett til å se hvilke opplysninger vi har om deg, be om at opplysninger rettes eller slettes, trekke tilbake samtykke, og klage til Datatilsynet.</p>
      <h2>Informasjonskapsler</h2>
      <p>Vi bruker kun nødvendige informasjonskapsler for at nettsiden skal fungere. Vi bruker ikke sporingscookies eller tredjeparts analyse.</p>
      <h2>Kontakt</h2>
      <p>Har du spørsmål om personvern? Kontakt oss på e-post eller telefon. Se <Link href="/">forsiden</Link> for kontaktinformasjon.</p>
    </div>
  );
}
