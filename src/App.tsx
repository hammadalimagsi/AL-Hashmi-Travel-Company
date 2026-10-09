import React from 'react';
import { BrowserRouter, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { StickyBottomBar } from './components/common/StickyBottomBar';
import { QuoteModal } from './components/common/QuoteModal';
import { Toast } from './components/common/Toast';
import { HomePage } from './pages/HomePage';
import { PackagesPage } from './pages/PackagesPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { VisaPage } from './pages/VisaPage';
import { FlightsPage } from './pages/FlightsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const AppLayout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/package/:id" element={<PackageDetailPage />} />
        <Route path="/visa" element={<VisaPage />} />
        <Route path="/flights" element={<FlightsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Catch-all redirect */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <StickyBottomBar />
      <QuoteModal />
      <Toast />
    </>
  );
};

const NotFoundPage: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4 text-center py-16">
    <span className="text-6xl">🕌</span>
    <h1 className="text-2xl font-black text-charcoal-900">Page Not Found</h1>
    <p className="text-sm text-charcoal-600 max-w-sm">
      The page you're looking for doesn't exist. Perhaps you were looking for our Umrah packages?
    </p>
    <a href="/" className="px-6 py-3 rounded-xl bg-emerald-850 text-white font-bold text-sm hover:bg-emerald-900 transition-all">
      Return to Home
    </a>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppLayout />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
