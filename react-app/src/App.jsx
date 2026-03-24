import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import UeberMich from './pages/UeberMich';
import Kontakt from './pages/Kontakt';
import Ordination from './pages/Ordination';
import Termin from './pages/Termin';
import LeistungenOverview from './pages/LeistungenOverview';
import Verhuetung from './pages/Verhuetung';
import Vorsorgeuntersuchung from './pages/Vorsorgeuntersuchung';
import Familienplanung from './pages/Familienplanung';
import GenetischeBeratung from './pages/GenetischeBeratung';
import Jugendgynaekologie from './pages/Jugendgynaekologie';
import Impfungen from './pages/Impfungen';
import Wechseljahre from './pages/Wechseljahre';
import Ultraschalldiagnostik from './pages/Ultraschalldiagnostik';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ueber-mich" element={<UeberMich />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/ordination" element={<Ordination />} />
          <Route path="/termin" element={<Termin />} />
          <Route path="/leistungen" element={<LeistungenOverview />} />
          <Route path="/verhuetung" element={<Verhuetung />} />
          <Route path="/vorsorgeuntersuchung" element={<Vorsorgeuntersuchung />} />
          <Route path="/familienplanung" element={<Familienplanung />} />
          <Route path="/genetische-beratung" element={<GenetischeBeratung />} />
          <Route path="/jugendgynaekologie" element={<Jugendgynaekologie />} />
          <Route path="/impfungen" element={<Impfungen />} />
          <Route path="/wechseljahre" element={<Wechseljahre />} />
          <Route path="/ultraschalldiagnostik" element={<Ultraschalldiagnostik />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
