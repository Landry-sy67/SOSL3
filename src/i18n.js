import { reactive, computed } from 'vue'

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
      title: 'Our Services'
    },
    contact: {
      title: 'Contact Us'
    },
    destinations: {
      title: 'Our Destinations'
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
      title: 'Nos Services'
    },
    contact: {
      title: 'Contactez-nous'
    },
    destinations: {
      title: 'Nos Destinations'
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
      title: 'Nuestros Servicios'
    },
    contact: {
      title: 'Contáctanos'
    },
    destinations: {
      title: 'Nuestros Destinos'
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
      title: 'Serivisi zacu'
    },
    contact: {
      title: 'Twandikire'
    },
    destinations: {
      title: 'Ahantu Hacu'
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
      title: 'Unsere Dienstleistungen'
    },
    contact: {
      title: 'Kontaktieren Sie uns'
    },
    destinations: {
      title: 'Unsere Reiseziele'
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
  }
}
