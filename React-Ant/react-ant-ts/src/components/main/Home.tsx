import { Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Row align="middle">
        <Col span={12}>
          <Link to="/create">
            <Button type="primary" size="large" shape="round">
              CREATE
            </Button>
          </Link>
        </Col>
        <Col span={12}>
          <Link to="/product">
            <Button size="large" shape="round">
              VIEW
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default Home;
