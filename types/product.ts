export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating?: number;
  category: Category;
  image: string;
  amazonLink: string;
}

export type Category = 'shelves' | 'tables' | 'chairs' | 'learning-towers' | 'all';

export const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'shelves', label: 'Shelves' },
  { value: 'tables', label: 'Tables' },
  { value: 'chairs', label: 'Chairs' },
  { value: 'learning-towers', label: 'Learning Towers' },
];