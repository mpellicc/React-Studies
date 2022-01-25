import { Divider, Typography, Button } from "antd";

import { Product } from "../../../types/Product";

type Props = {
  item: Product,
};

function ProductDetails(props: Props) {
  const { item } = props;

  return (
    <div>
      <Typography.Title level={1}>{item.title}</Typography.Title>
      <Typography.Title level={5} type="secondary">
        {item.category}
      </Typography.Title>
      <Divider />
      <Typography.Text>{item.description}</Typography.Text>
      <br />
      <br />
      <Button type="primary" size="large" shape="round" danger>
        Buy Now - {item.price} €
      </Button>
    </div>
  );
}

export default ProductDetails;
