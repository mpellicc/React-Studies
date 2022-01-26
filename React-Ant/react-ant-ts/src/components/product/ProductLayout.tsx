import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Product } from "../../types/Product"

function ProductLayout() {
  
  return (
    <>
      <Outlet />
    </>
  );
}

export default ProductLayout;
