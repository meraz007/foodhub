import { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Returns & Exchanges - FoodHub',
  description: 'Learn about our returns and exchanges policy, including how to return items and request exchanges.',
};

export default function ReturnsPage() {
  return (
    <div className="py-16 md:py-20">
      <Container size="md">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">
          Returns & Exchanges
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg mb-8">
            Last updated: November 17, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                At FoodHub, we want you to be completely satisfied with your purchase. If you need to return or exchange
                an item, we have a straightforward process to help you. This policy covers both returns (for refunds) and
                exchanges (for different products or sizes).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Return Eligibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Items are eligible for return if they meet the following criteria:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Product is damaged, defective, or not as described</li>
                <li>Wrong product was received</li>
                <li>Product is expired or past its best-before date</li>
                <li>Unopened products returned within 3 days of delivery (change of mind)</li>
                <li>Product is in its original packaging and condition</li>
                <li>Return request is made within the specified timeframe</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Return Timeframe</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Return requests must be initiated within:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Damaged/Defective/Wrong Products:</strong> 7 days from delivery date</li>
                <li><strong>Expired Products:</strong> 7 days from delivery date</li>
                <li><strong>Change of Mind:</strong> 3 days from delivery date (unopened products only)</li>
                <li><strong>Exchange Requests:</strong> 7 days from delivery date</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. How to Initiate a Return</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To start a return or exchange process:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Contact our customer service team at returns@foodhub.com or call +880 1234-567890</li>
                <li>Provide your order number and reason for return/exchange</li>
                <li>For damaged or defective items, include clear photos showing the issue</li>
                <li>Our team will review your request and provide a Return Authorization (RA) number</li>
                <li>Follow the return instructions provided by our team</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Return Process</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once your return is authorized:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Package the item securely in its original packaging when possible</li>
                <li>Include the Return Authorization number on the package</li>
                <li>For damaged/defective items, we will arrange pickup at no cost to you</li>
                <li>For change of mind returns, you are responsible for return shipping costs</li>
                <li>Ship the item to the address provided by our customer service team</li>
                <li>Keep your return tracking number for reference</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Exchange Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer exchanges for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Different size or variant of the same product (subject to availability)</li>
                <li>Different product of equal or greater value</li>
                <li>Exchanges must be requested within 7 days of delivery</li>
                <li>Items must be unopened and in original condition for size/variant exchanges</li>
                <li>If exchanging for a higher-value product, you will pay the price difference</li>
                <li>If exchanging for a lower-value product, you will receive a refund for the difference</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Return Shipping</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Return shipping costs:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Free Return Shipping:</strong> For damaged, defective, wrong, or expired products</li>
                <li><strong>Customer Pays:</strong> For change of mind returns or exchanges</li>
                <li>We will provide a prepaid return label for eligible returns</li>
                <li>For customer-paid returns, use a trackable shipping method</li>
                <li>We are not responsible for items lost during return shipping if not using our provided label</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Refund Processing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once we receive and inspect your returned item:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We will process your refund within 5-10 business days</li>
                <li>Refunds are issued to the original payment method</li>
                <li>You will receive an email confirmation when the refund is processed</li>
                <li>For exchanges, we will ship the new item once the return is received and approved</li>
                <li>Processing time may be longer during peak seasons</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Non-Returnable Items</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following items cannot be returned or exchanged:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Opened and consumed food products (unless defective or expired)</li>
                <li>Perishable items that have been opened</li>
                <li>Digital products or gift cards</li>
                <li>Custom or personalized items</li>
                <li>Items damaged due to misuse or negligence</li>
                <li>Items returned after the return timeframe has expired</li>
                <li>Items without a valid Return Authorization number</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Condition Requirements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For returns to be accepted, items must be:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>In original, unopened condition (for change of mind returns)</li>
                <li>In original packaging when possible</li>
                <li>Included with all original accessories, tags, and documentation</li>
                <li>Not used, damaged, or altered by the customer</li>
                <li>For damaged/defective items, photos must clearly show the issue</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Partial Returns</h2>
              <p className="text-gray-700 leading-relaxed">
                If you ordered multiple items and only want to return some of them, you can do so. Each item will be
                evaluated individually. Refunds will be processed for returned items only, and shipping fees will be
                calculated proportionally.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Exchange Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                Exchanges are subject to product availability. If the item you want to exchange for is out of stock,
                we will notify you and offer alternatives or process a refund instead. We recommend contacting us as
                soon as possible to check availability before initiating an exchange.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our returns and exchanges policy or need assistance, please contact us:
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  <strong>Email:</strong> returns@foodhub.com<br />
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

