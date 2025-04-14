
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { useCart } from '@/context/CartContext';

const Checkout = () => {
  const { cart, clearCart, subtotal } = useCart();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod',
    saveInfo: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Calculate shipping - free over ₹1000
  const shippingCost = subtotal >= 1000 ? 0 : 150;
  const total = subtotal + shippingCost;
  
  if (cart.length === 0) {
    // Redirect to cart if cart is empty
    navigate('/cart');
    return null;
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormState((prev) => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.firstName || !formState.lastName || !formState.email || 
        !formState.phone || !formState.address || !formState.city || 
        !formState.state || !formState.pincode) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      toast.success('Your order has been placed successfully!');
      clearCart();
      navigate('/order-success');
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formState.phone}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  name="address"
                  value={formState.address}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  name="city"
                  value={formState.city}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="state">State *</Label>
                <Select
                  value={formState.state}
                  onValueChange={(value) => handleSelectChange('state', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manipur">Manipur</SelectItem>
                    <SelectItem value="assam">Assam</SelectItem>
                    <SelectItem value="nagaland">Nagaland</SelectItem>
                    <SelectItem value="meghalaya">Meghalaya</SelectItem>
                    <SelectItem value="mizoram">Mizoram</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="pincode">PIN Code *</Label>
                <Input
                  id="pincode"
                  name="pincode"
                  value={formState.pincode}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2 mt-6">
              <Checkbox
                id="saveInfo"
                checked={formState.saveInfo}
                onCheckedChange={(checked) => handleCheckboxChange('saveInfo', checked as boolean)}
              />
              <Label htmlFor="saveInfo" className="text-sm">
                Save this information for next time
              </Label>
            </div>
            
            <Separator className="my-8" />
            
            <h2 className="text-xl font-bold mb-6">Payment Method</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 border rounded cursor-pointer bg-gray-50">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="cod"
                  checked={formState.paymentMethod === 'cod'}
                  onChange={handleChange}
                  className="h-4 w-4 text-nongmadol-500 border-gray-300"
                />
                <Label htmlFor="cod" className="cursor-pointer">
                  Cash on Delivery
                </Label>
              </div>
              
              <div className="flex items-center space-x-3 p-3 border rounded cursor-pointer">
                <input
                  type="radio"
                  id="online"
                  name="paymentMethod"
                  value="online"
                  checked={formState.paymentMethod === 'online'}
                  onChange={handleChange}
                  className="h-4 w-4 text-nongmadol-500 border-gray-300"
                />
                <Label htmlFor="online" className="cursor-pointer">
                  Online Payment (Credit Card, UPI, Net Banking)
                </Label>
              </div>
            </div>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            
            <div className="divide-y">
              {cart.map((item) => (
                <div key={item.product.id} className="py-3 flex justify-between">
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex-shrink-0 bg-gray-100 rounded overflow-hidden mr-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">
                        {item.product.name} 
                        <span className="text-gray-500 ml-1">x{item.quantity}</span>
                      </h4>
                      <p className="text-xs text-gray-500">{item.product.category}</p>
                    </div>
                  </div>
                  <span className="font-medium">
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            
            <Separator className="my-4" />
            
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
            
            <Button 
              onClick={handleSubmit}
              className="w-full bg-nongmadol-500 hover:bg-nongmadol-600 mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
