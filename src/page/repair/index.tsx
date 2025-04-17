import { Card, Table, Button, Row, Col, Input, Tag } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  orderNo: string;
  name: string;
  tel: string;
  address: string;
  description: string;
  status: string;
  time: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "No.",
    key: "index",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Repair Order No.",
    dataIndex: "orderNo",
    key: "orderNo",
  },
  {
    title: "Repair Person",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Repair Person Phone",
    dataIndex: "tel",
    key: "tel",
  },
  {
    title: "Repair Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Fault Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Repair Status",
    dataIndex: "status",
    key: "status",
    render: (text, record) => {
      if (text == "1") {
        return <Tag color="#f50">Pending Repair</Tag>;
      } else if (text == "2") {
        return <Tag color="#2db7f5">In Progress</Tag>;
      } else {
        return <Tag color="green">Completed</Tag>;
      }
    },
  },
  {
    title: "Repair Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Actions",
    dataIndex: "operate",
    key: "operate",
    render: (text, record) => {
      if (record.status == "1") {
        return (
          <>
            <Button type="primary" size="small">
              Assign
            </Button>
          </>
        );
      } else if (record.status == "2") {
        return (
          <>
            <a>Repairing...</a>
          </>
        );
      } else {
        return (
          <Button type="primary" size="small">
            Complete
          </Button>
        );
      }
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    orderNo: "AU1236985",
    name: "Sarah Williams",
    tel: "0423456789",
    address: "123 King St, Sydney NSW 2000",
    description: "Fridge not cooling, inconsistent temperature and loud noises",
    status: "1",
    time: "2024-05-30 09:15",
  },
  {
    key: "2",
    orderNo: "AU1236986",
    name: "Michael Brown",
    tel: "0435678901",
    address: "22 Queen St, Brisbane QLD 4000",
    description: "Washing machine malfunction, drum not spinning properly",
    status: "2",
    time: "2024-05-30 10:20",
  },
  {
    key: "3",
    orderNo: "AU1236987",
    name: "Emma Davis",
    tel: "0412345678",
    address: "45 Elizabeth St, Melbourne VIC 3000",
    description: "Dishwasher leaking, water pooling under the machine",
    status: "3",
    time: "2024-05-30 11:45",
  },
  {
    key: "4",
    orderNo: "AU1236988",
    name: "David Johnson",
    tel: "0445678901",
    address: "76 Collins St, Melbourne VIC 3000",
    description: "Air conditioning not cooling effectively, poor airflow",
    status: "1",
    time: "2024-05-30 14:00",
  },
  {
    key: "5",
    orderNo: "AU1236989",
    name: "Olivia Lee",
    tel: "0456789012",
    address: "110 George St, Perth WA 6000",
    description: "Oven not heating up, temperature readings incorrect",
    status: "2",
    time: "2024-05-30 15:30",
  },
  {
    key: "6",
    orderNo: "AU1236990",
    name: "James Wilson",
    tel: "0467890123",
    address: "89 Victoria Rd, Sydney NSW 2000",
    description: "Refrigerator making buzzing sound, not cooling well",
    status: "3",
    time: "2024-05-30 16:45",
  },
];

function Repair() {
  return (
    <div>
      <Card>
        <Row>
          <Col span={8}>
            <Input placeholder="Enter Repair Order No." />
          </Col>
          <Col span={8}>
            <Button type="primary" className="ml">
              Search
            </Button>
          </Col>
        </Row>
      </Card>
      <Card className="mt">
        <Table dataSource={data} columns={columns} />
      </Card>
    </div>
  );
}

export default Repair;
