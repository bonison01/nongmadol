
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Assam Black Tea',
    description: 'A rich and malty black tea with a deep amber color and full-bodied flavor. Our premium Assam tea is sourced from the finest tea gardens in Manipur and is perfect for a strong morning cup.',
    price: 299,
    originalPrice: 349,
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    images: [
      'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
      'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    ],
    category: 'Black Tea',
    tags: ['assam', 'black tea', 'breakfast tea'],
    isNew: true,
    isFeatured: true,
    stock: 50,
    weight: '100g',
    ingredients: ['100% Assam Black Tea'],
    brewing: 'Use 1 teaspoon per cup. Brew in freshly boiled water for 3-5 minutes.',
    rating: 4.8,
    reviews: 124,
  },
  {
    id: '2',
    name: 'Jasmine Green Tea',
    description: 'A delicate green tea scented with jasmine blossoms. This aromatic tea offers a sweet, floral flavor and a soothing experience with every sip.',
    price: 329,
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Green Tea',
    tags: ['green tea', 'jasmine', 'floral'],
    isPopular: true,
    stock: 45,
    weight: '100g',
    ingredients: ['Green Tea Leaves', 'Jasmine Blossoms'],
    brewing: 'Use 1 teaspoon per cup. Brew in water at 80°C for 2-3 minutes.',
    rating: 4.7,
    reviews: 98,
  },
  {
    id: '3',
    name: 'Manipuri Chai Masala',
    description: 'A special blend of spices and premium black tea perfect for making authentic Manipuri chai. This aromatic mixture brings warmth and depth to your daily tea ritual.',
    price: 249,
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Masala Chai',
    tags: ['chai', 'masala', 'spiced tea'],
    isNew: true,
    isFeatured: true,
    stock: 60,
    weight: '150g',
    ingredients: ['Black Tea', 'Cardamom', 'Cinnamon', 'Ginger', 'Cloves', 'Black Pepper'],
    brewing: 'Use 1 teaspoon per cup. Simmer with milk and water for 5-7 minutes.',
    rating: 4.9,
    reviews: 142,
  },
  {
    id: '4',
    name: 'Himalayan White Tea',
    description: 'A rare and exquisite white tea harvested from the foothills of the Himalayas. This tea offers a delicate, slightly sweet flavor with subtle floral notes.',
    price: 499,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1605618826115-fb9e775cf7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'White Tea',
    tags: ['white tea', 'premium', 'himalayan'],
    isPopular: true,
    stock: 25,
    weight: '50g',
    ingredients: ['100% Himalayan White Tea'],
    brewing: 'Use 1 teaspoon per cup. Brew in water at 75°C for 4-5 minutes.',
    rating: 4.9,
    reviews: 54,
  },
  {
    id: '5',
    name: 'Lemongrass Herbal Infusion',
    description: 'A refreshing caffeine-free herbal infusion with lemongrass and a hint of mint. Perfect for relaxation and digestion support.',
    price: 279,
    image: 'https://images.unsplash.com/photo-1597481499666-10f2f72571a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    category: 'Herbal Tea',
    tags: ['herbal', 'lemongrass', 'caffeine-free'],
    isFeatured: true,
    stock: 40,
    weight: '75g',
    ingredients: ['Lemongrass', 'Mint Leaves', 'Lemon Peel'],
    brewing: 'Use 1-2 teaspoons per cup. Steep in boiling water for 5-7 minutes.',
    rating: 4.6,
    reviews: 87,
  },
  {
    id: '6',
    name: 'Organic Oolong Tea',
    description: 'A semi-oxidized tea with complex flavors that range from fruity to woody. Our oolong tea is grown organically in the hills of Manipur.',
    price: 379,
    image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Oolong Tea',
    tags: ['oolong', 'organic', 'premium'],
    isPopular: true,
    stock: 35,
    weight: '100g',
    ingredients: ['100% Organic Oolong Tea'],
    brewing: 'Use 1 teaspoon per cup. Brew in water at 90°C for 3-4 minutes.',
    rating: 4.7,
    reviews: 76,
  },
  {
    id: '7',
    name: 'Ginger Turmeric Wellness Blend',
    description: 'A warming, anti-inflammatory blend combining the power of ginger and turmeric with a hint of black pepper for enhanced absorption.',
    price: 329,
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'Wellness Tea',
    tags: ['wellness', 'turmeric', 'ginger'],
    isNew: true,
    stock: 55,
    weight: '75g',
    ingredients: ['Ginger', 'Turmeric', 'Black Pepper', 'Cinnamon', 'Lemongrass'],
    brewing: 'Use 1 teaspoon per cup. Steep in boiling water for 7-10 minutes.',
    rating: 4.8,
    reviews: 112,
  },
  {
    id: '8',
    name: 'Traditional Tea Ceremony Set',
    description: 'A beautiful ceramic tea set for authentic tea ceremonies. Includes a teapot, 4 cups, and a bamboo tray.',
    price: 1999,
    originalPrice: 2499,
    image: 'https://images.unsplash.com/photo-1594631181663-fda0a9002b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    category: 'Tea Sets',
    tags: ['teaware', 'ceramic', 'gift'],
    isFeatured: true,
    stock: 15,
    weight: '1.5kg',
    rating: 4.9,
    reviews: 42,
  },
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getPopularProducts = (): Product[] => {
  return products.filter(product => product.isPopular);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (id: string, category: string): Product[] => {
  return products
    .filter(product => product.id !== id && product.category === category)
    .slice(0, 4);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
