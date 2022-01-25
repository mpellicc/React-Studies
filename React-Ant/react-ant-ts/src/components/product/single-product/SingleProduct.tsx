import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Product } from "../../../types/Product";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

import { Layout, Menu, Row, Col } from "antd";

const { Header, Content, Footer, Sider } = Layout;

type Props = {
  list: Array<Product>;
};

function SingleProduct(props: Props) {
  const { list } = props;
  const { id } = useParams();
  const nId = parseInt(id || "");

  function ensure<T>(
    argument: T | undefined | null,
    message: string = "Value not valid."
  ): T {
    if (argument === undefined || argument === null) {
      throw new TypeError(message);
    }

    return argument;
  }

  const item = ensure(list.find((p) => p.id === nId));

  // const [collapsed, setCollapsed] = useState(false);

  /*
  function onCollapse(collapsed: boolean) {
    setCollapsed(collapsed);
  }
  */

  return (
    <Row>
      <Col span={12}>
        <ProductImage id={nId} />
      </Col>
      <Col span={12}>
        <ProductDetails item={item} />
      </Col>
    </Row>
  );
}

export default SingleProduct;
