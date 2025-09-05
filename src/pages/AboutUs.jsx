import { useState } from 'react'
import { useTranslation } from 'react-i18next'

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
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100">
      {/* Who we are */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            {t('about.who_we_are.title')}
          </h1>
          <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
            {t('about.who_we_are.description')}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 pb-16">
        {STATS.map((s) => (
          <div
            key={s.id}
            className="rounded-2xl border bg-white shadow-lg p-8 text-center hover:shadow-xl transition duration-300"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-purple-600">{s.value}</div>
            <p className="mt-2 text-base text-zinc-600">{t(s.label)}</p>
          </div>
        ))}
      </section>

      {/* Mission & Approach */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white shadow-lg p-8 hover:shadow-2xl transition duration-300">
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
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-10 text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
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
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
            {t('about.final_who_we_are.title')}
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            {t('about.final_who_we_are.description')}
          </p>
        </div>
      </section>
    </div>
  )
}
