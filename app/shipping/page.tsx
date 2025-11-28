import { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Shipping Policy - FoodHub',
  description: 'Learn about our shipping policy, delivery times, and shipping fees.',
};

export default function ShippingPage() {
  return (
    <div className="py-16 md:py-20">
      <Container size="md">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">
          Shipping Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg mb-8">
            Last updated: November 17, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Shipping Areas</h2>
              <p className="text-gray-700 leading-relaxed">
                Currently, FoodHub provides shipping services throughout Bangladesh. We deliver to all major cities,
                districts, and upazilas across the country. We are continuously expanding our delivery network to reach
                more customers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Processing Time</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All orders are processed within 1-2 business days (excluding weekends and public holidays) after payment
                confirmation. Processing time may be longer during peak seasons, holidays, or promotional periods.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Once your order is processed and shipped, you will receive a confirmation email with tracking information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Delivery Timeframes</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Delivery times vary based on your location:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Dhaka City:</strong> 1-2 business days</li>
                <li><strong>Other Major Cities (Chittagong, Sylhet, Rajshahi, etc.):</strong> 2-3 business days</li>
                <li><strong>District Towns:</strong> 3-5 business days</li>
                <li><strong>Upazilas and Remote Areas:</strong> 5-7 business days</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Please note that delivery times are estimates and may be affected by weather conditions, public holidays,
                or other unforeseen circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Shipping Fees</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Shipping fees are calculated based on:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Order weight and dimensions</li>
                <li>Delivery location</li>
                <li>Shipping method selected</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Free Shipping:</strong> Orders over ৳2,000 qualify for free standard shipping within Dhaka city.
                For other locations, free shipping is available on orders over ৳3,000.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Shipping fees are displayed at checkout before you complete your purchase. You can review all charges
                before finalizing your order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Shipping Methods</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer the following shipping options:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Standard Shipping:</strong> Our standard delivery service (default option)</li>
                <li><strong>Express Shipping:</strong> Faster delivery available for Dhaka and major cities (additional fee applies)</li>
                <li><strong>Same-Day Delivery:</strong> Available for Dhaka city only on orders placed before 12:00 PM (additional fee applies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Order Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                Once your order is shipped, you will receive an email with a tracking number. You can use this tracking
                number to monitor your package's progress through our website or by contacting our customer service team.
                Tracking information is typically updated within 24 hours of shipment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Delivery Address</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please ensure that your delivery address is complete and accurate. We are not responsible for delays or
                failed deliveries due to incorrect or incomplete addresses. If you need to change your delivery address
                after placing an order, please contact us immediately.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For the safety of your order, we recommend providing a delivery address where someone will be available
                to receive the package during business hours.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Failed Deliveries</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If a delivery attempt fails due to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Incorrect or incomplete address</li>
                <li>Recipient not available at the delivery address</li>
                <li>Refusal to accept the package</li>
                <li>Inability to access the delivery location</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our delivery partner will make additional attempts to deliver your order. If all attempts fail, the package
                will be returned to our warehouse, and you may be charged additional shipping fees for re-delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Damaged or Lost Packages</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we take great care in packaging your orders, occasionally packages may be damaged or lost during transit.
                If you receive a damaged package or your order does not arrive within the expected timeframe:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Contact us immediately at support@foodhub.com or call +880 1234-567890</li>
                <li>Provide your order number and details of the issue</li>
                <li>For damaged packages, take photos of the damage</li>
                <li>We will investigate and provide a replacement or full refund as appropriate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. International Shipping</h2>
              <p className="text-gray-700 leading-relaxed">
                Currently, we only ship within Bangladesh. We are working on expanding our services to include international
                shipping in the future. Please check back regularly or subscribe to our newsletter for updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Special Handling</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some products require special handling:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Perishable items are shipped with temperature-controlled packaging</li>
                <li>Fragile items are carefully packaged with extra protection</li>
                <li>Large or heavy items may require special delivery arrangements</li>
                <li>Certain products may have restrictions on shipping to specific areas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our shipping policy or need assistance with your order, please contact us:
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  <strong>Email:</strong> shipping@foodhub.com<br />
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

