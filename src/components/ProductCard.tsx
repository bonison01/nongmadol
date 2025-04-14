
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group relative bg-white rounded-lg shadow-sm overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white rounded-full shadow-sm">
            <Heart size={18} className="text-gray-600" />
          </Button>
        </div>
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-nongmadol-500 text-white text-xs px-2 py-1 rounded">
            New
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-1 text-sm text-gray-500">{product.category}</div>
        <h3 className="font-medium text-gray-900 group-hover:text-nongmadol-600 mb-1 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-baseline mt-1 mb-2">
          <span className="text-gray-900 font-bold">₹{product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ₹{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="mt-auto pt-3">
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-nongmadol-500 hover:bg-nongmadol-600"
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
