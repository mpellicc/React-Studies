import { Input, List } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../../services/ProductsService";
import { Product } from "../../types/Product";

function ProductsList() {
  const [list, setList] = useState<Array<Product>>([]);

  useEffect(() => {
    ProductService.getAll()
      .then((res: any) => {
        setList(res.data);
      })
      .catch((e: Error) => console.log(e));
  }, []);

  const formattedList = list.map((item) => (
    <List.Item key={item.id}>
      <Link to={`/products/${item.id}`}>{item.title}</Link>
    </List.Item>
  ));

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const filterList: Array<Product> = list.filter((item) =>
      item.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setList(filterList);
  }

  return (
    <div>
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
        dataSource={list}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </List.Item>
        )}
      ></List>
    </div>
  );
}

export default ProductsList;
