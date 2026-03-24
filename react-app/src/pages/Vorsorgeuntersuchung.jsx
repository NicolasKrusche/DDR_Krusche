import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Vorsorgeuntersuchung() {
  const { t } = useLanguage();
  const list = t('vorsorgeList');

  return (
    <>

      <section className="content-section">
        <div className="container">
          <div className="content-narrow">
            <p>{t('vorsorgeText1')}</p>

            <ul>
              {Array.isArray(list)
                ? list.map((item, i) => <li key={i}>{item}</li>)
                : <li>{list}</li>}
            </ul>

            <div className="content-cta">
              <h3>{t('aboutCta')}</h3>
              <Link to="/kontakt" className="btn btn-white">{t('contactBtn')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
