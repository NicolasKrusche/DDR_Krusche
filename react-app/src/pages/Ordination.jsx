import { useLanguage } from '../context/LanguageContext';

export default function Ordination() {
  const { t } = useLanguage();

  return (
    <>

      {/* Ordination Hochstraß */}
      <section className="ord-section">
        <div className="container">
          <div className="ord-grid">
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
              <p>Tel: <a href="tel:+4327734360">+43 2773 43603</a></p>
              <a
                href="https://shorturl.4myhealth.org/rd/f5ce9440-4283-11ef-aafa-1fc932a4afe4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t('ordinationOnlineBtn')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ordination Mödling */}
      <section className="ord-section" style={{ background: '#F2F2F0' }}>
        <div className="container">
          <div className="ord-grid reversed">
            <div className="ord-image">
              <img
                src="https://images.squarespace-cdn.com/content/v1/622f12984789ba305efb55ec/72b94896-5c35-4f5c-9dab-ff377dd5439a/thumbnail_IMG_9253.jpg?w=700&q=80"
                alt="Ordination Mödling"
                loading="lazy"
              />
            </div>
            <div className="ord-text">
              <h2>{t('ordMoedlingTitle')}</h2>
              <span className="ord-badge">{t('ordMoedlingBadgeFull')}</span>
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
              <p>Tel: <a href="tel:+432236392137">+43 2236 392137</a></p>
              <a
                href="https://shop.timesloth.io/de/a/dr-krusche"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t('ordinationOnlineBtn')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
