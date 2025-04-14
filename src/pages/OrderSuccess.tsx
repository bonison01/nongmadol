
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const OrderSuccess = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  
  // Generate a random order ID
  const orderId = `NMD${Math.floor(100000 + Math.random() * 900000)}`;
  
  // If cart isn't empty, user probably refreshed this page, so navigate to home
  useEffect(() => {
    if (cart.length > 0) {
      navigate('/');
    }
  }, [cart, navigate]);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center">
          <CheckCircle size={80} className="text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold mt-6 mb-2">Thank You for Your Order!</h1>
        <p className="text-xl text-gray-600 mb-6">
          Your order has been received and is being processed.
        </p>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500">Order ID:</span>
            <span className="font-medium">{orderId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Estimated Delivery:</span>
            <span className="font-medium">
              {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
        
        <p className="mb-8 text-gray-600">
          We've sent an order confirmation to your email. You'll receive another notification when your order ships.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline">
            <Link to="/">
              Back to Homepage
            </Link>
          </Button>
          <Button asChild className="bg-nongmadol-500 hover:bg-nongmadol-600">
            <Link to="/shop" className="inline-flex items-center">
              Continue Shopping
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
