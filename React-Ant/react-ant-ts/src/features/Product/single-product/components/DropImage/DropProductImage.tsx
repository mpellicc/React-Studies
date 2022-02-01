import { Form, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { RcFile } from "antd/lib/upload";

function DropProductImage() {
    function normFile(e: any) {
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };

    return (
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do" multiple={false} maxCount={1} accept="image/*">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
          </Upload.Dragger>
        </Form.Item>
    );
}

export default DropProductImage;