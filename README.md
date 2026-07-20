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

Le formulaire de contact envoie les emails via [Resend](https://resend.com). Copier `.env.local` (non versionné) avec :

```
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
RESEND_FROM_EMAIL="onboarding@resend.dev"
CONTACT_EMAIL="adresse@example.com"
```

- `RESEND_API_KEY` : clé API créée depuis le dashboard Resend.
- `RESEND_FROM_EMAIL` : expéditeur des emails. `onboarding@resend.dev` fonctionne sans configuration mais n'est fiable que pour tester (Resend peut le limiter). Pour un envoi en production, vérifier son propre domaine dans Resend et utiliser une adresse comme `contact@nicolasdewaegenaere.fr`.
- `CONTACT_EMAIL` : adresse qui reçoit les messages du formulaire.

À renseigner aussi dans les variables d'environnement du projet Vercel.

## SEO

- Métadonnées et données structurées : `app/layout.js`.
- `robots.txt` / `sitemap.xml` générés par `app/robots.js` / `app/sitemap.js`.
- `data/site.js` contient le nom de domaine du site (`siteUrl`) — à mettre à jour une fois le domaine définitif choisi.
