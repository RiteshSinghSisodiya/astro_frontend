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

      // Cosmic Journey Section
      cosmic_journey_title: "Discover Your Cosmic Journey",
      cosmic_journey_description: "Explore our comprehensive astrological services designed to illuminate your path and bring clarity to your life's journey.",

      // New: Services
      services_title: "Our Services",
      services: {
        kundli_reading: {
          name: "Kundli Reading(Prasar siddhant) & Carrier guidance",
          description:
            "Detailed analysis of your birth chart to understand personality, career, relationships, health, and future possibilities, with guidance and remedies for balance.",
        },
        kundli_making: {
          name: "Kundli Making",
          description:
            "We create accurate Kundlis (birth charts) using your date, time, and place of birth. Our expert analysis helps you understand personality, career, relationships, health, and life events. We provide personalized guidance to make better decisions and achieve balance in life.",
        },
        marriage_matching: {
          name: "Marriage Matching (upto 5 people only)",
          description:
            "We match your Kundli with up to 5 potential partners to check compatibility. Using Guna Milan, Aṣṭa-kūṭa, and Manglik dosha analysis, we identify the best match and suggest remedies if needed.",
        },
        business: {
          name: "Business Suggestions & Name",
          description:
            "Astrology-based guidance to choose the right business, partnerships, auspicious timing, and even naming your business aligned with numerology and astrology.",
        },
        remedies: {
          name: "Remedies",
          description:
            "We provide effective astrological remedies to balance planetary influences and improve overall well-being. Remedies include powerful Mantras for spiritual alignment and healing, and Yantras for channeling positive energies and protection. These practices help reduce negative effects and attract harmony, health, prosperity, and success.",
        },
        ratna_suggestion: {
          name: "Ratna Suggestion",
          description:
            "Get personalized gemstone recommendations based on your Kundli and planetary positions. Our experts suggest the most suitable Ratna (gemstone) to strengthen favorable planets, reduce the impact of malefic influences, and bring balance to your life. Each suggestion includes details about the gemstone's benefits, how to wear it, and the right rituals to maximize its positive effects for health, prosperity, and success.",
        },
        all_ratna: {
          name: "All kinds of Ratna (Certified)",
          description:
            "Certified genuine gemstones from trusted labs, ensuring authenticity and quality. Each Ratna is chosen for its astrological, spiritual, and healing benefits. Our collection includes Ruby, Emerald, Sapphire, Pearl, Coral, Topaz, and more, with guidance on wearing methods and rituals to enhance health, prosperity, and success.",
        },
      },

      // ✅ About Section Added
      about: {
        who_we_are: {
          title: "Who We Are",
          description:
            "We are a trusted astrology center with decades of experience in guiding people through the wisdom of Vedic astrology, helping them find clarity, peace, and success.",
        },
        stats: {
          experience: "Years of Experience",
          consultations: "Consultations",
          kundli: "Kundlis Prepared",
        },
        mission: {
          title: "Our Mission",
          description:
            "To provide authentic astrological guidance rooted in Vedic traditions, helping individuals navigate challenges and achieve harmony in life.",
        },
        approach: {
          title: "Our Approach",
          description:
            "We combine classical wisdom with a compassionate approach, ensuring every consultation is personalized and solution-oriented.",
        },
        why_choose_us: {
          title: "Why Choose Us?",
        },
        values: {
          trust: {
            title: "Trust",
            desc: "Decades of expertise backed by authenticity and integrity.",
          },
          classical: {
            title: "Classical Methods",
            desc: "Guidance rooted in ancient Vedic astrology principles.",
          },
          compassion: {
            title: "Compassion",
            desc: "A humane and empathetic approach to every consultation.",
          },
          ontime: {
            title: "On-Time Service",
            desc: "Reliable and timely delivery of consultations and remedies.",
          },
        },
        final_who_we_are: {
          title: "Guiding You with Wisdom",
          description:
            "At Aura Jyotish Kendra, we are committed to bringing positive change to your life with the power of astrology.",
        },
        footer: "Aura Jyotish Kendra. All rights reserved.",
      },

      opening_form: "Opening form…",

      // Navigation
      nav: {
        home: "Home",
        about_us: "About Us",
      },

      // Footer
      footer: {
        quick_links: "Quick Links",
        legal: "Legal",
        follow_us: "Follow Us",
        social_media: "Social Media",
        copyright: "All rights reserved",
        scroll_to_top: "Scroll to top",
      },

      // Legal Pages
      legal: {
        terms_title: "Terms and Conditions",
        privacy_title: "Privacy Policy",
        refund_title: "Cancellation & Refund Policy",
        contact_title: "Contact Us",
        contact_us: "Contact us",
        changes_to_terms: "Changes to Terms",
        changes_to_policy: "Changes to Privacy Policy",
      },
      // Shipping Policy
      shipping: {
        title: "Shipping Policy",
        updated: "Last updated: 23/10/2025",
        intro: "Thank you for choosing Aura Jyotish Kendra for your astrology consultation needs. Please read our Shipping Policy carefully to understand how we process and deliver our services.",
        order_processing_title: "1. Order Processing",
        order_processing_p1: "All our astrology consultations and reports are delivered digitally — we do not provide any physical shipment or printed copies.",
        op_li1: "Order Confirmation: Once your payment is successfully completed through Razorpay, you will receive a confirmation message via email or WhatsApp containing your order details.",
        op_li2: "Processing Time: We aim to deliver your astrology consultation or report within 2 business days from the time of payment confirmation.",
        op_li3: "Delivery Channels: All digital consultations and reports are shared via the communication method selected by you at checkout — email or WhatsApp.",
        delivery_timeline_title: "2. Delivery Timeline",
        delivery_timeline_p1: "Our typical delivery timeline is within 48 hours (2 business days) after confirmation of your payment. If your order requires additional details (such as birth information or query clarification), delivery time will begin after we receive the necessary information from you.",
        delivery_method_title: "3. Delivery Method",
        dm_p1: "Since our services are digital, delivery is made electronically.",
        dm_li1: "A written astrology report or consultation summary via email or WhatsApp, and/or",
        dm_li2: "Direct consultation through WhatsApp chat, as per your service selection.",
        delays_title: "4. Delays or Non-Delivery",
        delays_p1: "While we make every effort to ensure timely delivery, delays may occur in the following cases:",
        delays_li1: "Incorrect or incomplete contact information provided by the customer.",
        delays_li2: "Technical or internet connectivity issues.",
        delays_li3: "High order volumes or unforeseen circumstances.",
        no_shipping_title: "5. No Shipping Charges",
        no_shipping_p1: "As all services are delivered digitally, no shipping fees or additional delivery charges apply to any order.",
        completion_title: "6. Service Completion and Acknowledgment",
        completion_p1: "Once your consultation or report has been delivered via email or WhatsApp, the service is considered completed. You will also receive a confirmation message to acknowledge successful delivery.",
        changes_title: "7. Changes to Order or Contact Details",
        changes_p1: "If you need to update your contact information (email or WhatsApp number) after placing an order, please inform us within 12 hours of your order confirmation. Any delay in communication may affect timely delivery.",
        refunds_title: "8. Refunds and Revisions",
        refunds_p1: "Since astrology consultations are personalized digital services, they are non-refundable once delivered. However, if you do not receive your service within the promised timeframe due to an issue on our end, we may offer a full refund or re-delivery, at our discretion. For more details, please refer to our Refund Policy.",
        contact_title: "9. Contact Us",
        contact_email_label: "Email:",
        contact_email: "support@aurajyotishkendra.com",
        contact_phone_label: "WhatsApp:",
        contact_phone: "+91 9829495886",
        contact_website_label: "Website:",
        contact_website: "https://www.aurajyotishkendra.com",
      },
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

      // Cosmic Journey Section
      cosmic_journey_title: "अपनी ब्रह्मांडीय यात्रा की खोज करें",
      cosmic_journey_description: "हमारी व्यापक ज्योतिषीय सेवाओं का अन्वेषण करें जो आपके पथ को प्रकाशित करने और आपकी जीवन यात्रा में स्पष्टता लाने के लिए डिज़ाइन की गई हैं।",

      // New: Services
      services_title: "हमारी सेवाएँ",
      services: {
        kundli_reading: {
          name: "कुंडली पाठ(पाराशर सिद्धांत) और कैरियर मार्गदर्शन",
          description:
            "आपकी जन्म कुंडली का विस्तृत विश्लेषण जिससे व्यक्तित्व, करियर, रिश्ते, स्वास्थ्य और भविष्य की संभावनाओं को समझा जा सके, संतुलन के लिए मार्गदर्शन और उपाय।",
        },
        kundli_making: {
          name: "कुंडली निर्माण",
          description:
            "हम आपके जन्म की तारीख, समय और स्थान के आधार पर सटीक कुंडली (जन्म पत्रिका) बनाते हैं। हमारी विशेषज्ञ विश्लेषण से आप अपने व्यक्तित्व, करियर, संबंधों, स्वास्थ्य और जीवन की घटनाओं को समझ सकते हैं। हम आपको सही निर्णय लेने और जीवन में संतुलन पाने के लिए व्यक्तिगत मार्गदर्शन प्रदान करते हैं।",
        },
        marriage_matching: {
          name: "विवाह मिलान (केवल 5 लोगों तक)",
          description:
            "हम आपकी कुंडली को अधिकतम 5 संभावित जीवनसाथियों की कुंडलियों से मिलाते हैं। गुण मिलान, अष्टकूट और मांगलिक दोष विश्लेषण के माध्यम से हम सर्वोत्तम जोड़ी की पहचान करते हैं और आवश्यकता होने पर उपाय भी सुझाते हैं।",
        },
        business: {
          name: "व्यवसाय सुझाव एवं नाम",
          description:
            "सही व्यवसाय, साझेदारी, शुभ समय और अंकज्योतिष व ज्योतिष आधारित व्यवसाय नाम के लिए मार्गदर्शन।",
        },
        remedies: {
          name: "उपाय",
          description:
            "हम प्रभावी ज्योतिषीय उपाय प्रदान करते हैं जो ग्रहों के प्रभाव को संतुलित करने और समग्र कल्याण में सुधार करने में सहायक होते हैं। उपायों में शक्तिशाली मंत्र शामिल हैं जो आध्यात्मिक सामंजस्य और उपचार में मदद करते हैं, और पवित्र यंत्र, जो सकारात्मक ऊर्जा को आकर्षित करने और सुरक्षा प्रदान करने के लिए उपयोग किए जाते हैं। ये साधन नकारात्मक प्रभावों को कम करने में सहायक होते हैं तथा जीवन में सामंजस्य, स्वास्थ्य, समृद्धि और सफलता लाने में मदद करते हैं।",
        },
        ratna_suggestion: {
          name: "रत्न सुझाव",
          description:
            "अपनी कुंडली और ग्रहों की स्थिति के आधार पर व्यक्तिगत रत्न सुझाव प्राप्त करें। हमारे विशेषज्ञ आपके लिए सबसे उपयुक्त रत्न की सलाह देंगे, जिससे शुभ ग्रहों को मज़बूती मिले, अशुभ प्रभावों को कम किया जा सके और आपके जीवन में संतुलन स्थापित हो। प्रत्येक सुझाव में रत्न के लाभ, इसे धारण करने का सही तरीका, और सकारात्मक प्रभाव को अधिकतम करने के लिए आवश्यक विधि-विधान की विस्तृत जानकारी शामिल होगी। यह आपको स्वास्थ्य, समृद्धि और सफलता की ओर अग्रसर करेगा।",
        },
        all_ratna: {
          name: "सभी प्रकार के रत्न (प्रमाणित)",
          description:
            "प्रमाणित असली रत्न, विश्वसनीय प्रयोगशालाओं से प्रमाणित, प्रामाणिकता और उच्च गुणवत्ता की गारंटी। प्रत्येक रत्न को ज्योतिषीय, आध्यात्मिक और उपचारात्मक लाभों के आधार पर चुना गया है। हमारे संग्रह में माणिक, पन्ना, नीलम, मोती, मूंगा, पुखराज आदि शामिल हैं, साथ ही इन्हें धारण करने की विधि और अनुष्ठान की जानकारी भी दी जाती है, जिससे स्वास्थ्य, समृद्धि और सफलता प्राप्त हो।",
        },
      },

      // ✅ About Section Added
      about: {
        who_we_are: {
          title: "हम कौन हैं",
          description:
            "हम एक विश्वसनीय ज्योतिष केंद्र हैं, जो दशकों के अनुभव के साथ लोगों को वैदिक ज्योतिष की बुद्धिमत्ता से मार्गदर्शन प्रदान करते हैं, जिससे उन्हें स्पष्टता, शांति और सफलता मिल सके।",
        },
        stats: {
          experience: "वर्षों का अनुभव",
          consultations: "परामर्श",
          kundli: "कुंडलियाँ तैयार",
        },
        mission: {
          title: "हमारा मिशन",
          description:
            "वैदिक परंपराओं पर आधारित प्रामाणिक ज्योतिषीय मार्गदर्शन प्रदान करना, जिससे लोग चुनौतियों का सामना कर सकें और जीवन में सामंजस्य प्राप्त करें।",
        },
        approach: {
          title: "हमारा दृष्टिकोण",
          description:
            "हम शास्त्रीय ज्ञान को सहानुभूतिपूर्ण दृष्टिकोण के साथ मिलाते हैं, यह सुनिश्चित करते हुए कि प्रत्येक परामर्श व्यक्तिगत और समाधान-उन्मुख हो।",
        },
        why_choose_us: {
          title: "हमें क्यों चुनें?",
        },
        values: {
          trust: {
            title: "विश्वास",
            desc: "दशकों का अनुभव, प्रामाणिकता और ईमानदारी के साथ।",
          },
          classical: {
            title: "शास्त्रीय पद्धति",
            desc: "प्राचीन वैदिक ज्योतिष सिद्धांतों पर आधारित मार्गदर्शन।",
          },
          compassion: {
            title: "करुणा",
            desc: "हर परामर्श में मानवीय और सहानुभूतिपूर्ण दृष्टिकोण।",
          },
          ontime: {
            title: "समय पर सेवा",
            desc: "परामर्श और उपाय समय पर और विश्वसनीय रूप से प्रदान किए जाते हैं।",
          },
        },
        final_who_we_are: {
          title: "बुद्धिमत्ता से आपका मार्गदर्शन",
          description:
            "आभा ज्योतिष केंद्र में, हम ज्योतिष की शक्ति से आपके जीवन में सकारात्मक परिवर्तन लाने के लिए प्रतिबद्ध हैं।",
        },
        footer: "आभा ज्योतिष केंद्र। सर्वाधिकार सुरक्षित।",
      },

      opening_form: "फ़ॉर्म खोल रहा है…",

      // Navigation
      nav: {
        home: "मुख्य पृष्ठ",
        about_us: "हमारे बारे में",
      },

      // Footer
      footer: {
        quick_links: "त्वरित लिंक",
        legal: "कानूनी",
        follow_us: "हमें फॉलो करें",
        social_media: "सोशल मीडिया",
        copyright: "सर्वाधिकार सुरक्षित",
        scroll_to_top: "शीर्ष पर स्क्रॉल करें",
      },

      // Legal Pages
      legal: {
        terms_title: "नियम और शर्तें",
        privacy_title: "गोपनीयता नीति",
        refund_title: "रद्दीकरण और रिफंड नीति",
        contact_title: "संपर्क करें",
        contact_us: "हमसे संपर्क करें",
        changes_to_terms: "नियमों में परिवर्तन",
        changes_to_policy: "गोपनीयता नीति में परिवर्तन",
      },
      // Shipping Policy
      shipping: {
        title: "शिपिंग नीति",
        updated: "अंतिम अद्यतन: 23/10/2025",
        intro: "आपकी ज्योतिष परामर्श आवश्यकताओं के लिए Aura Jyotish Kendra चुनने के लिए धन्यवाद। कृपया हमारी शिपिंग नीति को ध्यानपूर्वक पढ़ें ताकि आप समझ सकें कि हम अपनी सेवाओं को कैसे संसाधित और वितरित करते हैं।",
        order_processing_title: "1. ऑर्डर प्रोसेसिंग",
        order_processing_p1: "हमारी सभी ज्योतिष परामर्श और रिपोर्टें डिजिटल रूप में प्रदान की जाती हैं — हम कोई भौतिक शिपमेंट या मुद्रित प्रतियां नहीं देते।",
        op_li1: "ऑर्डर पुष्टिकरण: जैसा ही आपका भुगतान Razorpay के माध्यम से सफलतापूर्वक पूरा हो जाता है, आपको ईमेल या WhatsApp के माध्यम से आपके ऑर्डर विवरण सहित एक पुष्टिकरण संदेश प्राप्त होगा।",
        op_li2: "प्रोसेसिंग समय: हम भुगतान पुष्टिकरण के समय से 2 व्यावसायिक दिनों के भीतर आपकी ज्योतिष परामर्श या रिपोर्ट देने का लक्ष्य रखते हैं।",
        op_li3: "वितरण चैनल: सभी डिजिटल परामर्श और रिपोर्टें आपकी द्वारा चेकआउट पर चुने गए संचार माध्यम (ईमेल या WhatsApp) के माध्यम से साझा की जाती हैं।",
        delivery_timeline_title: "2. वितरण समयरेखा",
        delivery_timeline_p1: "हमारी सामान्य वितरण समयरेखा भुगतान पुष्टिकरण के बाद 48 घंटों (2 व्यावसायिक दिन) के भीतर है। यदि आपके ऑर्डर के लिए अतिरिक्त जानकारी (जैसे जन्म जानकारी या प्रश्न स्पष्टकरण) की आवश्यकता है, तो वितरण का समय आवश्यक जानकारी प्राप्त होने के बाद शुरू होगा।",
        delivery_method_title: "3. वितरण विधि",
        dm_p1: "चूंकि हमारी सेवाएँ डिजिटल हैं, वितरण इलेक्ट्रॉनिक रूप से किया जाता है।",
        dm_li1: "ईमेल या WhatsApp के माध्यम से लिखित ज्योतिष रिपोर्ट या परामर्श सारांश, और/या",
        dm_li2: "आपकी सेवा चयन के अनुसार WhatsApp चैट के माध्यम से प्रत्यक्ष परामर्श।",
        delays_title: "4. देरी या गैर-वितरण",
        delays_p1: "जबकि हम समय पर वितरण सुनिश्चित करने के लिए हर संभव प्रयास करते हैं, निम्नलिखित मामलों में देरी हो सकती है:",
        delays_li1: "ग्राहक द्वारा प्रदान की गई गलत या अधूरी संपर्क जानकारी।",
        delays_li2: "तकनीकी या इंटरनेट कनेक्टिविटी समस्याएँ।",
        delays_li3: "उच्च ऑर्डर मात्रा या अनपेक्षित परिस्थितियाँ।",
        no_shipping_title: "5. शिपिंग शुल्क नहीं",
        no_shipping_p1: "चूंकि सभी सेवाएँ डिजिटल रूप में प्रदान की जाती हैं, किसी भी ऑर्डर पर कोई शिपिंग शुल्क या अतिरिक्त वितरण शुल्क लागू नहीं होते।",
        completion_title: "6. सेवा पूरा होना और स्वीकृति",
        completion_p1: "एक बार आपकी परामर्श या रिपोर्ट ईमेल या WhatsApp के माध्यम से वितरित कर दी गई, सेवा को पूरा माना जाएगा। सफल वितरण की पुष्टि के लिए आपको एक पुष्टिकरण संदेश भी प्राप्त होगा।",
        changes_title: "7. ऑर्डर या संपर्क विवरण में बदलाव",
        changes_p1: "यदि आपने ऑर्डर करने के बाद अपना संपर्क जानकारी (ईमेल या WhatsApp नंबर) अपडेट करने की आवश्यकता है, तो कृपया हमें अपने ऑर्डर पुष्टिकरण के 12 घंटों के भीतर सूचित करें। संचार में किसी भी विलंब से समय पर वितरण प्रभावित हो सकता है।",
        refunds_title: "8. रिफंड और संशोधन",
        refunds_p1: "चूंकि ज्योतिष परामर्श व्यक्तिगत डिजिटल सेवाएँ हैं, एक बार प्रदान कर दिए जाने के बाद वे नॉन-रिफंडेबल होती हैं। हालांकि, यदि आप वचनबद्ध समयावधि के भीतर अपनी सेवा हमारे कारण प्राप्त नहीं करते हैं, तो हम अपनी विवेकाधिकार पर पूर्ण रिफंड या पुनःवितरण की पेशकश कर सकते हैं। अधिक जानकारी के लिए कृपया हमारी रिफंड नीति देखें।",
        contact_title: "9. हमसे संपर्क करें",
        contact_email_label: "ईमेल:",
        contact_email: "support@aurajyotishkendra.com",
        contact_phone_label: "WhatsApp:",
        contact_phone: "+91 9829495886",
        contact_website_label: "वेबसाइट:",
        contact_website: "https://www.aurajyotishkendra.com",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "hi", // default language
  interpolation: { escapeValue: false },
});

export default i18n;
