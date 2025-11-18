import Link from 'next/link';
import Container from '@/components/ui/Container';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface CategoryShowcaseProps {
  categorySlug: string;
  categoryName: string;
  categoryIcon: string;
  backgroundColor?: string;
}

export default function CategoryShowcase({ 
  categorySlug, 
  categoryName, 
  categoryIcon,
  backgroundColor = 'bg-white'
}: CategoryShowcaseProps) {
  // Get 4 products from this category
  const categoryProducts = products
    .filter((product) => product.category === categorySlug)
    .slice(0, 4);

  if (categoryProducts.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 md:py-20 ${backgroundColor}`}>
      <Container>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{categoryIcon}</span>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display">
                Top {categoryName}
              </h2>
              <p className="text-gray-600 mt-1">
                Best picks from our {categoryName.toLowerCase()} collection
              </p>
            </div>
          </div>
          
          <Link
            href={`/category/${categorySlug}`}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors font-medium group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid - 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        product.badge === 'Sale'
                          ? 'bg-red-500 text-white'
                          : product.badge === 'New'
                          ? 'bg-green-500 text-white'
                          : product.badge === 'Hot'
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-800 text-white'
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Brand */}
                {product.brand && (
                  <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                )}

                {/* Name */}
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-accent">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                {!product.inStock && (
                  <p className="text-xs text-red-500 mt-2">Out of Stock</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href={`/category/${categorySlug}`}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors font-medium"
          >
            View All {categoryName}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

