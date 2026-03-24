import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Kontakt() {
  const { t } = useLanguage();

  return (
    <>

      <section className="kontakt-section">
        <div className="container">
          <h2>{t('contactHeading')}</h2>

          <div style={{ marginBottom: '40px', marginTop: '24px' }}>
            <Link to="/termin" className="btn btn-primary">{t('contactBookOnline')}</Link>
          </div>

          {/* Contact Cards */}
          <div className="kontakt-grid">
            {/* Hochstraß */}
            <div className="kontakt-card">
              <h3>Ordination Hochstraß</h3>
              <p className="kontakt-badge">{t('ordHochstrassBadge')}</p>
              <div className="kontakt-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Hochstraß 593, 3033 Hochstraß</span>
              </div>
              <div className="kontakt-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>{t('dayMo')}: 15:00 – 19:00 &nbsp;|&nbsp; {t('dayMi')}: 08:00 – 12:00</span>
              </div>
              <div className="kontakt-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.19 6.19l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+4327734360">+43 2773 43603</a>
              </div>
              <a
                href="https://shorturl.4myhealth.org/rd/f5ce9440-4283-11ef-aafa-1fc932a4afe4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ marginTop: '16px' }}
              >
                {t('ordinationOnlineBtn')}
              </a>
            </div>

            {/* Mödling */}
            <div className="kontakt-card">
              <h3>Ordination Mödling</h3>
              <p className="kontakt-badge">{t('ordMoedlingBadge')}</p>
              <div className="kontakt-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Enzersdorfer Straße 70/1, 2340 Mödling</span>
              </div>
              <div className="kontakt-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>{t('dayMoDiDo')}: 08:00 – 13:00 &nbsp;|&nbsp; {t('dayMi')}: 13:00 – 18:00</span>
              </div>
              <div className="kontakt-detail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.19 6.19l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+432236392137">+43 2236 392137</a>
              </div>
              <a
                href="https://shop.timesloth.io/de/a/dr-krusche"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ marginTop: '16px' }}
              >
                {t('ordinationOnlineBtn')}
              </a>
            </div>
          </div>

          {/* Google Maps — Change 3 */}
          <div className="kontakt-maps-grid">
            <div>
              <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>Ordination Hochstraß</h3>
              <div className="kontakt-map">
                <iframe
                  src="https://maps.google.com/maps?q=Hochstra%C3%9F+593,+3033+Hochstra%C3%9F,+%C3%96sterreich&z=15&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ordination Hochstraß"
                />
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>Ordination Mödling</h3>
              <div className="kontakt-map">
                <iframe
                  src="https://maps.google.com/maps?q=Enzersdorfer+Stra%C3%9Fe+70,+2340+M%C3%B6dling,+%C3%96sterreich&z=15&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ordination Mödling"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
