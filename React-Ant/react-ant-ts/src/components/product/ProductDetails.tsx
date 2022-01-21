import { Divider, Typography, Button } from "antd";

import { Product } from "./Product";

type Props = {
  id: number;
  list: Array<Product>;
};

function ProductDetails(props: Props) {
  const { id, list } = props;

  function ensure<T>(
    argument: T | undefined | null,
    message: string = "Value not valid."
  ): T {
    if (argument === undefined || argument === null) {
      throw new TypeError(message);
    }

    return argument;
  }

  const product: Product = ensure(list.find((p) => p.id === id));

  return (
    <div>
      <Typography.Title level={1}>{product.name}</Typography.Title>
      <Typography.Title level={5} type="secondary" copyable>
        {product.serial}
      </Typography.Title>
      <Divider />
      <Typography.Text>{product.desc}</Typography.Text>
      <br />
      <br />
      <Button type="primary" size="large" shape="round" danger>
        Buy Now - {product.price} €
      </Button>
    </div>
  );
}

export default ProductDetails;
