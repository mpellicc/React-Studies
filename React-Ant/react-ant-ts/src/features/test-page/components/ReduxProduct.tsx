import { Row, Col, Typography } from "antd";
import Counter from "components/Counter/Counter";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReduxProduct, selectProductId, selectSingleProduct } from "features/product/productsSlice";

function ReduxSingleProduct() {
    const { id } = useParams();
    const testId = useSelector(selectProductId);
    console.log(testId);
    const prod = {
      title: "test"
    };

  return (
    <Row>
      <Col span={14}>
        <Typography.Title>{prod ? prod.title : "Not found"}</Typography.Title>
      </Col>
      <Col span={10}>
        <Counter />
      </Col>
    </Row>
  );
}

export default ReduxSingleProduct;  