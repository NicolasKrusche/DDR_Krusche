import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const serviceSubpages = [
  '/verhuetung',
  '/vorsorgeuntersuchung',
  '/familienplanung',
  '/genetische-beratung',
  '/jugendgynaekologie',
  '/impfungen',
  '/wechseljahre',
  '/ultraschalldiagnostik',
];

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isServicesActive =
    location.pathname === '/leistungen' ||
    serviceSubpages.includes(location.pathname);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img
            src="/images/logo_dr.png"
            alt="DDr. Anastasiya Krusche"
            className="nav-logo-img"
          />
          <span>DDr. Krusche</span>
        </Link>

        {/* Desktop navigation */}
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''}>
              {t('navHome')}
            </Link>
          </li>
          <li>
            <Link to="/ueber-mich" className={isActive('/ueber-mich') ? 'active' : ''}>
              {t('navAbout')}
            </Link>
          </li>
          <li
            className="nav-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`nav-dropdown-toggle${isServicesActive ? ' active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              type="button"
            >
              {t('navServices')}
            </button>
            {dropdownOpen && (
              <ul className="nav-dropdown-menu">
                <li>
                  <Link to="/leistungen" className={isActive('/leistungen') ? 'active' : ''}>
                    {t('navAllServices')}
                  </Link>
                </li>
                <li>
                  <Link to="/verhuetung" className={isActive('/verhuetung') ? 'active' : ''}>
                    {t('svcContraception')}
                  </Link>
                </li>
                <li>
                  <Link to="/vorsorgeuntersuchung" className={isActive('/vorsorgeuntersuchung') ? 'active' : ''}>
                    {t('svcScreening')}
                  </Link>
                </li>
                <li>
                  <Link to="/familienplanung" className={isActive('/familienplanung') ? 'active' : ''}>
                    {t('svcFamily')}
                  </Link>
                </li>
                <li>
                  <Link to="/genetische-beratung" className={isActive('/genetische-beratung') ? 'active' : ''}>
                    {t('svcGenetic')}
                  </Link>
                </li>
                <li>
                  <Link to="/jugendgynaekologie" className={isActive('/jugendgynaekologie') ? 'active' : ''}>
                    {t('svcYouth')}
                  </Link>
                </li>
                <li>
                  <Link to="/impfungen" className={isActive('/impfungen') ? 'active' : ''}>
                    {t('svcVaccination')}
                  </Link>
                </li>
                <li>
                  <Link to="/wechseljahre" className={isActive('/wechseljahre') ? 'active' : ''}>
                    {t('svcMenopause')}
                  </Link>
                </li>
                <li>
                  <Link to="/ultraschalldiagnostik" className={isActive('/ultraschalldiagnostik') ? 'active' : ''}>
                    {t('svcUltrasound')}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/ordination" className={isActive('/ordination') ? 'active' : ''}>
              {t('navOrdination')}
            </Link>
          </li>
          <li>
            <Link to="/kontakt" className={isActive('/kontakt') ? 'active' : ''}>
              {t('navContact')}
            </Link>
          </li>
          <li>
            <button className="lang-btn" onClick={toggleLanguage} type="button">
              {language === 'de' ? '\u{1F1F7}\u{1F1FA} \u0420\u0443\u0441\u0441\u043A\u0438\u0439' : '\u{1F1E6}\u{1F1F9} Deutsch'}
            </button>
          </li>
          <li>
            <Link to="/termin" className="btn btn-primary">
              {t('navAppointment')}
            </Link>
          </li>
        </ul>

        {/* Language button (mobile only, shown next to hamburger) */}
        <button className="lang-btn lang-btn-mobile" onClick={toggleLanguage} type="button">
          {language === 'de' ? '\u{1F1F7}\u{1F1FA} \u0420\u0443\u0441\u0441\u043A\u0438\u0439' : '\u{1F1E6}\u{1F1F9} Deutsch'}
        </button>

        {/* Hamburger button */}
        <button
          className={`nav-hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' active' : ''}`}>
        <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>
          {t('navHome')}
        </Link>
        <Link to="/ueber-mich" className={isActive('/ueber-mich') ? 'active' : ''} onClick={closeMenu}>
          {t('navAbout')}
        </Link>

        <div className="nav-dropdown">
          <button
            className={`nav-dropdown-toggle${isServicesActive ? ' active' : ''}`}
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            type="button"
          >
            {t('navServices')}
          </button>
          {mobileServicesOpen && (
            <div className="nav-dropdown-menu">
              <Link to="/leistungen" className={isActive('/leistungen') ? 'active' : ''} onClick={closeMenu}>
                {t('navAllServices')}
              </Link>
              <Link to="/verhuetung" className={isActive('/verhuetung') ? 'active' : ''} onClick={closeMenu}>
                {t('svcContraception')}
              </Link>
              <Link to="/vorsorgeuntersuchung" className={isActive('/vorsorgeuntersuchung') ? 'active' : ''} onClick={closeMenu}>
                {t('svcScreening')}
              </Link>
              <Link to="/familienplanung" className={isActive('/familienplanung') ? 'active' : ''} onClick={closeMenu}>
                {t('svcFamily')}
              </Link>
              <Link to="/genetische-beratung" className={isActive('/genetische-beratung') ? 'active' : ''} onClick={closeMenu}>
                {t('svcGenetic')}
              </Link>
              <Link to="/jugendgynaekologie" className={isActive('/jugendgynaekologie') ? 'active' : ''} onClick={closeMenu}>
                {t('svcYouth')}
              </Link>
              <Link to="/impfungen" className={isActive('/impfungen') ? 'active' : ''} onClick={closeMenu}>
                {t('svcVaccination')}
              </Link>
              <Link to="/wechseljahre" className={isActive('/wechseljahre') ? 'active' : ''} onClick={closeMenu}>
                {t('svcMenopause')}
              </Link>
              <Link to="/ultraschalldiagnostik" className={isActive('/ultraschalldiagnostik') ? 'active' : ''} onClick={closeMenu}>
                {t('svcUltrasound')}
              </Link>
            </div>
          )}
        </div>

        <Link to="/ordination" className={isActive('/ordination') ? 'active' : ''} onClick={closeMenu}>
          {t('navOrdination')}
        </Link>
        <Link to="/kontakt" className={isActive('/kontakt') ? 'active' : ''} onClick={closeMenu}>
          {t('navContact')}
        </Link>

        <Link to="/termin" className="btn btn-primary" onClick={closeMenu}>
          {t('navAppointment')}
        </Link>
      </div>
    </nav>
  );
}
