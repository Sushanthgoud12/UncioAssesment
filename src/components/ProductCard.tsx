import React, { useState } from 'react';
import { Heart, MinusCircle, PlusCircle, ShoppingCart } from 'lucide-react';
import { Product } from '../models/product';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addToCart } from '../store/slices/cartSlice';
import { useFavorites } from '../hooks/useFavorites';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFavorited = isFavorite(product.id);
  
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecrement = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100 dark:bg-gray-700 p-4">
        <img 
          src={product.image} 
          alt={product.title}
          className="h-full w-full object-contain mx-auto"
        />
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={() => toggleFavorite(product.id)}
          aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            className={`h-5 w-5 ${
              isFavorited 
                ? 'fill-pink-500 text-pink-500' 
                : 'text-gray-400 dark:text-gray-300'
            } transition-colors`} 
          />
        </button>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {product.title}
          </h3>
          <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
            ${product.price.toFixed(2)}
          </p>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
          {product.description}
        </p>
        
        {/* Quantity Controls */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-50"
              aria-label="Decrease quantity"
            >
              <MinusCircle className="h-5 w-5" />
            </button>
            <span className="text-gray-900 dark:text-white font-medium min-w-8 text-center">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              aria-label="Increase quantity"
            >
              <PlusCircle className="h-5 w-5" />
            </button>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};