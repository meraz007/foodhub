'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { useCartStore } from '@/lib/store/cart-store';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/product/${product.slug}`}>
        <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Badges */}
            {product.badge && (
              <div className="absolute top-3 left-3">
                <Badge variant={product.badge.toLowerCase() as 'new' | 'sale' | 'hot' | 'limited' | 'default'}>
                  {product.badge}
                </Badge>
              </div>
            )}

            {/* Discount Badge */}
            {product.discount && (
              <div className="absolute top-3 right-3">
                <Badge variant="sale">-{product.discount}%</Badge>
              </div>
            )}

            {/* Quick View Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white rounded-full p-3">
                  <Eye className="w-5 h-5 text-gray-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col">
            {/* Brand */}
            {product.brand && (
              <p className="text-xs text-gray-500 uppercase mb-1">{product.brand}</p>
            )}

            {/* Product Name */}
            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-accent transition-colors">
              {product.name}
            </h3>

            {/* Weight/Origin */}
            <div className="text-xs text-gray-500 mb-3 flex items-center gap-2">
              {product.weight && <span>{product.weight}</span>}
              {product.weight && product.origin && <span>•</span>}
              {product.origin && <span>{product.origin}</span>}
            </div>

            {/* Price */}
            <div className="mt-auto">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                variant="primary"
                size="sm"
                fullWidth
                className="group/btn"
              >
                <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}


