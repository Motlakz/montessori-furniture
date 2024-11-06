"use client";

import { useState, useEffect } from 'react';

interface PriceData {
  store: string;
  price: number;
  url: string;
  inStock: boolean;
  lastUpdated: string;
}

export function usePriceComparison(productId: string) {
  const [prices, setPrices] = useState<PriceData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/prices?productId=${productId}`);
        if (!response.ok) throw new Error('Failed to fetch prices');
        
        const data = await response.json();
        setPrices(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch prices');
      } finally {
        setIsLoading(false);
      }
    };

    if (productId) {
      fetchPrices();
    }
  }, [productId]);

  return { prices, isLoading, error };
}