import PageShell from "../PageShell";

export default function RefundPolicy() {
  return (
    <PageShell title="Cancellation & Refund Policy">
      <p>
        At <strong>Aura Jyotish Kendra</strong>, our astrology services are personalized, so cancellations and refunds are limited.
      </p>

      <h2 className="font-semibold mt-4">Cancellation</h2>
      <p>Once a consultation or report is booked, cancellations are not allowed as work begins immediately.</p>

      <h2 className="font-semibold mt-4">Refunds</h2>
      <p>Refunds are only considered in cases like duplicate payment or incorrect deduction. Contact us within 7 days with payment details.</p>

      <p className="mt-4">Questions? <a href="/contact" className="text-blue-600 underline">Contact us</a>.</p>
    </PageShell>
  );
}
