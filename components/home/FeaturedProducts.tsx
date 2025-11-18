import Link from 'next/link';
import Container from '@/components/ui/Container';
import ProductGrid from '@/components/product/ProductGrid';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 8);

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Handpicked favorites from around the world
            </p>
          </div>
          
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium group"
          >
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />
        
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


