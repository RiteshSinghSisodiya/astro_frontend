import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import LanguageSelector from "../components/LanguageSelector"
import zodiacImg from "../assets/zodiac.jpg"
import bgImg from "../assets/background.webp"   // <-- your uploaded image

export default function Landing() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Blur + Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bgImg}
          alt="Astrology background"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay for readability */}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-semibold tracking-wide">Aura Jyotish Kendra</h1>
          <LanguageSelector />
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-yellow-300 mb-3 italic">
              Honoring the Legacy of Late Pandit Kalyan Dutt Sharma: A Renowned Mahamahopadhyaya and Scholar
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-md">
              Helping You To Bring Back Your Smile
            </h2>
            <p className="text-white/90 mb-6 max-w-md">
              Experts of AURA JYOTISH KENDRA provide personalized astrological guidance
              to help individuals understand their life path and regain their sense of joy.
            </p>

            <ul className="space-y-2 mb-8 text-white/90">
              <li>• {t("astro_points_p1")}</li>
              <li>• {t("astro_points_p2")}</li>
              <li>• {t("astro_points_p3")}</li>
            </ul>

            <Link to="/register">
              <button className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-[1.02] transition">
                {t("register")}
              </button>
            </Link>
          </div>

          {/* Right Card */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 shadow-lg">
            <img
              className="w-full h-72 object-cover rounded-xl shadow-lg"
              src={zodiacImg}
              alt="Astrology"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
