import { Button, Menu, List, InputNumber, Popover, Divider, Badge, Radio } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { Header } from "antd/lib/layout/layout";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, getTotal, increaseQuantity, removeFromCart, selectCart, } from "features/cart/cartSlice";

const lngs: any = {
  en: { nativeName: "English" },
  it: { nativeName: "Italiano" },
};

function Navbar() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  
  function cartTotal() {
    dispatch(getTotal());
    return cart.total;
  }

  const cartTotalNumber = cartTotal();

  const cartContent = (
    <>
      <List
        dataSource={cart.items}
        renderItem={(prod) => (
          <List.Item key={prod.item.id}>
            {prod.item.title}
            <div>
              {t("quantity")}: <Badge count={prod.cartQty} />
            </div>
            <ButtonGroup>
              <Button type="link" size="small" onClick={() => dispatch(increaseQuantity(prod.item.id!))}>+</Button>
              <Button type="link" size="small" onClick={() => dispatch(decreaseQuantity(prod.item.id!))} disabled={prod.cartQty === 1 ? true : false}>-</Button>
            </ButtonGroup>
            <Divider type="vertical" />
            <Button type="link" size="small" onClick={() => dispatch(removeFromCart(prod.item.id!))}>Remove</Button>
          </List.Item>
        )}
      />
      <Divider />
      <p>Tot.: {cartTotalNumber} €</p>
      <Button type="primary">{t('gotoCart')}</Button>
    </>
  );

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
          <Link to="/products/create">{t("create")}</Link>
        </Menu.Item>
        <Menu.Item key="/products">
          <Link to="/products">{t("view list")}</Link>
        </Menu.Item>
        <Menu.Item key="/redux">
          <Link to="/redux">{t("test page")}</Link>
        </Menu.Item>
        <Menu.Item key="lngs" style={{ marginLeft: "auto" }} disabled>
          <Radio.Group defaultValue="English" buttonStyle="solid">
            {Object.keys(lngs).map((lng) => (
              <Radio.Button
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                value={lng}
              >
                {lngs[lng].nativeName}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Menu.Item>
        <Popover
          content={cartContent}
          title={t("cart")}
          trigger="hover"
          placement="bottomRight"
          arrowPointAtCenter
        >
          <Menu.Item key="/cart" style={{ textAlign: "center", width: "7vw" }}>
            <ShoppingCartOutlined style={{ fontSize: "18px" }} />
          </Menu.Item>
        </Popover>
      </Menu>
    </Header>
  );
}

export default Navbar;
