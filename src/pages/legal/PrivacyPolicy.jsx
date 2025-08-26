import PageShell from "../PageShell";

export default function PrivacyPolicy() {
  return (
    <PageShell title="Privacy Policy">
      <p>
        At <strong>Aura Jyotish Kendra</strong>, we respect your privacy and explain how we collect and use personal information.
      </p>

      <h2 className="font-semibold mt-4">Information We Collect</h2>
      <p>We collect name, email, phone number, and birth details when you register or request services.</p>

      <h2 className="font-semibold mt-4">How We Use Information</h2>
      <p>Used to provide services, process payments, and improve our offerings. We never sell your data.</p>

      <h2 className="font-semibold mt-4">Data Protection</h2>
      <p>We use reasonable security measures but cannot guarantee 100% online protection.</p>

      <h2 className="font-semibold mt-4">Third-Party Services</h2>
      <p>Payment and communication may involve trusted third-party providers bound to keep your data confidential.</p>

      <p className="mt-4">Questions? <a href="/contact" className="text-blue-600 underline">Contact us</a>.</p>
    </PageShell>
  );
}
