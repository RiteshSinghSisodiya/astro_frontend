import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Existing Content
      title: "Welcome to the World of Astrology",
      description:
        "Discover your stars and future with us. Personalized horoscopes, birth chart analysis, and guidance for career, love, and health.",
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
      experience_years: "34+ Years of Experience",
      kundli_count: "150,000+ Kundlis Prepared",

      legacy_title:
        "Honoring the Legacy of Late Pandit Kalyan Dutt Sharma: A Renowned Mahamahopadhyaya and Scholar.",
      tagline: "Helping You To Bring Back Your Smile.",
      aura_intro:
        "Experts of AURA JYOTISH KENDRA provide personalized astrological guidance to help individuals understand their life path and regain their sense of joy.",

      // New: Services
      services_title: "Our Services",
      services: {
        kundli_reading: {
          name: "Kundli Reading & Making (vedic system)",
          description:
            "Detailed analysis of your birth chart to understand personality, career, relationships, health, and future possibilities, with guidance and remedies for balance.",
        },
        marriage_matching: {
          name: "Marriage Matching (upto 5 people only)",
          description:
            "Our Kundli Matching analyzes Guna Milan, Aṣṭa-kūṭa, and Manglik dosha to assess compatibility between partners. Remedies are suggested for any doshas found.",
        },
        business: {
          name: "Business Suggestions & Name",
          description:
            "Astrology-based guidance to choose the right business, partnerships, auspicious timing, and even naming your business aligned with numerology and astrology.",
        },
        ratna_suggestion: {
          name: "Ratna Suggestion",
          description:
            "Personalized gemstone suggestions based on your Kundli to enhance positive planetary influences and mitigate challenges, promoting overall well-being and success.",
        },
        all_ratna: {
          name: "All kinds of Ratna (Certified)",
          description:
            "Wide range of genuine gemstones available with certification from trusted labs, ensuring authenticity and quality.",
        },
        remedies: {
          name: "Remedies",
          description:
            "Astrological remedies with mantras and tantra practices to reduce negative planetary effects and attract harmony, health, and success.",
        },
      },

      opening_form: "Opening form…",
    },
  },

  hi: {
    translation: {
      // Existing Content
      title: "ज्योतिष की दुनिया में आपका स्वागत है",
      description:
        "हमारे साथ अपने सितारों और भविष्य को जानें। निजी राशिफल, जन्म कुंडली विश्लेषण और करियर, प्रेम व स्वास्थ्य के लिए मार्गदर्शन।",
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
      experience_years: "34+ वर्षों का अनुभव",
      kundli_count: "150,000+ कुंडलियाँ तैयार",

      legacy_title:
        "स्वर्गीय पंडित कल्याण दत्त शर्मा की विरासत का सम्मान: एक प्रसिद्ध महामहोपाध्याय और विद्वान।",
      tagline: "आपकी मुस्कान वापस लाने में मदद।",
      aura_intro:
        "आभा ज्योतिष केंद्र के विशेषज्ञ व्यक्तिगत ज्योतिषीय मार्गदर्शन प्रदान करते हैं ताकि लोग अपने जीवन पथ को समझ सकें और अपनी खुशी को फिर से पा सकें।",

      // New: Services
      services_title: "हमारी सेवाएँ",
      services: {
        kundli_reading: {
          name: "कुंडली पाठ और निर्माण (वैदिक प्रणाली)",
          description:
            "आपकी जन्म कुंडली का विस्तृत विश्लेषण जिससे व्यक्तित्व, करियर, रिश्ते, स्वास्थ्य और भविष्य की संभावनाओं को समझा जा सके, संतुलन के लिए मार्गदर्शन और उपाय।",
        },
        marriage_matching: {
          name: "विवाह मिलान (केवल 5 लोगों तक)",
          description:
            "गुण मिलान, अष्टकूट और मांगलिक दोष का विश्लेषण करके दंपत्ति की अनुकूलता सुनिश्चित करना। पाए गए दोषों के लिए उपाय सुझाए जाते हैं।",
        },
        business: {
          name: "व्यवसाय सुझाव एवं नाम",
          description:
            "सही व्यवसाय, साझेदारी, शुभ समय और अंकज्योतिष व ज्योतिष आधारित व्यवसाय नाम के लिए मार्गदर्शन।",
        },
        ratna_suggestion: {
          name: "रत्न सुझाव",
          description:
            "आपकी कुंडली के आधार पर व्यक्तिगत रत्न सुझाव, सकारात्मक ग्रह प्रभावों को बढ़ाने और चुनौतियों को कम करने के लिए।",
        },
        all_ratna: {
          name: "सभी प्रकार के रत्न (प्रमाणित)",
          description:
            "विश्वसनीय प्रयोगशालाओं से प्रमाणित असली रत्न उपलब्ध, गुणवत्ता और प्रामाणिकता की गारंटी।",
        },
        remedies: {
          name: "उपाय",
          description:
            "ग्रहों के नकारात्मक प्रभावों को कम करने और सामंजस्य, स्वास्थ्य और सफलता को आकर्षित करने के लिए मंत्र और तंत्र आधारित ज्योतिषीय उपाय।",
        },
      },
      opening_form: "फ़ॉर्म खोल रहा है…",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: { escapeValue: false },
});

export default i18n;
