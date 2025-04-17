import {
  Card,
  Row,
  Col,
  Input,
  Table,
  Pagination,
  Statistic,
  DatePicker,
  Select,
  Button,
  Tag,
} from "antd";
import { DownloadOutlined, DeleteOutlined } from "@ant-design/icons";
import { TableProps } from "antd";
import { getBillList } from "../../api/contract";
import { useEffect, useMemo, useState } from "react";
import exportToExcel from "../../utils/exportToExcel";
const { RangePicker } = DatePicker;

interface DataType {
  key?: string;
  accountNo: string;
  status?: string;
  roomNo?: string;
  carNo?: string;
  tel?: string;
  costName1?: string;
  costName2?: string;
  costName3?: string;
  startDate?: string;
  endDate?: string;
  preferential?: number;
  money?: number;
  pay?: string;
}
interface SearchType {
  date: string[];
  no: string;
  status: string;
  page: number;
  pageSize: number;
}

function Bill() {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No.",
      key: "index",
      render(value, record, index) {
        return index + 1;
      },
      width: 55,
      fixed: "left",
    },
    {
      title: "Bill Number",
      dataIndex: "accountNo",
      key: "accountNo",
      width: 100,
    },
    {
      title: "Payment Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      render(value) {
        return value == 1 ? (
          <Tag color="green">Paid</Tag>
        ) : (
          <Tag color="red">Unpaid</Tag>
        );
      },
    },
    {
      title: "Room Number",
      dataIndex: "roomNo",
      key: "roomNo",
      width: 100,
    },
    {
      title: "Parking Space Number",
      dataIndex: "carNo",
      key: "carNo",
      width: 100,
    },
    {
      title: "Phone Number",
      dataIndex: "tel",
      key: "tel",
      width: 150,
    },
    {
      title: "Property Fee (Year)",
      dataIndex: "costName1",
      key: "costName1",
      width: 100,
    },

    {
      title: "Parking Fee",
      dataIndex: "costName2",
      key: "costName2",
      width: 90,
    },
    {
      title: "House Rent",
      dataIndex: "costName3",
      key: "costName3",
      width: 100,
    },

    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      width: 100,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      width: 100,
    },
    {
      title: "Discount Amount",
      dataIndex: "preferential",
      key: "preferential",
      width: 100,
    },
    {
      title: "Total Receivable Amount",
      dataIndex: "money",
      key: "money",
      width: 150,
    },
    {
      title: "Payment Method",
      dataIndex: "pay",
      key: "pay",
      width: 100,
    },
    {
      title: "Actions",

      align: "center",
      width: 270,
      key: "operate",
      fixed: "right",
      render(value) {
        return (
          <>
            <Button type="primary" size="small">
              Print
            </Button>
            <Button type="primary" size="small" danger className="ml mr">
              Void Bill
            </Button>
            <Button type="primary" size="small">
              Refund
            </Button>
          </>
        );
      },
    },
  ];

  const [formData, setFormData] = useState<SearchType>({
    date: [],
    no: "",
    status: "",
    page: 1,
    pageSize: 10,
  });
  const [dataList, setDataList] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<any>({ accountNo: "" });
  const handleChange = (value: any, dateString: any) => {
    console.log(value, dateString);
    setFormData((prevState) => ({
      ...prevState,
      date: dateString,
    }));
  };
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      no: value,
    }));
  };
  const handleChange2 = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      status: value,
    }));
  };

  const onSelectChange = (selectedRowKeys: React.Key[], selectedRows: any) => {
    console.log(selectedRows);
    setSelectedRowKeys(selectedRowKeys);
    setSelectedRows(selectedRows);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    preserveSelectedRowKeys: true,
  };

  const disabled = useMemo(() => {
    return selectedRowKeys.length ? false : true;
  }, [selectedRowKeys]);

  const loadData = async () => {
    setLoading(true);
    const {
      data: { list, total },
    } = await getBillList({
      page,
      pageSize,
      startDate: formData.date[0],
      endDate: formData.date[1],
      no: formData.no,
      status: formData.status,
    });
    setLoading(false);
    setDataList(list);
    setTotal(total);
  };
  const header = [
    "accountNo",
    "status",
    "roomNo",
    "carNo",
    "tel",
    "costName1",
    "costName2",
    "costName3",
    "startDate",
    "endDate",
    "preferential",
    "money",
    "pay",
  ];
  useEffect(() => {
    loadData();
  }, [page, pageSize]);
  const onChange = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };
  return (
    <div>
      <Card>
        <Row gutter={16}>
          <Col span={6}>
            <Statistic title="Receivable Amount" value="16,876.38" />
          </Col>
          <Col span={6}>
            <Statistic title="Paid Amount" value="6,952.00" />
          </Col>
          <Col span={6}>
            <Statistic title="Refunded Amount" value="2,355.23" />
          </Col>
          <Col span={6}>
            <Statistic title="Unpaid Amount" value="9,962.00" />
          </Col>
        </Row>
      </Card>
      <Card className="mt search">
        <Row gutter={16}>
          <Col span={6}>
            <p>Bill Date:</p>
            <RangePicker
              name="date"
              style={{ width: "100%", height: "35px" }}
              onChange={handleChange}
            />
          </Col>

          <Col span={6}>
            <p style={{ width: "100%" }}>Room/Parking No.:</p>
            <Input
              style={{ width: "600px", height: "35px" }}
              placeholder="Please enter room number or parking space number"
              value={formData.no}
              onChange={handleChange1}
            />
          </Col>
          <Col span={6}>
            <p>Payment Status</p>
            <Select
              style={{ width: "100%" }}
              options={[
                { value: "1", label: "All" },
                { value: "2", label: "Paid" },
                { value: "3", label: "Unpaid" },
              ]}
              onChange={handleChange2}
            ></Select>
          </Col>
          <Col span={6}>
            <Button type="primary" className="mr" onClick={loadData}>
              Search
            </Button>
            <Button>Reset</Button>
          </Col>
        </Row>
      </Card>
      <Card className="mt">
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          disabled={disabled}
          onClick={() => exportToExcel(selectedRows, header)}
        >
          Export to Excel
        </Button>
        <Button
          icon={<DeleteOutlined />}
          danger
          className="ml"
          type="primary"
          disabled={disabled}
        >
          Batch Void
        </Button>
      </Card>
      <Card className="mt">
        <Table
          dataSource={dataList}
          columns={columns}
          pagination={false}
          rowKey={(record) => record.accountNo}
          rowSelection={rowSelection}
          scroll={{ x: 1200 }}
        />
        <Pagination
          className="fr mt"
          showQuickJumper
          current={page}
          pageSize={pageSize}
          total={total}
          onChange={onChange}
        />
      </Card>
    </div>
  );
}

export default Bill;
