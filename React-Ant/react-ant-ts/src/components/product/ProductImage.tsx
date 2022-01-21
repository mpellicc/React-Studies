import { ProductImageProps } from "../../types/ProductImage.type";

function ProductImage(props: ProductImageProps) {
    const { id } = props;
    const image: string = `${id}.jpg`;
    const path: string = `./assets/products/${image}`;
    
    return (
        <img src={path}></img>
    );
}

export default ProductImage;