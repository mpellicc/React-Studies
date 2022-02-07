export type Product = {
  id?: number | null;
  title: string;
  price: number | null;
  category: string;
  description: string;
  image?: string;
  cartQty?: number;
};
