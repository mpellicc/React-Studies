import { Row, Col, Typography, Card, Divider, Empty } from "antd";
import Counter from "components/Counter/Counter";
import { selectProdById } from "features/product/productsSlice";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "store";
const { Text } = Typography;

function ReduxSingleProduct() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const n_id = Number(id!);
  /* const prod = useSelector((state: any) =>
    state.products.find((item: any) => item.id === n_id)
  ); */
  const prod = useSelector((state: RootState) => selectProdById(state, n_id));

  if (!prod) {
    return (
      <Card bordered={false} style={{ margin: "50px 0" }}>
        <Empty
          description={
            <p>
              <Text type="danger">{t('error')}</Text> - {t('product not found')}
            </p>
          }
        />
      </Card>
    );
  }
  return (
    <Card bordered={false} style={{ margin: "50px 0" }}>
      <Row gutter={16}>
        <Col span={16}>
          <Card bordered={false} type="inner">
            <Typography.Title>{prod.title}</Typography.Title>
            <Typography.Title level={5} type="secondary">
              {prod.category}
            </Typography.Title>
            <Divider />
            <div>
              <p>{prod.description}</p>
              <p>{prod.price} $</p>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={true} type="inner" title={t('manage quantity')}>
            <Counter id={prod!.id} />
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default ReduxSingleProduct;
