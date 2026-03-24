import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function UeberMich() {
  const { t } = useLanguage();

  return (
    <>

      <section className="bio-section">
        <div className="container">
          <div className="bio-grid">
            {/* Portrait */}
            <div className="bio-image">
              <img
                src="https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/4c60b404-fca0-4c05-88da-28cb59680ccb/wasa_2.jpg?w=700&q=80"
                alt="DDr. Anastasiya Krusche — Portraitfoto"
                loading="lazy"
              />
            </div>

            {/* Bio Text */}
            <div className="bio-content">
              <p className="section-label">{t('aboutOverline')}</p>
              <h2>{t('aboutTitle')}</h2>
              <p>{t('aboutText1')}</p>
              <p>{t('aboutText2')}</p>
              <p>{t('aboutText3')}</p>

              {/* Diplomas */}
              <div className="bio-diplomas">
                <p className="bio-diplomas-title">{t('aboutDiplomsTitle')}</p>
                <div className="bio-badges">
                  <span className="bio-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    {t('aboutDiplom1')}
                  </span>
                </div>
                <p className="bio-diplomas-title" style={{ marginTop: '16px' }}>{t('aboutFurtherTitle')}</p>
                <div className="bio-badges">
                  <span className="bio-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    {t('aboutDiplom2')}
                  </span>
                  <span className="bio-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    {t('aboutDiplom3')}
                  </span>
                </div>
              </div>

              {/* Languages */}
              <div className="bio-languages">
                <p className="bio-diplomas-title">{t('aboutLangTitle')}</p>
                <p className="bio-langs-text">
                  🇷🇺 🇩🇪 🇬🇧 {t('aboutLangs')}
                </p>
              </div>

              {/* CTA */}
              <div className="bio-cta">
                <p>{t('aboutCta')}</p>
                <Link to="/termin" className="btn btn-primary">{t('navAppointment')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
