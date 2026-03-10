import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://ainettside.no'),
  title: { default: 'ainettside.no — Enkel nettside for alle', template: '%s | ainettside' },
  description: 'Trenger du en enkel nettside? Vi lager den for deg. 299 kr/mnd. Ingen oppstart.',
  openGraph: { locale: 'nb_NO', type: 'website', siteName: 'ainettside.no' },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon-32.png', sizes: '32x32' }],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: { canonical: 'https://ainettside.no' },
  other: { 'theme-color': '#0F172A' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nb">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
