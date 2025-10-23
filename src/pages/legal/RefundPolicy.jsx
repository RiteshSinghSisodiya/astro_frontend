import PageShell from "../PageShell";

export default function RefundPolicy() {
  return (
    <PageShell title="Refund Policy">
      <p className="italic mb-4">Last updated: 23/10/2025</p>

      <p>
        Thank you for purchasing astrology consultation services from{" "}
        <strong>Aura Jyotish Kendra</strong>. Please read our Refund Policy
        carefully to understand the conditions under which refunds may or may
        not be provided.
      </p>

      <h2 className="font-semibold mt-4">1. Nature of Services</h2>
      <p>
        All astrology consultations, reports, and analyses provided by{" "}
        <strong>Aura Jyotish Kendra</strong> are personalized digital services.
        Once the service is delivered via email or WhatsApp, it is considered
        successfully completed. As such, refunds are not automatically
        applicable after delivery.
      </p>

      <h2 className="font-semibold mt-4">2. Eligibility for Refunds</h2>
      <p>Refunds may only be issued under the following exceptional circumstances:</p>
      <ul className="list-disc pl-6">
        <li>You have made a duplicate payment for the same service.</li>
        <li>
          You have not received your consultation or report within the promised
          delivery time (i.e., within 2 business days from payment confirmation),
          and you have contacted us but not received a resolution.
        </li>
        <li>
          We are unable to deliver the service due to unforeseen technical or
          operational reasons.
        </li>
      </ul>
      <p>Refunds will not be provided for:</p>
      <ul className="list-disc pl-6">
        <li>Change of mind after the service has been delivered.</li>
        <li>Dissatisfaction based on interpretation or outcome of the consultation.</li>
        <li>Incorrect or incomplete information provided by the customer.</li>
      </ul>

      <h2 className="font-semibold mt-4">3. Refund Request Procedure</h2>
      <p>If you believe you are eligible for a refund, please follow these steps:</p>
      <ol className="list-decimal pl-6">
        <li>
          Contact us via email or WhatsApp at{" "}
          <a
            href="mailto:support@aurajyotishkendra.com"
            className="text-blue-600 underline"
          >
            support@aurajyotishkendra.com
          </a>{" "}
          or{" "}
          <a href="tel:+919829495886" className="text-blue-600 underline">
            +91 9829495886
          </a>
          .
        </li>
        <li>
          Provide your order ID, payment details, and reason for requesting a
          refund.
        </li>
        <li>
          Our team will review your request within 2 business days and respond
          with the outcome.
        </li>
      </ol>
      <p>
        If your request is approved, your refund will be processed through
        Razorpay (or the original payment method) within 5–7 business days.
      </p>

      <h2 className="font-semibold mt-4">4. Partial Refunds (if applicable)</h2>
      <p>
        In certain cases, a partial refund may be issued — for example, if a
        portion of the service has been completed but not delivered due to
        unforeseen issues. Such refunds are determined at the discretion of{" "}
        <strong>Aura Jyotish Kendra</strong> management.
      </p>

      <h2 className="font-semibold mt-4">5. No Refunds After Delivery</h2>
      <p>
        Once your astrology consultation or report has been delivered to your
        email or WhatsApp, it is deemed as service completed and no refunds will
        be processed thereafter.
      </p>

      <h2 className="font-semibold mt-4">6. Cancellation Policy</h2>
      <p>
        You may request to cancel your order within 6 hours of payment, provided
        work on your consultation has not yet begun. If preparation or analysis
        has already started, the order cannot be cancelled, and the payment will
        be considered final.
      </p>

      <h2 className="font-semibold mt-4">7. Contact Us</h2>
      <p>
        For any queries or refund-related concerns, please contact us:
      </p>
      <ul className="list-none pl-0">
        <li>
          📧 Email:{" "}
          <a
            href="mailto:support@aurajyotishkendra.com"
            className="text-blue-600 underline"
          >
            support@aurajyotishkendra.com
          </a>
        </li>
        <li>
          📱 WhatsApp:{" "}
          <a
            href="tel:+919829495886"
            className="text-blue-600 underline"
          >
            +91 9829495886
          </a>
        </li>
        <li>
          🌐 Website:{" "}
          <a
            href="https://www.aurajyotishkendra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://www.aurajyotishkendra.com
          </a>
        </li>
      </ul>
    </PageShell>
  );
}
