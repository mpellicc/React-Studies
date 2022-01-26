import {
  Form,
  Button,
  Input,
  InputNumber,
  Upload,
  Space,
  Alert,
  Row,
  Col,
  Divider,
  message,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Product } from "../../types/Product";
import { ChangeEvent, useEffect, useState } from "react";
import ProductService from "../../services/ProductsService";
import Title from "antd/lib/typography/Title";

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
  const [visible, setVisible] = useState<boolean>(true);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialProductState);
  });

  function success() {
    message.success('Product created!');
    setCreated(false);
  }

  function saveProduct(values: any) {
    const { title, price, category, description } = values;
    let item = {
      title: title,
      price: price,
      category: category,
      description: description,
    };

    ProductService.create(item)
      .then((res: any) => {
        setProduct({
          title: res.data.title,
          price: res.data.price,
          category: res.data.category,
          description: res.data.description,
        });
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

  function handleClose() {
    setVisible(false);
    setCreated(false);
  }

  return (
    <>
      <Row>
        <Col style={{ textAlign: "center" }} span={24}>
          <Title>CREATE</Title>
        </Col>
      </Row>
      {/* <Row>
        <Col style={{ textAlign: "center" }} span={12} offset={6}>
          {created && visible ? (
            <Alert
              message="Product created!"
              type="success"
              showIcon
              closable
              afterClose={handleClose}
            />
          ) : null}
        </Col>
      </Row> */}
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
                <Button onClick={newProduct} size="large" danger shape="round">
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
