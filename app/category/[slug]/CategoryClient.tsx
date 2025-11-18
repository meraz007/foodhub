'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import ProductGrid from '@/components/product/ProductGrid';
import PriceFilter from '@/components/ui/PriceFilter';
import { products } from '@/data/products';
import { megaMenuCategories } from '@/data/megaMenuCategories';
import Link from 'next/link';

interface CategoryClientProps {
  slug: string;
}

export default function CategoryClient({ slug }: CategoryClientProps) {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(Infinity);

  const handlePriceFilter = (min: number, max: number) => {
    setPriceMin(min);
    setPriceMax(max);
  };

  const filterProductsByPrice = <T extends { price: number }>(productList: T[]): T[] => {
    return productList.filter(
      (product) => product.price >= priceMin && product.price <= priceMax
    );
  };

  // Check if it's a main category
  const mainCategory = megaMenuCategories.find((cat) => cat.slug === slug);
  
  if (mainCategory) {
    // Get all subcategory slugs for this main category
    const subcategorySlugs = mainCategory.subcategories.map(sub => sub.slug);
    
    // Get all products from all subcategories
    const categoryProducts = products.filter(
      (product) => subcategorySlugs.includes(product.category)
    );

    const filteredProducts = filterProductsByPrice(categoryProducts);

    return (
      <div className="py-12 md:py-16 min-h-screen">
        <Container>
          {/* Main Category Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{mainCategory.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900">
                  {mainCategory.name}
                </h1>
                <p className="text-gray-600 mt-2 text-lg">
                  Explore our {mainCategory.name} collection with {mainCategory.subcategories.length} categories
                </p>
              </div>
            </div>
          </div>

          {/* Subcategories Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mainCategory.subcategories.map((subcategory) => (
                <Link
                  key={subcategory.slug}
                  href={`/category/${subcategory.slug}`}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-40 overflow-hidden bg-gray-100">
                    <img
                      src={subcategory.image}
                      alt={subcategory.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-sm leading-tight drop-shadow-lg">
                        {subcategory.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Filter and Products */}
          <div>
            {categoryProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-xl mb-4">No products available in this category</p>
                <Link
                  href="/products"
                  className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                >
                  View All Products
                </Link>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">All Products</h2>
                  <div className="flex items-center gap-4">
                    <PriceFilter
                      onFilterChange={handlePriceFilter}
                      currentMin={priceMin}
                      currentMax={priceMax}
                    />
                    <p className="text-gray-600 text-sm">
                      {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                    </p>
                  </div>
                </div>

                {filteredProducts.length > 0 ? (
                  <ProductGrid products={filteredProducts} />
                ) : (
                  <div className="text-center py-20">
                    <p className="text-gray-500 text-xl mb-4">No products found in this price range</p>
                    <button
                      onClick={() => handlePriceFilter(0, Infinity)}
                      className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      Clear Filter
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </Container>
      </div>
    );
  }

  // Check if it's a subcategory
  let subcategoryData: { name: string; slug: string; mainCategoryName: string; mainCategorySlug: string; mainCategoryIcon: string } | null = null;
  
  for (const main of megaMenuCategories) {
    const subcategory = main.subcategories.find((sub) => sub.slug === slug);
    if (subcategory) {
      subcategoryData = {
        name: subcategory.name,
        slug: subcategory.slug,
        mainCategoryName: main.name,
        mainCategorySlug: main.slug,
        mainCategoryIcon: main.icon,
      };
      break;
    }
  }

  if (!subcategoryData) {
    notFound();
  }

  // Get products for this subcategory
  const subcategoryProducts = products.filter(
    (product) => product.category === subcategoryData.slug
  );

  const filteredProducts = filterProductsByPrice(subcategoryProducts);

  return (
    <div className="py-12 md:py-16 min-h-screen">
      <Container>
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/category/${subcategoryData.mainCategorySlug}`} className="hover:text-accent transition-colors">
              {subcategoryData.mainCategoryName}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{subcategoryData.name}</span>
          </nav>
        </div>

        {/* Subcategory Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{subcategoryData.mainCategoryIcon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900">
                {subcategoryData.name}
              </h1>
              <p className="text-gray-600 mt-2 text-lg">
                From our {subcategoryData.mainCategoryName} collection
              </p>
            </div>
          </div>
        </div>

        {/* Filter and Products */}
        <div>
          {subcategoryProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl mb-4">No products available in this category</p>
              <Link
                href="/products"
                className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                View All Products
              </Link>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Products</h2>
                <div className="flex items-center gap-4">
                  <PriceFilter
                    onFilterChange={handlePriceFilter}
                    currentMin={priceMin}
                    currentMax={priceMax}
                  />
                  <p className="text-gray-600 text-sm">
                    {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                  </p>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-xl mb-4">No products found in this price range</p>
                  <button
                    onClick={() => handlePriceFilter(0, Infinity)}
                    className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

