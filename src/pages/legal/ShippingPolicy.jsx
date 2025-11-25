import PageShell from "../PageShell";
import { useTranslation } from "react-i18next";

export default function ShippingPolicy() {
  const { t } = useTranslation();
  const dmLi2 = t("shipping.dm_li2");

  return (
    <PageShell title={t("shipping.title")}>
      {/* Intro Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-400/30 mb-8">
        <p className="text-white/90 text-lg leading-relaxed text-center">
          {t("shipping.intro")}
        </p>
      </div>

      <div className="space-y-6">
        {/* 1. Order Processing */}
        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-6 rounded-xl border-l-4 border-blue-400">
          <h2 className="text-2xl font-bold text-blue-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold mr-3">1</span>
            {t("shipping.order_processing_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("shipping.order_processing_p1")}</p>
          <ul className="list-disc pl-6 text-white/80 mt-3 space-y-1">
            <li>{t("shipping.op_li1")}</li>
            <li>{t("shipping.op_li2")}</li>
            <li>{t("shipping.op_li3")}</li>
          </ul>
        </div>

        {/* 2. Delivery Timeline */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border-l-4 border-cyan-400">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold mr-3">2</span>
            {t("shipping.delivery_timeline_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("shipping.delivery_timeline_p1")}</p>
        </div>

        {/* 3. Delivery Method */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-xl border-l-4 border-indigo-400">
          <h2 className="text-2xl font-bold text-indigo-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">3</span>
            {t("shipping.delivery_method_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("shipping.dm_p1")}</p>
          <ul className="list-disc pl-6 text-white/80 mt-3 space-y-1">
            <li>{t("shipping.dm_li1")}</li>
            {dmLi2 ? <li>{dmLi2}</li> : null}
          </ul>
          <p className="mt-3 text-white/80">{t("shipping.no_physical")}</p>
        </div>

        {/* 4. Delays */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border-l-4 border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-black font-bold mr-3">4</span>
            {t("shipping.delays_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("shipping.delays_p1")}</p>
          <ul className="list-disc pl-6 text-white/80 mt-3 space-y-1">
            <li>{t("shipping.delays_li1")}</li>
            <li>{t("shipping.delays_li2")}</li>
            <li>{t("shipping.delays_li3")}</li>
          </ul>
          <p className="mt-3 text-white/80">
            {t("shipping.delays_contact_prefix")}{" "}
            <a href={`mailto:${t("shipping.contact_email")}`} className="text-blue-300 underline">{t("shipping.contact_email")}</a>{" "}
            {t("shipping.delays_contact_or")}{" "}
            <a href={`tel:${t("shipping.contact_phone")}`} className="text-blue-300 underline">{t("shipping.contact_phone")}</a>{" "}
            {t("shipping.delays_contact_suffix")}
          </p>
        </div>

        {/* 5. No Shipping Required */}
        <div className="bg-gradient-to-r from-pink-500/10 to-red-500/10 p-6 rounded-xl border-l-4 border-pink-400">
          <h2 className="text-2xl font-bold text-pink-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">5</span>
            {t("shipping.no_shipping_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("shipping.no_shipping_p1")}</p>
        </div>

        {/* 6. Completion */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-green-400">
          <h2 className="text-2xl font-bold text-green-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3">6</span>
            {t("shipping.completion_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("shipping.completion_p1")}</p>
        </div>

        {/* 7. Changes & Refunds */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-xl border-l-4 border-purple-400">
          <h2 className="text-2xl font-bold text-purple-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-3">7</span>
            {t("shipping.changes_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("shipping.changes_p1")}</p>
          <h3 className="text-xl font-semibold text-blue-300 mt-4">{t("shipping.refunds_title")}</h3>
          <p className="text-white/80 mt-1">{t("shipping.refunds_p1")}</p>
        </div>

        {/* 8. Contact Info */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border-l-4 border-cyan-400">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold mr-3">8</span>
            {t("shipping.contact_title")}
          </h2>
          <p className="text-white/80 leading-relaxed">{t("shipping.contact_intro")}</p>
          <ul className="space-y-3 text-white/80 mt-4">
            <li>📧 {t("shipping.contact_email_label")}{" "}
              <a href={`mailto:${t("shipping.contact_email")}`} className="text-blue-300 underline">
                {t("shipping.contact_email")}
              </a>
            </li>
            <li>📱 {t("shipping.contact_phone_label")}{" "}
              <a href={`tel:${t("shipping.contact_phone")}`} className="text-blue-300 underline">
                {t("shipping.contact_phone")}
              </a>
            </li>
            <li>🌐 {t("shipping.contact_website_label")}{" "}
              <a href={t("shipping.contact_website")} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">
                {t("shipping.contact_website")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-400/30 text-center">
        <p className="text-white/90 text-lg">
          {t("shipping.questions_prompt")} {" "}
          <a href="/contact" className="text-blue-300 hover:text-blue-200 underline transition-colors font-semibold">
            {t("legal.contact_us")}
          </a>
        </p>
      </div>
    </PageShell>
  );
}
