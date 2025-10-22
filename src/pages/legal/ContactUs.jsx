import PageShell from "../PageShell";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
  
  return (
    <PageShell title={t("legal.contact_title")}>
      <p>
        Have questions, concerns, or need assistance? The{" "}
        <strong>Aura Jyotish Kendra</strong> team is here to help. You can reach
        us through the following channels:
      </p>

      <h2 className="font-semibold mt-4">📞 Phone / WhatsApp</h2>
      <p>
        For quick support, call or WhatsApp us at{" "}
        <a
          href="tel:+919829495886"
          className="text-blue-600 underline"
        >
          +91 9829495886
        </a>
      </p>

      <h2 className="font-semibold mt-4">📧 Email</h2>
      <p>
        General inquiries:{" "}
        <a
          href="mailto:info@aurajyotishkendra.com"
          className="text-blue-600 underline"
        >
          {/* info@aurajyotishkendra.com */}
        </a>
      </p>
      <p>
        Support & Refunds:{" "}
        <a
          href="mailto:support@aurajyotishkendra.com"
          className="text-blue-600 underline"
        >
          support@aurajyotishkendra.com
        </a>
      </p>

      <h2 className="font-semibold mt-4">🏢 Office Address</h2>
      <p>
        Aura Jyotish Kendra <br />
        
        India
      </p>

      <h2 className="font-semibold mt-4">⏰ Business Hours</h2>
      <p>
        Monday – Saturday: <strong>10:00 AM – 7:00 PM IST</strong> <br />
        Sunday: Closed
      </p>

      <h2 className="font-semibold mt-4">💬 Response Time</h2>
      <p>
        We usually respond to emails and messages within{" "}
        <strong>24–48 hours</strong>. For urgent matters, please call us
        directly during business hours.
      </p>

      <h2 className="font-semibold mt-4">📌 {t("footer.social_media")}</h2>
      <p>
        Follow us for updates, articles, and offers: <br />
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Facebook
        </a>{" "}
        |{" "}
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Instagram
        </a>{" "}
        |{" "}
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Twitter (X)
        </a>
      </p>

      <p className="mt-6">
        We look forward to assisting you and ensuring your experience with{" "}
        <strong>Aura Jyotish Kendra</strong> is positive and meaningful.
      </p>
    </PageShell>
  );
}
