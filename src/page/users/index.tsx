import {
  Card,
  Row,
  Col,
  Input,
  Button,
  Table,
  TableProps,
  Pagination,
  Tag,
  Popconfirm,
  message,
  Divider,
} from "antd";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import type { DataType } from "./interface";
import { getUserList } from "../../api/userList";
import type { PaginationProps } from "antd";
import { deleteUser } from "../../api/userList";
import { batchDeleteUser } from "../../api/userList";
import UserForm from "./userForm";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/user/userSlice";
import "./index.scss";

interface searchType {
  companyName: string;
  contact: string;
  phone: string;
}
function Users() {
  const [dataList, setDataList] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  const disabled = useMemo(() => {
    return selectedRowKeys.length ? false : true;
  }, [selectedRowKeys]);

  useEffect(() => {
    loadData();
  }, [page, pageSize]);

  const loadData = async () => {
    setLoading(true);
    const {
      data: { list, total },
    } = await getUserList({ ...formData, page, pageSize });
    setLoading(false);
    setDataList(list);
    setTotal(total);
  };

  const [formData, setFormData] = useState<searchType>({
    companyName: "",
    contact: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSelectChange = (selectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys, //ES6 selectedRowKeys=selectedRowKeys
    onChange: onSelectChange,
  };
  const onChange: PaginationProps["onChange"] = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };
  const reset = () => {
    setSelectedRowKeys([]);
    setFormData({
      companyName: "",
      contact: "",
      phone: "",
    });
    setPage(1);
    setPageSize(10);
  };

  const confirm = async function (id: string) {
    const { data } = await deleteUser(id);
    message.success(data);
    loadData();
  };
  const batchDelete = async () => {
    const { data } = await batchDeleteUser(selectedRowKeys);
    message.success(data);
    loadData();
  };
  const edit = (record: DataType) => {
    setIsModalOpen(true);
    setTitle("edit");
    dispatch(setUserData(record));
  };
  const add = () => {
    setIsModalOpen(true);
    setTitle("add");
    dispatch(setUserData({}));
  };

  const hideModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      key: "index",
      render(value, record, index) {
        return index + 1;
      },
    },
    {
      title: "Customer Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Company Name",
      key: "companyName",
      dataIndex: "companyName",
    },
    {
      title: "ABN",
      key: "abn",
      dataIndex: "abn",
    },
    // {
    //   title: "ACN",
    //   key: "acn",
    //   dataIndex: "acn",
    // },

    {
      title: "Business Status",
      key: "status",
      dataIndex: "status",
      render(value) {
        if (value == 1) {
          return <Tag color="green">Active</Tag>;
        } else if (value == 2) {
          return <Tag color="#f50">Closed</Tag>;
        }
      },
    },

    {
      title: "Phone Number",
      key: "tel",
      dataIndex: "tel",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
    // {
    //   title: "Industry",
    //   key: "business",
    //   dataIndex: "business",
    // },
    {
      title: "Shareholders",
      key: "shareholders",
      dataIndex: "shareholders",
      render(value) {
        return Array.isArray(value) ? value.join(", ") : value;
      },
    },
    {
      title: "Actions",
      key: "operate",
      render(value, record, index) {
        return (
          <div style={{ display: "flex" }}>
            <Button
              type="primary"
              size="small"
              onClick={() => {
                edit(record);
              }}
            >
              Edit
            </Button>
            <Popconfirm
              title="Delete Confirmation"
              description="Are you sure you want to delete this?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => confirm(record.id)}
            >
              <Button type="primary" danger className="ml" size="small">
                Delete
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <div className="users">
      <MyUserForm
        visible={isModalOpen}
        hideModal={hideModal}
        title={title}
        loadData={loadData}
      />
      <Card className="search">
        {" "}
        <Row gutter={16}>
          {" "}
          <Col span={7}>
            <p>Company Name:</p>
            <Input
              value={formData.companyName}
              onChange={handleChange}
              name="companyName"
            ></Input>{" "}
          </Col>
          <Col span={7}>
            <p className="usertitle">Contact:</p>
            <Input
              value={formData.contact}
              onChange={handleChange}
              name="contact"
            ></Input>{" "}
          </Col>
          <Col span={7}>
            <p className="usertitle">Tel:</p>
            <Input
              value={formData.phone}
              onChange={handleChange}
              name="phone"
            ></Input>{" "}
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={loadData}>
              Search
            </Button>
            <Button className="ml" onClick={reset}>
              Reset
            </Button>
          </Col>
        </Row>
      </Card>
      <Card className="mt tr">
        <Button type="primary" onClick={add}>
          New Enterprises
        </Button>
        <Button
          type="primary"
          danger
          className="ml"
          disabled={disabled}
          onClick={batchDelete}
        >
          Batch Deletion
        </Button>
      </Card>
      <Card className="mt">
        <Table
          scroll={{ x: "max-content" }}
          size="middle"
          columns={columns}
          dataSource={dataList}
          rowKey={(record) => record.id}
          loading={loading}
          rowSelection={rowSelection}
          pagination={false}
        ></Table>
        <Pagination
          className="fr mt"
          total={total}
          current={page}
          pageSize={pageSize}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
          onChange={onChange}
        />
      </Card>
    </div>
  );
}
const MyUserForm = React.memo(UserForm);
export default Users;
