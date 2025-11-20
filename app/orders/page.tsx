'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import { Package, Search, ChevronRight, Clock, CheckCircle, XCircle, Truck } from 'lucide-react';
import Link from 'next/link';

// Sample order data - replace with actual API call
const sampleOrders = [
  {
    id: 'ORD-2024-001',
    date: '2024-11-15',
    status: 'delivered',
    total: 4500,
    items: [
      { name: 'Premium Dark Chocolate', quantity: 2, price: 1200 },
      { name: 'Imported Coffee Beans', quantity: 1, price: 2100 },
    ],
    deliveredDate: '2024-11-18',
  },
  {
    id: 'ORD-2024-002',
    date: '2024-11-18',
    status: 'processing',
    total: 3200,
    items: [
      { name: 'Organic Oats', quantity: 3, price: 800 },
      { name: 'Almond Milk', quantity: 2, price: 600 },
    ],
    estimatedDelivery: '2024-11-22',
  },
  {
    id: 'ORD-2024-003',
    date: '2024-10-05',
    status: 'delivered',
    total: 2800,
    items: [
      { name: 'Japanese Ramen Pack', quantity: 4, price: 700 },
    ],
    deliveredDate: '2024-10-08',
  },
  {
    id: 'ORD-2024-004',
    date: '2024-09-20',
    status: 'cancelled',
    total: 1500,
    items: [
      { name: 'Snack Box', quantity: 1, price: 1500 },
    ],
    cancelledDate: '2024-09-21',
  },
];

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'processing' | 'delivered' | 'cancelled'>('all');

  const filteredOrders = sampleOrders.filter((order) => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Package className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'processing':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'cancelled':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage all your orders</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by order ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            {/* Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterStatus === 'all'
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus('processing')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterStatus === 'processing'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Processing
              </button>
              <button
                onClick={() => setFilterStatus('delivered')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterStatus === 'delivered'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Delivered
              </button>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
              <Link
                href="/products"
                className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-primary-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  {/* Order Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary-500 rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{order.id}</h3>
                        <p className="text-sm text-gray-500">
                          Ordered on {new Date(order.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`flex items-center gap-2 px-4 py-2 rounded-full border ${getStatusColor(order.status)} font-medium text-sm capitalize`}>
                        {getStatusIcon(order.status)}
                        {order.status}
                      </span>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-2 mb-4 pl-0 md:pl-15">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <div>
                          <p className="font-medium text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-gray-900">৳{item.price * item.quantity}</p>
                      </div>
                    ))}
                  </div>

                  {/* Order Footer */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">
                        {order.status === 'delivered' && order.deliveredDate && (
                          <span className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Delivered on {new Date(order.deliveredDate).toLocaleDateString()}
                          </span>
                        )}
                        {order.status === 'processing' && order.estimatedDelivery && (
                          <span className="flex items-center gap-2">
                            <Truck className="w-4 h-4 text-blue-600" />
                            Est. delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}
                          </span>
                        )}
                        {order.status === 'cancelled' && order.cancelledDate && (
                          <span className="flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-red-600" />
                            Cancelled on {new Date(order.cancelledDate).toLocaleDateString()}
                          </span>
                        )}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">Total: ৳{order.total}</p>
                    </div>
                    <Link
                      href={`/orders/${order.id}`}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
}

