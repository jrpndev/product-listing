'use client';

import { useState } from "react";
import { Category } from "@/models/category";

interface CategoryFilterProps {
  onSelect: (category: Category | null) => void;
}

const categories: Category[] = [
  { id: 1, name: 'Sneakers' },
  { id: 2, name: 'Running' },
  { id: 3, name: 'Casual' },
  { id: 4, name: 'Skateboarding' },
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleSelect = (category: Category) => {
    if (selectedCategory?.id === category.id) {
      setSelectedCategory(null);
      onSelect(null);
    } else {
      setSelectedCategory(category);
      onSelect(category);
    }
  };

  return (
    <div className="mb-4 md:mr-4">
      <h3 className="text-lg font-semibold mb-2">Filtrar por Categoria</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleSelect(category)}
            className={`cursor-pointer px-4 py-2 rounded-lg border ${
              selectedCategory?.id === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
