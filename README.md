# Nicolas De Wagner — Photographe immobilier

Site vitrine, [Next.js](https://nextjs.org) (App Router), déployé sur Vercel.

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm start
```

## Variables d'environnement

Copier `.env.local` (non versionné) avec :

```
NEXT_PUBLIC_MY_EMAIL="adresse@example.com"
```

À renseigner aussi dans les variables d'environnement du projet Vercel.

## SEO

- Métadonnées et données structurées : `app/layout.js`.
- `robots.txt` / `sitemap.xml` générés par `app/robots.js` / `app/sitemap.js`.
- `data/site.js` contient le nom de domaine du site (`siteUrl`) — à mettre à jour une fois le domaine définitif choisi.
