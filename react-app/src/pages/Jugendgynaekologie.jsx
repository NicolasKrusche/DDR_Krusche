import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Jugendgynaekologie() {
  const { t } = useLanguage();
  const list = t('jugendList');

  return (
    <>

      <section className="content-section">
        <div className="container">
          <div className="content-narrow">
            <p>{t('jugendText1')}</p>

            <h3 style={{ marginTop: '32px', marginBottom: '12px' }}>{t('jugendH3_1')}</h3>
            <p>{t('jugendText2')}</p>

            <h3 style={{ marginTop: '32px', marginBottom: '12px' }}>{t('jugendH3_2')}</h3>
            <p>{t('jugendText3')}</p>
            <ul>
              {Array.isArray(list)
                ? list.map((item, i) => <li key={i}>{item}</li>)
                : <li>{list}</li>}
            </ul>
            <p>{t('jugendText4')}</p>

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
