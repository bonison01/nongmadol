
import React from 'react';
import { Link } from 'react-router-dom';
import { getNewArrivals } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewArrivals = () => {
  const newProducts = getNewArrivals();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        asChild
        variant="ghost" 
        className="mb-6 flex items-center text-gray-600"
      >
        <Link to="/">
          <ArrowLeft size={16} className="mr-1" />
          Back to Home
        </Link>
      </Button>
      
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl font-bold">New Arrivals</h1>
        <p className="text-gray-600 mt-2">
          Discover our latest tea products, fresh from the gardens of Manipur
        </p>
      </div>
      
      {newProducts.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-lg font-medium mb-2">No new products available</h3>
          <p className="text-gray-500 mb-4">Check back soon for our latest arrivals</p>
          <Button asChild className="bg-nongmadol-500 hover:bg-nongmadol-600">
            <Link to="/shop">Shop All Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewArrivals;
