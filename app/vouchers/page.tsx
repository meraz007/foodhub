'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import { Ticket, Copy, Check, Clock, Tag, Percent } from 'lucide-react';

// Sample vouchers data
const sampleVouchers = [
  {
    id: 'WELCOME20',
    title: 'Welcome Discount',
    description: 'Get 20% off on your first order',
    discount: '20%',
    type: 'percentage',
    minOrder: 1000,
    maxDiscount: 500,
    expiryDate: '2024-12-31',
    status: 'active',
    terms: [
      'Valid for first-time users only',
      'Cannot be combined with other offers',
      'Applicable on all products',
    ],
  },
  {
    id: 'SAVE500',
    title: 'Flat 500 Off',
    description: 'Save ৳500 on orders above ৳3000',
    discount: '৳500',
    type: 'fixed',
    minOrder: 3000,
    maxDiscount: 500,
    expiryDate: '2024-11-30',
    status: 'active',
    terms: [
      'Valid on minimum purchase of ৳3000',
      'One time use per customer',
      'Not valid on sale items',
    ],
  },
  {
    id: 'CHOCO15',
    title: 'Chocolate Special',
    description: '15% off on all chocolate products',
    discount: '15%',
    type: 'percentage',
    minOrder: 500,
    maxDiscount: 300,
    expiryDate: '2024-12-15',
    status: 'active',
    terms: [
      'Valid only on chocolate category',
      'Minimum order ৳500',
      'Maximum discount ৳300',
    ],
  },
  {
    id: 'FLASH50',
    title: 'Flash Sale',
    description: 'Flat ৳50 off on any order',
    discount: '৳50',
    type: 'fixed',
    minOrder: 0,
    maxDiscount: 50,
    expiryDate: '2024-11-22',
    status: 'used',
    terms: [
      'No minimum order required',
      'Valid for 24 hours only',
    ],
  },
  {
    id: 'MEGA30',
    title: 'Mega Discount',
    description: '30% off on orders above ৳5000',
    discount: '30%',
    type: 'percentage',
    minOrder: 5000,
    maxDiscount: 2000,
    expiryDate: '2024-11-20',
    status: 'expired',
    terms: [
      'Valid on orders above ৳5000',
      'Maximum discount ৳2000',
    ],
  },
];

export default function VouchersPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'used' | 'expired'>('active');

  const filteredVouchers = sampleVouchers.filter((voucher) => {
    if (filterStatus === 'all') return true;
    return voucher.status === filterStatus;
  });

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getDaysRemaining = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'used':
        return 'bg-gray-50 text-gray-700 border-gray-200';
      case 'expired':
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Vouchers</h1>
          <p className="text-gray-600">Save more with exclusive discount codes</p>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-2 mb-6 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
              filterStatus === 'all'
                ? 'bg-gradient-to-r from-accent to-primary-500 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Vouchers
          </button>
          <button
            onClick={() => setFilterStatus('active')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
              filterStatus === 'active'
                ? 'bg-gradient-to-r from-accent to-primary-500 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilterStatus('used')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
              filterStatus === 'used'
                ? 'bg-gradient-to-r from-accent to-primary-500 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            Used
          </button>
          <button
            onClick={() => setFilterStatus('expired')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
              filterStatus === 'expired'
                ? 'bg-gradient-to-r from-accent to-primary-500 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            Expired
          </button>
        </div>

        {/* Vouchers Grid */}
        {filteredVouchers.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Ticket className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No vouchers found</h3>
            <p className="text-gray-600">Check back later for exclusive offers</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredVouchers.map((voucher) => {
              const daysRemaining = getDaysRemaining(voucher.expiryDate);
              const isExpiringSoon = daysRemaining <= 3 && daysRemaining > 0;

              return (
                <div
                  key={voucher.id}
                  className={`bg-white rounded-xl shadow-sm overflow-hidden border-2 ${
                    voucher.status === 'active'
                      ? 'border-accent/20 hover:border-accent hover:shadow-lg'
                      : 'border-gray-200 opacity-75'
                  } transition-all`}
                >
                  {/* Voucher Header */}
                  <div className="bg-gradient-to-r from-accent to-primary-500 p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Ticket className="w-6 h-6" />
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(voucher.status)} bg-white`}>
                            {voucher.status.charAt(0).toUpperCase() + voucher.status.slice(1)}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-black">{voucher.discount}</p>
                          <p className="text-xs text-white/80">OFF</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{voucher.title}</h3>
                      <p className="text-white/90 text-sm">{voucher.description}</p>
                    </div>
                  </div>

                  {/* Voucher Body */}
                  <div className="p-6">
                    {/* Voucher Code */}
                    <div className="mb-4">
                      <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">
                        Voucher Code
                      </label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg px-4 py-3 font-mono font-bold text-lg text-gray-900">
                          {voucher.id}
                        </div>
                        <button
                          onClick={() => handleCopyCode(voucher.id)}
                          disabled={voucher.status !== 'active'}
                          className={`p-3 rounded-lg transition-all ${
                            voucher.status === 'active'
                              ? 'bg-accent hover:bg-accent/90 text-white'
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {copiedCode === voucher.id ? (
                            <Check className="w-5 h-5" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Voucher Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Tag className="w-4 h-4 text-accent" />
                        <span>Min. order: ৳{voucher.minOrder}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Percent className="w-4 h-4 text-accent" />
                        <span>Max. discount: ৳{voucher.maxDiscount}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className={`w-4 h-4 ${isExpiringSoon ? 'text-orange-500' : 'text-gray-400'}`} />
                        <span className={isExpiringSoon ? 'text-orange-600 font-semibold' : 'text-gray-600'}>
                          {voucher.status === 'expired'
                            ? `Expired on ${new Date(voucher.expiryDate).toLocaleDateString()}`
                            : daysRemaining > 0
                            ? `Expires in ${daysRemaining} day${daysRemaining > 1 ? 's' : ''}`
                            : 'Expires today'}
                        </span>
                      </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                        Terms & Conditions
                      </p>
                      <ul className="space-y-1">
                        {voucher.terms.map((term, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{term}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
}

