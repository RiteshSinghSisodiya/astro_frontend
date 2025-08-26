import PageShell from "../PageShell";

export default function ContactUs() {
  return (
    <PageShell title="Contact Us">
      <p>Have questions or need assistance? Get in touch with <strong>Aura Jyotish Kendra</strong>:</p>

      <h2 className="font-semibold mt-4">Phone</h2>
      <p><a href="tel:+911234567890" className="text-blue-600 underline">+91 12345 67890</a></p>

      <h2 className="font-semibold mt-4">Email</h2>
      <p><a href="mailto:info@aurajyotishkendra.com" className="text-blue-600 underline">info@aurajyotishkendra.com</a></p>
    </PageShell>
  );
}
