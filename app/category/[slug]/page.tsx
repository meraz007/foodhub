import { Metadata } from 'next';
import { megaMenuCategories } from '@/data/megaMenuCategories';
import CategoryClient from './CategoryClient';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  // Check if it's a main category
  const mainCategory = megaMenuCategories.find((cat) => cat.slug === params.slug);
  if (mainCategory) {
    return {
      title: `${mainCategory.name} - FoodHub`,
      description: `Browse our ${mainCategory.name} collection`,
      openGraph: {
        title: `${mainCategory.name} - FoodHub`,
        description: `Browse our ${mainCategory.name} collection`,
      },
    };
  }

  // Check if it's a subcategory
  for (const main of megaMenuCategories) {
    const subcategory = main.subcategories.find((sub) => sub.slug === params.slug);
    if (subcategory) {
      return {
        title: `${subcategory.name} - ${main.name} - FoodHub`,
        description: `Shop ${subcategory.name} from our ${main.name} collection`,
        openGraph: {
          title: `${subcategory.name} - FoodHub`,
          description: `Shop ${subcategory.name} from our ${main.name} collection`,
        },
      };
    }
  }

  return {
    title: 'Category Not Found',
  };
}

export async function generateStaticParams() {
  const params = [];
  
  // Add main categories
  for (const category of megaMenuCategories) {
    params.push({ slug: category.slug });
    
    // Add all subcategories
    for (const subcategory of category.subcategories) {
      params.push({ slug: subcategory.slug });
    }
  }
  
  return params;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return <CategoryClient slug={params.slug} />;
}


