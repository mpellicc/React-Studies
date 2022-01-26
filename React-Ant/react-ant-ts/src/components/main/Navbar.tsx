import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <Header
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1,
        padding: "0",
      }}
    >
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/products/create">
          <Link to="/products/create">Create</Link>
        </Menu.Item>
        <Menu.Item key="/products">
          <Link to="/products">View List</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;
