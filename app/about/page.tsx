import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { Heart, Users, Package, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - FoodHub',
  description: 'Learn more about FoodHub, your trusted source for premium imported food products in Bangladesh.',
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-20">
      <Container>
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
            About FoodHub
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're passionate about bringing the world's finest food products to Bangladesh.
            Since our inception, we've been committed to offering authentic international brands
            and premium quality products to food enthusiasts across the country.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold font-display mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            To make premium imported food products accessible to everyone in Bangladesh,
            while maintaining the highest standards of quality, authenticity, and customer service.
            We believe everyone deserves to enjoy the world's best food products without compromise.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-display mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-xl mb-2">Passion</h3>
              <p className="text-gray-600">
                We love what we do and it shows in every product we deliver
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-bold text-xl mb-2">Quality</h3>
              <p className="text-gray-600">
                Only the finest, authentic products make it to our shelves
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-200/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority, always
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Reliability</h3>
              <p className="text-gray-600">
                Fast, safe delivery you can count on every time
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-display mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              FoodHub was born from a simple idea: everyone in Bangladesh should have access
              to the world's finest food products. Our founders, passionate food enthusiasts
              themselves, noticed the lack of authentic international brands in the local market.
            </p>
            <p>
              Starting with a small selection of imported chocolates and coffee, we quickly
              expanded our catalog based on customer feedback and requests. Today, we offer
              hundreds of products across multiple categories, all carefully selected and
              verified for authenticity.
            </p>
            <p>
              We work directly with authorized distributors and importers to ensure every
              product meets our strict quality standards. Our team personally tests and
              approves each product before it's made available to our customers.
            </p>
            <p>
              As we continue to grow, our commitment remains unchanged: to provide the best
              imported food products with exceptional customer service and competitive prices.
              Thank you for being part of our journey!
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-gray-600">Brands</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </Container>
    </div>
  );
}


