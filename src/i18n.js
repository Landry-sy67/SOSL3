<<<<<<< HEAD
import { reactive, computed } from 'vue'
=======
import { ref, computed } from 'vue'
>>>>>>> 6ceddf6 (Professional page redesign: enhanced copy, added multilingual support with Kinyarwanda, improved destinations detail, added photo gallery refinements and new travel images)

const languages = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  rw: 'Kinyarwanda',
  de: 'Deutsch'
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      photos: 'Photos',
      videos: 'Videos',
      destinations: 'Destinations',
      contact: 'Contact',
      northernProvince: 'Northern Province',
      southernProvince: 'Southern Province',
      westernProvince: 'Western Province',
      easternProvince: 'Eastern Province',
      kigaliCity: 'Kigali City',
      language: 'Language'
    },
    home: {
      tagline: 'Discover Rwanda',
      heroTitle: 'WELCOME TO RWANDA',
      heroSubtitle: 'THE LAND OF A THOUSAND HILLS',
      exploreButton: 'Explore Destinations',
      learnMoreButton: 'Learn More'
    },
    about: {
      title: 'WELCOME TO RWANDA',
      description: 'Rwanda is one of Africa’s cleanest and safest travel destinations, with modern infrastructure and a welcoming environment.',
      backHome: 'Back Home',
      seeDestinations: 'See Destinations',
      officialLanguages: 'Official languages'
    },
    services: {
<<<<<<< HEAD
      title: 'Our Services'
    },
    contact: {
      title: 'Contact Us'
    },
    destinations: {
      title: 'Our Destinations'
=======
      title: 'Our Services',
      description: 'Explore curated tours, streamlined transport, and personalized planning for an unforgettable Rwanda journey.',
      guideTitle: 'Guided Tours',
      guideText: 'Explore Rwanda with experienced local guides who bring the country’s landscapes, wildlife, and culture to life.',
      lodgingTitle: 'Luxury Lodging',
      lodgingText: 'Stay in premium lodges and eco-retreats that blend comfort with spectacular views and sustainable hospitality.',
      itineraryTitle: 'Custom Itineraries',
      itineraryText: 'Design a travel plan that suits your interests—from gorilla trekking to cultural villages and lakeside relaxation.'
    },
    contact: {
      title: 'Contact Us',
      description: 'Reach out to our Rwanda travel specialists to plan your next adventure, book guided tours, or ask about accommodations.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      officeLabel: 'Office'
    },
    destinations: {
      title: 'Our Destinations',
      description: 'Rwanda is full of vibrant landscapes, mountain forests, and warm cities. Choose a destination to discover more.'
>>>>>>> 6ceddf6 (Professional page redesign: enhanced copy, added multilingual support with Kinyarwanda, improved destinations detail, added photo gallery refinements and new travel images)
    },
    regions: {
      north: 'WELCOME TO NORTHERN PROVINCE',
      south: 'WELCOME TO SOUTHERN PROVINCE',
      west: 'WELCOME TO WESTERN PROVINCE',
      east: 'WELCOME TO EASTERN PROVINCE',
      kigali: 'WELCOME TO KIGALI'
    },
    footer: {
      brand: 'TEMBERA U RWANDA',
      description: 'Discover the beauty of the land of a thousand hills',
      quickLinks: 'Quick links',
      destinations: 'Destinations',
      contactTitle: 'Contact',
      email: 'AHANTUNYABURANGA@gmail.com',
      phone: '0798945673',
      address: 'KAGUGU RWANDA',
      copyRight: '©2025 TEMBERA U RWANDA. ALL RIGHTS RESERVED'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      gallery: 'Galerie',
      photos: 'Photos',
      videos: 'Vidéos',
      destinations: 'Destinations',
      contact: 'Contact',
      northernProvince: 'Province du Nord',
      southernProvince: 'Province du Sud',
      westernProvince: 'Province de l’Ouest',
      easternProvince: 'Province de l’Est',
      kigaliCity: 'Ville de Kigali',
      language: 'Langue'
    },
    home: {
      tagline: 'Découvrez le Rwanda',
      heroTitle: 'BIENVENUE AU RWANDA',
      heroSubtitle: 'LE PAYS DES MILLE COLLINES',
      exploreButton: 'Explorer les destinations',
      learnMoreButton: 'En savoir plus'
    },
    about: {
      title: 'BIENVENUE AU RWANDA',
      description: 'Le Rwanda est l’une des destinations touristiques les plus propres et les plus sûres d’Afrique, avec une infrastructure moderne et un environnement accueillant.',
      backHome: 'Retour à l’accueil',
      seeDestinations: 'Voir les destinations',
      officialLanguages: 'Langues officielles'
    },
    services: {
<<<<<<< HEAD
      title: 'Nos Services'
    },
    contact: {
      title: 'Contactez-nous'
    },
    destinations: {
      title: 'Nos Destinations'
=======
      title: 'Nos Services',
      description: 'Découvrez des circuits sur mesure, un transport fluide et une planification personnalisée pour un voyage inoubliable au Rwanda.',
      guideTitle: 'Visites guidées',
      guideText: 'Explorez le Rwanda avec des guides locaux expérimentés qui font vivre paysages, faune et culture.',
      lodgingTitle: 'Hébergement de luxe',
      lodgingText: 'Séjournez dans des lodges premium et des éco-retraites alliant confort, vues spectaculaires et hospitalité durable.',
      itineraryTitle: 'Itinéraires personnalisés',
      itineraryText: 'Concevez un programme adapté à vos envies, du trekking des gorilles aux villages culturels et à la détente au bord du lac.'
    },
    contact: {
      title: 'Contactez-nous',
      description: 'Contactez nos spécialistes du voyage au Rwanda pour planifier votre prochaine aventure, réserver des visites guidées ou obtenir de l’aide pour l’hébergement.',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      officeLabel: 'Bureau'
    },
    destinations: {
      title: 'Nos Destinations',
      description: 'Le Rwanda regorge de paysages vibrants, de forêts de montagne et de villes chaleureuses. Choisissez une destination pour en découvrir davantage.'
>>>>>>> 6ceddf6 (Professional page redesign: enhanced copy, added multilingual support with Kinyarwanda, improved destinations detail, added photo gallery refinements and new travel images)
    },
    regions: {
      north: 'BIENVENUE DANS LA PROVINCE DU NORD',
      south: 'BIENVENUE DANS LA PROVINCE DU SUD',
      west: 'BIENVENUE DANS LA PROVINCE DE L’OUEST',
      east: 'BIENVENUE DANS LA PROVINCE DE L’EST',
      kigali: 'BIENVENUE À KIGALI'
    },
    footer: {
      brand: 'TEMBERA U RWANDA',
      description: 'Découvrez la beauté du pays des mille collines',
      quickLinks: 'Liens rapides',
      destinations: 'Destinations',
      contactTitle: 'Contact',
      email: 'AHANTUNYABURANGA@gmail.com',
      phone: '0798945673',
      address: 'KAGUGU RWANDA',
      copyRight: '©2025 TEMBERA U RWANDA. TOUS DROITS RÉSERVÉS'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca',
      services: 'Servicios',
      gallery: 'Galería',
      photos: 'Fotos',
      videos: 'Videos',
      destinations: 'Destinos',
      contact: 'Contacto',
      northernProvince: 'Provincia Norte',
      southernProvince: 'Provincia Sur',
      westernProvince: 'Provincia Oeste',
      easternProvince: 'Provincia Este',
      kigaliCity: 'Ciudad de Kigali',
      language: 'Idioma'
    },
    home: {
      tagline: 'Descubre Ruanda',
      heroTitle: 'BIENVENIDO A RWANDA',
      heroSubtitle: 'LA TIERRA DE LAS MIL COLINAS',
      exploreButton: 'Explorar destinos',
      learnMoreButton: 'Aprende más'
    },
    about: {
      title: 'BIENVENIDO A RWANDA',
      description: 'Ruanda es uno de los destinos de viaje más limpios y seguros de África, con infraestructura moderna y un entorno acogedor.',
      backHome: 'Volver al inicio',
      seeDestinations: 'Ver destinos',
      officialLanguages: 'Idiomas oficiales'
    },
    services: {
<<<<<<< HEAD
      title: 'Nuestros Servicios'
    },
    contact: {
      title: 'Contáctanos'
    },
    destinations: {
      title: 'Nuestros Destinos'
=======
      title: 'Nuestros Servicios',
      description: 'Descubre tours personalizados, transporte eficiente y planificación adaptada para un viaje memorable por Ruanda.',
      guideTitle: 'Tours guiados',
      guideText: 'Explora Ruanda con guías locales con experiencia que dan vida a los paisajes, la fauna y la cultura.',
      lodgingTitle: 'Alojamiento de lujo',
      lodgingText: 'Hospédate en lodges premium y eco-retreats que combinan comodidad con vistas espectaculares y hospitalidad sostenible.',
      itineraryTitle: 'Itinerarios personalizados',
      itineraryText: 'Diseña un plan de viaje según tus intereses, desde trekking de gorillas hasta aldeas culturales y relajación junto al lago.'
    },
    contact: {
      title: 'Contáctanos',
      description: 'Contacta a nuestros especialistas en viajes a Ruanda para planear tu próxima aventura, reservar tours guiados o recibir ayuda con alojamientos.',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      officeLabel: 'Oficina'
    },
    destinations: {
      title: 'Nuestros Destinos',
      description: 'Ruanda está lleno de paisajes vibrantes, bosques montañosos y ciudades cálidas. Elige un destino para descubrir más.'
>>>>>>> 6ceddf6 (Professional page redesign: enhanced copy, added multilingual support with Kinyarwanda, improved destinations detail, added photo gallery refinements and new travel images)
    },
    regions: {
      north: 'BIENVENIDO A LA PROVINCIA NORTE',
      south: 'BIENVENIDO A LA PROVINCIA SUR',
      west: 'BIENVENIDO A LA PROVINCIA OESTE',
      east: 'BIENVENIDO A LA PROVINCIA ESTE',
      kigali: 'BIENVENIDO A KIGALI'
    },
    footer: {
      brand: 'TEMBERA U RWANDA',
      description: 'Descubre la belleza de la tierra de las mil colinas',
      quickLinks: 'Enlaces rápidos',
      destinations: 'Destinos',
      contactTitle: 'Contacto',
      email: 'AHANTUNYABURANGA@gmail.com',
      phone: '0798945673',
      address: 'KAGUGU RWANDA',
      copyRight: '©2025 TEMBERA U RWANDA. TODOS LOS DERECHOS RESERVADOS'
    }
  },
  rw: {
    nav: {
      home: 'Ahabanza',
      about: 'Ibyerekeye',
      services: 'Serivisi',
      gallery: 'Ibyerekanwa',
      photos: 'Amafoto',
      videos: 'Videwo',
      destinations: 'Ahantu',
      contact: 'Twandikire',
      northernProvince: 'Akarere k’Amajyaruguru',
      southernProvince: 'Akarere k’Amajyepfo',
      westernProvince: 'Akarere k’Uburengerazuba',
      easternProvince: 'Akarere k’Uburasirazuba',
      kigaliCity: 'Umujyi wa Kigali',
      language: 'Ururimi'
    },
    home: {
      tagline: 'Menya u Rwanda',
      heroTitle: 'MURAKAZA NEZA MU RWANDA',
      heroSubtitle: 'IGIHUGU CY’IMISOZI IJANA',
      exploreButton: 'Sura ahantu',
      learnMoreButton: 'Menya byinshi'
    },
    about: {
      title: 'MURAKAZA NEZA MU RWANDA',
      description: 'U Rwanda ni kimwe mu bihugu byateye imbere mu isuku no mu mutekano muri Afurika, gifite ibikorwa remezo by’ikoranabuhanga n’ibidukikije byakira neza.',
      backHome: 'Subira ku rubuga rwa mbere',
      seeDestinations: 'Reba ahantu',
      officialLanguages: 'Indimi zemewe'
    },
    services: {
<<<<<<< HEAD
      title: 'Serivisi zacu'
    },
    contact: {
      title: 'Twandikire'
    },
    destinations: {
      title: 'Ahantu Hacu'
=======
      title: 'Serivisi zacu',
      description: 'Sobanukirwa ingendo zateguwe, gutwara abantu byoroshye, no gutegura urugendo rwihariye mu Rwanda rwibagirana.',
      guideTitle: 'Inzira zanditswe',
      guideText: 'Sura u Rwanda hamwe n’abayobozi b’inzobere baturuka hano bazana imisozi, inyamaswa n’umuco mu buzima.',
      lodgingTitle: 'Amahoteri y’icyubahiro',
      lodgingText: 'Irahare muri lodge nziza n’amacumbi arengera ibidukikije yuzuzanya n’uburyohe n’amasura meza.',
      itineraryTitle: 'Imigendekere yihariye',
      itineraryText: 'Tegura gahunda ijyanye n’ibyo ukunda, kuva ku gusurira ingagi kugeza ku mateka n’akarere k’ibiyaga.'
    },
    contact: {
      title: 'Twandikire',
      description: 'Twandikire ku bahanga mu ngendo za Rwanda kugira ngo utegure urugendo rwawe rukurikije ibyifuzo byawe, ubone serivisi zo gusura cyangwa ubufasha bwo kubona icumbi.',
      emailLabel: 'Imeli',
      phoneLabel: 'Telefone',
      officeLabel: 'Ibiro'
    },
    destinations: {
      title: 'Ahantu Hacu',
      description: 'U Rwanda ruzuye ahantu hafite ubuzima, amashyamba y’imisozi n’imijyi ishimishije. Hitamo ahantu kugirango umenye byinshi.'
>>>>>>> 6ceddf6 (Professional page redesign: enhanced copy, added multilingual support with Kinyarwanda, improved destinations detail, added photo gallery refinements and new travel images)
    },
    regions: {
      north: 'MURAKAZA NEZA MU KARERE K’AMAJYARUGURU',
      south: 'MURAKAZA NEZA MU KARERE K’AMAJYEPFO',
      west: 'MURAKAZA NEZA MU KARERE K’UBURUNGERAZUBA',
      east: 'MURAKAZA NEZA MU KARERE K’UBURASIRAZUBA',
      kigali: 'MURAKAZA NEZA KURI KIGALI'
    },
    footer: {
      brand: 'TEMBERA U RWANDA',
      description: 'Sobanukirwa ubwiza bw’igihugu cy’imisozi ijana',
      quickLinks: 'Imiyoboro yihuse',
      destinations: 'Ahantu',
      contactTitle: 'Twandikire',
      email: 'AHANTUNYABURANGA@gmail.com',
      phone: '0798945673',
      address: 'KAGUGU RWANDA',
      copyRight: '©2025 TEMBERA U RWANDA. UBURENGANZIRA BWOSE BUKURIWE'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Dienstleistungen',
      gallery: 'Galerie',
      photos: 'Fotos',
      videos: 'Videos',
      destinations: 'Reiseziele',
      contact: 'Kontakt',
      northernProvince: 'Nordprovinz',
      southernProvince: 'Südprovinz',
      westernProvince: 'Westprovinz',
      easternProvince: 'Ostprovinz',
      kigaliCity: 'Stadt Kigali',
      language: 'Sprache'
    },
    home: {
      tagline: 'Entdecke Ruanda',
      heroTitle: 'WILLKOMMEN IN RWANDA',
      heroSubtitle: 'DAS LAND DER TAUSEND HÜGEL',
      exploreButton: 'Reiseziele erkunden',
      learnMoreButton: 'Mehr erfahren'
    },
    about: {
      title: 'WILLKOMMEN IN RWANDA',
      description: 'Rwanda ist eines der saubersten und sichersten Reiseziele Afrikas, mit moderner Infrastruktur und einer einladenden Umgebung.',
      backHome: 'Zurück zur Startseite',
      seeDestinations: 'Reiseziele ansehen',
      officialLanguages: 'Offizielle Sprachen'
    },
    services: {
<<<<<<< HEAD
      title: 'Unsere Dienstleistungen'
    },
    contact: {
      title: 'Kontaktieren Sie uns'
    },
    destinations: {
      title: 'Unsere Reiseziele'
=======
      title: 'Unsere Dienstleistungen',
      description: 'Entdecken Sie maßgeschneiderte Touren, reibungslosen Transport und persönliche Planung für eine unvergessliche Reise durch Ruanda.',
      guideTitle: 'Geführte Touren',
      guideText: 'Erkunden Sie Ruanda mit erfahrenen lokalen Guides, die Landschaft, Tierwelt und Kultur zum Leben erwecken.',
      lodgingTitle: 'Luxuriöse Unterkünfte',
      lodgingText: 'Übernachten Sie in Premium-Lodges und Öko-Retreats, die Komfort mit spektakulären Aussichten und nachhaltiger Gastfreundschaft verbinden.',
      itineraryTitle: 'Individuelle Reiserouten',
      itineraryText: 'Gestalten Sie einen Reiseplan nach Ihren Interessen – von Gorillatrekking bis hin zu kulturellen Dörfern und Seeentspannung.'
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      description: 'Kontaktieren Sie unsere Ruanda-Reisespezialisten, um Ihr nächstes Abenteuer zu planen, geführte Touren zu buchen oder Hilfe bei Unterkünften zu erhalten.',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      officeLabel: 'Büro'
    },
    destinations: {
      title: 'Unsere Reiseziele',
      description: 'Ruanda ist voller lebendiger Landschaften, Bergwälder und warmer Städte. Wählen Sie ein Reiseziel, um mehr zu entdecken.'
>>>>>>> 6ceddf6 (Professional page redesign: enhanced copy, added multilingual support with Kinyarwanda, improved destinations detail, added photo gallery refinements and new travel images)
    },
    regions: {
      north: 'WILLKOMMEN IN DER NORDPROVINZ',
      south: 'WILLKOMMEN IN DER SÜDPROVINZ',
      west: 'WILLKOMMEN IN DER WESTPROVINZ',
      east: 'WILLKOMMEN IN DER OSTPROVINZ',
      kigali: 'WILLKOMMEN IN KIGALI'
    },
    footer: {
      brand: 'TEMBERA U RWANDA',
      description: 'Entdecke die Schönheit des Landes der tausend Hügel',
      quickLinks: 'Schnellzugriffe',
      destinations: 'Reiseziele',
      contactTitle: 'Kontakt',
      email: 'AHANTUNYABURANGA@gmail.com',
      phone: '0798945673',
      address: 'KAGUGU RWANDA',
      copyRight: '©2025 TEMBERA U RWANDA. ALLE RECHTE VORBEHALTEN'
    }
  }
}

<<<<<<< HEAD
const state = reactive({ locale: 'en' })

function getTranslation(path) {
  const keys = path.split('.')
  const localeData = translations[state.locale] || translations.en
  const value = keys.reduce((current, key) => (current ? current[key] : undefined), localeData)
  return value ?? keys[keys.length - 1]
}

export const availableLocales = computed(() =>
  Object.keys(translations).map((code) => ({ code, label: languages[code] || code }))
)

export const currentLocaleLabel = computed(() => languages[state.locale] || state.locale)

export function setLocale(locale) {
  if (translations[locale]) {
    state.locale = locale
  }
}

export function useI18n() {
  return {
    locale: computed(() => state.locale),
    currentLocaleLabel,
    availableLocales,
    setLocale,
    t: getTranslation
=======
export const locale = ref('en')

function getTranslation(path) {
  const keys = path.split('.')
  const localeData = translations[locale.value] || translations.en
  const value = keys.reduce((current, key) => (current ? current[key] : undefined), localeData)
  return value ?? path
}

export const t = getTranslation

export const languageOptions = computed(() =>
  Object.keys(translations).map((code) => ({ code, label: languages[code] || code }))
)

export const currentLocaleLabel = computed(() => languages[locale.value] || locale.value)

export const setLocale = (newLocale) => {
  if (translations[newLocale]) {
    locale.value = newLocale
>>>>>>> 6ceddf6 (Professional page redesign: enhanced copy, added multilingual support with Kinyarwanda, improved destinations detail, added photo gallery refinements and new travel images)
  }
}
