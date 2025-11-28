'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import {
  ArrowLeft,
  Package,
  Truck,
  CheckCircle2,
  XCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  Download,
  MessageCircle,
  AlertCircle,
  Receipt,
  CreditCard,
} from 'lucide-react';

// Sample order data - replace with actual API call
const getOrderDetails = (orderId: string) => {
  const orders: Record<string, any> = {
    'ORD-2024-001': {
      id: 'ORD-2024-001',
      orderDate: '2024-11-15T10:30:00',
      status: 'delivered',
      paymentStatus: 'paid',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-123456789',
      items: [
        {
          id: '1',
          name: 'Premium Dark Chocolate',
          sku: 'CHO-001',
          quantity: 2,
          price: 1200,
          image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=200&h=200&fit=crop',
          category: 'Chocolate',
        },
        {
          id: '2',
          name: 'Imported Coffee Beans',
          sku: 'COF-002',
          quantity: 1,
          price: 2100,
          image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&h=200&fit=crop',
          category: 'Coffee',
        },
      ],
      subtotal: 4500,
      discount: 500,
      discountCode: 'SAVE500',
      shippingCost: 100,
      tax: 0,
      total: 4100,
      deliveredDate: '2024-11-18T14:30:00',
      estimatedDelivery: '2024-11-18',
      shippingAddress: {
        name: 'John Doe',
        phone: '+880 1711-123456',
        email: 'john.doe@example.com',
        address: '123 Main Street',
        city: 'Dhaka',
        area: 'Gulshan',
        postalCode: '1205',
      },
      billingAddress: {
        name: 'John Doe',
        phone: '+880 1711-123456',
        email: 'john.doe@example.com',
        address: '123 Main Street',
        city: 'Dhaka',
        area: 'Gulshan',
        postalCode: '1205',
      },
      trackingHistory: [
        {
          status: 'Order Placed',
          timestamp: '2024-11-15T10:30:00',
          description: 'Your order has been successfully placed',
          completed: true,
        },
        {
          status: 'Payment Confirmed',
          timestamp: '2024-11-15T10:35:00',
          description: 'Payment received and confirmed',
          completed: true,
        },
        {
          status: 'Processing',
          timestamp: '2024-11-15T14:00:00',
          description: 'Order is being prepared for shipment',
          completed: true,
        },
        {
          status: 'Shipped',
          timestamp: '2024-11-16T09:00:00',
          description: 'Package has been handed over to courier',
          completed: true,
        },
        {
          status: 'Out for Delivery',
          timestamp: '2024-11-18T08:00:00',
          description: 'Package is out for delivery',
          completed: true,
        },
        {
          status: 'Delivered',
          timestamp: '2024-11-18T14:30:00',
          description: 'Package delivered successfully',
          completed: true,
        },
      ],
      courierInfo: {
        name: 'FastEx Delivery',
        trackingNumber: 'FEX123456789BD',
        contactPhone: '+880 1700-000000',
      },
      notes: 'Please ring the doorbell upon arrival.',
      canCancel: false,
      canReturn: true,
      returnDeadline: '2024-11-25',
    },
    'ORD-2024-002': {
      id: 'ORD-2024-002',
      orderDate: '2024-11-18T15:45:00',
      status: 'processing',
      paymentStatus: 'paid',
      paymentMethod: 'bKash',
      transactionId: 'BKS987654321',
      items: [
        {
          id: '3',
          name: 'Organic Oats',
          sku: 'OAT-003',
          quantity: 3,
          price: 800,
          image: 'https://images.unsplash.com/photo-1517686748072-7c109e0e7633?w=200&h=200&fit=crop',
          category: 'Breakfast',
        },
        {
          id: '4',
          name: 'Almond Milk',
          sku: 'MLK-004',
          quantity: 2,
          price: 600,
          image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop',
          category: 'Dairy',
        },
      ],
      subtotal: 3600,
      discount: 0,
      discountCode: null,
      shippingCost: 80,
      tax: 0,
      total: 3680,
      deliveredDate: null,
      estimatedDelivery: '2024-11-22',
      shippingAddress: {
        name: 'John Doe',
        phone: '+880 1711-123456',
        email: 'john.doe@example.com',
        address: '456 Business Avenue',
        city: 'Dhaka',
        area: 'Banani',
        postalCode: '1212',
      },
      billingAddress: {
        name: 'John Doe',
        phone: '+880 1711-123456',
        email: 'john.doe@example.com',
        address: '456 Business Avenue',
        city: 'Dhaka',
        area: 'Banani',
        postalCode: '1212',
      },
      trackingHistory: [
        {
          status: 'Order Placed',
          timestamp: '2024-11-18T15:45:00',
          description: 'Your order has been successfully placed',
          completed: true,
        },
        {
          status: 'Payment Confirmed',
          timestamp: '2024-11-18T15:50:00',
          description: 'Payment received via bKash',
          completed: true,
        },
        {
          status: 'Processing',
          timestamp: '2024-11-18T16:30:00',
          description: 'Order is being prepared for shipment',
          completed: true,
        },
        {
          status: 'Shipped',
          timestamp: null,
          description: 'Package will be shipped soon',
          completed: false,
        },
        {
          status: 'Out for Delivery',
          timestamp: null,
          description: 'Package will be out for delivery',
          completed: false,
        },
        {
          status: 'Delivered',
          timestamp: null,
          description: 'Package will be delivered',
          completed: false,
        },
      ],
      courierInfo: null,
      notes: null,
      canCancel: true,
      canReturn: false,
      returnDeadline: null,
    },
  };

  return orders[orderId] || null;
};

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.orderId as string;
  const order = getOrderDetails(orderId);
  const [showCancelModal, setShowCancelModal] = useState(false);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <Container>
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Order Not Found</h3>
            <p className="text-gray-600 mb-6">
              The order you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/orders"
              className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-primary-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              View All Orders
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'processing':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'cancelled':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'shipped':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'processing':
        return <Clock className="w-5 h-5" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5" />;
      case 'shipped':
        return <Truck className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  const handleCancelOrder = () => {
    // Cancel order logic here
    console.log('Cancelling order:', orderId);
    setShowCancelModal(false);
  };

  const handleDownloadInvoice = () => {
    // Download invoice logic here
    console.log('Downloading invoice for:', orderId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        {/* Back Button & Header */}
        <div className="mb-6">
          <Link
            href="/orders"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-accent font-medium mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Orders
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Details</h1>
              <p className="text-gray-600">
                Order ID: <span className="font-semibold text-gray-900">{order.id}</span>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleDownloadInvoice}
                className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 hover:border-accent text-gray-700 hover:text-accent rounded-lg font-medium transition-all"
              >
                <Download className="w-4 h-4" />
                Download Invoice
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 hover:border-accent text-gray-700 hover:text-accent rounded-lg font-medium transition-all">
                <MessageCircle className="w-4 h-4" />
                Contact Support
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Status Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 ${getStatusColor(order.status)} font-semibold text-sm capitalize`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.paymentStatus === 'paid'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-orange-50 text-orange-700'
                    }`}>
                      {order.paymentStatus === 'paid' ? 'Paid' : 'Pending Payment'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Placed on {new Date(order.orderDate).toLocaleString('en-US', {
                      dateStyle: 'full',
                      timeStyle: 'short',
                    })}
                  </p>
                </div>

                {order.status === 'delivered' && order.deliveredDate && (
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Delivered on</p>
                    <p className="text-lg font-bold text-green-600">
                      {new Date(order.deliveredDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                )}

                {order.status === 'processing' && order.estimatedDelivery && (
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Expected by</p>
                    <p className="text-lg font-bold text-blue-600">
                      {new Date(order.estimatedDelivery).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                )}
              </div>

              {/* Tracking Timeline */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-accent" />
                  Order Tracking
                </h3>
                <div className="space-y-4">
                  {order.trackingHistory.map((track: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            track.completed
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-200 text-gray-400'
                          }`}
                        >
                          {track.completed ? (
                            <CheckCircle2 className="w-6 h-6" />
                          ) : (
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          )}
                        </div>
                        {index < order.trackingHistory.length - 1 && (
                          <div
                            className={`w-0.5 h-16 ${
                              track.completed ? 'bg-green-500' : 'bg-gray-200'
                            }`}
                          ></div>
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <p className={`font-semibold ${track.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                          {track.status}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">{track.description}</p>
                        {track.timestamp && (
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(track.timestamp).toLocaleString('en-US', {
                              dateStyle: 'medium',
                              timeStyle: 'short',
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Courier Info */}
              {order.courierInfo && (
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="font-bold text-gray-900 mb-3">Courier Information</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm text-gray-600">Courier Service</p>
                        <p className="font-semibold text-gray-900">{order.courierInfo.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Tracking Number</p>
                        <p className="font-mono font-semibold text-gray-900">
                          {order.courierInfo.trackingNumber}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Contact</p>
                        <p className="font-semibold text-gray-900">{order.courierInfo.contactPhone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-accent" />
                Order Items ({order.items.length})
              </h3>
              <div className="space-y-4">
                {order.items.map((item: any) => (
                  <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-accent transition-colors">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            <span className="bg-gray-100 px-2 py-0.5 rounded">{item.category}</span>
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">৳{item.price}</p>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                        <p className="text-sm text-gray-600">Item Total</p>
                        <p className="font-bold text-accent">৳{item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Addresses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Shipping Address */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  Shipping Address
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-gray-900">{order.shippingAddress.name}</p>
                  <p className="text-sm">{order.shippingAddress.address}</p>
                  <p className="text-sm">
                    {order.shippingAddress.area}, {order.shippingAddress.city} -{' '}
                    {order.shippingAddress.postalCode}
                  </p>
                  <div className="flex items-center gap-2 text-sm pt-2 border-t border-gray-100">
                    <Phone className="w-4 h-4 text-gray-400" />
                    {order.shippingAddress.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-gray-400" />
                    {order.shippingAddress.email}
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-accent" />
                  Billing Address
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-gray-900">{order.billingAddress.name}</p>
                  <p className="text-sm">{order.billingAddress.address}</p>
                  <p className="text-sm">
                    {order.billingAddress.area}, {order.billingAddress.city} -{' '}
                    {order.billingAddress.postalCode}
                  </p>
                  <div className="flex items-center gap-2 text-sm pt-2 border-t border-gray-100">
                    <Phone className="w-4 h-4 text-gray-400" />
                    {order.billingAddress.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-gray-400" />
                    {order.billingAddress.email}
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            {order.notes && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Delivery Note
                </h4>
                <p className="text-gray-700">{order.notes}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Receipt className="w-5 h-5 text-accent" />
                Order Summary
              </h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-medium">৳{order.subtotal}</span>
                </div>
                
                {order.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>
                      Discount 
                      {order.discountCode && (
                        <span className="text-xs ml-1">({order.discountCode})</span>
                      )}
                    </span>
                    <span className="font-medium">-৳{order.discount}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-medium">৳{order.shippingCost}</span>
                </div>
                
                {order.tax > 0 && (
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span className="font-medium">৳{order.tax}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-accent">৳{order.total}</span>
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-accent" />
                  Payment Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Method</span>
                    <span className="font-medium text-gray-900">{order.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transaction ID</span>
                    <span className="font-mono text-xs font-medium text-gray-900">
                      {order.transactionId}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status</span>
                    <span className={`font-semibold ${
                      order.paymentStatus === 'paid' ? 'text-green-600' : 'text-orange-600'
                    }`}>
                      {order.paymentStatus === 'paid' ? 'Paid' : 'Pending'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {order.canCancel && (
                  <button
                    onClick={() => setShowCancelModal(true)}
                    className="w-full px-4 py-3 border-2 border-red-300 hover:border-red-500 text-red-600 hover:bg-red-50 rounded-lg font-semibold transition-all"
                  >
                    Cancel Order
                  </button>
                )}

                {order.canReturn && (
                  <div>
                    <button className="w-full px-4 py-3 border-2 border-gray-300 hover:border-accent text-gray-700 hover:text-accent rounded-lg font-semibold transition-all">
                      Request Return
                    </button>
                    {order.returnDeadline && (
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Return by {new Date(order.returnDeadline).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                )}

                <button className="w-full px-4 py-3 bg-gradient-to-r from-accent to-primary-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Reorder Items
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cancel Order Modal */}
        {showCancelModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cancel Order?</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to cancel this order? This action cannot be undone. Your refund
                will be processed within 5-7 business days.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition-all"
                >
                  Keep Order
                </button>
                <button
                  onClick={handleCancelOrder}
                  className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all"
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}



