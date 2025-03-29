import "./index.scss";
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.jpg";
import lgbg from "../../assets/lgbg.jpg";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import type { FormProps } from "react-router-dom";
import { login } from "../../api/users";
import { log } from "console";
import { setToken } from "../../store/login/authSlice";
import { useDispatch } from "react-redux";
import { Navigate, replace, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navitage = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  function handleLogin() {
    form
      .validateFields()
      .then(async (res) => {
        setLoading(true);
        const {
          data: { token, username, btnAuth },
        } = await login(res);
        setLoading(false);
        dispatch(setToken(token));
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("btnAuth", JSON.stringify(btnAuth));
        navitage("/", { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }

  return (
    <div className="login" style={{ backgroundImage: `url(${bg})` }}>
      <div className="lgbg" style={{ backgroundImage: `url(${lgbg})` }}>
        <div className="part">
          <div className="title">
            <div className="logo">
              <img src={logo} width={70} alt="" />
            </div>
            <h1>New Era Smart Park Management Platform</h1>
          </div>
          <Form autoComplete="off" form={form}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
                { min: 3, message: "Please enter at least 3 digits" },
                { max: 10, message: "Please enter no more than 10 digits" },
              ]}
            >
              <Input
                placeholder="Please enter your usename"
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Please enter your password"
                prefix={<LockOutlined />}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                style={{ width: "100%" }}
                onClick={handleLogin}
                loading={loading}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Login;
