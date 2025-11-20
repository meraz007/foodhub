'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import { Heart, ShoppingCart, X, Star } from 'lucide-react';
import Link from 'next/link';

// Sample wishlist data
const initialWishlist = [
  {
    id: '1',
    name: 'Premium Dark Chocolate',
    price: 1200,
    originalPrice: 1500,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    category: 'Chocolate',
  },
  {
    id: '2',
    name: 'Imported Coffee Beans - Premium Blend',
    price: 2100,
    originalPrice: 2500,
    discount: 16,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 256,
    inStock: true,
    category: 'Coffee',
  },
  {
    id: '3',
    name: 'Organic Oats - 1kg Pack',
    price: 800,
    originalPrice: 900,
    discount: 11,
    image: 'https://images.unsplash.com/photo-1517686748072-7c109e0e7633?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 89,
    inStock: true,
    category: 'Breakfast',
  },
  {
    id: '4',
    name: 'Belgian Chocolate Assortment',
    price: 1800,
    originalPrice: 1800,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4cbc5b52?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 342,
    inStock: false,
    category: 'Chocolate',
  },
  {
    id: '5',
    name: 'Japanese Ramen Variety Pack',
    price: 1500,
    originalPrice: 1800,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 167,
    inStock: true,
    category: 'Ramen',
  },
  {
    id: '6',
    name: 'Almond Milk - Organic',
    price: 600,
    originalPrice: 700,
    discount: 14,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 93,
    inStock: true,
    category: 'Dairy',
  },
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlist);
  const [addedToCart, setAddedToCart] = useState<string[]>([]);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const addToCart = (id: string) => {
    setAddedToCart([...addedToCart, id]);
    setTimeout(() => {
      setAddedToCart(addedToCart.filter((itemId) => itemId !== id));
    }, 2000);
  };

  const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);
  const totalSavings = wishlistItems.reduce(
    (sum, item) => sum + (item.originalPrice - item.price),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
              <p className="text-gray-600">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
              </p>
            </div>
            {wishlistItems.length > 0 && (
              <div className="text-right">
                <p className="text-sm text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-accent">৳{totalValue}</p>
                {totalSavings > 0 && (
                  <p className="text-sm text-green-600 font-medium">Save ৳{totalSavings}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Wishlist Items */}
        {wishlistItems.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-600 mb-6">
              Start adding products you love to your wishlist
            </p>
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-primary-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            {/* Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-600 mb-1">Items in Wishlist</p>
                <p className="text-2xl font-bold text-gray-900">{wishlistItems.length}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-600 mb-1">Total Value</p>
                <p className="text-2xl font-bold text-accent">৳{totalValue}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-600 mb-1">Potential Savings</p>
                <p className="text-2xl font-bold text-green-600">৳{totalSavings}</p>
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all group"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Discount Badge */}
                    {item.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {item.discount}% OFF
                      </div>
                    )}

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {/* Stock Status */}
                    {!item.inStock && (
                      <div className="absolute bottom-3 left-3 right-3 bg-gray-900/90 text-white text-center py-2 rounded-lg text-sm font-semibold">
                        Out of Stock
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12">
                      {item.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-900">{item.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">৳{item.price}</span>
                        {item.discount > 0 && (
                          <span className="text-sm text-gray-500 line-through">
                            ৳{item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => addToCart(item.id)}
                        disabled={!item.inStock || addedToCart.includes(item.id)}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all ${
                          !item.inStock
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : addedToCart.includes(item.id)
                            ? 'bg-green-500 text-white'
                            : 'bg-gradient-to-r from-accent to-primary-500 text-white hover:shadow-lg'
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>
                          {addedToCart.includes(item.id)
                            ? 'Added!'
                            : !item.inStock
                            ? 'Out of Stock'
                            : 'Add to Cart'}
                        </span>
                      </button>
                      <Link
                        href={`/product/${item.id}`}
                        className="px-4 py-3 border-2 border-gray-300 hover:border-accent rounded-lg font-medium text-gray-700 hover:text-accent transition-colors"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    Ready to checkout your favorites?
                  </p>
                  <p className="text-sm text-gray-600">
                    Add items to cart and save ৳{totalSavings} on your purchase
                  </p>
                </div>
                <button
                  onClick={() => wishlistItems.forEach((item) => item.inStock && addToCart(item.id))}
                  className="px-8 py-3 bg-gradient-to-r from-accent to-primary-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap"
                >
                  Add All to Cart
                </button>
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

