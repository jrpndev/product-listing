import { Brand } from "./brand";
import { Category } from "./category";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    brand: Brand;
    imageUrl: string;
}