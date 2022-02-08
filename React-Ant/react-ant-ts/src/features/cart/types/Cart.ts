import { Product } from "features/product/types/Product";

export type CartItem = {
    item: Product;
    cartQty: number;
}

export type Cart = {
    items: CartItem[];
    total: number;
}