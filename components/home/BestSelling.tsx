import Link from 'next/link';
import Container from '@/components/ui/Container';
import ProductGrid from '@/components/product/ProductGrid';
import { products } from '@/data/products';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function BestSelling() {
  // Get best selling products (first 8 products as best sellers)
  const bestSellingProducts = products.slice(0, 8);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Best Selling Products
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Most popular items loved by our customers
            </p>
          </div>
          
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium group"
          >
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <ProductGrid products={bestSellingProducts} />
        
        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

