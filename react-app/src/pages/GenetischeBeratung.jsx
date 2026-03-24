import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function GenetischeBeratung() {
  const { t } = useLanguage();
  const list = t('genetischeList');

  return (
    <>

      <section className="content-section">
        <div className="container">
          <div className="content-narrow">

            <h3 style={{ marginBottom: '12px' }}>{t('genetischeH3_1')}</h3>
            <p>{t('genetischeText1')}</p>
            <p>{t('genetischeText1b')}</p>

            <h3 style={{ marginTop: '32px', marginBottom: '12px' }}>{t('genetischeH3_2')}</h3>
            <p>{t('genetischeText2')}</p>

            <h3 style={{ marginTop: '32px', marginBottom: '12px' }}>{t('genetischeH3_3')}</h3>
            <p>{t('genetischeText3')}</p>
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
