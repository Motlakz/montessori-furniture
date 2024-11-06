"use client";

import { Category, categories } from "@/types/product";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={selectedCategory === category.value ? "default" : "outline"}
          onClick={() => onCategoryChange(category.value)}
          className={cn(
            "transition-all",
            selectedCategory === category.value &&
              "bg-primary text-primary-foreground"
          )}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}