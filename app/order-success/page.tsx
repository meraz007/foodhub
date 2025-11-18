'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { CheckCircle2, Home, Package } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-success/10 rounded-full mb-6"
          >
            <CheckCircle2 className="w-12 h-12 text-success" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Order Placed Successfully! 🎉
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Thank you for your order! We've received your order and will start processing it right away.
            You'll receive a confirmation email shortly.
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h2 className="font-semibold text-lg mb-4">What's Next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Order Confirmation</h3>
                  <p className="text-sm text-gray-600">You'll receive an email with your order details</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Processing</h3>
                  <p className="text-sm text-gray-600">We'll prepare your order for shipment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-accent font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Delivery</h3>
                  <p className="text-sm text-gray-600">Your order will arrive within 1-3 business days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" variant="primary">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            <Link href="/category/chocolate">
              <Button size="lg" variant="outline">
                <Package className="w-5 h-5" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}


