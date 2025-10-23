import PageShell from "../PageShell";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <PageShell title={t("legal.contact_title")}> 
      <p>
        {t("legal.contact_page.intro")} 
      </p>

      <h2 className="font-semibold mt-4">{t("legal.contact_page.phone_heading")}</h2>
      <p>
        {t("legal.contact_page.phone_text")} {" "}
        <a href="tel:+919829495886" className="text-blue-600 underline">
          {t("legal.contact_page.phone_number")}
        </a>
      </p>

      <h2 className="font-semibold mt-4">{t("legal.contact_page.email_heading")}</h2>
      <p>
        {t("legal.contact_page.email_general_label")} {" "}
        <a href="mailto:info@aurajyotishkendra.com" className="text-blue-600 underline">
          {t("legal.contact_page.email_general")}
        </a>
      </p>
      <p>
        {t("legal.contact_page.email_support_label")} {" "}
        <a href="mailto:support@aurajyotishkendra.com" className="text-blue-600 underline">
          {t("legal.contact_page.email_support")}
        </a>
      </p>

      <h2 className="font-semibold mt-4">{t("legal.contact_page.address_heading")}</h2>
      <p>
        {t("legal.contact_page.address_name")} <br />
        {t("legal.contact_page.address_country")}
      </p>

      <h2 className="font-semibold mt-4">{t("legal.contact_page.hours_heading")}</h2>
      <p>
        {t("legal.contact_page.hours_weekdays")} <br />
        {t("legal.contact_page.hours_sunday")}
      </p>

      <h2 className="font-semibold mt-4">{t("legal.contact_page.response_heading")}</h2>
      <p>
        {t("legal.contact_page.response_text")}
      </p>

      <h2 className="font-semibold mt-4">{t("legal.contact_page.social_heading")}</h2>
      <p>
        {t("legal.contact_page.social_text")} <br />
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          {t("legal.contact_page.social_facebook")}
        </a>{" "}
        |{" "}
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          {t("legal.contact_page.social_instagram")}
        </a>{" "}
        |{" "}
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          {t("legal.contact_page.social_twitter")}
        </a>
      </p>

      <p className="mt-6">
        {t("legal.contact_page.closing_text")} 
      </p>
    </PageShell>
  );
}
