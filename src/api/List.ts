import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '@/data/db';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
