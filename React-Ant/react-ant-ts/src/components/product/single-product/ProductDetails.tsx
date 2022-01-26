import { Divider, Typography, Button, Col, Image, Spin, Row } from "antd";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductService from "../../../services/ProductsService";
import { LeftOutlined } from '@ant-design/icons'
import { Product } from "../../../types/Product";

function ProductDetails() {
  const { id } = useParams();
  const n_id = parseInt(id!);
  const [product, setProduct] = useState<Product>({
    id: null,
    title: "",
    price: null,
    category: "",
    description: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    ProductService.get(n_id)
      .then((res: any) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((e: Error) => console.log(e));
  }, []);

  if (loading) {
    return (
    <Row>
      <Col span={24} style={{ textAlign: 'center', }}>
      <Spin spinning={loading} size="large" />
      </Col>
    </Row>
    );
  } else {
    return (
      <Row>
        <Col span={1}>
          <Link to='/products'><Button icon={<LeftOutlined />}>Back</Button></Link>
        </Col>
        <Col span={9} style={{ textAlign: "center" }}>
          <Image src={product.image} width='30%' />
        </Col>
        <Col span={14}>
          <Typography.Title level={1}>{product.title}</Typography.Title>
          <Typography.Title level={5} type="secondary">
            {product.category}
          </Typography.Title>
          <Divider />
          <Typography.Text>{product.description}</Typography.Text>
          <br />
          <br />
          <Button type="primary" size="large" shape="round" danger>
            Buy Now - {product.price} €
          </Button>
        </Col>
      </Row>
    );
  }
}

export default ProductDetails;
