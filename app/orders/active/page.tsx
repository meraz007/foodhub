'use client';

import Container from '@/components/ui/Container';
import { Package, MapPin, Truck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// Sample active orders data
const activeOrders = [
  {
    id: 'ORD-2024-002',
    date: '2024-11-18',
    status: 'in_transit',
    total: 3200,
    items: [
      { name: 'Organic Oats', quantity: 3, image: 'https://images.unsplash.com/photo-1517686748072-7c109e0e7633?w=100&h=100&fit=crop' },
      { name: 'Almond Milk', quantity: 2, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=100&h=100&fit=crop' },
    ],
    estimatedDelivery: '2024-11-22',
    trackingSteps: [
      { label: 'Order Placed', completed: true, date: '2024-11-18 10:30 AM' },
      { label: 'Processing', completed: true, date: '2024-11-18 02:15 PM' },
      { label: 'Shipped', completed: true, date: '2024-11-19 09:00 AM' },
      { label: 'Out for Delivery', completed: false, date: null },
      { label: 'Delivered', completed: false, date: null },
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main Street, Dhaka 1205',
      phone: '+880 1711-123456',
    },
  },
  {
    id: 'ORD-2024-005',
    date: '2024-11-20',
    status: 'processing',
    total: 5600,
    items: [
      { name: 'Premium Coffee Collection', quantity: 1, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=100&h=100&fit=crop' },
      { name: 'Belgian Chocolate Box', quantity: 2, image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=100&h=100&fit=crop' },
    ],
    estimatedDelivery: '2024-11-24',
    trackingSteps: [
      { label: 'Order Placed', completed: true, date: '2024-11-20 03:45 PM' },
      { label: 'Processing', completed: true, date: '2024-11-20 04:30 PM' },
      { label: 'Shipped', completed: false, date: null },
      { label: 'Out for Delivery', completed: false, date: null },
      { label: 'Delivered', completed: false, date: null },
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main Street, Dhaka 1205',
      phone: '+880 1711-123456',
    },
  },
];

export default function ActiveOrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Active Orders</h1>
          <p className="text-gray-600">Track your orders in real-time</p>
        </div>

        {/* Active Orders List */}
        {activeOrders.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No active orders</h3>
            <p className="text-gray-600 mb-6">You don't have any orders in progress</p>
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-primary-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {activeOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Order Header */}
                <div className="bg-gradient-to-r from-accent to-primary-500 text-white p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{order.id}</h3>
                      <p className="text-white/90 text-sm">
                        Ordered on {new Date(order.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/90 text-sm mb-1">Estimated Delivery</p>
                      <p className="text-xl font-bold">
                        {new Date(order.estimatedDelivery).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Order Items */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Order Items</h4>
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tracking Progress */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Truck className="w-5 h-5 text-accent" />
                      Order Tracking
                    </h4>
                    <div className="relative">
                      {order.trackingSteps.map((step, index) => (
                        <div key={index} className="flex gap-4 pb-8 last:pb-0">
                          {/* Timeline */}
                          <div className="flex flex-col items-center">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                step.completed
                                  ? 'bg-green-500 text-white'
                                  : 'bg-gray-200 text-gray-400'
                              }`}
                            >
                              {step.completed ? (
                                <CheckCircle2 className="w-6 h-6" />
                              ) : (
                                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                              )}
                            </div>
                            {index < order.trackingSteps.length - 1 && (
                              <div
                                className={`w-0.5 h-full min-h-[40px] ${
                                  step.completed ? 'bg-green-500' : 'bg-gray-200'
                                }`}
                              ></div>
                            )}
                          </div>
                          
                          {/* Step Info */}
                          <div className="flex-1 pt-1">
                            <p
                              className={`font-semibold ${
                                step.completed ? 'text-gray-900' : 'text-gray-400'
                              }`}
                            >
                              {step.label}
                            </p>
                            {step.date && (
                              <p className="text-sm text-gray-500 mt-1">{step.date}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      Shipping Address
                    </h4>
                    <div className="text-gray-700">
                      <p className="font-medium">{order.shippingAddress.name}</p>
                      <p className="text-sm mt-1">{order.shippingAddress.address}</p>
                      <p className="text-sm mt-1">{order.shippingAddress.phone}</p>
                    </div>
                  </div>

                  {/* Order Total */}
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                    <p className="text-lg font-semibold text-gray-900">Order Total</p>
                    <p className="text-2xl font-bold text-accent">৳{order.total}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}



