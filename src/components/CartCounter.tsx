import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '../hooks/useAppSelector';

export const CartCounter: React.FC = () => {
  const { items } = useAppSelector(state => state.cart);
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  
  return (
    <div className="relative">
      <ShoppingCart className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      {itemCount > 0 && (
        <div className="absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 bg-blue-500 text-white text-xs font-bold rounded-full">
          {itemCount}
        </div>
      )}
    </div>
  );
};