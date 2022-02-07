import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../types/Product";
import { Row, Col, Spin, Button, Divider, Space, Typography, message, Image } from "antd";
import ProductService from "../services/ProductsService";

function ProductDetails() {
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const n_id = parseInt(id!);
  const [product, setProduct] = useState<Product>({
    id: null,
    title: "",
    price: null,
    category: "",
    description: "",
  });

  useEffect(() => {
    ProductService.get(1)
      .then((res: any) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((e: Error) => console.log(e));
  }, []);

  function addMessage() {
    message
      .loading("Adding to cart...", 2.5)
      .then(() => message.info("Product added to cart."));
  }

  if (loading) {
    return (
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <Spin spinning={loading} size="large" />
        </Col>
      </Row>
    );
  } else {
    return (
        <Row>
        <Col span={10} style={{ textAlign: "center" }}>
          <Image src={product.image} width="40vh" />
        </Col>
        <Col span={14}>
          <div>
            <Typography.Title level={1}>{product.title}</Typography.Title>
            <Typography.Title level={5} type="secondary">
              {product.category}
            </Typography.Title>
          </div>
          <Divider />
          <Space direction="vertical" size={80}>
            <div>
              <Typography.Text>{product.description}</Typography.Text>
            </div>
            <div>
              <Space size="large">
                <Button
                  type="primary"
                  size="large"
                  shape="round"
                  danger
                  onClick={addMessage}
                >
                  Buy Now - {product.price} €
                </Button>
                {/* <Link to={`/products/${n_id}/edit`}>
                  <Button size="large" shape="round" ghost danger>
                    Edit
                  </Button>
                </Link> */}
              </Space>
            </div>
          </Space>
        </Col>
      </Row>
    );
  }
}

export default ProductDetails;
