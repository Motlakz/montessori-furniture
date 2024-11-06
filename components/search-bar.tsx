"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/60 h-5 w-5 transition-colors duration-200 group-hover:text-primary" />
        <Input
          type="text"
          placeholder="Search for Montessori furniture..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-12 h-12 bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 focus:border-primary rounded-2xl text-lg shadow-sm hover:shadow-md transition-all duration-300"
        />
      </div>
    </motion.div>
  );
}