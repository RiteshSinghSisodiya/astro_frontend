import PageShell from "../PageShell";
import { useTranslation } from "react-i18next";

export default function TermsAndConditions() {
  const { t } = useTranslation();
  
  return (
    <PageShell title={t("legal.terms_title")}>
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-2xl border border-yellow-300/30">
        <p className="text-lg leading-relaxed">
          Welcome to <span className="text-yellow-300 font-bold">Aura Jyotish Kendra</span> ("we," "our," "us"). By
          accessing or using our website, services, or content, you agree to these
          Terms & Conditions. Please read them carefully before using our
          services.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-black font-bold mr-3">1</span>
            Services Provided
          </h2>
          <p className="text-white/80 leading-relaxed">
            We provide astrology-related services such as horoscope readings,
            personalized reports, consultations, remedies, and spiritual guidance.
            These services are intended for personal guidance and spiritual
            awareness. They are <span className="text-red-300 font-semibold">not a substitute</span> for medical,
            financial, or legal advice.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border-l-4 border-blue-400">
          <h2 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
            Eligibility
          </h2>
          <p className="text-white/80 leading-relaxed">
            You must be <span className="text-yellow-300 font-semibold">18 years or older</span> to use our services. If
            you are under 18, you may only use our services under the supervision of
            a parent or guardian. You agree that all information you provide to us
            (such as birth details, contact information, and payment details) is
            accurate and complete.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-green-400">
          <h2 className="text-2xl font-bold text-green-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
            User Responsibilities
          </h2>
          <p className="text-white/80 leading-relaxed">
            You agree not to misuse our services, upload harmful content, or engage
            in unlawful activities through our platform. You are responsible for
            maintaining the confidentiality of your account information (if
            applicable).
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border-l-4 border-orange-400">
          <h2 className="text-2xl font-bold text-orange-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>
            No Guarantee of Outcomes
          </h2>
          <p className="text-white/80 leading-relaxed">
            Astrology is interpretive in nature, and while we strive for accuracy,
            outcomes may vary. We <span className="text-red-300 font-semibold">do not guarantee</span> the accuracy,
            effectiveness, or results of predictions, remedies, or consultations.
            Any decisions you make based on our services are solely your
            responsibility.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border-l-4 border-purple-400">
          <h2 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-3">5</span>
            Payments & Refunds
          </h2>
          <p className="text-white/80 leading-relaxed">
            All services must be paid for in advance. Prices may change at our
            discretion. We do not store sensitive payment information. Refunds and
            cancellations are governed strictly by our{" "}
            <a href="/refund" className="text-blue-300 hover:text-blue-200 underline transition-colors">
              Refund & Cancellation Policy
            </a>
            .
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 rounded-xl border-l-4 border-red-400">
          <h2 className="text-2xl font-bold text-red-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-3">6</span>
            Limitation of Liability
          </h2>
          <p className="text-white/80 leading-relaxed">
            Aura Jyotish Kendra shall not be held liable for any direct, indirect,
            incidental, or consequential damages resulting from the use of our
            services. Our maximum liability shall not exceed the amount paid by you
            for the specific service.
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-xl border-l-4 border-indigo-400">
          <h2 className="text-2xl font-bold text-indigo-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">7</span>
            Intellectual Property
          </h2>
          <p className="text-white/80 leading-relaxed">
            All content on our website, including reports, graphics, text, and
            designs, is the intellectual property of Aura Jyotish Kendra. You may
            not copy, distribute, or reproduce our content without prior written
            permission.
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 p-6 rounded-xl border-l-4 border-pink-400">
          <h2 className="text-2xl font-bold text-pink-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">8</span>
            Termination of Services
          </h2>
          <p className="text-white/80 leading-relaxed">
            We reserve the right to suspend or terminate your access to our services
            if you violate these terms, misuse the platform, or engage in fraudulent
            activity.
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-teal-400">
          <h2 className="text-2xl font-bold text-teal-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3">9</span>
            Governing Law
          </h2>
          <p className="text-white/80 leading-relaxed">
            These Terms & Conditions are governed by the laws of India. Any disputes
            shall be subject to the jurisdiction of the courts located in{" "}
            <span className="text-yellow-300 font-semibold">[Your City, State]</span>.
          </p>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border-l-4 border-cyan-400">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold mr-3">10</span>
            Changes to Terms
          </h2>
          <p className="text-white/80 leading-relaxed">
            We reserve the right to update or modify these Terms at any time. Any
            changes will be posted on this page. Continued use of our services means
            that you accept the revised Terms.
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl border border-purple-400/30 text-center">
        <p className="text-white/90 text-lg">
          Questions?{" "}
          <a href="/contact" className="text-blue-300 hover:text-blue-200 underline transition-colors font-semibold">
            Contact us
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}
