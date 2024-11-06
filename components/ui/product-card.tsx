"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PriceComparison } from "@/components/price-comparison";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-xl mb-2 line-clamp-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            {product.rating && (
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
            )}
            <p className="font-bold text-lg text-primary">${product.price}</p>
          </div>

          <Button 
            asChild 
            className="w-full bg-primary/90 hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <a
              href={product.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              View on Amazon
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>

          <PriceComparison 
            productId={product.id}
            productName={product.name}
          />
        </div>
      </Card>
    </motion.div>
  );
}