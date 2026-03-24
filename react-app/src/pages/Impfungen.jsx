import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Impfungen() {
  const { t } = useLanguage();

  return (
    <>

      <section className="content-section">
        <div className="container">
          <div className="content-narrow">

            <h2 style={{ marginBottom: '16px' }}>{t('impfungenH2')}</h2>
            <p>{t('impfungenText1')}</p>
            <p>{t('impfungenText2')}</p>

            <div className="content-info-box">
              <p>{t('impfungenHint')}</p>
            </div>

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
