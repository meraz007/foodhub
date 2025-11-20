'use client';

import Link from 'next/link';
import { X, ChevronDown, UserPlus, Package, ShoppingBag, Ticket, Heart, Settings, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { megaMenuCategories } from '@/data/megaMenuCategories';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick?: () => void;
  user?: { name: string; email: string } | null;
  onLogout?: () => void;
}

export default function MobileNav({ isOpen, onClose, onLoginClick, user, onLogout }: MobileNavProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold font-display">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-2">
              {/* User Info or Auth Button */}
              {user ? (
                <>
                  {/* User Profile Card */}
                  <div className="mb-4 bg-gradient-to-r from-accent to-primary-500 rounded-xl p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {getInitials(user.name)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-lg truncate">{user.name}</p>
                        <p className="text-sm text-white/80 truncate">{user.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* User Menu Items */}
                  <div className="mb-4 space-y-1">
                    <Link
                      href="/orders"
                      onClick={onClose}
                      className="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <Package className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-700">My Orders</span>
                    </Link>

                    <Link
                      href="/orders/active"
                      onClick={onClose}
                      className="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <ShoppingBag className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-gray-700">Active Orders</span>
                    </Link>

                    <Link
                      href="/vouchers"
                      onClick={onClose}
                      className="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <Ticket className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-gray-700">Vouchers</span>
                    </Link>

                    <Link
                      href="/wishlist"
                      onClick={onClose}
                      className="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <Heart className="w-5 h-5 text-red-600" />
                      <span className="font-medium text-gray-700">Wishlist</span>
                    </Link>

                    <Link
                      href="/account/settings"
                      onClick={onClose}
                      className="flex items-center gap-3 py-3 px-4 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <Settings className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-700">Settings</span>
                    </Link>

                    <button
                      onClick={() => {
                        onClose();
                        onLogout?.();
                      }}
                      className="w-full flex items-center gap-3 py-3 px-4 hover:bg-red-50 rounded-xl transition-colors text-red-600"
                    >
                      <LogOut className="w-5 h-5" />
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-4">
                  <button
                    onClick={() => {
                      onClose();
                      onLoginClick?.();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-accent to-primary-500 text-white rounded-xl transition-all font-semibold hover:shadow-lg"
                  >
                    <UserPlus className="w-5 h-5" />
                    <span>Login / Sign Up</span>
                  </button>
                </div>
              )}

              <Link
                href="/"
                onClick={onClose}
                className="block py-3 text-gray-700 hover:text-accent hover:bg-gray-50 rounded-xl px-4 transition-colors font-medium"
              >
                Home
              </Link>
              
              <Link
                href="/products"
                onClick={onClose}
                className="block py-3 text-gray-700 hover:text-accent hover:bg-gray-50 rounded-xl px-4 transition-colors font-medium"
              >
                All Products
              </Link>

              <div className="pt-4 pb-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase px-4">Categories</h3>
              </div>

              {megaMenuCategories.map((category) => (
                <div key={category.id}>
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-accent hover:bg-gray-50 rounded-xl px-4 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xl">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedCategory === category.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {expandedCategory === category.id && (
                    <div className="pl-8 py-2 space-y-1">
                      {category.subcategories.map((subcategory, index) => (
                        <Link
                          key={index}
                          href={`/category/${subcategory.slug}`}
                          onClick={onClose}
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {subcategory.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 pb-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase px-4">Info</h3>
              </div>

              <Link
                href="/about"
                onClick={onClose}
                className="block py-3 text-gray-700 hover:text-accent hover:bg-gray-50 rounded-xl px-4 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="block py-3 text-gray-700 hover:text-accent hover:bg-gray-50 rounded-xl px-4 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                onClick={onClose}
                className="block py-3 text-gray-700 hover:text-accent hover:bg-gray-50 rounded-xl px-4 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}


