import PageShell from "../PageShell";
import { useTranslation } from "react-i18next";

export default function TermsAndConditions() {
  const { t } = useTranslation();
  
  return (
    <PageShell title={t("legal.terms_title")}> 
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-2xl border border-yellow-300/30">
        <p className="text-lg leading-relaxed">
          {t("terms.intro_welcome")} <span className="text-yellow-300 font-bold">Aura Jyotish Kendra</span> {t("terms.intro_after_name")}
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-black font-bold mr-3">1</span>
            {t("terms.s1_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">
            {t("terms.s1_p1")}
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border-l-4 border-blue-400">
          <h2 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
            {t("terms.s2_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">
            {t("terms.s2_p1")}
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-green-400">
          <h2 className="text-2xl font-bold text-green-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
            {t("terms.s3_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">
            {t("terms.s3_p1")}
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border-l-4 border-orange-400">
          <h2 className="text-2xl font-bold text-orange-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>
            {t("terms.s4_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">
            {t("terms.s4_p1")}
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border-l-4 border-purple-400">
          <h2 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-3">5</span>
            {t("terms.s5_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">
            {t("terms.s5_p1")} {" "}
            <a href="/refund" className="text-blue-300 hover:text-blue-200 underline transition-colors">
              {t("refund.title")}
            </a>
            .
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 rounded-xl border-l-4 border-red-400">
          <h2 className="text-2xl font-bold text-red-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-3">6</span>
            {t("terms.s6_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">
            {t("terms.s6_p1")}
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-xl border-l-4 border-indigo-400">
          <h2 className="text-2xl font-bold text-indigo-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">7</span>
            {t("terms.s7_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">
            {t("terms.s7_p1")}
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 p-6 rounded-xl border-l-4 border-pink-400">
          <h2 className="text-2xl font-bold text-pink-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">8</span>
            {t("terms.s8_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">
            {t("terms.s8_p1")}
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-teal-400">
          <h2 className="text-2xl font-bold text-teal-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3">9</span>
            {t("terms.s9_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">
            {t("terms.s9_p1")}
          </p>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border-l-4 border-cyan-400">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold mr-3">10</span>
            {t("terms.s10_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">
            {t("terms.s10_p1")}
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl border border-purple-400/30 text-center">
        <p className="text-white/90 text-lg">
          {t("terms.questions_prompt")} {" "}
          <a href="/contact" className="text-blue-300 hover:text-blue-200 underline transition-colors font-semibold">
            {t("legal.contact_us")}
          </a>
          .
        </p>
      </div>
    </PageShell>
  );
}
