import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Column 1 — Brand */}
          <div className="footer-brand">
            <img
              src="/images/logo_dr.png"
              alt="DDr. Anastasiya Krusche"
              className="footer-logo-img"
            />
            <h4>{t('footerTitle')}</h4>
            <p>{t('footerDesc')}</p>
            <p>Доктор Анастасия Круше, специалист в области гинекологии и акушерства, врач общей практики.</p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4>{t('navServices')}</h4>
            <ul className="footer-links">
              <li><Link to="/verhuetung">{t('svcContraception')}</Link></li>
              <li><Link to="/vorsorgeuntersuchung">{t('svcScreening')}</Link></li>
              <li><Link to="/familienplanung">{t('svcFamily')}</Link></li>
              <li><Link to="/genetische-beratung">{t('svcGenetic')}</Link></li>
              <li><Link to="/jugendgynaekologie">{t('svcYouth')}</Link></li>
              <li><Link to="/impfungen">{t('svcVaccination')}</Link></li>
              <li><Link to="/wechseljahre">{t('svcMenopause')}</Link></li>
              <li><Link to="/ultraschalldiagnostik">{t('svcUltrasound')}</Link></li>
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="footer-contact">
            <h4>{t('navContact')}</h4>
            <strong>Ordination Hochstraß</strong>
            <p>3033 Hochstraß 593</p>
            <p>Mo 15:00–19:00, Mi 08:00–12:00</p>
            <p>Tel: <a href="tel:+4327734360">+43 2773 43603</a></p>
            <strong>Ordination Mödling</strong>
            <p>2340 Mödling, Enzersdorfer Straße 70/1</p>
            <p>Mo/Di/Do 08:00–13:00, Mi 13:00–18:00</p>
            <p>Tel: <a href="tel:+432236392137">+43 2236 392137</a></p>
          </div>

        </div>

        <div className="footer-bottom">
          &copy; 2025 DDr. Anastasiya Krusche &middot;{' '}
          <Link to="/impressum">Impressum</Link> &middot;{' '}
          <Link to="/datenschutz">Datenschutz</Link> &middot;{' '}
          {t('footerAllKassen')}
        </div>
      </div>
    </footer>
  );
}
