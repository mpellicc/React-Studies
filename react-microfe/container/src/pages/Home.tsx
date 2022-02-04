import { Button, Row, Col, Card } from "antd";
import { Content } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
/* import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; */

function Home() {
  /* const {t, i18n} = useTranslation(); */
  return (
    <Content style={{ padding: "0 50px", marginTop: 64 }}>
      <Card bordered={false} style={{margin: '50px 0'}}>
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
            {/* <Link to="/products/create"> */}
              <Button type="primary" size="large" shape="round">
                {/* {t('create').toUpperCase()} */} 1
              </Button>
           {/*  </Link> */}
          </div>
        </Col>
        <Col span={12}>
          <div
            style={{
              textAlign: "center",
            }}
          >
            {/* <Link to="/products"> */}
              <Button size="large" shape="round">
              {/* {t('view').toUpperCase()} */} 2
              </Button>
            {/* </Link> */}
          </div>
        </Col>
      </Row>
      </Card>
    </Content>
  );
}

export default Home;
