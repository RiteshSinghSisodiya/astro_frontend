import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Registration from './pages/Registration'
import Payment from './pages/Payment'
import UploadKundli from './pages/UploadKundli'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Cosmic Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-800 via-indigo-900 to-black"></div>

      {/* Header with Gradient */}
      <header className="w-full px-6 py-4 flex items-center justify-between 
        bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 shadow-lg">
        <Link to="/" className="text-2xl font-bold text-white">Aura Jyotish Kendra</Link>
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
        </Routes>
      </main>

      {/* Footer with Gradient */}
      <footer className="p-4 text-center text-sm text-white 
        bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 shadow-inner">
        © {new Date().getFullYear()} Aura Jyotish Kendra. All rights reserved.
      </footer>
    </div>
  )
}
