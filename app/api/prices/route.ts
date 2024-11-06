import { NextResponse } from 'next/server';
import { scrapeProductPrices } from '@/lib/scraper';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get('productId');

  if (!productId) {
    return NextResponse.json(
      { error: 'Product ID is required' },
      { status: 400 }
    );
  }

  try {
    const prices = await scrapeProductPrices(productId);
    return NextResponse.json(prices);
  } catch (error) {
    console.error('Price fetching error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch price data' },
      { status: 500 }
    );
  }
}