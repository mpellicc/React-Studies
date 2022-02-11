import {
  Card,
  List,
  Badge,
  Button,
  Divider,
  Typography,
  Image,
  Space,
} from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { Content } from "antd/lib/layout/layout";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCart,
} from "features/cart/cartSlice";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
const { Text } = Typography;

function CartLayout() {
  const { t, i18n } = useTranslation();
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const sumQty = cart.items.map(item => item.cartQty).reduce((sum, p) => sum += p, 0);

  const footer = (
    <div style={{ textAlign: "right" }}>
      <Text style={{ fontSize: "16px" }}>Tot. ({sumQty} articles):</Text> <Text strong>{cart.total} €</Text>
    </div>
  );
  return (
    <Content>
      <Card bordered={false} title={t("cart")} style={{ margin: "50px 0" }}>
        <List
          dataSource={cart.items}
          renderItem={(prod) => (
            <List.Item key={prod.item.id}>
              <Space size="large" align="start">
                <Image src={prod.item.image} width="10vh" />
                <div>
                  <Text style={{ fontSize: "16px" }}>{prod.item.title}</Text>
                  <br />
                  <Text type="secondary">{prod.item.category}</Text>
                  <div>
                    <Space size="large">
                      <div>
                        {t("quantity")}: <Badge count={prod.cartQty} />
                      </div>
                      <div>
                        <ButtonGroup>
                          <Button
                            type="link"
                            size="small"
                            onClick={() =>
                              dispatch(increaseQuantity(prod.item.id!))
                            }
                          >
                            +
                          </Button>
                          <Button
                            type="link"
                            size="small"
                            onClick={() =>
                              dispatch(decreaseQuantity(prod.item.id!))
                            }
                            disabled={prod.cartQty === 1 ? true : false}
                          >
                            -
                          </Button>
                        </ButtonGroup>
                        <Divider type="vertical" />
                        <Button
                          type="link"
                          size="small"
                          onClick={() =>
                            dispatch(removeFromCart(prod.item.id!))
                          }
                        >
                          Remove
                        </Button>
                      </div>
                    </Space>
                  </div>
                </div>
              </Space>
              <Space align="start" direction="vertical">
                <div style={{ textAlign: "right" }}>
                  <Text style={{ fontSize: "16px" }} strong>
                    {prod.item.price} €
                  </Text>
                </div>
              </Space>
            </List.Item>
          )}
          footer={footer}
        />
      </Card>
    </Content>
  );
}

export default CartLayout;
