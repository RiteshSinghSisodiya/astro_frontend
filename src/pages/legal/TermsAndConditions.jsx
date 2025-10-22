import PageShell from "../PageShell";

export default function TermsAndConditions() {
  return (
    <PageShell title="Terms & Conditions">
      <p>
        Welcome to <strong>Aura Jyotish Kendra</strong> (“we,” “our,” “us”). By
        accessing or using our website, services, or content, you agree to these
        Terms & Conditions. Please read them carefully before using our
        services.
      </p>

      <h2 className="font-semibold mt-4">1. Services Provided</h2>
      <p>
        We provide astrology-related services such as horoscope readings,
        personalized reports, consultations, remedies, and spiritual guidance.
        These services are intended for personal guidance and spiritual
        awareness. They are <strong>not a substitute</strong> for medical,
        financial, or legal advice.
      </p>

      <h2 className="font-semibold mt-4">2. Eligibility</h2>
      <p>
        You must be <strong>18 years or older</strong> to use our services. If
        you are under 18, you may only use our services under the supervision of
        a parent or guardian. You agree that all information you provide to us
        (such as birth details, contact information, and payment details) is
        accurate and complete.
      </p>

      <h2 className="font-semibold mt-4">3. User Responsibilities</h2>
      <p>
        You agree not to misuse our services, upload harmful content, or engage
        in unlawful activities through our platform. You are responsible for
        maintaining the confidentiality of your account information (if
        applicable).
      </p>

      <h2 className="font-semibold mt-4">4. No Guarantee of Outcomes</h2>
      <p>
        Astrology is interpretive in nature, and while we strive for accuracy,
        outcomes may vary. We <strong>do not guarantee</strong> the accuracy,
        effectiveness, or results of predictions, remedies, or consultations.
        Any decisions you make based on our services are solely your
        responsibility.
      </p>

      <h2 className="font-semibold mt-4">5. Payments & Refunds</h2>
      <p>
        All services must be paid for in advance. Prices may change at our
        discretion. We do not store sensitive payment information. Refunds and
        cancellations are governed strictly by our{" "}
        <a href="/refund" className="text-blue-600 underline">
          Refund & Cancellation Policy
        </a>
        .
      </p>

      <h2 className="font-semibold mt-4">6. Limitation of Liability</h2>
      <p>
        Aura Jyotish Kendra shall not be held liable for any direct, indirect,
        incidental, or consequential damages resulting from the use of our
        services. Our maximum liability shall not exceed the amount paid by you
        for the specific service.
      </p>

      <h2 className="font-semibold mt-4">7. Intellectual Property</h2>
      <p>
        All content on our website, including reports, graphics, text, and
        designs, is the intellectual property of Aura Jyotish Kendra. You may
        not copy, distribute, or reproduce our content without prior written
        permission.
      </p>

      <h2 className="font-semibold mt-4">8. Termination of Services</h2>
      <p>
        We reserve the right to suspend or terminate your access to our services
        if you violate these terms, misuse the platform, or engage in fraudulent
        activity.
      </p>

      <h2 className="font-semibold mt-4">9. Governing Law</h2>
      <p>
        These Terms & Conditions are governed by the laws of India. Any disputes
        shall be subject to the jurisdiction of the courts located in{" "}
        <strong>Greater Noida, Uttar Pradesh
          </strong>.
      </p>

      <h2 className="font-semibold mt-4">10. Changes to Terms</h2>
      <p>
        We reserve the right to update or modify these Terms at any time. Any
        changes will be posted on this page. Continued use of our services means
        that you accept the revised Terms.
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
