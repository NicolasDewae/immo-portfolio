import '../styles/index.css';
import '../styles/App.css';
import { globalData, price, priceComponent } from '../data/content';
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
  '@id': `${siteUrl}/#business`,
  name: siteName,
  description: 'Photographe immobilier pour agences, promoteurs et particuliers sur la métropole lilloise. Reportage photo livré en 24h.',
  image: `${siteUrl}${ogImage}`,
  url: siteUrl,
  email: globalData.email,
  priceRange: '€€',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Métropole Européenne de Lille',
  },
  founder: {
    '@type': 'Person',
    name: globalData.authorName,
  },
  makesOffer: {
    '@type': 'Offer',
    name: 'Reportage photo immobilier',
    description: `${priceComponent.nbPhoto} photos incluses, livraison en ${priceComponent.time}. ${priceComponent.travel}. Photo supplémentaire : ${price.extraPhoto} € / unité. ${priceComponent.studioNote}`,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: price.priceBase,
      priceCurrency: 'EUR',
    },
  },
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
