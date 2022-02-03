import {
  Form,
  Button,
  Input,
  InputNumber,
  Space,
  Row,
  Col,
  message,
  Card,
} from "antd";
import NumberFormat from "react-number-format";
import { Product } from "../types/Product";
import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductsService";
import DropProductImage from "./DropImage/DropProductImage";
import { useTranslation } from "react-i18next";

function CreateProduct() {
  const initialProductState = {
    id: null,
    title: "",
    price: null,
    category: "",
    description: "",
    image: "",
  };
  const { t, i18n } = useTranslation();
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
    console.log(values);

    let item = {
      title: title,
      price: price,
      category: category,
      description: description,
      image: dragger ? dragger[0].name : undefined,
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

    newProduct();
  }

  function newProduct() {
    form.resetFields();
    setProduct(initialProductState);
  }

  function onPricePaste(e: React.ClipboardEvent) {
    const paste = e.clipboardData.getData("text/plain");
    if (paste.match(/(\d\.\d*)/)) {
      e.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  return (
    <Card
      bordered={false}
      title={t("create product")}
      style={{ margin: "50px 0" }}
    >
      {/* <Row>
        <Col style={{ textAlign: "center" }} span={24}>
          <Typography.Title>CREATE</Typography.Title>
        </Col>
      </Row>
      <Divider /> */}
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
              label={t("title")}
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
              label={t("category")}
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
            <Form.Item label={t('description')} name="description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              label={t("price")}
              name="price"
              rules={[
                {
                  required: true,
                  message: "Please enter product price!",
                },
              ]}
            >
              <NumberFormat
                thousandSeparator="."
                decimalSeparator=","
                decimalScale={2}
                allowNegative={false}
                prefix="€"
                className="ant-input"
                onPaste={(e: React.ClipboardEvent) => onPricePaste(e)}
              />
              {/* <InputNumber prefix="€" style={{ width: "100%" }} formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} decimalSeparator=","  />  */}
            </Form.Item>
            <Form.Item label={t("image")}>
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
                  {t("submit")}
                </Button>
                <Button
                  onClick={newProduct}
                  size="large"
                  ghost
                  danger
                  shape="round"
                >
                  {t("reset")}
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}

export default CreateProduct;
