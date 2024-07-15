'use client';

import { useState } from "react";
import { Brand } from "@/models/brand";

interface BrandFilterProps {
  onSelect: (brand: Brand | null) => void;
}

const brands: Brand[] = [
  { id: 1, name: 'Nike' },
  { id: 2, name: 'Adidas' },
  { id: 3, name: 'New Balance' },
  { id: 4, name: 'Converse' },
];

const BrandFilter: React.FC<BrandFilterProps> = ({ onSelect }) => {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const handleSelect = (brand: Brand) => {
    if (selectedBrand?.id === brand.id) {
      setSelectedBrand(null);
      onSelect(null);
    } else {
      setSelectedBrand(brand);
      onSelect(brand);
    }
  };

  return (
    <div className="mb-4 md:ml-4">
      <h3 className="text-lg font-semibold mb-2">Filtrar por Marca</h3>
      <div className="flex flex-wrap gap-2">
        {brands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => handleSelect(brand)}
            className={`cursor-pointer px-4 py-2 rounded-lg border ${
              selectedBrand?.id === brand.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            {brand.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;
