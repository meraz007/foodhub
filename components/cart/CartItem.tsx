'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/lib/store/cart-store';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
      {/* Product Image */}
      <Link href={`/product/${product.slug}`} className="flex-shrink-0">
        <div className="relative w-24 h-24 rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <Link
          href={`/product/${product.slug}`}
          className="font-semibold text-gray-800 hover:text-accent transition-colors line-clamp-1"
        >
          {product.name}
        </Link>
        
        {product.brand && (
          <p className="text-xs text-gray-500 mt-1">{product.brand}</p>
        )}

        <p className="text-lg font-bold text-gray-900 mt-2">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex flex-col items-end gap-2">
        <button
          onClick={() => removeItem(product.id)}
          className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 bg-gray-100 rounded-xl">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="p-2 hover:bg-gray-200 rounded-l-xl transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="font-semibold px-3 min-w-[2rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="p-2 hover:bg-gray-200 rounded-r-xl transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          Total: {formatPrice(product.price * quantity)}
        </p>
      </div>
    </div>
  );
}


