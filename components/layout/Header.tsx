'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import SearchBar from '@/components/ui/SearchBar';
import { useCartStore } from '@/lib/store/cart-store';
import MobileNav from './MobileNav';
import MegaMenu from './MegaMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const itemCount = useCartStore((state) => state.getItemCount());

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-accent to-primary-500 text-white py-2">
          <Container>
            <div className="flex justify-between items-center text-sm">
              <p>🎉 Free shipping on orders over ৳2000!</p>
              <div className="hidden md:flex gap-4">
                <Link href="/about" className="hover:underline">About Us</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Header */}
        <Container>
          <div className="py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                <div className="text-2xl font-bold font-display bg-gradient-to-r from-accent to-primary-500 bg-clip-text text-transparent">
                  FoodHub
                </div>
              </Link>

              {/* Search Bar - Hidden on mobile */}
              <div className="hidden md:block flex-1 max-w-2xl mx-4">
                <SearchBar />
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-4">
                {/* Cart */}
                <Link
                  href="/cart"
                  className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <ShoppingCart className="w-6 h-6 text-gray-700" />
                  {mounted && itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Search Bar */}
            <div className="md:hidden mt-4">
              <SearchBar />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block border-t border-gray-200 py-3">
            <div className="flex items-center justify-between">
              {/* Mega Menu */}
              <MegaMenu />

              {/* Quick Links */}
              <div className="flex items-center gap-6">
                <Link href="/" className="text-gray-700 hover:text-accent font-medium transition-colors">
                  Home
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-accent font-medium transition-colors">
                  Products
                </Link>
                <Link href="/category/chocolate" className="text-gray-700 hover:text-accent transition-colors">
                  Chocolate
                </Link>
                <Link href="/category/coffee" className="text-gray-700 hover:text-accent transition-colors">
                  Coffee
                </Link>
                <Link href="/category/snacks" className="text-gray-700 hover:text-accent transition-colors">
                  Snacks
                </Link>
                <Link href="/category/ramen" className="text-gray-700 hover:text-accent transition-colors">
                  Ramen
                </Link>
              </div>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}


