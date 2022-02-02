import { Card, InputNumber, List } from "antd";
import { ReduxProduct, selectProducts } from "features/product/productsSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ReduxList() {
  const products: ReduxProduct[] = useSelector(selectProducts);

  return (
    <Card bordered={false} title="Products List" style={{margin: '50px 0'}} >
    <List
      dataSource={products}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Link to={`/redux/${item.id}`}>{item.title}</Link>
          <div style={{ textAlign: "right" }}>
            Quantity: <InputNumber readOnly value={item.quantity} />
          </div>
        </List.Item>
      )}
    />
    </Card>
  );
}

export default ReduxList;
