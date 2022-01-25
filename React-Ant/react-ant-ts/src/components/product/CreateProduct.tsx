import { Form, Button, Input, InputNumber, Upload, Space } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Product } from "../../types/Product";
import { ChangeEvent, useEffect, useState } from "react";
import ProductService from "../../services/ProductsService";

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
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialProductState);
  })

  /*
  function handleInputChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  function handleNumberChange(value: number) {
    setProduct({...product, price: value});
  }
  */

  function saveProduct(values: any) {
    const { title, price, category, description } = values;
    console.log('in save...');
    
    let item = {
      title: title,
      price: price,
      category: category,
      description: description,
    }
    console.log(item);
    
    ProductService.create(item)
      .then((response: any) => {
        console.log(response.item);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  function newProduct() {
    console.log('in reset...');
    form.resetFields();
    setProduct(initialProductState);
    console.log(product);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>CREATE</h1>
      </div>
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
    </>
  );
}

export default CreateProduct;
