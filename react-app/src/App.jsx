import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const UeberMich             = lazy(() => import('./pages/UeberMich'));
const Kontakt               = lazy(() => import('./pages/Kontakt'));
const Ordination            = lazy(() => import('./pages/Ordination'));
const Termin                = lazy(() => import('./pages/Termin'));
const LeistungenOverview    = lazy(() => import('./pages/LeistungenOverview'));
const Verhuetung            = lazy(() => import('./pages/Verhuetung'));
const Vorsorgeuntersuchung  = lazy(() => import('./pages/Vorsorgeuntersuchung'));
const Familienplanung       = lazy(() => import('./pages/Familienplanung'));
const GenetischeBeratung    = lazy(() => import('./pages/GenetischeBeratung'));
const Jugendgynaekologie    = lazy(() => import('./pages/Jugendgynaekologie'));
const Impfungen             = lazy(() => import('./pages/Impfungen'));
const Wechseljahre          = lazy(() => import('./pages/Wechseljahre'));
const Ultraschalldiagnostik = lazy(() => import('./pages/Ultraschalldiagnostik'));
const Impressum             = lazy(() => import('./pages/Impressum'));
const Datenschutz           = lazy(() => import('./pages/Datenschutz'));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={null}>
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
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
