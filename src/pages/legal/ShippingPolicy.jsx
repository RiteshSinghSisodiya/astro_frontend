import PageShell from "../PageShell";
import { useTranslation } from "react-i18next";

export default function ShippingPolicy() {
  const { t } = useTranslation();

  return (
    <PageShell title={t("shipping.title")}>
      <p className="italic mb-4">{t("shipping.updated")}</p>

      <p>{t("shipping.intro")}</p>

      <h2 className="font-semibold mt-4">{t("shipping.order_processing_title")}</h2>
      <p>{t("shipping.order_processing_p1")}</p>
      <ul className="list-disc pl-6">
        <li>{t("shipping.op_li1")}</li>
        <li>{t("shipping.op_li2")}</li>
        <li>{t("shipping.op_li3")}</li>
      </ul>

      <h2 className="font-semibold mt-4">{t("shipping.delivery_timeline_title")}</h2>
      <p>{t("shipping.delivery_timeline_p1")}</p>

      <h2 className="font-semibold mt-4">{t("shipping.delivery_method_title")}</h2>
      <p>{t("shipping.dm_p1")}</p>
      <ul className="list-disc pl-6">
        <li>{t("shipping.dm_li1")}</li>
        <li>{t("shipping.dm_li2")}</li>
      </ul>
      <p>{t("shipping.no_physical")}</p>

      <h2 className="font-semibold mt-4">{t("shipping.delays_title")}</h2>
      <p>{t("shipping.delays_p1")}</p>
      <ul className="list-disc pl-6">
        <li>{t("shipping.delays_li1")}</li>
        <li>{t("shipping.delays_li2")}</li>
        <li>{t("shipping.delays_li3")}</li>
      </ul>
      <p>
        {t("shipping.delays_contact_prefix")} 
        <a href={`mailto:${t("shipping.contact_email")}`} className="text-blue-600 underline">{t("shipping.contact_email")}</a>
        {" " + t("shipping.delays_contact_or") + " "}
        <a href={`tel:${t("shipping.contact_phone")}`} className="text-blue-600 underline">{t("shipping.contact_phone")}</a>
        {" " + t("shipping.delays_contact_suffix")}
      </p>

      <h2 className="font-semibold mt-4">{t("shipping.no_shipping_title")}</h2>
      <p>{t("shipping.no_shipping_p1")}</p>

      <h2 className="font-semibold mt-4">{t("shipping.completion_title")}</h2>
      <p>{t("shipping.completion_p1")}</p>

      <h2 className="font-semibold mt-4">{t("shipping.changes_title")}</h2>
      <p>{t("shipping.changes_p1")}</p>

      <h2 className="font-semibold mt-4">{t("shipping.refunds_title")}</h2>
      <p>{t("shipping.refunds_p1")}</p>

      <h2 className="font-semibold mt-4">{t("shipping.contact_title")}</h2>
      <p>{t("shipping.contact_intro")}</p>
      <ul className="list-none pl-0">
        <li>
          📧 {t("shipping.contact_email_label")} <a href={`mailto:${t("shipping.contact_email")}`} className="text-blue-600 underline">{t("shipping.contact_email")}</a>
        </li>
        <li>
          📱 {t("shipping.contact_phone_label")} <a href={`tel:${t("shipping.contact_phone")}`} className="text-blue-600 underline">{t("shipping.contact_phone")}</a>
        </li>
        <li>
          🌐 {t("shipping.contact_website_label")} <a href={t("shipping.contact_website")} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{t("shipping.contact_website")}</a>
        </li>
      </ul>
    </PageShell>
  );
}
