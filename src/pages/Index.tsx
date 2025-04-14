
import React from 'react';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategorySection from '@/components/CategorySection';
import TestimonialSection from '@/components/TestimonialSection';
import Newsletter from '@/components/Newsletter';
import { getFeaturedProducts, getNewArrivals } from '@/data/products';
import { categories } from '@/data/categories';
import { testimonials } from '@/data/testimonials';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <div className="min-h-screen">
      <Hero />
      
      <FeaturedProducts 
        title="Featured Products" 
        subtitle="Our selection of premium teas and accessories"
        products={featuredProducts}
        viewAllLink="/shop"
      />
      
      <CategorySection categories={categories} />
      
      <FeaturedProducts 
        title="New Arrivals" 
        subtitle="Just added to our collection"
        products={newArrivals}
        viewAllLink="/new-arrivals"
      />
      
      <TestimonialSection testimonials={testimonials} />
      
      <Newsletter />
    </div>
  );
};

export default Index;
