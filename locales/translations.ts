export const translations = {
  pt: {
    navbar: {
      atelier: 'O Ateliê',
      workshops: 'Aulas & Agenda',
      about: 'A Bordadeira',
      order: 'Encomendar',
      orderMobile: 'Fazer Orçamento',
    },
    hero: {
      badge: 'Arte Têxtil por Paula',
      title1: 'Poesia feita',
      title2: 'à mão',
      subtitle: '"Onde cada ponto conta uma história e cada linha eterniza uma memória."',
      cta: 'Explorar Ateliê',
    },
    footer: {
      madeBy: 'Feito à mão com',
      by: 'pela',
    }
  },
  en: {
    navbar: {
      atelier: 'The Atelier',
      workshops: 'Workshops & Schedule',
      about: 'The Embroiderer',
      order: 'Order Now',
      orderMobile: 'Get Quote',
    },
    hero: {
      badge: 'Textile Art by Paula',
      title1: 'Poetry made',
      title2: 'by hand',
      subtitle: '"Where every stitch tells a story and every thread eternizes a memory."',
      cta: 'Explore Atelier',
    },
    footer: {
      madeBy: 'Made by hand with',
      by: 'by',
    }
  },
  es: {
    navbar: {
      atelier: 'El Taller',
      workshops: 'Talleres & Agenda',
      about: 'La Bordadora',
      order: 'Encargar',
      orderMobile: 'Hacer Presupuesto',
    },
    hero: {
      badge: 'Arte Textil por Paula',
      title1: 'Poesía hecha',
      title2: 'a mano',
      subtitle: '"Donde cada puntada cuenta una historia y cada hilo eterniza una memoria."',
      cta: 'Explorar Taller',
    },
    footer: {
      madeBy: 'Hecho a mano con',
      by: 'por',
    }
  }
} as const;

export type TranslationKeys = typeof translations.pt;
