import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BestSelling from '@/components/home/BestSelling';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import BrandMarquee from '@/components/home/BrandMarquee';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export const metadata: Metadata = {
  title: 'Home - FoodHub | Premium Imported Food Products',
  description: 'Discover premium imported food products from around the world. Shop chocolate, coffee, snacks, ramen, drinks and more in Bangladesh.',
};

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <BestSelling />
      
      {/* Top Selling Category 1: Korean Ramen */}
      <CategoryShowcase 
        categorySlug="korean-ramen"
        categoryName="Korean Ramen"
        categoryIcon="🍜"
        backgroundColor="bg-white"
      />
      
      {/* Top Selling Category 2: Milk Chocolate */}
      <CategoryShowcase 
        categorySlug="milk-chocolate"
        categoryName="Milk Chocolate"
        categoryIcon="🍫"
        backgroundColor="bg-gray-50"
      />
      
      <BrandMarquee />
      <WhyChooseUs />
    </div>
  );
}


