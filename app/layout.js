import '../styles/index.css';
import '../styles/App.css';
import { globalData } from '../data/i18n';
import { siteUrl } from '../data/site';

const siteName = `${globalData.authorName} — Photographe immobilier`;
const siteDescription = 'Photographe immobilier sur la métropole lilloise. Mise en valeur de vos biens immobiliers pour agences, promoteurs et particuliers — reportage livré en 24h.';
const ogImage = '/assets/img/immo-chambre-mansardee.jpg';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${globalData.authorName}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: 'fr_FR',
    type: 'website',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [ogImage],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteName,
  description: 'Photographe immobilier pour agences, promoteurs et particuliers sur la métropole lilloise.',
  areaServed: 'Métropole lilloise',
  priceRange: '€€',
  email: globalData.email,
  url: siteUrl,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
