import {
  Divider,
  Typography,
  Button,
  Col,
  Space,
  Image,
  message,
  Row,
} from "antd";
import { addToCart } from "features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Product } from "../../types/Product";

type Props = {
  prod: Product;
};

function ProductDetails({ prod }: Props) {
  const { id } = useParams();
  const n_id = parseInt(id!);
  const dispatch = useDispatch();


  function addMessage() {
    message
      .loading("Adding to cart...", 2.5)
      .then(() => message.info("Product added to cart."));
  }

  return (
    <Row>
      <Col span={10} style={{ textAlign: "center" }}>
        <Image src={prod.image} width="40vh" />
      </Col>
      <Col span={14}>
        <div>
          <Typography.Title level={1}>{prod.title}</Typography.Title>
          <Typography.Title level={5} type="secondary">
            {prod.category}
          </Typography.Title>
        </div>
        <Divider />
        <Space direction="vertical" size={80}>
          <div>
            <Typography.Text>{prod.description}</Typography.Text>
          </div>
          <div>
            <Space size="large">
              <Button
                type="primary"
                size="large"
                shape="round"
                danger
                onClick={() => {dispatch(addToCart(prod)); addMessage()}}
              >
                Buy Now - {prod.price} €
              </Button>
              <Link to={`/products/${n_id}/edit`}>
                <Button size="large" shape="round" ghost danger>
                  Edit
                </Button>
              </Link>
            </Space>
          </div>
        </Space>
      </Col>
    </Row>
  );
}

export default ProductDetails;
