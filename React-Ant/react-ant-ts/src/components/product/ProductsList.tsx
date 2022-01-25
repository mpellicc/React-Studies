import { Input, List } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Product } from "../../types/Product";


type Props = {
  list: Array<Product>;
};

function ProductsList(props: Props) {
  const { list } = props;
  const [ filterList, setFilterList ] = useState(list);

  const formattedList = filterList.map((item) => (
    <List.Item key={item.id}>
      <Link to={`/products/${item.id}`}>{item.title}</Link>
    </List.Item>
  ));

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterList(list.filter((item) => item.title.toLowerCase().startsWith(e.target.value.toLowerCase())));
  }

  return (
    <div>
      <Input
        type="text"
        placeholder="Search product"
        allowClear
        onChange={onChange}
      />
      <List>
        {formattedList}
      </List>
    </div>
  );
}

export default ProductsList;
