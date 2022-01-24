import { Divider, Typography, Button } from "antd";

import { Product } from "../Products";

type Props = {
  item: Product,
};

function ProductDetails(props: Props) {
  const { item } = props;

  return (
    <div>
      <Typography.Title level={1}>{item.name}</Typography.Title>
      <Typography.Title level={5} type="secondary" copyable>
        {item.serial}
      </Typography.Title>
      <Divider />
      <Typography.Text>{item.desc}</Typography.Text>
      <br />
      <br />
      <Button type="primary" size="large" shape="round" danger>
        Buy Now - {item.price} €
      </Button>
    </div>
  );
}

export default ProductDetails;
