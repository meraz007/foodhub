'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { megaMenuCategories } from '@/data/megaMenuCategories';
import { motion, AnimatePresence } from 'framer-motion';

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [menuTop, setMenuTop] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && 
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveCategory(null);
      }
    };

    const updateMenuPosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setMenuTop(rect.bottom);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', updateMenuPosition);
    window.addEventListener('resize', updateMenuPosition);
    
    updateMenuPosition();

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', updateMenuPosition);
      window.removeEventListener('resize', updateMenuPosition);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
    // Set first category as active if none is selected
    if (!activeCategory && megaMenuCategories.length > 0) {
      setActiveCategory(megaMenuCategories[0].id);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveCategory(null);
    }, 200);
  };

  const handleButtonClick = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen && !activeCategory && megaMenuCategories.length > 0) {
      setActiveCategory(megaMenuCategories[0].id);
    }
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuTop(rect.bottom);
    }
  };

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        ref={buttonRef}
        className="flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
        onClick={handleButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        All Categories
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Mega Menu Dropdown - MAX-W-7XL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 mx-auto max-w-[1220px] bg-white shadow-2xl rounded-2xl border border-gray-200 z-[100] h-[calc(100vh-100px)]"
            style={{ 
              top: `${menuTop}px`,
              height: 'calc(100vh - 200px)',
              maxHeight: 'calc(100vh - 200px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            onMouseEnter={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex h-full rounded-b-2xl overflow-hidden">
              {/* Left Sidebar - Main Categories */}
              <div className="w-64 bg-gray-50 border-r border-gray-200 py-2 flex-shrink-0 overflow-y-auto rounded-bl-2xl">
                {megaMenuCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    onMouseEnter={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                      activeCategory === category.id
                        ? 'bg-white text-accent border-r-2 border-accent'
                        : 'text-gray-700 hover:bg-white hover:text-accent'
                    }`}
                  >
                    <span className="text-2xl">{category.icon}</span>
                    <span className="font-medium text-sm">{category.name}</span>
                    <ChevronDown className="w-4 h-4 ml-auto -rotate-90" />
                  </Link>
                ))}
              </div>

              {/* Right Side - Subcategories Grid (Full Width) */}
              <div className="flex-1 p-8 overflow-y-auto bg-white rounded-br-2xl">
                {activeCategory && (
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      {megaMenuCategories.find((cat) => cat.id === activeCategory)?.name}
                    </h3>
                    <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                      {megaMenuCategories
                        .find((cat) => cat.id === activeCategory)
                        ?.subcategories.map((subcategory, index) => (
                          <Link
                            key={index}
                            href={`/category/${subcategory.slug}`}
                            className="group relative overflow-hidden rounded-xl border border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl bg-white"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveCategory(null);
                            }}
                          >
                            <div className="relative h-40 overflow-hidden bg-gray-100">
                              <img
                                src={subcategory.image}
                                alt={subcategory.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                loading="lazy"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = 'https://via.placeholder.com/400x300/e5e7eb/6b7280?text=' + encodeURIComponent(subcategory.name);
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h4 className="text-white font-semibold text-sm leading-tight drop-shadow-lg">
                                  {subcategory.name}
                                </h4>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

