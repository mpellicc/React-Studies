import { Product } from "features/product/types/Product";

type CartItem = {
    prod: Product;
    cartQty: number;
}

export type Cart = {
    items: CartItem[];
    total: number;
}