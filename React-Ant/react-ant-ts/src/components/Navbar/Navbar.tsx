import { Button, Menu } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { Header } from "antd/lib/layout/layout";
import Text from "antd/lib/typography/Text";
import { useTranslation } from "react-i18next";
import { useLocation, Link } from "react-router-dom";

const lngs: any = {
  en: { nativeName: 'English' },
  it: { nativeName: 'Italiano' },
}

function Navbar() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

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
          <Link to="/products/create">{t('create')}</Link>
        </Menu.Item>
        <Menu.Item key="/products">
          <Link to="/products">{t('view list')}</Link>
        </Menu.Item>
        <Menu.Item key="/redux">
          <Link to="/redux">{t('test page')}</Link>
        </Menu.Item>
        <Menu.Item key="lngs" style={{marginLeft: "auto"}} disabled >
        <ButtonGroup>
        {Object.keys(lngs).map((lng) => (
          <Button key={lng} onClick={() => i18n.changeLanguage(lng)} type={i18n.resolvedLanguage === lng ? "primary" : "default"}>
            {lngs[lng].nativeName}
          </Button>
        ))}
        </ButtonGroup>
        </Menu.Item>
      </Menu>
      
    </Header>
  );
}

export default Navbar;
