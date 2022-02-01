import { Row, Col, Typography } from "antd";
import Counter from "components/Counter/Counter";
import { Outlet } from "react-router-dom";

function TestPage() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default TestPage;
