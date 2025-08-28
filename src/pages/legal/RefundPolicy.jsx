import PageShell from "../PageShell";

export default function RefundPolicy() {
  return (
    <PageShell title="Cancellation & Refund Policy">
      <p>
        At <strong>Aura Jyotish Kendra</strong>, we strive to deliver quality
        astrology services tailored to each individual. Since our reports and
        consultations are personalized, cancellations and refunds are subject to
        specific conditions outlined below.
      </p>

      <h2 className="font-semibold mt-4">1. Non-Refundable Services</h2>
      <p>
        All astrology reports, horoscopes, consultations, and remedies are{" "}
        <strong>personalized and custom-prepared</strong> for each client.
        Therefore, once delivered, these services{" "}
        <strong>cannot be returned, canceled, or refunded</strong>.
      </p>

      <h2 className="font-semibold mt-4">2. Cancellation Policy</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>
          Orders for astrology reports may be canceled within{" "}
          <strong>2 hours of payment</strong> if processing has not started.
        </li>
        <li>
          Consultations may be canceled or rescheduled at least{" "}
          <strong>24 hours before</strong> the scheduled appointment.
        </li>
        <li>
          Last-minute cancellations or "no-shows" will not be eligible for a
          refund or rescheduling.
        </li>
      </ul>

      <h2 className="font-semibold mt-4">3. Refund Eligibility</h2>
      <p>Refunds will only be considered under the following circumstances:</p>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>
          A service was paid for but <strong>not delivered</strong> due to a
          technical or scheduling error on our side.
        </li>
        <li>
          You were <strong>charged twice</strong> for the same order.
        </li>
        <li>
          A payment was deducted incorrectly due to a{" "}
          <strong>payment gateway error</strong>.
        </li>
      </ul>

      <h2 className="font-semibold mt-4">4. Refund Process</h2>
      <p>
        Eligible refunds will be processed to your original payment method
        within <strong>7–10 business days</strong>. To request a refund, please
        email us at{" "}
        <a href="/contact" className="text-blue-600 underline">
          Contact Us
        </a>{" "}
        with the following details:
      </p>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>Full name</li>
        <li>Order ID or Transaction reference number</li>
        <li>Payment receipt/screenshot</li>
        <li>Reason for refund request</li>
      </ul>

      <h2 className="font-semibold mt-4">5. No Guarantee Clause</h2>
      <p>
        Dissatisfaction with astrological predictions, remedies, or guidance is
        not a valid reason for a refund. Astrology is interpretative, and
        results may vary from person to person.
      </p>

      <h2 className="font-semibold mt-4">6. Changes to Policy</h2>
      <p>
        Aura Jyotish Kendra reserves the right to modify or update this policy
        at any time. Any changes will be posted on this page.
      </p>

      <p className="mt-4">
        Questions?{" "}
        <a href="/contact" className="text-blue-600 underline">
          Contact us
        </a>
        .
      </p>
    </PageShell>
  );
}
