import { Row, Col, Typography } from "antd";
import Counter from "components/Counter/Counter";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReduxProduct } from "features/product/productsSlice";

function ReduxSingleProduct() {
    const { id } = useParams();
    const n_id = Number(id!);
    const prod = useSelector((state: any) => state.products.find((item: any) => item.id === n_id));

  return (
    <Row>
      <Col span={14}>
        <Typography.Title>{prod ? prod.title : "Not found"}</Typography.Title>
      </Col>
      <Col span={10}>
        <Counter id={n_id} />
      </Col>
    </Row>
  );
}

export default ReduxSingleProduct;  