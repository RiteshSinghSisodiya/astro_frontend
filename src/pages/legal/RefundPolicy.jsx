import PageShell from "../PageShell";
import { useTranslation } from "react-i18next";

export default function RefundPolicy() {
  const { t } = useTranslation();
  
  return (
    <PageShell title={t("legal.refund_title")}>
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-6 rounded-xl border border-purple-400/30 mb-8">
        <p className="text-white/90 text-lg leading-relaxed text-center">
          At <span className="text-purple-300 font-semibold">Aura Jyotish Kendra</span>, we strive to deliver quality
          astrology services tailored to each individual. Since our reports and
          consultations are personalized, cancellations and refunds are subject to
          specific conditions outlined below.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 rounded-xl border-l-4 border-red-400">
          <h2 className="text-2xl font-bold text-red-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
            Non-Refundable Services
          </h2>
          <p className="text-white/80 leading-relaxed">
            All astrology reports, horoscopes, consultations, and remedies are{" "}
            <span className="text-orange-300 font-semibold">personalized and custom-prepared</span> for each client.
            Therefore, once delivered, these services{" "}
            <span className="text-red-300 font-semibold">cannot be returned, canceled, or refunded</span>.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border-l-4 border-blue-400">
          <h2 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
            Cancellation Policy
          </h2>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Orders for astrology reports may be canceled within{" "}
              <span className="text-blue-300 font-semibold">2 hours of payment</span> if processing has not started.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Consultations may be canceled or rescheduled at least{" "}
              <span className="text-purple-300 font-semibold">24 hours before</span> the scheduled appointment.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Last-minute cancellations or "no-shows" will not be eligible for a
              refund or rescheduling.
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-green-400">
          <h2 className="text-2xl font-bold text-green-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
            Refund Eligibility
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">Refunds will only be considered under the following circumstances:</p>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              A service was paid for but <span className="text-green-300 font-semibold">not delivered</span> due to a
              technical or scheduling error on our side.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              You were <span className="text-blue-300 font-semibold">charged twice</span> for the same order.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              A payment was deducted incorrectly due to a{" "}
              <span className="text-orange-300 font-semibold">payment gateway error</span>.
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border-l-4 border-purple-400">
          <h2 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>
            Refund Process
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Eligible refunds will be processed to your original payment method
            within <span className="text-purple-300 font-semibold">7–10 business days</span>. To request a refund, please
            email us at{" "}
            <a href="/contact" className="text-blue-300 hover:text-blue-200 underline transition-colors">
              Contact Us
            </a>{" "}
            with the following details:
          </p>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Full name
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Order ID or Transaction reference number
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Payment receipt/screenshot
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Reason for refund request
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border-l-4 border-orange-400">
          <h2 className="text-2xl font-bold text-orange-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">5</span>
            No Guarantee Clause
          </h2>
          <p className="text-white/80 leading-relaxed">
            Dissatisfaction with astrological predictions, remedies, or guidance is
            not a valid reason for a refund. Astrology is interpretative, and
            results may vary from person to person.
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-teal-400">
          <h2 className="text-2xl font-bold text-teal-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3">6</span>
            Changes to Policy
          </h2>
          <p className="text-white/80 leading-relaxed">
            Aura Jyotish Kendra reserves the right to modify or update this policy
            at any time. Any changes will be posted on this page.
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
