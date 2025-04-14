
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-nongmadol-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center py-12 md:py-24">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Discover the Finest Tea from <span className="text-nongmadol-600">Manipur</span>
            </h1>
            <p className="text-lg text-gray-700">
              Ethically sourced and carefully crafted. Our premium teas bring the authentic taste of Manipur's hills to your cup.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-nongmadol-500 hover:bg-nongmadol-600 text-white px-6 py-2 text-base rounded">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-nongmadol-600 text-nongmadol-600 px-6 py-2 text-base rounded">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1582793988951-9aed5f8f8f0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Nongmadol Tea Collection" 
              className="rounded-lg shadow-lg object-cover w-full aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-nongmadol-500/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
