"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, AlertCircle, Loader2, Star, Truck } from "lucide-react";
import { format } from "date-fns";
import { usePriceComparison } from "@/hooks/use-price-comparison";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PriceData } from "@/types/price";

interface PriceComparisonProps {
  productId: string;
  productName: string;
}

export function PriceComparison({ productId, productName }: PriceComparisonProps) {
  const { prices, isLoading, error } = usePriceComparison(productId);

  const lowestPrice = prices.length
    ? Math.min(...prices.map((p) => p.price))
    : null;

  const renderPriceCard = (price: PriceData, index: number) => (
    <motion.div
      key={price.store}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`p-4 rounded-lg border ${
        price.price === lowestPrice
          ? "border-primary bg-primary/5"
          : "border-border"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="font-medium text-lg">{price.store}</span>
          {price.rating && price.reviews && (
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">
                {price.rating.toFixed(1)} ({price.reviews})
              </span>
            </div>
          )}
        </div>
        <div className="text-right">
          <span
            className={`font-bold text-xl ${
              price.price === lowestPrice
                ? "text-primary"
                : "text-foreground"
            }`}
          >
            ${price.price.toFixed(2)}
          </span>
          {price.shipping && (
            <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
              <Truck className="h-3 w-3" />
              <span>{price.shipping}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-3 mt-3">
        <span className={price.inStock ? "text-green-600" : "text-red-500"}>
          {price.inStock ? "In Stock" : "Out of Stock"}
        </span>
        <div className="flex items-center gap-2">
          <span>
            Updated {format(new Date(price.lastUpdated), "MMM d, h:mma")}
          </span>
          <a
            href={price.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full mt-4 bg-primary/5 hover:bg-primary/10 border-primary/20"
        >
          Compare Prices
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mb-4">
            Price Comparison for {productName}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center py-8"
              >
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </motion.div>
            ) : error ? (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              </motion.div>
            ) : (
              <motion.div
                key="prices"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-3"
              >
                {prices.map((price, index) => renderPriceCard(price, index))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}