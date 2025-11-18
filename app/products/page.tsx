'use client';

import { useState, useEffect } from 'react';
import Container from '@/components/ui/Container';
import ProductGrid from '@/components/product/ProductGrid';
import PriceFilter from '@/components/ui/PriceFilter';
import { products } from '@/data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PRODUCTS_PER_PAGE = 16;

// Brand logos data
const brands = [
  { name: 'Coca-Cola', logo: '🥤' },
  { name: 'Pepsi', logo: '🥤' },
  { name: 'Cadbury', logo: '🍫' },
  { name: 'Lindt', logo: '🍫' },
  { name: 'Ferrero', logo: '🍫' },
  { name: 'Nescafe', logo: '☕' },
  { name: 'Lipton', logo: '🍵' },
  { name: 'Lays', logo: '🥔' },
  { name: 'Oreo', logo: '🍪' },
  { name: 'Nestle', logo: '🍼' },
  { name: 'Pampers', logo: '👶' },
  { name: 'Nivea', logo: '💄' },
];

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffledProducts, setShuffledProducts] = useState(products);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(Infinity);

  // Shuffle products on mount
  useEffect(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);
  }, []);

  const handlePriceFilter = (min: number, max: number) => {
    setPriceMin(min);
    setPriceMax(max);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Filter products by price
  const filteredProducts = shuffledProducts.filter(
    (product) => product.price >= priceMin && product.price <= priceMax
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="py-12 md:py-16 min-h-screen">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">
            All Products
          </h1>
          <p className="text-gray-600 text-lg">
            Browse our complete collection of {products.length} products
          </p>
        </div>

        {/* Brands Section */}
        <div className="mb-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Shop by Brand</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {brand.logo}
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <PriceFilter
                onFilterChange={handlePriceFilter}
                currentMin={priceMin}
                currentMax={priceMax}
              />
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              </p>
            </div>
            {filteredProducts.length > 0 && (
              <p className="text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} | Page {currentPage} of {totalPages}
              </p>
            )}
          </div>

          {currentProducts.length > 0 ? (
            <ProductGrid products={currentProducts} />
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl mb-4">No products found in this price range</p>
              <button
                onClick={() => handlePriceFilter(0, Infinity)}
                className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && currentProducts.length > 0 && (
          <div className="flex items-center justify-center gap-2">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg border transition-colors ${
                currentPage === 1
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && goToPage(page)}
                disabled={page === '...'}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  page === currentPage
                    ? 'bg-accent text-white border-accent'
                    : page === '...'
                    ? 'border-transparent text-gray-400 cursor-default'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg border transition-colors ${
                currentPage === totalPages
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}

