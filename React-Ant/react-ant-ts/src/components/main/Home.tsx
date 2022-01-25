import { Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Row>
        <Col span={24}>
          <div
            style={{
              textAlign: "center",
              fontSize: "33px",
              fontWeight: "bold",
            }}
          >
            HOME
          </div>
        </Col>
      </Row>
      <Row justify="center" align="middle" style={{
            height: '100%',
        }}>
        <Col span={12} >
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
    </>
  );
}

export default Home;
