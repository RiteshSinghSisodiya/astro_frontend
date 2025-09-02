import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      // Existing Content
      title: "Welcome to the World of Astrology",
      description: "Discover your stars and future with us. Personalized horoscopes, birth chart analysis, and guidance for career, love, and health.",
      register: "Register Now",
      fullname: "Full Name",
      phone: "Phone Number",
      email: "Email",
      dob: "Date of Birth",
      BirthTime: "Birth Time",
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
      aura_intro: "Experts of AURA JYOTISH KENDRA provide personalized astrological guidance to help individuals understand their life path and regain their sense of joy.",

      // New: Services
      services_title: "Our Services",
      services: {
        kundli_reading: {
          name: "Kundli Reading",
          description: "Detailed analysis of your birth chart to understand personality, career, relationships, health, and future possibilities, with guidance and remedies for balance."
        },
        kundli_making: {
          name: "Kundli Making",
          description: "Accurate birth chart creation using your date, time, and place of birth, revealing life path, strengths, challenges, and guiding future decisions."
        },
        marriage_matching: {
          name: "Marriage Matching",
          description: "Our Kundli Matching analyzes Guna Milan, Aṣṭa-kūṭa, and Manglik dosha to assess compatibility between partners. It helps ensure harmony in love, health, family, and prosperity, with remedies suggested for any doshas found."
        },
        career_guidance: {
          name: "Career Guidance",
          description: "Confused about which career path to choose or facing obstacles in your professional journey? Our astrology-based career guidance uses your Kundli to identify your strengths, talents, and favorable planetary periods."
        },
        business_suggestions: {
          name: "Business Suggestions",
          description: "Astrology-based guidance to choose the right business, partnerships, and timing for growth and success, aligned with your Kundli and planetary influences."
        },
        business_name: {
          name: "Name for Business",
          description: "Get an auspicious business name aligned with numerology and astrology, attracting prosperity, growth, and positive energy for long-term success."
        },
        gemstone_recommendation: {
          name: "Gemstone Recommendation",
          description: "Personalized gemstone suggestions based on your Kundli to enhance positive planetary influences and mitigate challenges, promoting overall well-being and success."
        },
        remedies_mantras: {
          name: "Remedies with Mantras",
          description: "Astrological remedies with specific mantras and practices to reduce negative planetary effects and attract harmony, health, and success."
        }
      },
      opening_form: "Opening form…"
    }
  },

  hi: {
    translation: {
      // Existing Content
      title: "ज्योतिष की दुनिया में आपका स्वागत है",
      description: "हमारे साथ अपने सितारों और भविष्य को जानें। निजी राशिफल, जन्म कुंडली विश्लेषण और करियर, प्रेम व स्वास्थ्य के लिए मार्गदर्शन।",
      register: "अभी पंजीकरण करें",
      fullname: "पूरा नाम",
      phone: "फोन नंबर",
      email: "ईमेल",
      dob: "जन्म तिथि",
      BirthTime: "जन्म समय",
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
      aura_intro: "आभा ज्योतिष केंद्र के विशेषज्ञ व्यक्तिगत ज्योतिषीय मार्गदर्शन प्रदान करते हैं ताकि लोग अपने जीवन पथ को समझ सकें और अपनी खुशी को फिर से पा सकें।",

      // New: Services
      services_title: "हमारी सेवाएँ",
      services: {
        kundli_reading: {
          name: "कुंडली पाठ",
          description: "आपकी जन्म कुंडली का विस्तृत विश्लेषण जिससे व्यक्तित्व, करियर, रिश्ते, स्वास्थ्य और भविष्य की संभावनाओं को समझा जा सके, संतुलन के लिए मार्गदर्शन और उपाय।"
        },
        kundli_making: {
          name: "कुंडली निर्माण",
          description: "आपकी जन्म तिथि, समय और स्थान के आधार पर सटीक जन्म कुंडली निर्माण, जीवन पथ, ताकत, चुनौतियाँ और भविष्य के निर्णयों में मार्गदर्शन।"
        },
        marriage_matching: {
          name: "विवाह मिलान",
          description: "गुण मिलान, अष्टकूट और मांगलिक दोष का विश्लेषण करके दंपत्ति की अनुकूलता सुनिश्चित करना। प्रेम, स्वास्थ्य, परिवार और समृद्धि में सामंजस्य बनाए रखने में मदद।"
        },
        career_guidance: {
          name: "कैरियर मार्गदर्शन",
          description: "कैरियर को लेकर उलझन में हैं या पेशेवर जीवन में बाधाओं का सामना कर रहे हैं? ज्योतिष आधारित मार्गदर्शन आपकी कुंडली से आपके गुण, प्रतिभा और अनुकूल ग्रहों की अवधि पहचानता है।"
        },
        business_suggestions: {
          name: "व्यवसाय सुझाव",
          description: "आपके कुंडली और ग्रहों की स्थिति के आधार पर सही व्यवसाय, साझेदारी और सफलता के समय की ज्योतिषीय सलाह।"
        },
        business_name: {
          name: "व्यवसाय के लिए नाम",
          description: "अंकज्योतिष और ज्योतिष से जुड़े शुभ व्यवसाय नाम प्राप्त करें, जो समृद्धि और सकारात्मक ऊर्जा को आकर्षित करता है।"
        },
        gemstone_recommendation: {
          name: "रत्न सिफारिश",
          description: "आपकी कुंडली के आधार पर व्यक्तिगत रत्न सुझाव, सकारात्मक ग्रह प्रभावों को बढ़ाने और चुनौतियों को कम करने के लिए।"
        },
        remedies_mantras: {
          name: "मंत्रों से उपाय",
          description: "विशेष मंत्रों और ज्योतिषीय उपायों के माध्यम से ग्रहों के नकारात्मक प्रभावों को कम करें और सामंजस्य, स्वास्थ्य और सफलता को आकर्षित करें।"
        }
      },
      opening_form: "फ़ॉर्म खोल रहा है…"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    interpolation: { escapeValue: false }
  })

export default i18n
