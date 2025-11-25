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
      // astro_points_p1: "Daily, weekly & monthly horoscopes tailored to you.",
      astro_points_p2: "Detailed Kundli (birth chart) and planetary transits.",
      astro_points_p3: "Consultations for marriage, career, finance & health.",
      experience_years: "34+ Years of Experience",
      kundli_count: "150,000+ Kundlis Prepared",

      legacy_title:
        "Discover the light of astrology that guides you toward happiness, balance, and fulfillment. At AURA JYOTISH KENDRA, we combine the timeless wisdom of Vedic astrology with modern understanding to help you overcome life’s challenges and embrace positivity. Our goal is to reconnect you with your true self and help you move forward with clarity and confidence.",
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
        our_astrologer: {
          title: "Our Astrologer",
          name: "Acharya Ganesh Srivastava",
          experience: {
            label: "Experience:",
            text: "34+ years in Vedic astrology, guiding thousands of clients worldwide.",
          },
          history: {
            label: "History:",
            text: "Renowned Astrologer, carrying forward a legacy of wisdom and service in astrology.",
          },
          expertise: {
            label: "Expertise:",
            text: "Kundli analysis, marriage matching, career guidance, gemstone recommendations, and astrological remedies.",
          },
          values: {
            label: "Values & Beliefs:",
            text: "Integrity, compassion, and a commitment to authentic Vedic traditions. Believes in empowering individuals through knowledge and spiritual guidance.",
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
        brand_subtitle: "Cosmic Guidance & Wisdom",
        brand_description: "Illuminating your path through ancient wisdom and cosmic insights for over 34 years.",
        copyright: "All rights reserved",
        scroll_to_top: "Scroll to top",
      },

      // Legal Pages
      legal: {
        terms_title: "Terms and Conditions",
        privacy_title: "Privacy Policy",
        shipping_title: "Shipping Policy",
        refund_title: "Cancellation & Refund Policy",
        contact_title: "Contact Us",
        contact_us: "Contact us",
        changes_to_terms: "Changes to Terms",
        changes_to_policy: "Changes to Privacy Policy",
        // Added: Contact Us page content
        contact_page: {
          title: "Contact Us",
          intro: "Have questions, concerns, or need assistance? The Aura Jyotish Kendra team is here to help. You can reach us through the following channels:",
          phone_heading: "📞 Phone / WhatsApp",
          phone_text: "For quick support, call or WhatsApp us at",
          phone_number: "+91 9829495886",
          email_heading: "📧 Email",
          email_general_label: "General inquiries:",
          email_general: "support@aurajyotishkendra.com",
          email_support_label: "Support :",
          email_support: "support@aurajyotishkendra.com",
          address_heading: "🏢 Office Address",
          address_name: "21, Knowledge Park III, Greater Noida",
          address_country: "India",
          hours_heading: "⏰ Business Hours",
          hours_weekdays: "Monday – Saturday: 10:00 AM – 7:00 PM IST",
          hours_sunday: "Sunday: Closed",
          response_heading: "💬 Response Time",
          response_text: "We usually respond to emails and messages within 24–48 hours. For urgent matters, please call us directly during business hours.",
          social_heading: "📌 Social Media",
          social_text: "Follow us for updates, articles, and offers:",
          social_facebook: "Facebook",
          social_instagram: "Instagram",
          social_twitter: "Twitter (X)",
          closing_text: "We look forward to assisting you and ensuring your experience with Aura Jyotish Kendra is positive and meaningful."
        },
      },
      
      
      
      
      privacy: {
        intro: "At Aura Jyotish Kendra, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and the steps we take to keep it secure.",
        sections: [
          {
            title: "1. Information We Collect",
            bullets: [
              "Personal Information: Name, email address, phone number, address, and birth details (date, time, and place of birth) provided while registering or requesting services.",
              "Payment Information: Transaction details (processed through secure third-party gateways). We do not store sensitive card details.",
              "Technical Information: IP address, browser type, device information, and usage data collected through cookies and analytics tools."
            ]
          },
          {
            title: "2. How We Use Your Information",
            bullets: [
              "To prepare personalized astrology reports and consultations.",
              "To process payments securely and confirm transactions.",
              "To communicate service-related updates, reminders, or customer support responses.",
              "To improve our services, website performance, and user experience.",
              "To send newsletters, promotions, or offers (only if you have opted-in)."
            ]
          },
          {
            title: "3. Data Sharing & Disclosure",
            paragraphs: [
              "We do not sell, rent, or trade your personal information.",
              "However, we may share limited data with:"
            ],
            bullets: [
              "Trusted third-party service providers such as payment processors, hosting providers, and communication platforms.",
              "Legal authorities, if required by law, regulation, or court order."
            ]
          },
          {
            title: "4. Data Protection",
            paragraphs: [
              "We use industry-standard security measures such as SSL encryption, secure servers, and firewalls to safeguard your information.",
              "However, no method of online transmission is 100% secure, and we cannot guarantee absolute protection."
            ]
          },
          {
            title: "5. Cookies & Tracking",
            paragraphs: [
              "Our website uses cookies to enhance user experience, remember preferences, and analyze traffic.",
              "You may disable cookies in your browser settings, but some features of the site may not work properly."
            ]
          },
          {
            title: "6. Your Rights",
            bullets: [
              "You may request access to the personal data we hold about you.",
              "You can ask for corrections if your data is inaccurate.",
              "You may request deletion of your data, subject to legal or contractual obligations.",
              "You may opt out of receiving promotional communications at any time."
            ]
          },
          {
            title: "7. Third-Party Links",
            paragraphs: [
              "Our website may include links to third-party websites.",
              "We are not responsible for the content, security, or privacy practices of such external sites."
            ]
          },
          {
            title: "8. Changes to Privacy Policy",
            paragraphs: [
              "Aura Jyotish Kendra reserves the right to update or revise this Privacy Policy at any time.",
              "Any changes will be effective immediately upon posting on this page."
            ]
          }
        ]
      },
      // Terms & Conditions (English)
      terms: {
        intro_welcome: "Welcome to",
        intro_after_name: "(\"we,\" \"our,\" \"us\"). By accessing or using our website, services, or content, you agree to these Terms & Conditions. Please read them carefully before using our services.",
        s1_title: "Services Provided",
        s1_p1: "We provide astrology-related services such as horoscope readings, personalized reports, consultations, remedies, and spiritual guidance. These services are intended for personal guidance and spiritual awareness. They are not a substitute for medical, financial, or legal advice.",
        s2_title: "Eligibility",
        s2_p1: "You must be 18 years or older to use our services. If you are under 18, you may only use our services under the supervision of a parent or guardian. You agree that all information you provide to us (such as birth details, contact information, and payment details) is accurate and complete.",
        s3_title: "User Responsibilities",
        s3_p1: "You agree not to misuse our services, upload harmful content, or engage in unlawful activities through our platform. You are responsible for maintaining the confidentiality of your account information (if applicable).",
        s4_title: "No Guarantee of Outcomes",
        s4_p1: "Astrology is interpretive in nature, and while we strive for accuracy, outcomes may vary. We do not guarantee the accuracy, effectiveness, or results of predictions, remedies, or consultations. Any decisions you make based on our services are solely your responsibility.",
        s5_title: "Payments & Refunds",
        s5_p1: "All services must be paid for in advance. Prices may change at our discretion. We do not store sensitive payment information. Refunds and cancellations are governed strictly by our",
        s5_link_label: "Refund & Cancellation Policy",
        s6_title: "Limitation of Liability",
        s6_p1: "Aura Jyotish Kendra shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services. Our maximum liability shall not exceed the amount paid by you for the specific service.",
        s7_title: "Intellectual Property",
        s7_p1: "All content on our website, including reports, graphics, text, and designs, is the intellectual property of Aura Jyotish Kendra. You may not copy, distribute, or reproduce our content without prior written permission.",
        s8_title: "Termination of Services",
        s8_p1: "We reserve the right to suspend or terminate your access to our services if you violate these terms, misuse the platform, or engage in fraudulent activity.",
        s9_title: "Governing Law",
        s9_p1: "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts located in [Your City, State].",
        s10_title: "Changes to Terms",
        s10_p1: "We reserve the right to update or modify these Terms at any time. Any changes will be posted on this page. Continued use of our services means that you accept the revised Terms.",
        questions_prompt: "Questions?",
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
  dm_p1: "Since our services are digital, delivery is made electronically. You will receive:",
  dm_li1: "A written astrology report or consultation summary via email or WhatsApp.",
  dm_li2: "",
        no_physical: "No physical delivery or courier service is involved.",
        delays_title: "4. Delays or Non-Delivery",
        delays_p1: "While we make every effort to ensure timely delivery, delays may occur in the following cases:",
        delays_li1: "Incorrect or incomplete contact information provided by the customer.",
        delays_li2: "Technical or internet connectivity issues.",
        delays_li3: "High order volumes or unforeseen circumstances.",
        delays_contact_prefix: "If you do not receive your consultation within the expected time, please contact us at",
        delays_contact_or: "or",
        delays_contact_suffix: "and we will promptly assist you.",
        no_shipping_title: "5. No Shipping Charges",
        no_shipping_p1: "As all services are delivered digitally, no shipping fees or additional delivery charges apply to any order.",
        completion_title: "6. Service Completion and Acknowledgment",
        completion_p1: "Once your consultation or report has been delivered via email or WhatsApp, the service is considered completed. You will also receive a confirmation message to acknowledge successful delivery.",
        changes_title: "7. Changes to Order or Contact Details",
        changes_p1: "If you need to update your contact information (email or WhatsApp number) after placing an order, please inform us within 12 hours of your order confirmation. Any delay in communication may affect timely delivery.",
        refunds_title: "8. Refunds and Revisions",
        refunds_p1: "Since astrology consultations are personalized digital services, they are non-refundable once delivered. However, if you do not receive your service within the promised timeframe due to an issue on our end, we may offer a full refund or re-delivery, at our discretion. For more details, please refer to our Refund Policy.",
        contact_title: "9. Contact Us",
        contact_intro: "If you have any questions regarding your order delivery, please contact us:",
        contact_email_label: "Email:",
        contact_email: "support@aurajyotishkendra.com",
        contact_phone_label: "WhatsApp:",
        contact_phone: "+91 9829495886",
        contact_website_label: "Website:",
        contact_website: "https://www.aurajyotishkendra.com",
        questions_prompt: "Questions?",
      },
  // English page HTML translations end
      // Refund Policy
      refund: {
        title: "Refund Policy",
        updated: "Last updated: 23/10/2025",
        intro: "Thank you for purchasing astrology consultation services from Aura Jyotish Kendra. Please read our Refund Policy carefully to understand the conditions under which refunds may or may not be provided.",
        s1_title: "1. Nature of Services",
        s1_p1: "All astrology consultations, reports, and analyses provided by Aura Jyotish Kendra are personalized digital services. Once the service is delivered via email or WhatsApp, it is considered successfully completed. As such, refunds are not automatically applicable after delivery.",
        s2_title: "2. Eligibility for Refunds",
        s2_intro: "Refunds may only be issued under the following exceptional circumstances:",
        s2_li1: "You have made a duplicate payment for the same service.",
        s2_li2: "You have not received your consultation or report within the promised delivery time (i.e., within 2 business days from payment confirmation), and you have contacted us but not received a resolution.",
        s2_li3: "We are unable to deliver the service due to unforeseen technical or operational reasons.",
        s2_exclusions_intro: "Refunds will not be provided for:",
        s2_ex1: "Change of mind after the service has been delivered.",
        s2_ex2: "Dissatisfaction based on interpretation or outcome of the consultation.",
        s2_ex3: "Incorrect or incomplete information provided by the customer.",
        s3_title: "3. Refund Request Procedure",
        s3_intro: "If you believe you are eligible for a refund, please follow these steps:",
        s3_step1: "Contact us via email or WhatsApp at support@aurajyotishkendra.com or +91 9829495886.",
        s3_step2: "Provide your order ID, payment details, and reason for requesting a refund.",
        s3_step3: "Our team will review your request within 2 business days and respond with the outcome.",
        s4_title: "4. Partial Refunds (if applicable)",
        s4_p1: "In certain cases, a partial refund may be issued — for example, if a portion of the service has been completed but not delivered due to unforeseen issues. Such refunds are determined at the discretion of Aura Jyotish Kendra management.",
        s5_title: "5. No Refunds After Delivery",
        s5_p1: "Once your astrology consultation or report has been delivered to your email or WhatsApp, it is deemed as service completed and no refunds will be processed thereafter.",
        s6_title: "6. Cancellation Policy",
        s6_p1: "You may request to cancel your order within 6 hours of payment, provided work on your consultation has not yet begun. If preparation or analysis has already started, the order cannot be cancelled, and the payment will be considered final.",
        contact_title: "7. Contact Us",
        contact_p1: "For any queries or refund-related concerns, please contact us:",
        contact_email: "support@aurajyotishkendra.com",
        contact_phone: "+91 9829495886",
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
      // astro_points_p1: "आपके लिए दैनिक, साप्ताहिक और मासिक राशिफल।",
      astro_points_p2: "विस्तृत कुंडली और ग्रहों के गोचर।",
      astro_points_p3: "विवाह, करियर, वित्त और स्वास्थ्य पर सलाह।",
      experience_years: "34+ वर्षों का अनुभव",
      kundli_count: "150,000+ कुंडलियाँ तैयार",

      legacy_title:
        "ज्योतिष के उस प्रकाश की खोज करें जो आपको खुशी, संतुलन और पूर्णता की ओर मार्गदर्शन करता है। आभा ज्योतिष केंद्र में हम वैदिक ज्योतिष की शाश्वत ज्ञान परंपरा को आधुनिक समझ के साथ जोड़कर आपके जीवन की चुनौतियों को पार करने और सकारात्मकता अपनाने में सहायता करते हैं। हमारा उद्देश्य है कि आप अपने सच्चे स्वरूप से पुनः जुड़ें और स्पष्टता व आत्मविश्वास के साथ आगे बढ़ें।",
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
        our_astrologer: {
          title: "हमारे ज्योतिषाचार्य",
          name: "आचार्य गणेश श्रीवास्तव",
          experience: {
            label: "अनुभव:",
            text: "वैदिक ज्योतिष में 34+ वर्षों का अनुभव, दुनिया भर के हजारों ग्राहकों का मार्गदर्शन।",
          },
          history: {
            label: "इतिहास:",
            text: "प्रसिद्ध ज्योतिषाचार्य, ज्योतिष में ज्ञान और सेवा की परंपरा को आगे बढ़ाते हुए।",
          },
          expertise: {
            label: "विशेषज्ञता:",
            text: "कुंडली विश्लेषण, विवाह मिलान, करियर मार्गदर्शन, रत्न सुझाव, और ज्योतिषीय उपाय।",
          },
          values: {
            label: "मूल्य और विश्वास:",
            text: "ईमानदारी, करुणा, और प्रामाणिक वैदिक परंपराओं के प्रति प्रतिबद्धता। ज्ञान और आध्यात्मिक मार्गदर्शन के माध्यम से व्यक्तियों को सशक्त बनाने में विश्वास।",
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
        brand_subtitle: "ब्रह्मांडीय मार्गदर्शन और ज्ञान",
        brand_description: "प्राचीन ज्ञान और ब्रह्मांडीय अंतर्दृष्टियों के माध्यम से पिछले 34 वर्षों से आपके मार्ग को प्रकाशित कर रहे हैं।",
        copyright: "सर्वाधिकार सुरक्षित",
        scroll_to_top: "शीर्ष पर स्क्रॉल करें",
      },

      // Legal Pages
      legal: {
        terms_title: "नियम और शर्तें",
        privacy_title: "गोपनीयता नीति",
        shipping_title: "शिपिंग नीति",
        refund_title: "रद्दीकरण और रिफंड नीति",
        contact_title: "संपर्क करें",
        contact_us: "हमसे संपर्क करें",
        changes_to_terms: "नियमों में परिवर्तन",
        changes_to_policy: "गोपनीयता नीति में परिवर्तन",
        // जोड़ा गया: संपर्क पृष्ठ सामग्री (हिंदी)
        contact_page: {
          title: "हमसे संपर्क करें",
          intro: "कोई प्रश्न, चिंता या सहायता चाहिए? आभा ज्योतिष केंद्र की टीम आपकी मदद के लिए हमेशा तैयार है। आप हमसे निम्न माध्यमों से संपर्क कर सकते हैं।",
          phone_heading: "📞 फ़ोन / वॉट्सऐप",
          phone_text: "त्वरित सहायता के लिए हमें कॉल या वॉट्सऐप करें:",
          phone_number: "+91 9829495886",
          email_heading: "📧 ईमेल",
          email_general_label: "सामान्य पूछताछ:",
          email_general: "support@aurajyotishkendra.com",
          email_support_label: "सपोर्ट और रिफंड:",
          email_support: "support@aurajyotishkendra.com",
          address_heading: "🏢 कार्यालय का पता",
          address_name: "आभा ज्योतिष केंद्र",
          address_country: "21, नॉलेज पार्क III, ग्रेटर नोएडा",
          hours_heading: "⏰ कार्य का समय",
          hours_weekdays: "सोमवार – शनिवार: 10:00 AM – 7:00 PM IST",
          hours_sunday: "रविवार: अवकाश",
          response_heading: "💬 प्रतिक्रिया समय",
          response_text: "हम आमतौर पर ईमेल और संदेशों का जवाब 24–48 घंटों के भीतर देते हैं। अत्यावश्यक मामलों के लिए, कृपया कार्य समय में सीधे कॉल करें।",
          social_heading: "📌 सोशल मीडिया",
          social_text: "अपडेट, लेख और ऑफ़र के लिए हमें फ़ॉलो करें:",
          social_facebook: "फेसबुक",
          social_instagram: "इंस्टाग्राम",
          social_twitter: "ट्विटर (X)",
          closing_text: "हम आपकी सहायता करने और Aura Jyotish Kendra के साथ आपका अनुभव सकारात्मक और सार्थक बनाने की आशा करते हैं।"
        },
      },
      // Full page HTML for legal pages (Hindi)
      
      
      
      privacy: {
        intro: "आभा ज्योतिष केंद्र में, हम आपकी गोपनीयता का सम्मान करते हैं और आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि हम कौन-सा डेटा एकत्र करते हैं, उसका उपयोग कैसे करते हैं, और उसे सुरक्षित रखने के लिए हम कौन-से कदम उठाते हैं।",
        sections: [
          {
            title: "1. हम कौन-सी जानकारी एकत्र करते हैं",
            bullets: [
              "व्यक्तिगत जानकारी: नाम, ईमेल पता, फोन नंबर, पता, और जन्म विवरण (जन्म तिथि, समय और स्थान) जो पंजीकरण या सेवाएँ अनुरोध करते समय प्रदान किए जाते हैं।",
              "भुगतान जानकारी: लेन-देन विवरण (सुरक्षित तृतीय-पक्ष गेटवे के माध्यम से संसाधित)। हम संवेदनशील कार्ड विवरण संग्रहीत नहीं करते।",
              "तकनीकी जानकारी: IP पता, ब्राउज़र प्रकार, डिवाइस जानकारी, और उपयोग डेटा जो कुकीज़ और एनालिटिक्स टूल के माध्यम से एकत्र किया जाता है।"
            ]
          },
          {
            title: "2. आपकी जानकारी का उपयोग कैसे करते हैं",
            bullets: [
              "व्यक्तिगत ज्योतिषीय रिपोर्ट और परामर्श तैयार करने के लिए।",
              "भुगतान को सुरक्षित रूप से संसाधित करने और लेन-देन की पुष्टि करने के लिए।",
              "सेवा से संबंधित अपडेट, रिमाइंडर या ग्राहक सहायता उत्तर संप्रेषित करने के लिए।",
              "हमारी सेवाओं, वेबसाइट प्रदर्शन और उपयोगकर्ता अनुभव में सुधार करने के लिए।",
              "न्यूज़लेटर, प्रमोशन या ऑफ़र भेजने के लिए (केवल तभी जब आपने सहमति दी हो/ऑप्ट-इन किया हो)।"
            ]
          },
          {
            title: "3. डेटा साझाकरण और प्रकटीकरण",
            paragraphs: [
              "हम आपकी व्यक्तिगत जानकारी को बेचते, किराए पर देते या व्यापार नहीं करते।",
              "हालाँकि, निम्न सीमित परिस्थितियों में हम डेटा साझा कर सकते हैं:"
            ],
            bullets: [
              "विश्वसनीय तृतीय-पक्ष सेवा प्रदाताओं के साथ, जैसे भुगतान प्रोसेसर, होस्टिंग प्रदाता और संचार प्लेटफ़ॉर्म।",
              "कानूनी प्राधिकरणों के साथ, यदि कानून, विनियमन या न्यायालय के आदेश द्वारा आवश्यक हो।"
            ]
          },
          {
            title: "4. डेटा सुरक्षा",
            paragraphs: [
              "हम आपकी जानकारी की रक्षा के लिए SSL एन्क्रिप्शन, सुरक्षित सर्वर और फ़ायरवॉल जैसे उद्योग-मानक सुरक्षा उपायों का उपयोग करते हैं।",
              "हालाँकि, ऑनलाइन प्रसारण का कोई भी तरीका 100% सुरक्षित नहीं होता, और हम पूर्ण सुरक्षा की गारंटी नहीं दे सकते।"
            ]
          },
          {
            title: "5. कुकीज़ और ट्रैकिंग",
            paragraphs: [
              "हमारी वेबसाइट उपयोगकर्ता अनुभव को बेहतर बनाने, पसंद याद रखने और ट्रैफ़िक का विश्लेषण करने के लिए कुकीज़ का उपयोग करती है।",
              "आप अपने ब्राउज़र सेटिंग्स में कुकीज़ को अक्षम कर सकते हैं, लेकिन साइट की कुछ सुविधाएँ सही ढंग से काम नहीं कर सकतीं।"
            ]
          },
          {
            title: "6. आपके अधिकार",
            bullets: [
              "आप हमारे पास उपलब्ध अपने व्यक्तिगत डेटा तक पहुँच का अनुरोध कर सकते हैं।",
              "यदि आपका डेटा गलत है तो सुधार का अनुरोध कर सकते हैं।",
              "कानूनी या संविदात्मक बाधाओं के अधीन, आप अपने डेटा को हटाने का अनुरोध कर सकते हैं।",
              "आप किसी भी समय प्रचारात्मक संचार प्राप्त करने से बाहर निकल सकते हैं (ऑप्ट-आउट कर सकते हैं)।"
            ]
          },
          {
            title: "7. तृतीय-पक्ष लिंक",
            paragraphs: [
              "हमारी वेबसाइट में तृतीय-पक्ष वेबसाइटों के लिंक शामिल हो सकते हैं।",
              "ऐसी बाहरी साइटों की सामग्री, सुरक्षा या गोपनीयता अभ्यास के लिए हम जिम्मेदार नहीं हैं।"
            ]
          },
          {
            title: "8. गोपनीयता नीति में परिवर्तन",
            paragraphs: [
              "आभा ज्योतिष केंद्र इस गोपनीयता नीति को किसी भी समय अपडेट या संशोधित करने का अधिकार रखता है।",
              "कोई भी परिवर्तन इस पृष्ठ पर पोस्ट किए जाने के तुरंत बाद प्रभावी होंगे।"
            ]
          }
        ]
      },
      // Terms & Conditions (Hindi)
      terms: {
        intro_welcome: "स्वागत है",
        intro_after_name: "(\"हम\", \"हमारा\", \"हमें\"). हमारी वेबसाइट, सेवाएँ या सामग्री का उपयोग करके, आप इन नियमों और शर्तों से सहमत होते हैं। कृपया हमारी सेवाएँ उपयोग करने से पहले इन्हें ध्यान से पढ़ें।",
        s1_title: "प्रदान की जाने वाली सेवाएँ",
        s1_p1: "हम ज्योतिष से संबंधित सेवाएँ प्रदान करते हैं जैसे राशिफल पढ़ना, व्यक्तिगत रिपोर्ट, परामर्श, उपाय और आध्यात्मिक मार्गदर्शन। ये सेवाएँ व्यक्तिगत मार्गदर्शन और आध्यात्मिक जागरूकता के लिए हैं। यह चिकित्सा, वित्तीय या कानूनी सलाह का विकल्प नहीं हैं।",
        s2_title: "पात्रता",
        s2_p1: "हमारी सेवाओं का उपयोग करने के लिए आपकी आयु 18 वर्ष या उससे अधिक होनी चाहिए। यदि आपकी आयु 18 वर्ष से कम है, तो आप केवल माता-पिता या अभिभावक की देखरेख में सेवाओं का उपयोग कर सकते हैं। आप सहमति देते हैं कि आप द्वारा दी गई सभी जानकारी (जैसे जन्म विवरण, संपर्क जानकारी और भुगतान विवरण) सटीक और पूर्ण है।",
        s3_title: "उपयोगकर्ता की जिम्मेदारियाँ",
        s3_p1: "आप सहमति देते हैं कि आप हमारी सेवाओं का दुरुपयोग नहीं करेंगे, हानिकारक सामग्री अपलोड नहीं करेंगे, या हमारे प्लेटफ़ॉर्म के माध्यम से अवैध गतिविधियों में संलग्न नहीं होंगे। आप अपने खाते की जानकारी (यदि लागू हो) की गोपनीयता बनाए रखने के लिए जिम्मेदार हैं।",
        s4_title: "परिणामों की कोई गारंटी नहीं",
        s4_p1: "ज्योतिष व्याख्यात्मक प्रकृति का है और यद्यपि हम सटीकता के लिए प्रयास करते हैं, परिणाम भिन्न हो सकते हैं। हम भविष्यवाणियों, उपायों या परामर्शों की सटीकता, प्रभावशीलता या परिणामों की गारंटी नहीं देते। हमारी सेवाओं के आधार पर आप द्वारा लिए गए किसी भी निर्णय की जिम्मेदारी केवल आपकी है।",
        s5_title: "भुगतान और रिफंड",
        s5_p1: "सभी सेवाओं के लिए अग्रिम भुगतान आवश्यक है। मूल्य हमारे विवेक पर बदल सकते हैं। हम संवेदनशील भुगतान जानकारी संग्रहीत नहीं करते। रिफंड और रद्दीकरण हमारी",
        s5_link_label: "रद्दीकरण और रिफंड नीति",
        s6_title: "देयता की सीमा",
        s6_p1: "आभा ज्योतिष केंद्र आपकी सेवाओं के उपयोग से उत्पन्न किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक या परिणामी क्षति के लिए जिम्मेदार नहीं होगा। हमारी अधिकतम देयता उस राशि तक सीमित होगी जो आपने विशिष्ट सेवा के लिए भुगतान की है।",
        s7_title: "बौद्धिक संपदा",
        s7_p1: "हमारी वेबसाइट पर सभी सामग्री, जैसे रिपोर्ट, ग्राफिक्स, पाठ और डिज़ाइन, Aura Jyotish Kendra की बौद्धिक संपदा है। आप बिना पूर्व लिखित अनुमति के हमारी सामग्री की प्रतिलिपि, वितरण या पुनरुत्पादन नहीं कर सकते।",
        s8_title: "सेवाओं का समापन",
        s8_p1: "यदि आप इन नियमों का उल्लंघन करते हैं, प्लेटफ़ॉर्म का दुरुपयोग करते हैं, या धोखाधड़ी गतिविधियों में संलग्न होते हैं, तो हम आपकी सेवाओं तक पहुँच को निलंबित या समाप्त करने का अधिकार रखते हैं।",
        s9_title: "प्रभावी कानून",
        s9_p1: "ये नियम और शर्तें भारत के कानूनों द्वारा शासित हैं। किसी भी विवाद का अधिकार क्षेत्र [आपका शहर, राज्य] में स्थित न्यायालयों को होगा।",
        s10_title: "नियमों में परिवर्तन",
        s10_p1: "हम किसी भी समय इन नियमों को अपडेट या संशोधित करने का अधिकार रखते हैं। कोई भी परिवर्तन इस पृष्ठ पर प्रकाशित किया जाएगा। हमारी सेवाओं का निरंतर उपयोग यह दर्शाता है कि आप संशोधित नियमों को स्वीकार करते हैं।",
        questions_prompt: "कोई प्रश्न?",
      },
      // Refund Policy (Hindi)
      refund: {
        title: "रिफंड नीति",
        updated: "अंतिम अद्यतन: 23/10/2025",
        intro: "आभा ज्योतिष केंद्र से ज्योतिष परामर्श सेवाएँ खरीदने के लिए धन्यवाद। कृपया हमारी रिफंड नीति ध्यान से पढ़ें ताकि आप समझ सकें किन परिस्थितियों में रिफंड दिया जा सकता है या नहीं।",
        s1_title: "1. सेवाओं का स्वरूप",
        s1_p1: "सभी ज्योतिष परामर्श, रिपोर्ट और विश्लेषण व्यक्तिगत डिजिटल सेवाएँ हैं। एक बार सेवा ईमेल या वॉट्सऐप के माध्यम से भेज दी गई, तो इसे पूरा माना जाता है। इसलिए डिलीवरी के बाद रिफंड स्वचालित रूप से लागू नहीं होते।",
        s2_title: "2. रिफंड के लिए पात्रता",
        s2_intro: "रिफंड केवल निम्न असाधारण परिस्थितियों में ही जारी किए जा सकते हैं:",
        s2_li1: "आपने एक ही सेवा के लिए डुप्लिकेट भुगतान किया है।",
        s2_li2: "आपने वादे किए गए समय (भुगतान पुष्टिकरण से 2 व्यावसायिक दिनों के भीतर) में अपनी परामर्श या रिपोर्ट प्राप्त नहीं की है और आपने संपर्क किया है पर समाधान नहीं मिला।",
        s2_li3: "तकनीकी या परिचालन कारणों से हम सेवा प्रदान करने में असमर्थ हैं।",
        s2_exclusions_intro: "रिफंड निम्न स्थितियों में प्रदान नहीं किए जाएंगे:",
        s2_ex1: "सेवा प्रदान किए जाने के बाद मन बदलना।",
        s2_ex2: "परामर्श की व्याख्या या परिणाम से असंतोष।",
        s2_ex3: "ग्राहक द्वारा गलत या अधूरी जानकारी प्रदान करना।",
        s3_title: "3. रिफंड अनुरोध प्रक्रिया",
        s3_intro: "यदि आप रिफंड के योग्य हैं, तो कृपया निम्न चरणों का पालन करें:",
        s3_step1: "हमें ईमेल या वॉट्सऐप के माध्यम से support@aurajyotishkendra.com या +91 9829495886 पर संपर्क करें।",
        s3_step2: "हमें अपना ऑर्डर आईडी, भुगतान विवरण और रिफंड का कारण प्रदान करें।",
        s3_step3: "हमारी टीम 2 व्यावसायिक दिनों के भीतर आपके अनुरोध की समीक्षा करेगी और परिणाम के बारे में सूचित करेगी।",
        s4_title: "4. आंशिक रिफंड (यदि लागू हो)",
        s4_p1: "कुछ मामलों में आंशिक रिफंड जारी किए जा सकते हैं — उदाहरण के लिए, यदि सेवा का एक भाग पूरा हो गया लेकिन अनपेक्षित कारणों से वितरित नहीं हुआ। ऐसे रिफंड Aura Jyotish Kendra प्रबंधन के विवेक पर निर्धारित किए जाएंगे।",
        s5_title: "5. वितरण के बाद कोई रिफंड नहीं",
        s5_p1: "एक बार आपकी परामर्श या रिपोर्ट आपके ईमेल या वॉट्सऐप पर भेज दी गई, तो सेवा को पूरा माना जाएगा और उसके बाद रिफंड संसाधित नहीं किए जाएंगे।",
        s6_title: "6. रद्दीकरण नीति",
        s6_p1: "आप भुगतान के 6 घंटे के भीतर अपना ऑर्डर रद्द करने का अनुरोध कर सकते हैं, बशर्ते कि आपकी परामर्श पर काम शुरू न हुआ हो। यदि तैयारी या विश्लेषण पहले से शुरू हो चुका है, तो ऑर्डर रद्द नहीं किया जा सकता और भुगतान अंतिम माना जाएगा।",
        contact_title: "7. हमसे संपर्क करें",
        contact_p1: "किसी भी प्रश्न या रिफंड-संबंधी चिंताओं के लिए कृपया हमसे संपर्क करें:",
        contact_email: "support@aurajyotishkendra.com",
        contact_phone: "+91 9829495886",
        contact_website: "https://www.aurajyotishkendra.com",
      },
      // Shipping Policy
      shipping: {
        title: "शिपिंग नीति",
        updated: "अंतिम अद्यतन: 23/10/2025",
        intro: "आपकी ज्योतिष परामर्श आवश्यकताओं के लिए आभा ज्योतिष केंद्र चुनने के लिए धन्यवाद। कृपया हमारी शिपिंग नीति को ध्यानपूर्वक पढ़ें ताकि आप समझ सकें कि हम अपनी सेवाओं को कैसे संसाधित और वितरित करते हैं।",
        order_processing_title: "1. ऑर्डर प्रोसेसिंग",
        order_processing_p1: "हमारी सभी ज्योतिष परामर्श और रिपोर्टें डिजिटल रूप में प्रदान की जाती हैं — हम कोई भौतिक शिपमेंट या मुद्रित प्रतियां नहीं देते।",
        op_li1: "ऑर्डर पुष्टिकरण: जैसा ही आपका भुगतान रेजरपे के माध्यम से सफलतापूर्वक पूरा हो जाता है, आपको ईमेल या वॉट्सऐप के माध्यम से आपके ऑर्डर विवरण सहित एक पुष्टिकरण संदेश प्राप्त होगा।",
        op_li2: "प्रोसेसिंग समय: हम भुगतान पुष्टिकरण के समय से 2 व्यावसायिक दिनों के भीतर आपकी ज्योतिष परामर्श या रिपोर्ट देने का लक्ष्य रखते हैं।",
        op_li3: "वितरण चैनल: सभी डिजिटल परामर्श और रिपोर्टें आपकी द्वारा चेकआउट पर चुने गए संचार माध्यम (ईमेल या वॉट्सऐप) के माध्यम से साझा की जाती हैं।",
        delivery_timeline_title: "2. वितरण समयरेखा",
        delivery_timeline_p1: "हमारी सामान्य वितरण समयरेखा भुगतान पुष्टिकरण के बाद 48 घंटों (2 व्यावसायिक दिन) के भीतर है। यदि आपके ऑर्डर के लिए अतिरिक्त जानकारी (जैसे जन्म जानकारी या प्रश्न स्पष्टकरण) की आवश्यकता है, तो वितरण का समय आवश्यक जानकारी प्राप्त होने के बाद शुरू होगा।",
        delivery_method_title: "3. वितरण विधि",
  dm_p1: "चूंकि हमारी सेवाएँ डिजिटल हैं, वितरण इलेक्ट्रॉनिक रूप से किया जाता है। आपको प्राप्त होगा:",
  dm_li1: "ईमेल या वॉट्सऐप के माध्यम से लिखित ज्योतिष रिपोर्ट या परामर्श सारांश।",
  dm_li2: "",
        no_physical: "कोई भौतिक डिलीवरी या कुरियर सेवा शामिल नहीं है।",
        delays_title: "4. देरी या गैर-वितरण",
        delays_p1: "जबकि हम समय पर वितरण सुनिश्चित करने के लिए हर संभव प्रयास करते हैं, निम्नलिखित मामलों में देरी हो सकती है:",
        delays_li1: "ग्राहक द्वारा प्रदान की गई गलत या अधूरी संपर्क जानकारी।",
        delays_li2: "तकनीकी या इंटरनेट कनेक्टिविटी समस्याएँ।",
        delays_li3: "उच्च ऑर्डर मात्रा या अनपेक्षित परिस्थितियाँ।",
        delays_contact_prefix: "यदि आपको अपेक्षित समय में परामर्श प्राप्त नहीं होता है, तो कृपया हमसे संपर्क करें",
        delays_contact_or: "या",
        delays_contact_suffix: "और हम आपको तुरंत सहायता प्रदान करेंगे।",
        no_shipping_title: "5. शिपिंग शुल्क नहीं",
        no_shipping_p1: "चूंकि सभी सेवाएँ डिजिटल रूप में प्रदान की जाती हैं, किसी भी ऑर्डर पर कोई शिपिंग शुल्क या अतिरिक्त वितरण शुल्क लागू नहीं होते।",
        completion_title: "6. सेवा पूरा होना और स्वीकृति",
        completion_p1: "एक बार आपकी परामर्श या रिपोर्ट ईमेल या वॉट्सऐप के माध्यम से वितरित कर दी गई, सेवा को पूरा माना जाएगा। सफल वितरण की पुष्टि के लिए आपको एक पुष्टिकरण संदेश भी प्राप्त होगा।",
        changes_title: "7. ऑर्डर या संपर्क विवरण में बदलाव",
        changes_p1: "यदि आपने ऑर्डर करने के बाद अपना संपर्क जानकारी (ईमेल या वॉट्सऐप नंबर) अपडेट करने की आवश्यकता है, तो कृपया हमें अपने ऑर्डर पुष्टिकरण के 12 घंटों के भीतर सूचित करें। संचार में किसी भी विलंब से समय पर वितरण प्रभावित हो सकता है।",
        refunds_title: "8. रिफंड और संशोधन",
        refunds_p1: "चूंकि ज्योतिष परामर्श व्यक्तिगत डिजिटल सेवाएँ हैं, एक बार प्रदान कर दिए जाने के बाद वे नॉन-रिफंडेबल होती हैं। हालांकि, यदि आप वचनबद्ध समयावधि के भीतर अपनी सेवा हमारे कारण प्राप्त नहीं करते हैं, तो हम अपनी विवेकाधिकार पर पूर्ण रिफंड या पुनःवितरण की पेशकश कर सकते हैं। अधिक जानकारी के लिए कृपया हमारी रिफंड नीति देखें।",
        contact_title: "9. संपर्क करें",
        contact_intro: "यदि आपके ऑर्डर डिलीवरी के संबंध में कोई प्रश्न हों, तो कृपया हमसे संपर्क करें:",
        contact_email_label: "ईमेल:",
        contact_email: "support@aurajyotishkendra.com",
        contact_phone_label: "वॉट्सऐप:",
        contact_phone: "+91 9829495886",
        contact_website_label: "वेबसाइट:",
        contact_website: "https://www.aurajyotishkendra.com",
        questions_prompt: "कोई प्रश्न?",
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
