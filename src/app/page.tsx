'use client';

import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';
import BrandFilter from '../components/BrandFilter';
import { products as staticProducts } from '../data/db';
import { Product } from '@/models/product';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(staticProducts);
  const [category, setCategory] = useState<string | null>(null);
  const [brand, setBrand] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    let filteredProducts = staticProducts;

    if (category) {
      filteredProducts = filteredProducts.filter(product => product.category.name === category);
    }

    if (brand) {
      filteredProducts = filteredProducts.filter(product => product.brand.name === brand);
    }

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setProducts(filteredProducts);
  }, [category, brand, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Catálogo de Produtos</h1>
          <input
            type="text"
            placeholder="Pesquisar por nome"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full md:w-auto md:ml-4"
          />
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row mb-4">
        <CategoryFilter onSelect={(cat) => setCategory(cat ? cat.name : null)} />
        <BrandFilter onSelect={(brand) => setBrand(brand ? brand.name : null)} />
        </div>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Home;
