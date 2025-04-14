
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  const navigate = useNavigate();
  
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button 
            onClick={() => navigate('/shop')}
            className="bg-nongmadol-500 hover:bg-nongmadol-600"
          >
            Browse Products
          </Button>
        </div>
      </div>
    );
  }
  
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const product = cart.find(item => item.product.id === productId);
    if (product && newQuantity > 0 && newQuantity <= product.product.stock) {
      updateQuantity(productId, newQuantity);
    }
  };
  
  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };
  
  const handleCheckout = () => {
    // We'll just navigate to checkout for now
    navigate('/checkout');
  };
  
  // Calculate shipping - free over ₹1000
  const shippingCost = subtotal >= 1000 ? 0 : 150;
  const total = subtotal + shippingCost;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden sm:grid sm:grid-cols-5 p-4 bg-gray-50 text-sm font-medium text-gray-500">
              <div className="sm:col-span-2">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>
            
            <Separator />
            
            {cart.map((item) => (
              <div key={item.product.id} className="p-4 sm:p-6">
                <div className="sm:grid sm:grid-cols-5 gap-6 items-center">
                  {/* Product */}
                  <div className="sm:col-span-2 flex items-center mb-4 sm:mb-0">
                    <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded overflow-hidden mr-4">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        <Link to={`/product/${item.product.id}`} className="hover:text-nongmadol-600">
                          {item.product.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">{item.product.category}</p>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="text-center mb-4 sm:mb-0">
                    <span className="sm:hidden inline-block w-24 text-gray-500 text-sm">Price:</span>
                    <span>₹{item.product.price.toFixed(2)}</span>
                  </div>
                  
                  {/* Quantity */}
                  <div className="flex justify-center mb-4 sm:mb-0">
                    <div className="flex items-center border border-gray-300 rounded">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="h-8 w-8 rounded-none"
                      >
                        <Minus size={14} />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        disabled={item.quantity >= item.product.stock}
                        className="h-8 w-8 rounded-none"
                      >
                        <Plus size={14} />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="flex items-center justify-between sm:justify-end">
                    <span className="sm:hidden text-gray-500 text-sm">Total:</span>
                    <div className="flex items-center">
                      <span className="font-medium mr-4">
                        ₹{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {cart.indexOf(item) < cart.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
            
            {/* Cart Actions */}
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <Button
                variant="outline"
                onClick={() => clearCart()}
                className="text-gray-600"
              >
                Clear Cart
              </Button>
              <Link to="/shop" className="text-nongmadol-600 hover:text-nongmadol-700 font-medium inline-flex items-center">
                Continue Shopping
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : `₹${shippingCost.toFixed(2)}`}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button 
                onClick={handleCheckout}
                className="w-full bg-nongmadol-500 hover:bg-nongmadol-600"
              >
                Proceed to Checkout
              </Button>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                Taxes calculated at checkout. Shipping calculated based on delivery location.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
