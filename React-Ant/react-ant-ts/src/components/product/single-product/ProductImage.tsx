// import image1 from "../../assets/products/1.jpg";

type Props = {
  id: number;
};

function ProductImage(props: Props) {
  const { id } = props;
  const baseUrl = "../../assets/products/";
  const image = `${id}.jpg`
  const path = baseUrl + image;

  return (
    <img width="40%" src="" />
  );
}

export default ProductImage;
