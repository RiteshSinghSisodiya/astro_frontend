import PageShell from "../PageShell";
import { useTranslation } from "react-i18next";

export default function RefundPolicy() {
  const { t } = useTranslation();

  return (
    <PageShell title={t("refund.title")}
    >
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-6 rounded-xl border border-purple-400/30 mb-8">
        <p className="text-white/70 text-sm text-center mb-2">{t("refund.updated")}</p>
        <p className="text-white/90 text-lg leading-relaxed text-center">{t("refund.intro")}</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-black font-bold mr-3">1</span>
            {t("refund.s1_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("refund.s1_p1")}</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border-l-4 border-blue-400">
          <h2 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
            {t("refund.s2_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("refund.s2_intro")}</p>
          <ul className="list-disc pl-6 text-white/80 mt-4">
            <li>{t("refund.s2_li1")}</li>
            <li>{t("refund.s2_li2")}</li>
            <li>{t("refund.s2_li3")}</li>
          </ul>
          <p className="mt-4">{t("refund.s2_exclusions_intro")}</p>
          <ul className="list-disc pl-6 text-white/80 mt-2">
            <li>{t("refund.s2_ex1")}</li>
            <li>{t("refund.s2_ex2")}</li>
            <li>{t("refund.s2_ex3")}</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-green-400">
          <h2 className="text-2xl font-bold text-green-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
            {t("refund.s3_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("refund.s3_intro")}</p>
          <ol className="list-decimal pl-6 text-white/80 mt-4">
            <li>{t("refund.s3_step1")}</li>
            <li>{t("refund.s3_step2")}</li>
            <li>{t("refund.s3_step3")}</li>
          </ol>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border-l-4 border-orange-400">
          <h2 className="text-2xl font-bold text-orange-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">4</span>
            {t("refund.s4_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("refund.s4_p1")}</p>
        </div>

        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-xl border-l-4 border-indigo-400">
          <h2 className="text-2xl font-bold text-indigo-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">5</span>
            {t("refund.s5_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("refund.s5_p1")}</p>
        </div>

        <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 p-6 rounded-xl border-l-4 border-pink-400">
          <h2 className="text-2xl font-bold text-pink-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">6</span>
            {t("refund.s6_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("refund.s6_p1")}</p>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border-l-4 border-cyan-400">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold mr-3">7</span>
            {t("refund.contact_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("refund.contact_p1")}</p>
          <ul className="space-y-3 text-white/80 mt-4">
            <li>📧 <a href={`mailto:${t("refund.contact_email")}`} className="text-blue-300 underline">{t("refund.contact_email")}</a></li>
            <li>📱 <a href={`tel:${t("refund.contact_phone")}`} className="text-blue-300 underline">{t("refund.contact_phone")}</a></li>
            <li>🌐 <a href={t("refund.contact_website")} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">{t("refund.contact_website")}</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl border border-purple-400/30 text-center">
        <p className="text-white/90 text-lg">Questions? <a href="/contact" className="text-blue-300 hover:text-blue-200 underline transition-colors font-semibold">Contact us</a>.</p>
      </div>
    </PageShell>
  );
}
