"use client";

import { motion } from "framer-motion";
import { Category, categories } from "@/types/product";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryTabs({
  selectedCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="relative flex justify-center mb-12">
      <div className="inline-flex rounded-2xl bg-secondary/50 p-1.5 backdrop-blur-sm shadow-lg">
        {categories.map((category) => {
          const isActive = selectedCategory === category.value;
          return (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={cn(
                "relative px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl",
                "hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-background rounded-xl shadow-md"
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 35 
                  }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}