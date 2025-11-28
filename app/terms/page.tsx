import { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Terms of Use - FoodHub',
  description: 'Read our terms of use to understand the rules and regulations for using our website and services.',
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-20">
      <Container size="md">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">
          Terms of Use
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg mb-8">
            Last updated: November 17, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using FoodHub's website and services, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on FoodHub's website for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
                this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on FoodHub's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To access certain features of our website, you may be required to register for an account. When you register,
                you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and identification</li>
                <li>Accept all responsibility for activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Product Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that
                product descriptions or other content on this site is accurate, complete, reliable, current, or error-free.
                If a product offered by us is not as described, your sole remedy is to return it in unused condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Pricing and Payment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All prices are displayed in Bangladeshi Taka (BDT) unless otherwise stated. We reserve the right to change
                prices at any time without prior notice. Payment must be made at the time of purchase through our accepted
                payment methods. By placing an order, you agree to pay the full amount including applicable taxes and shipping fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Orders and Acceptance</h2>
              <p className="text-gray-700 leading-relaxed">
                Your order is an offer to purchase products from us. We reserve the right to accept or reject your order
                for any reason, including product availability, errors in pricing or product information, or issues identified
                by our credit and fraud avoidance department. If we reject your order after payment has been processed, we will
                issue a full refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Prohibited Uses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                The website and its original content, features, and functionality are owned by FoodHub and are protected by
                international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not
                reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish,
                download, store, or transmit any of the material on our website without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall FoodHub, its directors, employees, partners, agents, suppliers, or affiliates, be liable
                for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss
                of profits, data, use, goodwill, or other intangible losses, resulting from your use of the website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to defend, indemnify, and hold harmless FoodHub and its licensee and licensors, and their employees,
                contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses,
                liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
                material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a
                material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of Bangladesh, without regard to its conflict of law
                provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of
                those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@foodhub.com<br />
                  <strong>Phone:</strong> +880 1234-567890<br />
                  <strong>Address:</strong> 123 Gulshan Avenue, Dhaka 1212, Bangladesh
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

