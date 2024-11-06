"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Store } from "lucide-react";
import { ProductGrid } from "@/components/product-grid";
import { CategoryTabs } from "@/components/category-tabs";
import { SearchBar } from "@/components/search-bar";
import { products } from "@/data/products";
import { Category } from "@/types/product";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-purple-50/20 to-background">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Store className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-primary">
              Montessori Furniture
            </h1>
          </motion.div>
          <p className="text-xl text-muted-foreground">
            Quality furniture for your child's development journey
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <CategoryTabs
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <AnimatePresence mode="wait">
          {filteredProducts.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center py-16"
            >
              <p className="text-lg text-muted-foreground">No products found</p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <ProductGrid products={filteredProducts} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}