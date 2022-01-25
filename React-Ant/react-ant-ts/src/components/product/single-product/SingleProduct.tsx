import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Product } from "../../../types/Product";
import ProductDetails from "./ProductDetails";

import { Row, Col } from "antd";

function SingleProduct() {
  // const [collapsed, setCollapsed] = useState(false);

  /*
  function onCollapse(collapsed: boolean) {
    setCollapsed(collapsed);
  }
  */

  return (
      <ProductDetails />
  );
}

export default SingleProduct;
