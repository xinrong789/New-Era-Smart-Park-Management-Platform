import React from "react";
import {
  UserOutlined,
  PoweroffOutlined,
  DownOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { clearToken } from "../../store/login/authSlice";
import { useDispatch, UseDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a target="_blank">Personal Center</a>,
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: <a target="_blank">Log out</a>,
    icon: <PoweroffOutlined />,
  },
];

function Myheader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key == "1") {
      // relocate to personal center
      navigate("/personal");
    } else {
      dispatch(clearToken());
      sessionStorage.clear();
    }
  };
  return (
    <div>
      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Welcome, {sessionStorage.getItem("username")}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}

export default Myheader;
