import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [showVacationPopup, setShowVacationPopup] = useState(true);

  return (
    <>
      {/* Vacation Popup */}
      {showVacationPopup && (
        <div className="vacation-popup-overlay" onClick={() => setShowVacationPopup(false)}>
          <div className="vacation-popup" onClick={e => e.stopPropagation()}>
            <button className="vacation-popup-close" onClick={() => setShowVacationPopup(false)} aria-label="Schließen">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="vacation-popup-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
            <h3>{t('vacationPopupTitle')}</h3>
            <p>{t('vacationBanner')}</p>
            <button className="btn btn-primary" onClick={() => setShowVacationPopup(false)} style={{ marginTop: 16 }}>
              {t('vacationPopupBtn')}
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="hero">
        <div className="hero-image">
          <img
            src="https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/4c60b404-fca0-4c05-88da-28cb59680ccb/wasa_2.jpg?w=1200&q=80"
            alt="DDr. Anastasiya Krusche — Gynäkologin in Österreich"
            loading="eager"
          />
        </div>
        <div className="hero-content">
          <p className="hero-overline">{t('heroOverline')}</p>
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroText')}</p>
          <div className="hero-actions">
            <Link to="/termin" className="btn btn-primary">{t('heroBtn1')}</Link>
            <Link to="/leistungen" className="btn btn-outline">{t('heroBtn2')}</Link>
          </div>
        </div>
      </section>

      {/* Vacation Banner */}
      <div className="vacation-banner">
        <div className="container">
          <div className="vacation-banner-content">
            <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>{t('vacationBanner')}</p>
          </div>
        </div>
      </div>

      {/* Wichtige Hinweise */}
      <section className="info-section">
        <div className="container">
          <div className="info-box">
            <h3>{t('infoTitle')}</h3>
            <p>{t('infoText1')}</p>
            <p><strong>{t('infoText2')}</strong></p>
            <p>
              {t('infoText3').split('office@dr-krusche.at')[0]}
              <a href="mailto:office@dr-krusche.at">office@dr-krusche.at</a>
              {t('infoText3').split('office@dr-krusche.at')[1]}
            </p>
            <p>{t('infoText4')}</p>
            <p>{t('infoText5')}</p>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="leistungen-section" id="leistungen">
        <div className="container">
          <div className="leistungen-header">
            <h2>{t('leistungenTitle')}</h2>
            <p>{t('leistungenSubtitle')}</p>
          </div>
          <div className="leistungen-grid">
            <div className="leistung-card">
              <img
                className="leistung-card-img"
                src="https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/1647258478613-YI93D0QM5C5SA00B8KEU/unsplash-image-GEzNsJarkGU.jpg?w=600&q=80"
                alt={t('leistungenCard1')}
                loading="lazy"
              />
              <div className="leistung-card-body">
                <h3>{t('leistungenCard1')}</h3>
                <Link to="/vorsorgeuntersuchung">{t('leistungenLink')}</Link>
              </div>
            </div>
            <div className="leistung-card">
              <img
                className="leistung-card-img"
                src="https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/1647257139364-MNNDTI0MCWDBO0B5G4T5/unsplash-image-cIfLUEZYLVg.jpg?w=600&q=80"
                alt={t('leistungenCard2')}
                loading="lazy"
              />
              <div className="leistung-card-body">
                <h3>{t('leistungenCard2')}</h3>
                <Link to="/jugendgynaekologie">{t('leistungenLink')}</Link>
              </div>
            </div>
            <div className="leistung-card">
              <img
                className="leistung-card-img"
                src="https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/1647258123668-K4RLK6M1M73IWT4VWMUX/unsplash-image-NIZeg731LxM.jpg?w=600&q=80"
                alt={t('leistungenCard3')}
                loading="lazy"
              />
              <div className="leistung-card-body">
                <h3>{t('leistungenCard3')}</h3>
                <Link to="/familienplanung">{t('leistungenLink')}</Link>
              </div>
            </div>
            <div className="leistung-card">
              <img
                className="leistung-card-img"
                src="https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/1648730460946-2E3H4M837VJ6TVU67C11/unsplash-image-XknuBmnjbKg.jpg?w=600&q=80"
                alt={t('leistungenCard4')}
                loading="lazy"
              />
              <div className="leistung-card-body">
                <h3>{t('leistungenCard4')}</h3>
                <Link to="/genetische-beratung">{t('leistungenLink')}</Link>
              </div>
            </div>
          </div>
          <div className="leistungen-more">
            <Link to="/leistungen" className="btn btn-outline">{t('leistungenMore')}</Link>
          </div>
        </div>
      </section>

      {/* Ordination Mödling */}
      <section className="ord-section">
        <div className="container">
          <div className="ord-grid">
            <div className="ord-image">
              <img
                src="https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/72b94896-5c35-4f5c-9dab-ff377dd5439a/thumbnail_IMG_9253.jpg?w=700&q=80"
                alt="Ordination Mödling"
                loading="lazy"
              />
            </div>
            <div className="ord-text">
              <h2>{t('ordMoedlingTitle')}</h2>
              <span className="ord-badge">{t('ordMoedlingBadge')}</span>
              <p>{t('ordMoedlingAddr')}</p>
              <div className="ord-hours">
                <div className="ord-hours-row">
                  <span>{t('dayMoDiDo')}</span>
                  <span>08:00 – 13:00</span>
                </div>
                <div className="ord-hours-row">
                  <span>{t('dayMi')}</span>
                  <span>13:00 – 18:00</span>
                </div>
              </div>
              <p>
                {t('ordMoedlingPhone')}{' '}
                <a href="tel:+432236392137">+43 2236 392137</a>
              </p>
              <div className="ord-info-box">
                {t('ordMoedlingEcard')}
              </div>
              <a
                href="https://shop.timesloth.io/de/a/dr-krusche"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t('ordBtnBook')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ordination Hochstraß */}
      <section className="ord-section" style={{ background: '#F2F2F0' }}>
        <div className="container">
          <div className="ord-grid reversed">
            <div className="ord-image">
              <img
                src="https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/4620ddb6-81c1-444d-b7c8-4f9d0f617ccf/praxis.jpg?w=700&q=80"
                alt="Ordination Hochstraß"
                loading="lazy"
              />
            </div>
            <div className="ord-text">
              <h2>{t('ordHochstrassTitle')}</h2>
              <span className="ord-badge">{t('ordHochstrassBadge')}</span>
              <p>{t('ordHochstrassAddr')}</p>
              <div className="ord-hours">
                <div className="ord-hours-row">
                  <span>{t('dayMo')}</span>
                  <span>15:00 – 19:00</span>
                </div>
                <div className="ord-hours-row">
                  <span>{t('dayMi')}</span>
                  <span>08:00 – 12:00</span>
                </div>
              </div>
              <a
                href="https://shorturl.4myhealth.org/rd/f5ce9440-4283-11ef-aafa-1fc932a4afe4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t('ordBtnBook')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>{t('ctaTitle')}</h2>
          <p>{t('ctaText')}</p>
          <p className="cta-hint">{t('ctaHint')}</p>
          <div className="cta-actions">
            <Link to="/termin" className="btn btn-white">{t('heroBtn1')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
