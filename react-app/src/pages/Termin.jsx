import { useLanguage } from '../context/LanguageContext';

export default function Termin() {
  const { t } = useLanguage();

  return (
    <>

      <section className="termin-section">
        <div className="container">

          {/* Ordination Mödling */}
          <div className="termin-block">
            <h2>{t('ordMoedlingTitle')}</h2>
            <span className="termin-badge">{t('terminMoedlingBadge')}</span>
            <div className="termin-info">
              {t('terminCancelHint')}
            </div>
            <div className="termin-warning">
              ⚠ {t('terminMKPHint')}
            </div>
            <a
              href="https://shop.timesloth.io/de/a/dr-krusche"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t('terminMoedlingBtn')}
            </a>
          </div>

          <hr className="termin-divider" />

          {/* Ordination Hochstraß */}
          <div className="termin-block">
            <h2>{t('ordHochstrassTitle')}</h2>
            <span className="termin-badge">{t('ordHochstrassBadge')}</span>
            <div style={{ marginTop: '16px' }}>
              <a
                href="https://shorturl.4myhealth.org/rd/f5ce9440-4283-11ef-aafa-1fc932a4afe4"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t('terminHochstrassBtn')}
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
