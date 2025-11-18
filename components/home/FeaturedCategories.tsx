import Container from '@/components/ui/Container';
import CategoryCard from '@/components/product/CategoryCard';
import { categories } from '@/data/categories';

export default function FeaturedCategories() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Browse our wide selection of premium imported products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}


