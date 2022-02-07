import { Product } from "features/product/types/Product";

export type Cart = {
    items: Product[];
    total: number;
}