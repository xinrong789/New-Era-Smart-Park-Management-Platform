import { Modal, Row, Col, Form, Input, Radio, message } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { editUser } from "../../api/userList";

interface FormProps {
  visible: boolean;
  hideModal: () => void;
  title: string;
  loadData: () => void;
}

function UserForm(props: FormProps) {
  const [form] = Form.useForm();
  const { userData } = useSelector((state: any) => state.userSlice);

  const { visible, hideModal, title, loadData } = props;

  useEffect(() => {
    title === "Add Company"
      ? form.resetFields()
      : form.setFieldsValue(userData);
  }, [visible]);

  const handleOk = () => {
    form
      .validateFields()
      .then(async (res) => {
        const { data } = await editUser(res);
        message.success(data);
        hideModal();
        loadData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      title={title}
      open={visible}
      onCancel={hideModal}
      onOk={handleOk}
      width={700}
    >
      <Form form={form} layout="vertical">
        {" "}
        <Form.Item
          label="Customer Name"
          name="name"
          rules={[{ required: true, message: "Customer name is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="tel"
          rules={[
            { required: true, message: "Phone number is required" },
            { pattern: /^1[3-9]\d{9}$/, message: "Invalid phone number" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Business Status"
          name="status"
          rules={[{ required: true, message: "Status is required" }]}
        >
          <Radio.Group>
            <Radio value="1">Active</Radio>
            <Radio value="2">Temporarily Closed</Radio>
            <Radio value="3">Closed</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Industry"
          name="business"
          rules={[{ required: true, message: "Industry is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Email is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="ABN"
          name="abn"
          rules={[{ required: true, message: "ABN is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="ACN"
          name="acn"
          rules={[{ required: true, message: "ACN is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Shareholders"
          name="shareholders"
          rules={[{ required: true, message: "Legal Person is required" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default UserForm;
