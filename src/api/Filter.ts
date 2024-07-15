import type { NextApiRequest, NextApiResponse } from 'next';
import {products} from '@/data/db';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { category } = req.query;

    if (!category) {
        return res.status(400).json({ error: 'Categoria não especificada' });
    }
    const filteredProducts = products.filter((product) => product.category.name === category);
    res.status(200).json(filteredProducts);
}
