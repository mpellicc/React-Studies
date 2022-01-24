import { Form, Button, Input, InputNumber } from "antd";

function CreateProduct() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>CREATE</h1>
      </div>
      <Form
        name="create-product"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Serial Code"
          name="serial"
          rules={[
            {
              required: true,
              message: "Please enter serial code!",
              len: 10,
            },
          ]}
        >
          <Input maxLength={10} showCount/>
        </Form.Item>
        <Form.Item label="Description" name="desc">
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
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            danger
            shape="round"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateProduct;
