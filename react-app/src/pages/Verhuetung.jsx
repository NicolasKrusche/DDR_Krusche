import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Verhuetung() {
  const { t } = useLanguage();
  const list = t('verhuetungList');

  return (
    <>

      <section className="content-section">
        <div className="container">
          <div className="content-narrow">
            <p>{t('verhuetungText1')}</p>

            <h3 style={{ margin: '32px 0 16px' }}>{t('verhuetungListTitle')}</h3>
            <ul>
              {Array.isArray(list)
                ? list.map((item, i) => <li key={i}>{item}</li>)
                : <li>{list}</li>}
            </ul>

            <p>{t('verhuetungText2')}</p>
            <p>{t('verhuetungText3')}</p>

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
