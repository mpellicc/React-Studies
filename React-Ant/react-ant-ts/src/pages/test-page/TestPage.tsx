import { Row, Col, Typography } from "antd";
import Counter from "components/Counter/Counter";

function TestPage() {
  return (
    <Row>
      <Col span={10}>
        <Typography.Title>PRODUCT</Typography.Title>
      </Col>
      <Col span={14}>
        <Counter />
      </Col>
    </Row>
  );
}

export default TestPage;
