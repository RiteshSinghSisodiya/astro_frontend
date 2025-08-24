import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      title: "Welcome to the World of Astrology",
      description: "Discover your stars and future with us. Personalized horoscopes, birth chart analysis, and guidance for career, love, and health.",
      register: "Register Now",
      fullname: "Full Name",
      phone: "Phone Number",
      email: "Email",
      dob: "Date of Birth",
      location: "Location",
      country: "Select Country",
      state: "Select State",
      city: "Select City",
      proceed: "Proceed to Pay",
      astro_points_title: "Why Astrology?",
      astro_points_p1: "Daily, weekly & monthly horoscopes tailored to you.",
      astro_points_p2: "Detailed Kundli (birth chart) and planetary transits.",
      astro_points_p3: "Consultations for marriage, career, finance & health."
    }
  },
  hi: {
    translation: {
      title: "ज्योतिष की दुनिया में आपका स्वागत है",
      description: "हमारे साथ अपने सितारों और भविष्य को जानें। निजी राशिफल, जन्म कुंडली विश्लेषण और करियर, प्रेम व स्वास्थ्य के लिए मार्गदर्शन।",
      register: "अभी पंजीकरण करें",
      fullname: "पूरा नाम",
      phone: "फोन नंबर",
      email: "ईमेल",
      dob: "जन्म तिथि",
      location: "स्थान",
      country: "देश चुनें",
      state: "राज्य चुनें",
      city: "शहर चुनें",
      proceed: "भुगतान के लिए आगे बढ़ें",
      astro_points_title: "ज्योतिष क्यों?",
      astro_points_p1: "आपके लिए दैनिक, साप्ताहिक और मासिक राशिफल।",
      astro_points_p2: "विस्तृत कुंडली और ग्रहों के गोचर।",
      astro_points_p3: "विवाह, करियर, वित्त और स्वास्थ्य पर सलाह।"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18n
