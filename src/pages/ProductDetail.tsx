
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, Heart, Star, Clock, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeaturedProducts from '@/components/FeaturedProducts';
import { getProductById, getRelatedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/shop')}>Return to Shop</Button>
      </div>
    );
  }
  
  const relatedProducts = getRelatedProducts(product.id, product.category);
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6 flex items-center text-gray-600"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={16} className="mr-1" />
        Back
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="bg-gray-50 rounded-lg overflow-hidden mb-4 aspect-square">
            <img 
              src={product.images ? product.images[activeImage] : product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`
                    aspect-square cursor-pointer rounded-md overflow-hidden border-2 
                    ${activeImage === index ? 'border-nongmadol-500' : 'border-transparent'}
                  `}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2 text-sm text-gray-500">{product.category}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < Math.floor(product.rating) 
                      ? 'text-nongmadol-500 fill-nongmadol-500' 
                      : 'text-gray-300'
                    } 
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
            </div>
          )}
          
          {/* Price */}
          <div className="flex items-baseline mb-4">
            <span className="text-2xl font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="ml-2 text-gray-500 line-through">
                ₹{product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Short Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          {/* Product Meta */}
          <div className="mb-6 space-y-2">
            <div className="flex items-center text-sm">
              <span className="font-medium w-24">Weight:</span>
              <span>{product.weight}</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="font-medium w-24">Availability:</span>
              <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </span>
            </div>
          </div>
          
          {/* Add to Cart */}
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className="h-10 w-10 rounded-none"
                >
                  <Minus size={16} />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= product.stock}
                  className="h-10 w-10 rounded-none"
                >
                  <Plus size={16} />
                </Button>
              </div>
              
              <Button 
                className="flex-grow bg-nongmadol-500 hover:bg-nongmadol-600"
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                <ShoppingCart size={16} className="mr-2" />
                Add to Cart
              </Button>
              
              <Button variant="outline" size="icon">
                <Heart size={16} />
              </Button>
            </div>
          </div>
          
          {/* Shipping Info */}
          <div className="space-y-3 border-t border-gray-200 pt-6">
            <div className="flex items-center text-sm">
              <ShieldCheck size={16} className="mr-2 text-nongmadol-500" />
              <span>Satisfaction guaranteed or full refund</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock size={16} className="mr-2 text-nongmadol-500" />
              <span>Ships within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="mb-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
            <TabsTrigger 
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-nongmadol-500 data-[state=active]:bg-transparent text-base py-3"
            >
              Description
            </TabsTrigger>
            <TabsTrigger 
              value="ingredients"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-nongmadol-500 data-[state=active]:bg-transparent text-base py-3"
            >
              Ingredients
            </TabsTrigger>
            <TabsTrigger 
              value="brewing"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-nongmadol-500 data-[state=active]:bg-transparent text-base py-3"
            >
              Brewing Instructions
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="pt-4">
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </TabsContent>
          
          <TabsContent value="ingredients" className="pt-4">
            {product.ingredients ? (
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No ingredients information available.</p>
            )}
          </TabsContent>
          
          <TabsContent value="brewing" className="pt-4">
            {product.brewing ? (
              <p className="text-gray-700 leading-relaxed">{product.brewing}</p>
            ) : (
              <p className="text-gray-700">No brewing instructions available.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <FeaturedProducts 
          title="You May Also Like" 
          products={relatedProducts}
          viewAllLink="/shop"
        />
      )}
    </div>
  );
};

export default ProductDetail;
