
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  tags?: string[];
  isNew?: boolean;
  isPopular?: boolean;
  isFeatured?: boolean;
  stock: number;
  weight: string;
  ingredients?: string[];
  brewing?: string;
  rating?: number;
  reviews?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}
