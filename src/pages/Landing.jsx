import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import astroBg from '../assets/astro.jpg';
import LanguageSelector from "../components/LanguageSelector";
import bgImg from "../assets/background.webp";
import zodiacImg from "../assets/zodiac.jpg";

const SERVICES = [
  { id: 'kundli_reading', price: 2100 },
  { id: 'kundli_making', price: 501 }, 
  { id: 'marriage_matching', price: 3100 },
  { id: 'business', price: 501 },
  { id: 'remedies', price: 501 },
  { id: 'ratna_suggestion', price: 501 },
]

export default function Landing() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [active, setActive] = useState(null)

  const calculateGSTPrice = (basePrice) => {
    const gst = Math.round(basePrice * 0.18)
    const total = basePrice + gst
    return { basePrice, gst, total }
  }

  const startBooking = (svc) => {
    setActive(svc)
    setTimeout(() => {
      navigate('/register', {
        state: {
          selectedService: t(`services.${svc.id}.name`),
          price: svc.price
        }
      })
    }, 800)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10">
          <img
            src={bgImg}
            alt="Astrology background"
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-purple-900/60" /> 
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24 text-white">
          <div className="flex items-center justify-between mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wide bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Aura Jyotish Kendra
            </h1>
            <LanguageSelector />
          </div>

          <div className="grid grid-cols-1 gap-12 items-start">
            <div className="space-y-8 animate-slide-up max-w-4xl">
              {/* Legacy Content - Made Bigger and More Prominent */}
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-300/30 shadow-2xl">
                <p className="text-xl md:text-2xl lg:text-3xl text-yellow-300 mb-4 font-semibold leading-relaxed text-center">
                  {t("legacy_title")}
                </p>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-md bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                {t("tagline")}
              </h2>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                {t("aura_intro")}
              </p>

              <ul className="space-y-3 mb-10 text-white/90">
                {/* <li className="flex items-center"><span className="text-yellow-300 mr-2">✦</span> {t("astro_points_p1")}</li> */}
                <li className="flex items-center"><span className="text-yellow-300 mr-2">✦</span> {t("astro_points_p2")}</li>
                <li className="flex items-center"><span className="text-yellow-300 mr-2">✦</span> {t("astro_points_p3")}</li>
                <li className="flex items-center"><span className="text-yellow-300 mr-2">✦</span> {t("experience_years")}</li>
                <li className="flex items-center"><span className="text-yellow-300 mr-2">✦</span> {t("kundli_count")}</li>
              </ul>
            </div>

            {/* Image removed as requested; content stretched */}
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="relative py-16 bg-gradient-to-b from-transparent via-purple-900/30 to-black/80">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="animate-pulse">
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 mx-auto mb-8 rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {t("cosmic_journey_title")}
            </h3>
            <p className="text-white/80 text-lg leading-relaxed">
              {t("cosmic_journey_description")}
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-yellow-300 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-gradient-to-b from-black/80 to-purple-900/60">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img src={astroBg} alt="astro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              {t("services_title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {SERVICES.map((svc, index) => {
              const { basePrice, gst, total } = calculateGSTPrice(svc.price);
              return (
                <div
                  key={svc.id}
                  className={`bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-yellow-300/50 group ${
                    active?.id === svc.id ? "scale-105 bg-gradient-to-br from-white/25 to-white/10 border-yellow-300/70 shadow-2xl" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-sm md:text-xl font-semibold text-white mb-2 md:mb-3 group-hover:text-yellow-300 transition-colors duration-300 leading-tight">
                    {t(`services.${svc.id}.name`)}
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 md:line-clamp-3 leading-relaxed">
                    {t(`services.${svc.id}.description`)}
                  </p>
                  <div className="space-y-1 md:space-y-2 text-white/90 bg-black/20 rounded-lg p-2 md:p-3 mb-3 md:mb-4 text-xs md:text-sm">
                    <div className="flex justify-between">
                      <span>Base Price:</span>
                      <span className="font-medium">₹{basePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (18%):</span>
                      <span className="font-medium">₹{gst}</span>
                    </div>
                    <div className="border-t border-white/30 pt-1 md:pt-2">
                      <div className="flex justify-between font-bold text-yellow-300 text-sm md:text-lg">
                        <span>Total:</span>
                        <span>₹{total}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => startBooking(svc)}
                    className="w-full mt-2 md:mt-3 py-2 md:py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  >
                    {t("register")}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}
