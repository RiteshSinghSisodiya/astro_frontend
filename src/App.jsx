import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import Payment from "./pages/Payment";
import UploadKundli from "./pages/UploadKundli";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import RefundPolicy from "./pages/legal/RefundPolicy";
import ContactUs from "./pages/legal/ContactUs";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Cosmic Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-800 via-indigo-900 to-black"></div>

      {/* Header with Gradient */}
      <header
        className="w-full px-6 py-4 flex items-center justify-between 
        bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 shadow-lg"
      >
        <Link to="/" className="text-2xl font-bold text-white">
          Aura Jyotish Kendra
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 
              text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:scale-105 transition"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
              text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:scale-105 transition"
          >
            Register
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/upload-kundli" element={<UploadKundli />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>

      {/* Footer with Gradient */}
      <footer
        className="p-4 text-center text-sm text-white 
        bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 shadow-inner"
      >
        <div className="flex justify-center space-x-6 mb-2">
          <Link to="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/refund" className="hover:underline">
            Refund & Cancellation
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
        <p>
          © {new Date().getFullYear()} Aura Jyotish Kendra. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
