import { Card, Input, List, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductsService";
import { Product } from "../types/Product";

function ProductsList() {
  const [list, setList] = useState<Array<Product>>([]);
  const [filteredList, setFilteredList] = useState<Array<Product>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    ProductService.getAll()
      .then((res: any) => {
        setList(res.data);
        setFilteredList(res.data);
        setLoading(false);
      })
      .catch((e: Error) => console.log(e));
  }, []);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const temp: Array<Product> = list.filter((item) =>
      item.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setFilteredList(temp);
  }

  return (
    <Card
      bordered={false}
      title="Products List"
      style={{ margin: "50px 0" }}
      extra={
        <Input
          type="text"
          placeholder="Search product"
          allowClear
          onChange={onChange}
        />
      }
    >
      <Spin spinning={loading}>
        <List
          dataSource={filteredList}
          renderItem={(item) => (
            <List.Item key={item.id}>
              {/* <Link to={`/products/${item.id}`}>{item.title}</Link> */}{item.title}
            </List.Item>
          )}
        ></List>
      </Spin>
    </Card>
  );
}

export default ProductsList;
