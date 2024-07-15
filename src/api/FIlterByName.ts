import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '@/data/db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'Nome do produto não especificado' });
  }

  const searchedProducts = products.filter((product) => 
    product.name.toLowerCase().includes((name as string).toLowerCase())
  );
  res.status(200).json(searchedProducts);
}
