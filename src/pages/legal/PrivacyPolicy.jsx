import PageShell from "../PageShell";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  
  return (
    <PageShell title={t("legal.privacy_title")}>
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-6 rounded-xl border border-purple-400/30 mb-8">
        <p className="text-white/90 text-lg leading-relaxed text-center">
          At <span className="text-purple-300 font-semibold">Aura Jyotish Kendra</span>, we respect your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains what data we collect, how we use it, and the steps we take to
          keep it secure.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border-l-4 border-blue-400">
          <h2 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
            Information We Collect
          </h2>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <span className="text-blue-300 font-semibold">Personal Information:</span> Name, email address, phone
                number, address, and birth details (date, time, and place of birth)
                provided while registering or requesting services.
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <span className="text-purple-300 font-semibold">Payment Information:</span> Transaction details (processed
                through secure third-party gateways). We do not store sensitive card
                details.
              </div>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <span className="text-green-300 font-semibold">Technical Information:</span> IP address, browser type,
                device information, and usage data collected through cookies and
                analytics tools.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-green-400">
          <h2 className="text-2xl font-bold text-green-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
            How We Use Your Information
          </h2>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              To prepare personalized astrology reports and consultations.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              To process payments securely and confirm transactions.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              To communicate service-related updates, reminders, or customer support
              responses.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              To improve our services, website performance, and user experience.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              To send newsletters, promotions, or offers (only if you have opted-in).
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border-l-4 border-orange-400">
          <h2 className="text-2xl font-bold text-orange-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
            Data Sharing & Disclosure
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            We <span className="text-red-300 font-semibold">do not sell, rent, or trade</span> your personal
            information. However, we may share limited data with:
          </p>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Trusted third-party service providers such as payment processors,
              hosting providers, and communication platforms.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Legal authorities, if required by law, regulation, or court order.
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border-l-4 border-purple-400">
          <h2 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>
            Data Protection
          </h2>
          <p className="text-white/80 leading-relaxed">
            We use industry-standard security measures such as SSL encryption,
            secure servers, and firewalls to safeguard your information. However, no
            method of online transmission is 100% secure, and we cannot guarantee
            absolute protection.
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-xl border-l-4 border-indigo-400">
          <h2 className="text-2xl font-bold text-indigo-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">5</span>
            Cookies & Tracking
          </h2>
          <p className="text-white/80 leading-relaxed">
            Our website uses cookies to enhance user experience, remember
            preferences, and analyze traffic. You may disable cookies in your
            browser settings, but some features of the site may not work properly.
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-teal-400">
          <h2 className="text-2xl font-bold text-teal-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3">6</span>
            Your Rights
          </h2>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              You may request access to the personal data we hold about you.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              You can ask for corrections if your data is inaccurate.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              You may request deletion of your data, subject to legal or contractual
              obligations.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              You may opt out of receiving promotional communications at any time.
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 p-6 rounded-xl border-l-4 border-pink-400">
          <h2 className="text-2xl font-bold text-pink-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">7</span>
            Third-Party Links
          </h2>
          <p className="text-white/80 leading-relaxed">
            Our website may include links to third-party websites. We are not
            responsible for the content, security, or privacy practices of such
            external sites.
          </p>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border-l-4 border-cyan-400">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold mr-3">8</span>
            Changes to Privacy Policy
          </h2>
          <p className="text-white/80 leading-relaxed">
            Aura Jyotish Kendra reserves the right to update or revise this Privacy
            Policy at any time. Any changes will be effective immediately upon
            posting on this page.
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
