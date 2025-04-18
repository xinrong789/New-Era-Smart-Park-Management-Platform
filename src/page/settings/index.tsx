import {
  Card,
  Row,
  Col,
  Table,
  Input,
  Button,
  Pagination,
  Popconfirm,
  Tree,
} from "antd";
import type { TableProps } from "antd";
import { getAccountList } from "../../api/users";
import useDataList from "../../hooks/useDataList";
import type { TreeDataNode, TreeProps } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import withPermissions from "../../utils/withPermissions";

interface MenuType {
  label: string;
  icon: string;
  key: string;
  children?: MenuType[];
}
interface DataType {
  id: number;
  accountName: string;
  auth: string;
  person: string;
  tel: string;
  department: string;
}
interface SearchType {
  accountName: string;
}

function extractTreeKeys(data: any) {
  let keys: string[] = [];
  data.forEach((item: any) => {
    if (item.children && item.children.length > 0) {
      const childKeys: string[] = extractTreeKeys(item.children);
      keys = keys.concat(childKeys);
    } else {
      keys.push(item.key);
    }
  });
  return keys;
}
function Settings() {
  const AuthButton: React.FC<any> = withPermissions(
    ["delete"],
    JSON.parse(sessionStorage.getItem("btnAuth") as string)
  )(Button);

  const edit = (menu: MenuType[], accountName: string) => {
    setAccountName(accountName);
    const newCheckedKeys = extractTreeKeys(menu);
    setCheckedKeys(newCheckedKeys);
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No.",
      key: "index",
      render: (text: any, record: any, index: any) => index + 1,
    },
    {
      title: "Account Name",
      dataIndex: "accountName",
      key: "accountName",
    },
    {
      title: "Permission",
      dataIndex: "auth",
      key: "auth",
    },
    {
      title: "User",
      dataIndex: "person",
      key: "person",
    },
    {
      title: "Phone Number",
      dataIndex: "tel",
      key: "tel",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Actions",
      key: "operate",
      render(value: string, record: any) {
        return (
          <>
            <Button
              size="small"
              type="primary"
              className="mr"
              onClick={() => edit(record.menu, record.accountName)}
            >
              Edit Permissions
            </Button>
            <Popconfirm
              title="Confirmation"
              description="Are you sure you want to delete this account?"
              okText="Yes"
              cancelText="No"
            >
              <AuthButton size="small" type="primary" danger>
                Delete Account
              </AuthButton>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const [accountName, setAccountName] = useState<string>("Current User");
  const { menuList } = useSelector((state: any) => state.authSlice);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
  const {
    dataList,
    page,
    pageSize,
    total,
    loading,
    formData,
    setDataList,
    setPage,
    setPageSize,
    setTotal,
    setLoading,
    setFormData,
    loadData,
    onChange,
    handleChange,
    reset,
  } = useDataList<SearchType, DataType>({ accountName: "" }, getAccountList);

  const treeData: TreeDataNode[] = [
    {
      title: "Dashboard",
      key: "/dashboard",
    },
    {
      title: "Tenant Management",
      key: "/users/list",
    },
    {
      title: "Property Management",
      key: "/estate",
      children: [
        {
          title: "Building Management",
          key: "/estate/tenement",
        },
        {
          title: "Room Management",
          key: "/estate/room",
        },
        {
          title: "Vehicle Information",
          key: "/estate/car",
        },
      ],
    },
    {
      title: "Repair Management",
      key: "/repair",
    },
    {
      title: "Finance Management",
      key: "/finance",
      children: [
        {
          title: "Contract Management",
          key: "/finance/contract",
        },

        {
          title: "Billing Management",
          key: "/finance/bill",
        },
      ],
    },
    {
      title: "Business Management",
      key: "/merchants",
    },
    {
      title: "Equipment Management",
      key: "/equipment",
    },
    {
      title: "System Settings",
      key: "/settings",
    },
    {
      title: "Personal Center",
      key: "/personal",
    },
  ];

  useEffect(() => {
    setCheckedKeys(extractTreeKeys(menuList));
  }, []);

  const handle = () => {
    console.log(checkedKeys, accountName);
  };

  const onCheck: TreeProps["onCheck"] = (checkedKeys) => {
    setCheckedKeys(checkedKeys as React.Key[]);
  };

  return (
    <div>
      <Card>
        <Row gutter={16}>
          <Col span={8}>
            <Input
              name="accountName"
              value={formData.accountName}
              placeholder="Enter account name"
              onChange={handleChange}
            />
          </Col>
          <Col span={8}>
            <Button type="primary" className="ml">
              Search
            </Button>
          </Col>
          <Col span={8} className="tr">
            <Button type="primary">Create Account</Button>
          </Col>
        </Row>
      </Card>

      <Row gutter={16} className="mt">
        <Col span={8}>
          <Card title={accountName + ": Permissions"}>
            <Tree
              treeData={treeData}
              checkable
              checkedKeys={checkedKeys}
              onCheck={onCheck}
            />
          </Card>
          <Card className="mt">
            <Popconfirm
              title="Confirmation"
              description={`Are you sure you want to update permissions for user ${accountName}?`}
              okText="Yes"
              cancelText="No"
              onConfirm={handle}
            >
              <Button type="primary">Submit Changes</Button>
            </Popconfirm>
          </Card>
        </Col>
        <Col span={16}>
          <Card>
            <Table
              loading={loading}
              columns={columns}
              dataSource={dataList}
              rowKey={(record) => record.id}
              pagination={false}
            />
            <Pagination
              className="fr mt"
              showQuickJumper
              total={total}
              current={page}
              pageSize={pageSize}
              onChange={onChange}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Settings;
