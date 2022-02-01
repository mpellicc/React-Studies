import {
  Typography,
  Button,
  Col,
  Image,
  Form,
  Row,
  Space,
  Input,
  InputNumber,
  message,
} from "antd";
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ProductService from "../../services/ProductsService";
import { Product } from "../../types/Product";
import DropProductImage from "./DropImage/DropProductImage";

type Props = {
  prod: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
};

function EditProduct({ prod, setProduct }: Props) {
  const { id } = useParams();
  const n_id = parseInt(id!);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  form.setFieldsValue(prod);

  function saveProduct(values: any) {
    const { title, price, category, description } = values;
    let item = {
      title: title,
      price: price,
      category: category,
      description: description,
      image: prod.image,
    };

    ProductService.update(n_id, item)
      .then((res: any) => {
        console.log(res.data);
        setProduct(res.data);
        success();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  function success() {
    message
      .success("Product saved!", 1.5)
      .then(() => message.loading("Redirecting to product page...", 2.5));
    const timer = setTimeout(() => {
      navigate(`/products/${n_id}`);
    }, 4100);
    return () => clearTimeout(timer);
  }

  return (
    <Row>
      <Col span={10} style={{ textAlign: "center" }}>
        <Image src={prod.image} width="40vh" />
      </Col>
      <Col span={14} style={{ textAlign: "center" }}>
        <Typography.Title>EDIT</Typography.Title>
        <Form
          form={form}
          name="create-product"
          layout="vertical"
          requiredMark={false}
          onFinish={saveProduct}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter product title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please enter category!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please enter product price!",
              },
            ]}
          >
            <InputNumber prefix="€" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Image">
              <DropProductImage />
            </Form.Item>
          <Form.Item style={{ textAlign: "center" }} wrapperCol={{}}>
            <Space size={40}>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                danger
                shape="round"
              >
                Save Changes
              </Button>
              <Link to={`/products/${n_id}`}>
                <Button size="large" ghost danger shape="round">
                  Cancel
                </Button>
              </Link>
            </Space>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default EditProduct;
