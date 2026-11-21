// Service pages, used for the overview, internal links and breadcrumbs.
export interface Service {
  title: string;
  titleRu: string;
  route: string;
  image: string;
  alt: string;
}

export const services: Service[] = [
  { title: 'Verhütungsberatung', titleRu: 'Консультации по контрацепции', route: '/verhuetung', image: '/images/unsplash-verhuetung.jpg', alt: 'Verhütungsberatung' },
  { title: 'Vorsorgeuntersuchung', titleRu: 'Профилактический осмотр', route: '/vorsorgeuntersuchung', image: '/images/unsplash-GEzNsJarkGU.jpg', alt: 'Vorsorgeuntersuchung' },
  { title: 'Familienplanung', titleRu: 'Планирование семьи', route: '/familienplanung', image: '/images/unsplash-NIZeg731LxM.jpg', alt: 'Familienplanung' },
  { title: 'Genetische Beratung', titleRu: 'Генетическое консультирование', route: '/genetische-beratung', image: '/images/unsplash-XknuBmnjbKg.jpg', alt: 'Genetische Beratung' },
  { title: 'Jugendgynäkologie', titleRu: 'Подростковая гинекология', route: '/jugendgynaekologie', image: '/images/unsplash-cIfLUEZYLVg.jpg', alt: 'Jugendgynäkologie' },
  { title: 'Impfungen', titleRu: 'Вакцинация', route: '/impfungen', image: '/images/unsplash-impfungen.jpg', alt: 'Impfungen' },
  { title: 'Wechseljahre', titleRu: 'Менопауза', route: '/wechseljahre', image: '/images/unsplash-wechseljahre.jpg', alt: 'Wechseljahre' },
  { title: 'Ultraschalldiagnostik', titleRu: 'УЗИ диагностика', route: '/ultraschalldiagnostik', image: '/images/unsplash-ultraschall.jpg', alt: 'Ultraschalldiagnostik' },
  { title: 'Beckenbodenstimulation (EMSELLA)', titleRu: 'Стимуляция тазового дна (EMSELLA)', route: '/beckenbodenstimulation', image: '/images/unsplash-GEzNsJarkGU.jpg', alt: 'Elektromagnetische Beckenbodenstimulation (HIFEM)' },
];
