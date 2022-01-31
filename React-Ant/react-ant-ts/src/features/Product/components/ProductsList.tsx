import { Input, List, Spin } from "antd";
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
    <div>
      <Spin spinning={loading}>
        <List
          header={
            <Input
              type="text"
              placeholder="Search product"
              allowClear
              onChange={onChange}
            />
          }
          split
          dataSource={filteredList}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Link to={`/products/${item.id}`}>{item.title}</Link>
            </List.Item>
          )}
        ></List>
      </Spin>
    </div>
  );
}

export default ProductsList;
