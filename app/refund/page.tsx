import { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Refund Policy - FoodHub',
  description: 'Learn about our refund policy and how to request a refund for your purchase.',
};

export default function RefundPage() {
  return (
    <div className="py-16 md:py-20">
      <Container size="md">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">
          Refund Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg mb-8">
            Last updated: November 17, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                At FoodHub, we want you to be completely satisfied with your purchase. If you are not satisfied with your
                order for any reason, we offer a comprehensive refund policy. This policy outlines the conditions and
                procedures for requesting and receiving refunds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Eligibility for Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may be eligible for a refund if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The product you received is damaged, defective, or not as described</li>
                <li>You received the wrong product</li>
                <li>The product is expired or past its best-before date</li>
                <li>Your order was cancelled before shipment</li>
                <li>You cancelled your order within the allowed cancellation period</li>
                <li>We are unable to fulfill your order due to stock unavailability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Refund Timeframe</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refund requests must be submitted within the following timeframes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Damaged or Defective Products:</strong> Within 7 days of delivery</li>
                <li><strong>Wrong Product:</strong> Within 7 days of delivery</li>
                <li><strong>Expired Products:</strong> Within 7 days of delivery</li>
                <li><strong>Order Cancellation:</strong> Before the order is shipped</li>
                <li><strong>Change of Mind:</strong> Within 3 days of delivery (unopened products only)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. How to Request a Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Contact our customer service team via email at refunds@foodhub.com or call +880 1234-567890</li>
                <li>Provide your order number and reason for the refund request</li>
                <li>For damaged or defective products, include photos showing the issue</li>
                <li>Our team will review your request within 1-2 business days</li>
                <li>If approved, we will process your refund using the original payment method</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Refund Processing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once your refund request is approved:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Refunds will be processed within 5-10 business days</li>
                <li>The refund will be issued to the original payment method used for the purchase</li>
                <li>You will receive an email confirmation once the refund has been processed</li>
                <li>Depending on your bank or payment provider, it may take additional time for the refund to appear in your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Refund Amount</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The refund amount will include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Full product price for damaged, defective, or wrong products</li>
                <li>Full product price for expired products</li>
                <li>Shipping fees if the product was damaged, defective, or wrong</li>
                <li>For change of mind refunds, shipping fees are non-refundable</li>
                <li>Partial refunds may apply for partially damaged orders</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Return of Products</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In some cases, we may require you to return the product before processing a refund:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>For change of mind refunds, products must be returned in original, unopened condition</li>
                <li>For damaged or defective products, we may request return of the item for quality inspection</li>
                <li>Return shipping costs will be covered by FoodHub for damaged, defective, or wrong products</li>
                <li>For change of mind returns, return shipping costs are the customer's responsibility</li>
                <li>Products must be returned in their original packaging when possible</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Non-Refundable Items</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following items are generally not eligible for refunds:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Products that have been opened and consumed (unless defective or expired)</li>
                <li>Perishable items that have been opened</li>
                <li>Digital products or gift cards</li>
                <li>Custom or personalized items</li>
                <li>Products damaged due to misuse or negligence</li>
                <li>Items returned after the refund timeframe has expired</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Cancelled Orders</h2>
              <p className="text-gray-700 leading-relaxed">
                If you cancel your order before it is shipped, you will receive a full refund including shipping fees.
                If the order has already been shipped, you may need to wait for delivery and then initiate a return
                following our standard refund process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Disputes and Chargebacks</h2>
              <p className="text-gray-700 leading-relaxed">
                We encourage customers to contact us directly to resolve any issues before initiating a chargeback with
                their bank or payment provider. Chargebacks may result in additional fees and delays. We are committed to
                working with you to resolve any concerns promptly and fairly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our refund policy or need assistance with a refund request, please contact us:
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  <strong>Email:</strong> refunds@foodhub.com<br />
                  <strong>Phone:</strong> +880 1234-567890<br />
                  <strong>Address:</strong> 123 Gulshan Avenue, Dhaka 1212, Bangladesh<br />
                  <strong>Business Hours:</strong> Sunday - Thursday, 9:00 AM - 6:00 PM (BST)
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

