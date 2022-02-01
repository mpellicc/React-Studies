import { InputNumber, List } from "antd";
import { ReduxProduct } from "features/product/productsSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ReduxList() {
  const products: ReduxProduct[] = useSelector((state: any) => state.products);

  return (
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
    ></List>
  );
}

export default ReduxList;
