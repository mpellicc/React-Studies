import { Button, Row, Col } from "antd";
import { Content } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Content>
      <Row>
        <Col
          style={{
            textAlign: "center",
          }}
          span={24}
        >
          <Title>HOME</Title>
        </Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <Col span={12}>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Link to="/products/create">
              <Button type="primary" size="large" shape="round">
                CREATE
              </Button>
            </Link>
          </div>
        </Col>
        <Col span={12}>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Link to="/products">
              <Button size="large" shape="round">
                VIEW
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Content>
  );
}

export default Home;
