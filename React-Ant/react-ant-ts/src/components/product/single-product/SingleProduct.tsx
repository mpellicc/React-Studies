import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Product } from "../Products";
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

  const formattedList = list.map((item) => (
    <Menu.Item key={item.id}>
      <Link to={`/products/${item.id}`}>{item.name}</Link>
    </Menu.Item>
  ));

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
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item key="back">
            <Link to="/products">Back to List</Link>
          </Menu.Item>
          {formattedList}
        </Menu>
      </Header>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Row>
            <Col span={12}>
              <ProductImage id={nId} />
            </Col>
            <Col span={12}>
              <ProductDetails item={item} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default SingleProduct;
