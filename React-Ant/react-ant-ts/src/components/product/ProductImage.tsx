import image1 from "../../assets/products/1.jpg"

type Props = {
  id: number;
};

function ProductImage(props: Props) {
  const { id } = props;
  const image: string = `${id}.jpg`;
  const path = image1;

  return (
    <img width="40%" src={path} />
  );
}

export default ProductImage;
