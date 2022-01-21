import { useState } from "react";

import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";

import { Layout, Menu, Row, Col } from "antd";
const { Header, Content, Footer, Sider } = Layout;

export type Product = {
  id: number;
  serial: string;
  name: string;
  desc: string;
  price: number;
};

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      serial: "GDZ1954BR",
      name: "Godzilla Blu-ray",
      desc: "Godzilla (1954) Blu-ray edition. Language: Japanese, Subtitles: English.",
      price: 43.25,
    },
    {
      id: 2,
      serial: "FRR458ITA",
      name: "Ferrari 458 Italia",
      desc: "Sports car berlinetta type produced by Ferrari in 2009",
      price: 205000,
    },
    {
      id: 3,
      serial: "EVNCHIFER",
      name: "Evian Chiara Ferragni",
      desc: "Evian and Chiara Ferragni band together to reate the new iconic limited edition Evian",
      price: 8,
    },
    {
      id: 4,
      serial: "SNYPLSTN5",
      name: "Sony PlayStation 5",
      desc: "Home video game console developed by Sony Interactive Entertainment, released in November 2020",
      price: 499.99,
    },
    {
      id: 5,
      serial: "AMZSPMAN1",
      name: "AMAZING SPIDER-MAN Vol. 1",
      desc: "First comic of the iconic The Amazing Spider-Man series (1963)",
      price: 131450,
    },
    {
      id: 6,
      serial: "MCDFILOFS",
      name: "Filet-o-fish Menu",
      desc: "McDonald's Filet-o-fish menu: with drink and fries.",
      price: 4.9,
    },
  ]);

  const list: Array<Product> = products.slice();
  const formattedList = list.map((item) => (
    <Menu.Item key={item.id}>
      {item.name}
    </Menu.Item>
  ));

  const [collapsed, setCollapsed] = useState(false);

  function onCollapse(collapsed: boolean) {
    setCollapsed(collapsed);
  }

  return (
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Menu mode="inline">{formattedList}</Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <Row>
              <Col span={12}>
                <ProductImage id={1} />
              </Col>
              <Col span={12}>
                <ProductDetails id={1} list={list} />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
  );
}

export default Products;
