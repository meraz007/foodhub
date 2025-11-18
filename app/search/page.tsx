'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Container from '@/components/ui/Container';
import ProductGrid from '@/components/product/ProductGrid';
import { products } from '@/data/products';
import { Product } from '@/lib/types';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    if (query) {
      const results = products.filter((product) => {
        const searchLower = query.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.brand?.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower)
        );
      });
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <div className="py-12 md:py-16 min-h-screen">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">
            Search Results
          </h1>
          {query && (
            <p className="text-gray-600">
              Showing {searchResults.length} results for "{query}"
            </p>
          )}
        </div>

        {!query ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Enter a search query to find products</p>
          </div>
        ) : searchResults.length > 0 ? (
          <ProductGrid products={searchResults} />
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold mb-2">No results found</h2>
            <p className="text-gray-600">
              Try searching with different keywords or browse our categories
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}


