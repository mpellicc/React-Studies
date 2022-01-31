import {
  Form,
  Button,
  Input,
  InputNumber,
  Space,
  Row,
  Col,
  Divider,
  message,
  Typography,
} from "antd";
import { Product } from "./types/Product";
import { useEffect, useState } from "react";
import ProductService from "./services/ProductsService";
import DropProductImage from "./single-product/DropProductImage";

function CreateProduct() {
  const initialProductState = {
    id: null,
    title: "",
    price: null,
    category: "",
    description: "",
    image: "",
  };

  const [product, setProduct] = useState<Product>(initialProductState);
  const [created, setCreated] = useState<boolean>(false);
  // const [visible, setVisible] = useState<boolean>(true);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialProductState);
  });

  function success() {
    message.success("Product created!", 3);
    setCreated(false);
  }

  function saveProduct(values: any) {
    const { title, price, category, description, dragger } = values;

    let item = {
      title: title,
      price: price,
      category: category,
      description: description,
      image: dragger[0].name,
    };

    ProductService.create(item)
      .then((res: any) => {
        setProduct({
          title: res.data.title,
          price: res.data.price,
          category: res.data.category,
          description: res.data.description,
          image: res.data.image,
        });
        console.log(res.data);
        setCreated(true);
        success();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  function newProduct() {
    form.resetFields();
    setProduct(initialProductState);
  }

  return (
    <>
      <Row>
        <Col style={{ textAlign: "center" }} span={24}>
          <Typography.Title>CREATE</Typography.Title>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <Form
            form={form}
            name="create-product"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={(values) => saveProduct(values)}
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
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  danger
                  shape="round"
                >
                  Submit
                </Button>
                <Button onClick={newProduct} size="large" ghost danger shape="round">
                  Reset
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default CreateProduct;
