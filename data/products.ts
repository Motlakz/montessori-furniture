import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Montessori Low Shelf Unit',
    description: 'Perfect height for toddlers with three spacious compartments for toys and learning materials.',
    price: 129.99,
    rating: 4.8,
    category: 'shelves',
    image: 'https://images.unsplash.com/photo-1593085260707-5377ba37f868?q=80&w=800&auto=format&fit=crop',
    amazonLink: 'https://amazon.com',
  },
  {
    id: '2',
    name: 'Child-Size Work Table',
    description: 'Sturdy wooden table perfect for activities, crafts, and independent work.',
    price: 159.99,
    rating: 4.9,
    category: 'tables',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=800&auto=format&fit=crop',
    amazonLink: 'https://amazon.com',
  },
  {
    id: '3',
    name: 'Adjustable Learning Tower',
    description: 'Safe and stable platform allowing children to reach counter height independently.',
    price: 189.99,
    rating: 4.7,
    category: 'learning-towers',
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=800&auto=format&fit=crop',
    amazonLink: 'https://amazon.com',
  },
  // Add more products as needed
];