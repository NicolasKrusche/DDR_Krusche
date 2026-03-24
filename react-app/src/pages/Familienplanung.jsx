import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Familienplanung() {
  const { t } = useLanguage();

  return (
    <>

      <section className="content-section">
        <div className="container">
          <div className="content-narrow">

            <h2>{t('familienplanungH2_1')}</h2>
            <p>{t('familienplanungText1')}</p>

            <h2 style={{ marginTop: '40px' }}>{t('familienplanungH2_2')}</h2>
            <p>{t('familienplanungText2')}</p>

            <h3 style={{ marginTop: '28px', marginBottom: '12px' }}>{t('familienplanungH3_1')}</h3>
            <p>{t('familienplanungText3')}</p>
            <p>
              {t('familienplanungMKPLink')}{' '}
              <a
                href="https://www.oesterreich.gv.at/themen/familie_und_partnerschaft/geburt/5/Seite.082201.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                oesterreich.gv.at
              </a>
            </p>

            <h3 style={{ marginTop: '28px', marginBottom: '12px' }}>{t('familienplanungH3_2')}</h3>
            <p>{t('familienplanungText4')}</p>

            <h3 style={{ marginTop: '28px', marginBottom: '12px' }}>{t('familienplanungH3_3')}</h3>
            <p>{t('familienplanungText5')}</p>

            <h3 style={{ marginTop: '28px', marginBottom: '12px' }}>{t('familienplanungH3_4')}</h3>
            <p>{t('familienplanungText6')}</p>

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
