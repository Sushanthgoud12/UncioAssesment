import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { CartCounter } from './CartCounter';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6 text-blue-500" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Shopify
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <CartCounter />
        </div>
      </div>
    </header>
  );
};