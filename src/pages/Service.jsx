import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import astroBg from '../assets/astro.jpg'

const SERVICES = [
  { id: 'kundli_reading', price: 2100 },
  { id: 'kundli_making', price: 501 }, 
  { id: 'marriage_matching', price: 3100 },
  { id: 'business', price: 501 },
  { id: 'remedies', price: 501 },
  { id: 'ratna_suggestion', price: 501 },
  { id: 'all_ratna', price: 1500 }, 
  

]

export default function Services() {
  const navigate = useNavigate()
  const [active, setActive] = useState(null)
  const { t } = useTranslation()

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
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img src={astroBg} alt="astro" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 text-white">
        <h2 className="text-3xl font-bold mb-8">{t("services_title")}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => {
            const { total } = calculateGSTPrice(svc.price)
            return (
              <button
                key={svc.id}
                onClick={() => startBooking(svc)}
                className="text-left rounded-2xl p-5 bg-white/10 backdrop-blur-md shadow hover:opacity-100 hover:scale-[1.02] transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">
                    {t(`services.${svc.id}.name`)}
                  </h3>
                  <span className="bg-yellow-300 text-black text-sm px-3 py-1 rounded-full">
                    ₹{total}
                  </span>
                </div>
                <p className="opacity-90 text-sm">
                  {t(`services.${svc.id}.description`)}
                </p>
                {active?.id === svc.id && (
                  <p className="mt-3 text-xs opacity-100">
                    {t("opening_form") || "Opening form…"}
                  </p>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}