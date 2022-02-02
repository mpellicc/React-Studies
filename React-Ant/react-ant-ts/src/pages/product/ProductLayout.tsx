import { Content } from "antd/lib/layout/layout";
import { Outlet } from "react-router-dom";

function ProductLayout() {
  return (
    <Content>
      <Outlet />
    </Content>
  );
}

export default ProductLayout;
