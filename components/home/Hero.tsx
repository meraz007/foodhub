'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ShoppingBag, Truck, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent/5 py-8 md:py-12 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />

      <Container>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                🎉 Free Shipping on Orders Over ৳2000
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-6 mb-6 leading-tight">
              Premium{' '}
              <span className="bg-gradient-to-r from-accent to-primary-500 bg-clip-text text-transparent">
                Imported Foods
              </span>{' '}
              Delivered to Your Door
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover authentic international brands and premium food products from around the world.
              Quality guaranteed, delivered fresh to Bangladesh.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/category/chocolate">
                <Button size="lg" variant="primary">
                  <ShoppingBag className="w-5 h-5" />
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
                  <p className="text-sm text-gray-500">1-3 Days</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">100% Authentic</h3>
                  <p className="text-sm text-gray-500">Guaranteed</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Best Prices</h3>
                  <p className="text-sm text-gray-500">Value for Money</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&h=800&fit=crop"
                alt="Premium Imported Foods"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/800x800/F3F4F6/6B7280?text=Premium+Foods';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}


