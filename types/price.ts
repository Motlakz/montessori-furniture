export interface PriceData {
  store: string;
  price: number;
  url: string;
  inStock: boolean;
  lastUpdated: string;
  shipping?: string;
  rating?: number;
  reviews?: number;
}