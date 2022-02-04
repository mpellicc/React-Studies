import { Row, Col, Typography, Card } from "antd";
import { Content } from "antd/lib/layout/layout";
import Counter from "components/Counter/Counter";
import { Outlet } from "react-router-dom";

function TestPage() {
  return (
    <Content>
      <Outlet />
    </Content>
  );
}

export default TestPage;
