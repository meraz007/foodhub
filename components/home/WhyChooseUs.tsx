'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { Truck, Shield, CreditCard, Headphones } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery within 1-3 business days across Bangladesh',
  },
  {
    icon: Shield,
    title: '100% Authentic',
    description: 'All products are sourced directly from authorized distributors',
  },
  {
    icon: CreditCard,
    title: 'Secure Payment',
    description: 'Multiple payment options with secure checkout process',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer service team is always ready to help you',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Why Choose FoodHub?
          </h2>
          <p className="text-gray-600 text-lg">
            We're committed to providing the best shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary-500 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}


