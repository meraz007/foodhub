'use client';

import Link from 'next/link';
import { Category } from '@/lib/types';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/category/${category.slug}`}>
        <div className="group bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center h-full border border-primary-100 hover:border-accent">
          {/* Icon */}
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>

          {/* Category Name */}
          <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-accent transition-colors">
            {category.name}
          </h3>

          {/* Product Count */}
          {category.productCount && (
            <p className="text-sm text-gray-500">
              {category.productCount} products
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}


