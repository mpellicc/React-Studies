import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../../types/Product";
import ProductDetails from "./ProductDetails";
import { Row, Col, Spin } from "antd";
import EditProduct from "./EditProduct";
import ProductService from "../../../services/ProductsService";

function SingleProduct() {
  const [loading, setLoading] = useState<boolean>(true);
  const { id, edit } = useParams();
  const n_id = parseInt(id!);
  const [product, setProduct] = useState<Product>({
    id: null,
    title: "",
    price: null,
    category: "",
    description: "",
  });

  useEffect(() => {
    ProductService.get(n_id)
      .then((res: any) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((e: Error) => console.log(e));
  }, []);

  if (loading) {
    return (
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <Spin spinning={loading} size="large" />
        </Col>
      </Row>
    );
  } else if (edit) {
    return <EditProduct prod={product} setProduct={setProduct} />;
  } else {
    return <ProductDetails prod={product} />;
  }
}

export default SingleProduct;
