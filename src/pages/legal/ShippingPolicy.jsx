import PageShell from "../PageShell";

export default function ShippingPolicy() {
  return (
    <PageShell title="Shipping Policy">
      <p className="italic mb-4">Last updated: 23/10/2025</p>

      <p>
        Thank you for choosing <strong>Aura Jyotish Kendra</strong> for your
        astrology consultation needs. Please read our Shipping Policy carefully
        to understand how we process and deliver our services.
      </p>

      <h2 className="font-semibold mt-4">1. Order Processing</h2>
      <p>
        All our astrology consultations and reports are delivered digitally — we
        do not provide any physical shipment or printed copies.
      </p>
      <ul className="list-disc pl-6">
        <li>
          <strong>Order Confirmation:</strong> Once your payment is successfully
          completed through Razorpay, you will receive a confirmation message
          via email or WhatsApp containing your order details.
        </li>
        <li>
          <strong>Processing Time:</strong> We aim to deliver your astrology
          consultation or report within 2 business days from the time of payment
          confirmation.
        </li>
        <li>
          <strong>Delivery Channels:</strong> All digital consultations and
          reports are shared via the communication method selected by you at
          checkout — email or WhatsApp.
        </li>
      </ul>

      <h2 className="font-semibold mt-4">2. Delivery Timeline</h2>
      <p>
        Our typical delivery timeline is within 48 hours (2 business days) after
        confirmation of your payment. If your order requires additional details
        (such as birth information or query clarification), delivery time will
        begin after we receive the necessary information from you.
      </p>

      <h2 className="font-semibold mt-4">3. Delivery Method</h2>
      <p>Since our services are digital, delivery is made electronically.</p>
      <ul className="list-disc pl-6">
        <li>
          A written astrology report or consultation summary via email or
          WhatsApp, and/or
        </li>
        <li>
          Direct consultation through WhatsApp chat, as per your service
          selection.
        </li>
      </ul>
      <p>No physical delivery or courier service is involved.</p>

      <h2 className="font-semibold mt-4">4. Delays or Non-Delivery</h2>
      <p>
        While we make every effort to ensure timely delivery, delays may occur
        in the following cases:
      </p>
      <ul className="list-disc pl-6">
        <li>Incorrect or incomplete contact information provided by the customer.</li>
        <li>Technical or internet connectivity issues.</li>
        <li>High order volumes or unforeseen circumstances.</li>
      </ul>
      <p>
        If you do not receive your consultation within the expected time, please
        contact us at{" "}
        <a
          href="mailto:support@aurajyotishkendra.com"
          className="text-blue-600 underline"
        >
          support@aurajyotishkendra.com
        </a>
        {" or "}
        <a
          href="tel:+919829495886"
          className="text-blue-600 underline"
        >
          +91 9829495886
        </a>{" "}
        and we will promptly assist you.
      </p>

      <h2 className="font-semibold mt-4">5. No Shipping Charges</h2>
      <p>
        As all services are delivered digitally, no shipping fees or additional
        delivery charges apply to any order.
      </p>

      <h2 className="font-semibold mt-4">6. Service Completion and Acknowledgment</h2>
      <p>
        Once your consultation or report has been delivered via email or
        WhatsApp, the service is considered completed. You will also receive a
        confirmation message to acknowledge successful delivery.
      </p>

      <h2 className="font-semibold mt-4">7. Changes to Order or Contact Details</h2>
      <p>
        If you need to update your contact information (email or WhatsApp
        number) after placing an order, please inform us within 12 hours of your
        order confirmation. Any delay in communication may affect timely
        delivery.
      </p>

      <h2 className="font-semibold mt-4">8. Refunds and Revisions</h2>
      <p>
        Since astrology consultations are personalized digital services, they
        are non-refundable once delivered. However, if you do not receive your
        service within the promised timeframe due to an issue on our end, we may
        offer a full refund or re-delivery, at our discretion. For more details,
        please refer to our Refund Policy.
      </p>

      <h2 className="font-semibold mt-4">9. Contact Us</h2>
      <p>
        If you have any questions regarding your order delivery, please contact
        us:
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
