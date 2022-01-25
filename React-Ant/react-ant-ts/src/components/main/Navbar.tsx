import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Header style={{
            position: 'fixed',
            width: '100%',
            zIndex: 1,
            padding: '0',
        }}
        >
            <Menu mode="horizontal">
                <Menu.Item key="0"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="1"><Link to="/products/create">Create</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/products">View List</Link></Menu.Item>
            </Menu>
        </Header>
    );
}

export default Navbar