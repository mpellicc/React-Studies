type Props = {
  id: number;
};

function ProductImage(props: Props) {
  const { id } = props;
  const image: string = `${id}.jpg`;
  const path: string = `../../assets/products/${image}`;

  return <img width="40%" src={path} />;
}

export default ProductImage;
