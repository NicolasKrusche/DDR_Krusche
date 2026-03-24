import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const portraitImg = 'https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/4c60b404-fca0-4c05-88da-28cb59680ccb/wasa_2.jpg?w=600&q=80';

const services = [
  {
    key: 'overviewSvc1',
    route: '/verhuetung',
    image: portraitImg,
    alt: 'Verhütungsberatung',
  },
  {
    key: 'overviewSvc2',
    route: '/vorsorgeuntersuchung',
    image: 'https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/1647258478613-YI93D0QM5C5SA00B8KEU/unsplash-image-GEzNsJarkGU.jpg?w=600&q=80',
    alt: 'Vorsorgeuntersuchung',
  },
  {
    key: 'overviewSvc3',
    route: '/familienplanung',
    image: 'https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/1647258123668-K4RLK6M1M73IWT4VWMUX/unsplash-image-NIZeg731LxM.jpg?w=600&q=80',
    alt: 'Familienplanung',
  },
  {
    key: 'overviewSvc4',
    route: '/genetische-beratung',
    image: 'https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/1648730460946-2E3H4M837VJ6TVU67C11/unsplash-image-XknuBmnjbKg.jpg?w=600&q=80',
    alt: 'Genetische Beratung',
  },
  {
    key: 'overviewSvc5',
    route: '/jugendgynaekologie',
    image: 'https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/1647257139364-MNNDTI0MCWDBO0B5G4T5/unsplash-image-cIfLUEZYLVg.jpg?w=600&q=80',
    alt: 'Jugendgynäkologie',
  },
  {
    key: 'overviewSvc6',
    route: '/impfungen',
    image: portraitImg,
    alt: 'Impfungen',
  },
  {
    key: 'overviewSvc7',
    route: '/wechseljahre',
    image: portraitImg,
    alt: 'Wechseljahre',
  },
  {
    key: 'overviewSvc8',
    route: '/ultraschalldiagnostik',
    image: portraitImg,
    alt: 'Ultraschalldiagnostik',
  },
];

export default function LeistungenOverview() {
  const { t } = useLanguage();

  return (
    <>
      <section className="leistungen-section">
        <div className="container">
          <div className="leistungen-grid leistungen-grid-4">
            {services.map(({ key, route, image, alt }) => (
              <div className="leistung-card" key={route}>
                <img
                  className="leistung-card-img"
                  src={image}
                  alt={alt}
                  loading="lazy"
                />
                <div className="leistung-card-body">
                  <h3>{t(key)}</h3>
                  <Link to={route}>{t('leistungenLink')}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
