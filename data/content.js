export const globalData = {
    authorName: 'Nicolas De Wagner',
    email: 'nicolasdewae@protonmail.com',
    currentYear: new Date().getFullYear()
}

export const price = {
    priceBase: '90',
    extraPhoto: '5'
}

// Catalogue unique de toutes les photos du site : une entree par photo,
// {src, alt} pour les usages nommes, {..., orientation} en plus pour les
// photos utilisees dans une galerie (Mosaic). Les galeries ci-dessous sont
// construites en reference a ces entrees, jamais de chemin duplique.
export const images = {
    chambreMansardee: {
        src: '/assets/img/immo-chambre-mansardee.jpg',
        alt: 'chambre mansardée avec papier peint à oiseaux sous un velux',
    },
    plante: {
        src: '/assets/img/immo-plante.jpg',
        alt: 'plante d\'intérieur devant une fenêtre',
    },
    cuisineNoire: {
        src: '/assets/img/immo-cuisine-noire.jpg',
        alt: 'cuisine noire avec suspension à motif de feuilles',
    },
    salleAMangerVaisselierBlanc: {
        src: '/assets/img/immo-salle-a-manger-vaisselier-blanc.jpg',
        alt: 'salle à manger classique avec vaisselier blanc et arche ouverte sur le salon',
    },
    chambreTeteLitRayee: {
        src: '/assets/img/immo-chambre-tete-lit-rayee.jpg',
        alt: 'tête de lit capitonnée devant un papier peint à rayures jaunes et grises',
    },
    cuisineIlot: {
        src: '/assets/img/immo-cuisine-ilot.jpg',
        alt: 'cuisine avec îlot arrondi en bois clair et vaisselier vitré',
        orientation: 'horizontal',
    },
    salonCoussinsLosanges: {
        src: '/assets/img/immo-salon-coussins-losanges.jpg',
        alt: 'coussins colorés sur canapé beige devant un papier peint à losanges',
        objectPosition: 'bottom',
    },
    chambreHotelFauteuils: {
        src: '/assets/img/immo-chambre-hotel-fauteuils.jpg',
        alt: 'chambre d\'hôtel classique avec lit à coussin rouge, fauteuils à carreaux et tapis oriental',
        orientation: 'horizontal',
        fit: 'contain',
        ratio: '1500 / 994',
        shiftRight: '32%',
    },
    cuisineBlanche: {
        src: '/assets/img/immo-cuisine-blanche.jpg',
        alt: 'cuisine blanche épurée avec bar et tabourets design',
        orientation: 'horizontal',
    },
    cuisineCarrelageVert: {
        src: '/assets/img/immo-cuisine-carrelage-vert.jpg',
        alt: 'cuisine avec crédence en carrelage métro vert',
        orientation: 'horizontal',
    },
    cuisineVeranda: {
        src: '/assets/img/immo-cuisine-veranda.jpg',
        alt: 'cuisine avec grande baie vitrée ouverte sur le jardin',
        orientation: 'horizontal',
    },
    salonPiano: {
        src: '/assets/img/immo-salon-piano.jpg',
        alt: 'salon avec piano à queue face à la piscine',
        orientation: 'horizontal',
    },
    grangeExterieur: {
        src: '/assets/img/immo-grange-exterieur.jpg',
        alt: 'extérieur d\'une grange rénovée avec jardin et bassin',
        orientation: 'horizontal',
    },
    lilloiseEscalier: {
        src: '/assets/img/immo-la-lilloise-escalier.jpg',
        alt: 'escalier en bois sculpté d\'un hall d\'entrée classique',
        orientation: 'horizontal',
    },
    lilloiseSalleAManger: {
        src: '/assets/img/immo-la-lilloise-salle-a-manger.jpg',
        alt: 'salle à manger habillée de boiseries anciennes avec bibliothèques vitrées',
        orientation: 'horizontal',
    },
    lilloiseBibliotheque: {
        src: '/assets/img/immo-la-lilloise-bibliotheque.jpg',
        alt: 'bibliothèque classique avec cheminée en marbre',
        orientation: 'horizontal',
    },
    lilloiseMaisonPiscine: {
        src: '/assets/img/immo-la-lilloise-maison-piscine.jpg',
        alt: 'maison de campagne avec piscine extérieure',
        orientation: 'horizontal',
    },
    lilloiseSalonModerne: {
        src: '/assets/img/immo-la-lilloise-salon-moderne.jpg',
        alt: 'salon moderne avec canapé gris et fauteuil moutarde',
        orientation: 'horizontal',
    },
    lilloiseCuisineBlanche: {
        src: '/assets/img/immo-la-lilloise-cuisine-blanche.jpg',
        alt: 'cuisine blanche avec plan de travail arrondi en bois et vaisselier vitré',
        orientation: 'horizontal',
    },
    lilloiseChambreJauneNoire: {
        src: '/assets/img/immo-la-lilloise-chambre-jaune-noire.jpg',
        alt: 'chambre lumineuse aux murs jaune et noir',
        orientation: 'horizontal',
    },
    lilloiseDressingBleu: {
        src: '/assets/img/immo-la-lilloise-dressing-bleu.jpg',
        alt: 'dressing bleu avec miroir et pouf en velours',
        orientation: 'vertical',
        fit: 'contain',
    },
    lilloiseExterieurBoisZinc: {
        src: '/assets/img/immo-la-lilloise-exterieur-bois-zinc.jpg',
        alt: 'extérieur d\'une maison contemporaine en bois et zinc',
        orientation: 'horizontal',
    },
    piscineInterieure: {
        src: '/assets/img/immo-piscine-interieure.jpg',
        alt: 'piscine intérieure sous verrière avec spa et vue sur le jardin',
        orientation: 'horizontal',
        objectPosition: 'left',
    },
}

export const priceComponent = {
        title: 'Prix des prestations',
        nbPhoto: '12',
        time: '24H',
        travel: 'Déplacement inclus sur la métropole lilloise',
        studioNote: 'Studio : reportage de 7 photos pour un rendu juste, sans redite.',
        kmNote: 'Au-delà de la métropole lilloise : +0,50 €/km (A/R).',
}

export const aboutComponent = {
    label: 'L\'approche',
    title: 'Des photos qui donnent envie d\'habiter',
    body: 'Chaque bien mérite d\'être montré tel qu\'il se vit : la lumière du matin, les volumes, les détails qui font une maison. Je compose chaque image pour que l\'acheteur se projette avant même la visite.',
}

export const figuresComponent = {
    label: 'En chiffres',
    title: 'Des chiffres au service de vos annonces',
    body: '300+ biens photographiés, livraison en 24h, déplacement inclus sur la métropole lilloise. Une prestation calibrée pour les agences comme pour les particuliers.',
    cta: 'Travailler ensemble',
}

export const faqComponent = {
    label: 'Questions fréquentes',
    title: 'Vous vous posez des questions ?',
    items: [
        {
            question: 'Combien coûte une séance photo immobilière ?',
            answer: 'La prestation est à 90 € TTC et inclut 12 photos. Chaque photo supplémentaire est facturée 5 €.',
        },
        {
            question: 'Quel est le délai de livraison ?',
            answer: 'Les photos sont livrées sous 24h après la prise de vue.',
        },
        {
            question: 'Le déplacement est-il inclus ?',
            answer: 'Oui, sur toute la métropole lilloise. Au-delà, un forfait de 0,50 €/km (aller-retour) s\'applique.',
        },
        {
            question: 'Proposez-vous une formule pour les petits espaces (studio) ?',
            answer: 'Oui : pour un studio, le reportage comprend 7 photos, pour un rendu juste, sans redite.',
        },
        {
            question: 'Puis-je commander des photos en plus après coup ?',
            answer: 'Oui, chaque photo supplémentaire est facturée 5 € l\'unité.',
        },
        {
            question: 'À qui s\'adresse ce service ?',
            answer: 'Aux agences immobilières, promoteurs et particuliers qui souhaitent valoriser un bien à vendre ou à louer.',
        },
    ],
}

export const contactComponent = {
    title: 'Contactez-moi',
    form: {
        firstname: 'Prénom',
        lastname: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        message: 'Message',
        submit: 'Envoyer'
    },
}
