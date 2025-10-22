import PageShell from "../PageShell";

export default function ShippingPolicy() {
  return (
    <PageShell title="Shipping Policy">
      <h2 className="font-semibold mt-2">1. Order Processing</h2>
      <p>
        All orders placed on <strong>Aura&nbsp;Jyotish&nbsp;Kendra</strong> are
        processed within 1–2 business days after payment is received and
        verified.
      </p>

      <p>
        Orders placed on weekends or public holidays will begin processing on
        the next business day.
      </p>

      <p>
        If there is any delay (e.g., due to stock availability, special
        packaging or festive demand), we will notify you by email or phone as
        soon as possible.
      </p>

      <h2 className="font-semibold mt-4">2. Shipping Destinations &amp; Carriers</h2>
      <p>We currently ship to addresses within India (domestic shipping).</p>

      <p>
        We may offer international shipping in future—please contact us for
        inquiries.
      </p>

      <p>
        Shipments are dispatched via trusted courier partners for safe and
        timely delivery.
      </p>

      <h2 className="font-semibold mt-4">3. Shipping Rates &amp; Delivery Time</h2>
      <p>
        Standard shipping inside India is charged at a flat rate of ₹[X] (or
        free above a certain order value—modify as applicable).
      </p>

      <p>Estimated delivery time:</p>
      <ul className="list-disc pl-6">
        <li>Metro cities: 2–4 business days after dispatch</li>
        <li>Non‑metro / rural areas: 4–7 business days after dispatch</li>
      </ul>

      <p>
        Note: Delivery time is an estimate and can be extended due to courier
        logistics, natural conditions or remote locations.
      </p>

      <h2 className="font-semibold mt-4">4. Order Tracking</h2>
      <p>
        Once your order is dispatched, we will send you a confirmation email
        (or SMS) with a tracking number and courier details.
      </p>

      <p>
        You can use this tracking number to monitor the shipment status on the
        courier’s website.
      </p>

      <h2 className="font-semibold mt-4">5. Address &amp; Delivery Instructions</h2>
      <p>
        Please ensure that the shipping address you provide is accurate and
        complete (street, landmark, PIN code, state).
      </p>

      <p>
        We strongly recommend a mobile number for smooth delivery coordination.
      </p>

      <p>
        If the courier cannot deliver due to an incomplete address, the package
        may be returned; any re‑shipping charge is the customer’s
        responsibility.
      </p>

      <h2 className="font-semibold mt-4">6. Failed Deliveries &amp; Returns to Sender</h2>
      <p>
        If the shipment is returned to us due to non‑delivery, refusal, or
        incorrect address, you will be notified.
      </p>

      <p>
        A re‑shipment fee will apply (and shipping will be recalculated) if you
        still want the order resent.
      </p>

      <p>
        If the order is cancelled after dispatch, shipping charges are
        non‑refundable.
      </p>

      <h2 className="font-semibold mt-4">7. International Orders (If applicable)</h2>
      <p>
        Duties, customs, taxes or fees incurred for international shipments are
        the buyer’s responsibility.
      </p>

      <p>
        Delivery times for international orders vary by country and customs
        clearance.
      </p>

      <h2 className="font-semibold mt-4">8. Damaged or Missing Items</h2>
      <p>Please inspect your package immediately upon arrival.</p>

      <p>
        If you find any damage, missing items or incorrect products, contact us
        within 48 hours of delivery at [insert your support email] with:
      </p>

      <ul className="list-disc pl-6">
        <li>Order number</li>
        <li>Description and photo of the damage or issue</li>
      </ul>

      <p>
        We will assess the matter and either send a replacement or issue a
        refund, as per our returns policy.
      </p>
    </PageShell>
  );
}
