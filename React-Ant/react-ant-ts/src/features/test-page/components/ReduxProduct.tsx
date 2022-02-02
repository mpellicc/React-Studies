import { Row, Col, Typography, Card, Divider } from "antd";
import Counter from "components/Counter/Counter";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ReduxSingleProduct() {
  const { id } = useParams();
  const n_id = Number(id!);
  const prod = useSelector((state: any) =>
    state.products.find((item: any) => item.id === n_id)
  );

  return (
    <Card bordered={false} style={{ margin: "50px 0" }}>
      <Row gutter={16}>
        <Col span={16}>
          <Card bordered={false} type="inner">
            <Typography.Title>
              {prod ? prod.title : "Not found"}
            </Typography.Title>
            <Typography.Title level={5} type="secondary">
              {prod ? prod.category : "Not found"}
            </Typography.Title>
            <Divider />
            <div>
              <p>{prod.description}</p>
              <p>{prod.price}$ </p>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={true} type="inner" title="Manage Quantity">
            <Counter id={prod.id} />
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default ReduxSingleProduct;
