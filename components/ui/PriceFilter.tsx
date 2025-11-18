'use client';

import { useState } from 'react';
import { DollarSign, ChevronDown } from 'lucide-react';

interface PriceRange {
  label: string;
  min: number;
  max: number;
}

const priceRanges: PriceRange[] = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ৳100', min: 0, max: 100 },
  { label: '৳100 - ৳300', min: 100, max: 300 },
  { label: '৳300 - ৳500', min: 300, max: 500 },
  { label: '৳500 - ৳1,000', min: 500, max: 1000 },
  { label: 'Over ৳1,000', min: 1000, max: Infinity },
];

interface PriceFilterProps {
  onFilterChange: (min: number, max: number) => void;
  currentMin: number;
  currentMax: number;
}

export default function PriceFilter({ onFilterChange, currentMin, currentMax }: PriceFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedRange = priceRanges.find(
    range => range.min === currentMin && range.max === currentMax
  ) || priceRanges[0];

  const handleRangeSelect = (range: PriceRange) => {
    onFilterChange(range.min, range.max);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-300 rounded-lg hover:border-accent transition-colors font-medium text-gray-700"
      >
        <DollarSign className="w-4 h-4" />
        <span className="text-sm">{selectedRange.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-2 w-56 bg-white border-2 border-gray-200 rounded-lg shadow-xl z-20 overflow-hidden">
            {priceRanges.map((range, index) => (
              <button
                key={index}
                onClick={() => handleRangeSelect(range)}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                  range.min === currentMin && range.max === currentMax
                    ? 'bg-accent/10 text-accent font-semibold'
                    : 'text-gray-700'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

