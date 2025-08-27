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
      astro_points_p3: "Consultations for marriage, career, finance & health.",
      legacy_title: "Honoring the Legacy of Late Pandit Kalyan Dutt Sharma: A Renowned Mahamahopadhyaya and Scholar.",
      tagline: "Helping You To Bring Back Your Smile.",
      aura_intro: "Experts of AURA JYOTISH KENDRA provide personalized astrological guidance to help individuals understand their life path and regain their sense of joy."
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
      astro_points_p3: "विवाह, करियर, वित्त और स्वास्थ्य पर सलाह।",
      legacy_title: "स्वर्गीय पंडित कल्याण दत्त शर्मा की विरासत का सम्मान: एक प्रसिद्ध महामहोपाध्याय और विद्वान।",
      tagline: "आपकी मुस्कान वापस लाने में मदद।",
      aura_intro: "आभा ज्योतिष केंद्र के विशेषज्ञ व्यक्तिगत ज्योतिषीय मार्गदर्शन प्रदान करते हैं ताकि लोग अपने जीवन पथ को समझ सकें और अपनी खुशी को फिर से पा सकें।"
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
