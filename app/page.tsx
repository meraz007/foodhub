import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
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
      <WhyChooseUs />
    </div>
  );
}


