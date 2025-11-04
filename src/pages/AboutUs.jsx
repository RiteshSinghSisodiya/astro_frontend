import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import astrologerImg from "../assets/best_astrologer.jpg";
import astroVideo from "../assets/astro_video.mp4";

const STATS = [
  { id: 'experience', value: '34+', label: 'about.stats.experience' },
  { id: 'consultations', value: 'Thousands', label: 'about.stats.consultations' },
  { id: 'kundli', value: '150,000+', label: 'about.stats.kundli' },
]

const VALUES = [
  { id: 'trust', title: 'about.values.trust.title', desc: 'about.values.trust.desc' },
  { id: 'classical', title: 'about.values.classical.title', desc: 'about.values.classical.desc' },
  { id: 'compassion', title: 'about.values.compassion.title', desc: 'about.values.compassion.desc' },
  { id: 'ontime', title: 'about.values.ontime.title', desc: 'about.values.ontime.desc' },
]

export default function AboutUs() {
  const { t } = useTranslation()
  const [year] = useState(new Date().getFullYear())

  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={astroVideo} type="video/mp4" />
        </video>
      </div>
      {/* Subtle dim/blur overlay for readability (scoped to page content, not footer) */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[5px] z-10 pointer-events-none" />
      {/* Who we are */}
      <section className="container mx-auto px-6 md:px-10 py-24 md:py-32 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md mb-8">
            {t('about.who_we_are.title')}
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
            {t('about.who_we_are.description')}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-10 py-20 relative z-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white drop-shadow-md">
            {t('about.our_astrologer.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={astrologerImg}
                alt="Best Astrologer"
                className="rounded-full shadow-xl w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 border-purple-200"
              />
            </div>
            {/* Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">{t('about.our_astrologer.name')}</h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-semibold text-pink-600">{t('about.our_astrologer.experience.label')}</span>
                  <span className="ml-2 text-zinc-700">{t('about.our_astrologer.experience.text')}</span>
                </li>
                <li>
                  <span className="font-semibold text-pink-600">{t('about.our_astrologer.history.label')}</span>
                  <span className="ml-2 text-zinc-700">{t('about.our_astrologer.history.text')}</span>
                </li>
                <li>
                  <span className="font-semibold text-pink-600">{t('about.our_astrologer.expertise.label')}</span>
                  <span className="ml-2 text-zinc-700">{t('about.our_astrologer.expertise.text')}</span>
                </li>
                <li>
                  <span className="font-semibold text-pink-600">{t('about.our_astrologer.values.label')}</span>
                  <span className="ml-2 text-zinc-700">{t('about.our_astrologer.values.text')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

      {/* Stats */}
      <section className="container mx-auto px-6 md:px-10 pb-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STATS.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border bg-white shadow-lg p-8 md:p-10 text-center hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-purple-600 mb-4">{s.value}</div>
              <p className="text-base md:text-lg text-zinc-600 font-medium">{t(s.label)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="container mx-auto px-6 md:px-10 py-20 relative z-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border bg-white shadow-lg p-8 md:p-10 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold mb-3 text-purple-700">
              {t('about.mission.title')}
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>

          <div className="rounded-2xl border bg-white shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold mb-3 text-pink-600">
              {t('about.approach.title')}
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              {t('about.approach.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16 relative z-20">
        <h2 className="mb-10 text-3xl md:text-4xl font-extrabold text-center text-white drop-shadow-md">
          {t('about.why_choose_us.title')}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div
              key={v.id}
              className="rounded-2xl border bg-white shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              <div className="text-lg font-semibold text-purple-700 mb-2">
                {t(v.title)}
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">{t(v.desc)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Who We Are */}
      <section className="container mx-auto px-6 md:px-10 py-24 md:py-32 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white drop-shadow-md">
            {t('about.final_who_we_are.title')}
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
            {t('about.final_who_we_are.description')}
          </p>
        </div>
      </section>

        {/* Our Astrologer Section */}
        
    </div>
  )
}
