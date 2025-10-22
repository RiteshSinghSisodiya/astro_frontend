import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import Payment from "./pages/Payment";
import UploadKundli from "./pages/UploadKundli";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import RefundPolicy from "./pages/legal/RefundPolicy";
import ContactUs from "./pages/legal/ContactUs";
import ShippingPolicy from "./pages/legal/ShippingPolicy";
import logo from "./assets/logo.webp";
import Services from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import Newpay from "./pages/Newpay";

export default function App() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  // Apply language attribute to document for proper Hindi text styling
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Cosmic Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-800 via-indigo-900 to-black"></div>

      {/* Enhanced Header with Modern Styling */}
      <header className="w-full px-6 py-5 flex items-center justify-between bg-gradient-to-r from-gray-900/95 via-purple-900/90 to-indigo-900/95 backdrop-blur-lg shadow-xl border-b border-white/20 sticky top-0 z-50">
        {/* Enhanced Logo */}
        <Link to="/" className="flex items-center gap-3 group transition-all duration-300 hover:scale-105">
          <div className="relative">
            <img src={logo} alt="Aura Jyotish Kendra" className="h-12 md:h-14 lg:h-16 w-auto transition-all duration-300 group-hover:drop-shadow-lg" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="hidden lg:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent">
              Aura Jyotish Kendra
            </h1>
          </div>
        </Link>

        {/* Cosmic Animation Space */}
        <div className="hidden md:flex flex-1 items-center justify-center relative overflow-hidden mx-8">
          {/* Floating Stars */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-2 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-twinkle"></div>
            <div className="absolute top-4 right-1/3 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-3 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1 right-1/4 w-0.5 h-0.5 bg-pink-300 rounded-full animate-twinkle" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-1 left-1/3 w-1 h-1 bg-green-300 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Central Cosmic Symbol */}
          <div className="relative w-20 h-20 animate-float">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-2 border-purple-300/40 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-cosmic-glow animate-spin" style={{animationDuration: '25s'}}></div>
            
            {/* Middle Ring */}
            <div className="absolute inset-3 border border-blue-300/30 rounded-full animate-spin" style={{animationDuration: '18s', animationDirection: 'reverse'}}></div>
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-cosmic-glow animate-spin" style={{animationDuration: '18s', animationDirection: 'reverse'}}></div>
            
            {/* Inner Ring */}
            <div className="absolute inset-6 border border-pink-300/25 rounded-full animate-spin" style={{animationDuration: '12s'}}></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-cosmic-glow animate-spin" style={{animationDuration: '12s'}}></div>
            
            {/* Center Star */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-gradient-to-r from-yellow-300 to-white rounded-full animate-twinkle"></div>
            </div>
          </div>
          
          {/* Cosmic Particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-3 left-1/5 w-0.5 h-0.5 bg-yellow-200 rounded-full opacity-60 animate-twinkle" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute bottom-2 right-1/5 w-0.5 h-0.5 bg-purple-200 rounded-full opacity-60 animate-twinkle" style={{animationDelay: '0.8s'}}></div>
            <div className="absolute top-5 right-2/5 w-0.5 h-0.5 bg-blue-200 rounded-full opacity-60 animate-twinkle" style={{animationDelay: '1.2s'}}></div>
            <div className="absolute bottom-4 left-2/5 w-0.5 h-0.5 bg-pink-200 rounded-full opacity-60 animate-twinkle" style={{animationDelay: '1.8s'}}></div>
            <div className="absolute top-6 left-3/5 w-0.5 h-0.5 bg-green-200 rounded-full opacity-60 animate-twinkle" style={{animationDelay: '2.4s'}}></div>
            <div className="absolute bottom-5 right-3/5 w-0.5 h-0.5 bg-orange-200 rounded-full opacity-60 animate-twinkle" style={{animationDelay: '3s'}}></div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 pr-6">
          <NavLink to="/" label={t("nav.home")} />
          <NavLink to="/aboutus" label={t("nav.about_us")} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Enhanced Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-white/95 via-purple-50/90 to-yellow-50/95 backdrop-blur-lg py-6 shadow-2xl border-b border-white/20 text-center animate-slide-down">
          <div className="space-y-2">
            <MobileNavLink to="/" label={t("nav.home")} onClick={() => setMenuOpen(false)} />
            <MobileNavLink to="/aboutus" label={t("nav.about_us")} onClick={() => setMenuOpen(false)} />
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-10">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/newpayment" element={<Newpay />} />
          <Route path="/upload-kundli" element={<UploadKundli />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </main>

      {/* Enhanced Footer with Modern Styling */}
      <footer className="relative bg-gradient-to-r from-purple-900/95 via-indigo-900/90 to-black/95 backdrop-blur-lg border-t border-white/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <img src={logo} alt="Aura Jyotish Kendra" className="h-10 w-auto" />
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
                    Aura Jyotish Kendra
                  </h3>
                  <p className="text-xs text-gray-300">Cosmic Guidance & Wisdom</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Illuminating your path through ancient wisdom and cosmic insights for over 34 years.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">{t("footer.quick_links")}</h4>
              <div className="space-y-2">
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:scale-105 transform">{t("nav.home")}</Link>
                <Link to="/aboutus" onClick={() => window.scrollTo(0, 0)} className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:scale-105 transform">{t("nav.about_us")}</Link>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:scale-105 transform">{t("legal.contact_title")}</Link>
              </div>
            </div>

            {/* Legal Links */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-white mb-4">{t("footer.legal")}</h4>
              <div className="space-y-2">
                <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:scale-105 transform">{t("legal.terms_title")}</Link>
                <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:scale-105 transform">{t("legal.privacy_title")}</Link>
                <Link to="/refund" onClick={() => window.scrollTo(0, 0)} className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:scale-105 transform">{t("legal.refund_title")}</Link>
                <Link to="/shipping" onClick={() => window.scrollTo(0, 0)} className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:scale-105 transform">{t("legal.shipping_title", "Shipping Policy")}</Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Aura Jyotish Kendra</span>. {t("footer.copyright")}
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Crafted with ✨ for your cosmic journey
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Reusable NavLink Components
function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="relative text-lg font-semibold px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg transform group overflow-hidden"
    >
      <span className="relative z-10">{label}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span className="absolute inset-0 z-10 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{label}</span>
    </Link>
  );
}

function MobileNavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      className="block mx-4 my-2 py-3 px-6 text-lg font-semibold text-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
