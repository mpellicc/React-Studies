import { ProductDetailsProps } from "../../types/ProductDetails.type";
import { Product } from "../../types/Product.type";

import { Divider, Typography, Button } from "antd"

function ProductDetails(props: ProductDetailsProps) {
    const { id, list } = props;
    const product: Product = list[0];
    
    return (
        <div>
            <Typography.Title level={1}>{product.name}</Typography.Title>
            <Typography.Title level={5} type="secondary" copyable>{product.serial}</Typography.Title>
            <Divider />
            <Typography.Text>{product.desc}</Typography.Text>
            <br />
            <br />
            <Button type="primary" size="large" shape="round" danger>Buy Now - {product.price} €</Button>

        </div>
    );
}

export default ProductDetails;