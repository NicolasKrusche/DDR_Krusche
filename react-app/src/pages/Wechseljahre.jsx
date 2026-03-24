import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Wechseljahre() {
  const { t } = useLanguage();

  return (
    <>

      <section className="content-section">
        <div className="container">
          <div className="content-narrow">
            <p>{t('wechselText1')}</p>
            <p>{t('wechselText2')}</p>

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
