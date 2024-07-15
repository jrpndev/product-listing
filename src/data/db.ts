
import { Product } from "@/models/product";

export const products: Product[] = [
  { 
    id: 1, 
    name: 'Nike Air Max 90', 
    description: 'Comfortable and stylish sneakers.', 
    price: 120, 
    imageUrl: 'https://lumman.fbitsstatic.net/img/p/tenis-esportivo-adidas-masculino-preto-75615/284371.jpg?w=650&h=650&v=no-change&qs=ignore', 
    category: { id: 1, name: 'Sneakers' }, 
    brand: { id: 1, name: 'Nike' }
  },
  { 
    id: 2, 
    name: 'Adidas Ultraboost 21', 
    description: 'High-performance running shoes.', 
    price: 180, 
    imageUrl: 'https://lumman.fbitsstatic.net/img/p/tenis-esportivo-adidas-masculino-preto-75615/284371.jpg?w=650&h=650&v=no-change&qs=ignore', 
    category: { id: 2, name: 'Running' }, 
    brand: { id: 2, name: 'Adidas' }
  },
  { 
    id: 3, 
    name: 'New Balance 990v5', 
    description: 'Classic design with premium comfort.', 
    price: 175, 
    imageUrl: 'https://lumman.fbitsstatic.net/img/p/tenis-esportivo-adidas-masculino-preto-75615/284371.jpg?w=650&h=650&v=no-change&qs=ignore', 
    category: { id: 1, name: 'Sneakers' }, 
    brand: { id: 3, name: 'New Balance' }
  },
  { 
    id: 4, 
    name: 'Converse Chuck Taylor All Star', 
    description: 'Timeless and versatile sneakers.', 
    price: 60, 
    imageUrl: 'https://lumman.fbitsstatic.net/img/p/tenis-esportivo-adidas-masculino-preto-75615/284371.jpg?w=650&h=650&v=no-change&qs=ignore', 
    category: { id: 3, name: 'Casual' }, 
    brand: { id: 4, name: 'Converse' }
  },
  { 
    id: 5, 
    name: 'Nike Air Zoom Pegasus 37', 
    description: 'Responsive running shoes.', 
    price: 120, 
    imageUrl: 'https://lumman.fbitsstatic.net/img/p/tenis-esportivo-adidas-masculino-preto-75615/284371.jpg?w=650&h=650&v=no-change&qs=ignore', 
    category: { id: 2, name: 'Running' }, 
    brand: { id: 1, name: 'Nike' }
  },
  { 
    id: 6, 
    name: 'Adidas NMD_R1', 
    description: 'Stylish and comfortable sneakers.', 
    price: 140, 
    imageUrl: 'https://lumman.fbitsstatic.net/img/p/tenis-esportivo-adidas-masculino-preto-75615/284371.jpg?w=650&h=650&v=no-change&qs=ignore', 
    category: { id: 1, name: 'Sneakers' }, 
    brand: { id: 2, name: 'Adidas' }
  },
  { 
    id: 7, 
    name: 'New Balance Fresh Foam 1080v11', 
    description: 'Ultimate cushioning for long runs.', 
    price: 150, 
    imageUrl: 'https://lumman.fbitsstatic.net/img/p/tenis-esportivo-adidas-masculino-preto-75615/284371.jpg?w=650&h=650&v=no-change&qs=ignore', 
    category: { id: 2, name: 'Running' }, 
    brand: { id: 3, name: 'New Balance' }
  },
  { 
    id: 8, 
    name: 'Converse One Star Pro', 
    description: 'Durable skateboarding shoes.', 
    price: 70, 
    imageUrl: 'https://lumman.fbitsstatic.net/img/p/tenis-esportivo-adidas-masculino-preto-75615/284371.jpg?w=650&h=650&v=no-change&qs=ignore', 
    category: { id: 4, name: 'Skateboarding' }, 
    brand: { id: 4, name: 'Converse' }
  },
  { 
    id: 9, 
    name: 'Nike React Infinity Run Flyknit 2', 
    description: 'Designed to help reduce injury.', 
    price: 160, 
    imageUrl: 'https://lumman.fbitsstatic.net/img/p/tenis-esportivo-adidas-masculino-preto-75615/284371.jpg?w=650&h=650&v=no-change&qs=ignore', 
    category: { id: 2, name: 'Running' }, 
    brand: { id: 1, name: 'Nike' }
  },
  { 
    id: 10, 
    name: 'Adidas Yeezy Boost 350 V2', 
    description: 'Highly coveted and stylish.', 
    price: 220, 
    imageUrl: 'https://lumman.fbitsstatic.net/img/p/tenis-esportivo-adidas-masculino-preto-75615/284371.jpg?w=650&h=650&v=no-change&qs=ignore', 
    category: { id: 1, name: 'Sneakers' }, 
    brand: { id: 2, name: 'Adidas' }
  },
  { 
    id: 11, 
    name: 'New Balance FuelCell Rebel v2', 
    description: 'Lightweight and responsive.', 
    price: 130, 
    imageUrl: 'https://lumman.fbitsstatic.net/img/p/tenis-esportivo-adidas-masculino-preto-75615/284371.jpg?w=650&h=650&v=no-change&qs=ignore', 
    category: { id: 2, name: 'Running' }, 
    brand: { id: 3, name: 'New Balance' }
  },
  { 
    id: 12, 
    name: 'Converse Jack Purcell', 
    description: 'Classic badminton-inspired sneakers.', 
    price: 65, 
    imageUrl: 'https://lumman.fbitsstatic.net/img/p/tenis-esportivo-adidas-masculino-preto-75615/284371.jpg?w=650&h=650&v=no-change&qs=ignore', 
    category: { id: 3, name: 'Casual' }, 
    brand: { id: 4, name: 'Converse' }
  },
];
