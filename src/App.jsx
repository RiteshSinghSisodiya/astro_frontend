import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import Payment from "./pages/Payment";
import UploadKundli from "./pages/UploadKundli";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import RefundPolicy from "./pages/legal/RefundPolicy";
import ContactUs from "./pages/legal/ContactUs";
import logo from "./assets/logo.webp";
import Services from "./pages/Service";
import AboutUs from "./pages/AboutUs";
import Newpay from "./pages/Newpay";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Cosmic Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-800 via-indigo-900 to-black"></div>

      {/* Header with Gradient */}
      <header className="w-full px-4 py-4 flex items-center justify-between bg-gradient-to-br from-[#fdf6f0] via-white to-[#f3e8ff] shadow-md">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Aura Jyotish Kendra" className="h-10 md:h-12 lg:h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 pr-6">
          <NavLink to="/" label="Home" />
          <NavLink to="/service" label="Services" />
          {/* <NavLink to="/register" label="Registration" /> */}
          <NavLink to="/aboutus" label="About Us" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 text-black"
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

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white py-4 shadow-md text-center">
          <MobileNavLink to="/" label="Home" onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/service" label="Services" onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/register" label="Registration" onClick={() => setMenuOpen(false)} />
          <MobileNavLink to="/aboutus" label="About Us" onClick={() => setMenuOpen(false)} />
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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </main>

      {/* Footer with Gradient */}
      <footer className="p-4 text-center text-sm text-gray-700 bg-gradient-to-br from-[#fdf6f0] via-white to-[#f3e8ff] shadow-inner">
        <div className="flex flex-wrap justify-center space-x-4 space-y-2 sm:space-y-0 mb-2">
          <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/refund" className="hover:underline">Refund & Cancellation</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
        </div>
        <p>© {new Date().getFullYear()} Aura Jyotish Kendra. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Reusable NavLink Components
function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="text-lg hover:text-blue-500 transition duration-200 ease-in-out hover:scale-105 px-2"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ to, label, onClick }) {
  return (
    <Link
      to={to}
      className="block py-2 text-lg text-gray-800 hover:text-blue-500"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
