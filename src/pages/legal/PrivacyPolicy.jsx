import PageShell from "../PageShell";

export default function PrivacyPolicy() {
  return (
    <PageShell title="Privacy Policy">
      <p>
        At <strong>Aura Jyotish Kendra</strong>, we respect your privacy and are
        committed to protecting your personal information. This Privacy Policy
        explains what data we collect, how we use it, and the steps we take to
        keep it secure.
      </p>

      <h2 className="font-semibold mt-4">1. Information We Collect</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, address, and birth details (date, time, and place of birth)
          provided while registering or requesting services.
        </li>
        <li>
          <strong>Payment Information:</strong> Transaction details (processed
          through secure third-party gateways). We do not store sensitive card
          details.
        </li>
        <li>
          <strong>Technical Information:</strong> IP address, browser type,
          device information, and usage data collected through cookies and
          analytics tools.
        </li>
      </ul>

      <h2 className="font-semibold mt-4">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>To prepare personalized astrology reports and consultations.</li>
        <li>To process payments securely and confirm transactions.</li>
        <li>
          To communicate service-related updates, reminders, or customer support
          responses.
        </li>
        <li>To improve our services, website performance, and user experience.</li>
        <li>
          To send newsletters, promotions, or offers (only if you have opted-in).
        </li>
      </ul>

      <h2 className="font-semibold mt-4">3. Data Sharing & Disclosure</h2>
      <p>
        We <strong>do not sell, rent, or trade</strong> your personal
        information. However, we may share limited data with:
      </p>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>
          Trusted third-party service providers such as payment processors,
          hosting providers, and communication platforms.
        </li>
        <li>
          Legal authorities, if required by law, regulation, or court order.
        </li>
      </ul>

      <h2 className="font-semibold mt-4">4. Data Protection</h2>
      <p>
        We use industry-standard security measures such as SSL encryption,
        secure servers, and firewalls to safeguard your information. However, no
        method of online transmission is 100% secure, and we cannot guarantee
        absolute protection.
      </p>

      <h2 className="font-semibold mt-4">5. Cookies & Tracking</h2>
      <p>
        Our website uses cookies to enhance user experience, remember
        preferences, and analyze traffic. You may disable cookies in your
        browser settings, but some features of the site may not work properly.
      </p>

      <h2 className="font-semibold mt-4">6. Your Rights</h2>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>You may request access to the personal data we hold about you.</li>
        <li>You can ask for corrections if your data is inaccurate.</li>
        <li>
          You may request deletion of your data, subject to legal or contractual
          obligations.
        </li>
        <li>
          You may opt out of receiving promotional communications at any time.
        </li>
      </ul>

      <h2 className="font-semibold mt-4">7. Third-Party Links</h2>
      <p>
        Our website may include links to third-party websites. We are not
        responsible for the content, security, or privacy practices of such
        external sites.
      </p>

      <h2 className="font-semibold mt-4">8. Changes to Privacy Policy</h2>
      <p>
        Aura Jyotish Kendra reserves the right to update or revise this Privacy
        Policy at any time. Any changes will be effective immediately upon
        posting on this page.
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
