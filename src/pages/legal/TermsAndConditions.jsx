import PageShell from "../PageShell";

export default function TermsAndConditions() {
  return (
    <PageShell title="Terms & Conditions">
      <p>
        Welcome to <strong>Aura Jyotish Kendra</strong>. By using our website or services, you agree to these terms.
      </p>

      <h2 className="font-semibold mt-4">Use of Services</h2>
      <p>Our astrology content and consultations are for guidance only and not a substitute for professional advice.</p>

      <h2 className="font-semibold mt-4">Eligibility</h2>
      <p>You must be 18 years or older to use our services. Information provided must be accurate.</p>

      <h2 className="font-semibold mt-4">Payments & Refunds</h2>
      <p>All services require advance payment. Refunds follow our <a href="/refund" className="text-blue-600 underline">Refund Policy</a>.</p>

      <h2 className="font-semibold mt-4">Limitation of Liability</h2>
      <p>Aura Jyotish Kendra is not liable for decisions based on our services.</p>

      <p className="mt-4">Questions? <a href="/contact" className="text-blue-600 underline">Contact us</a>.</p>
    </PageShell>
  );
}
