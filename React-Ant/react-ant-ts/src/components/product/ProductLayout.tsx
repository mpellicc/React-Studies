import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Product } from "../../types/Product"

function ProductLayout() {
  const [products, setProducts] = useState([
  ]);

  const list: Array<Product> = products.slice();

  return (
    <>
      <Outlet />
    </>
  );
}

export default ProductLayout;
