import { Card, InputNumber, List } from "antd";
import { ReduxProduct, selectProducts } from "features/product/productsSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ReduxList() {
  const { t, i18n } = useTranslation();
  const products: ReduxProduct[] = useSelector(selectProducts);

  return (
    <Card bordered={false} title={t('products list')} style={{margin: '50px 0'}} >
    <List
      dataSource={products}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Link to={`/redux/${item.id}`}>{item.title}</Link>
          <div style={{ textAlign: "right" }}>
            {t('quantity')}: <InputNumber readOnly value={item.quantity} />
          </div>
        </List.Item>
      )}
    />
    </Card>
  );
}

export default ReduxList;
