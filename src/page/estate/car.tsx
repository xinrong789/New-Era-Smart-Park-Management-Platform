import { Card, Row, Col, Table, Input, Button, Tabs, Image } from "antd";
import type { TabsProps, TableProps } from "antd";
import come from "../../assets/come.jpg";

interface DataType {
  key: string;
  orderNo: string;
  date: string;
  carNo: string;
  type: string;
  startDate: string;
  time: string;
  count: string;
  cost: string;
}
interface DataType2 {
  key: string;
  carNo: string;
  name: string;
  tel: string;
  type: string;
  rest: string;
  time: string;
  pic: string;
}
const columns: TableProps<DataType>["columns"] = [
  {
    title: "No.",
    key: "index",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Order Number",
    dataIndex: "orderNo",
    key: "orderNo",
  },
  {
    title: "Order Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Car Plate Number",
    dataIndex: "carNo",
    key: "carNo",
  },
  {
    title: "Car Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Charging Start Time",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "Charging Duration",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Power Used",
    dataIndex: "count",
    key: "count",
  },
  {
    title: "Charging Cost",
    dataIndex: "cost",
    key: "cost",
  },
  {
    title: "Action",
    dataIndex: "operate",
    key: "operate",
    render: (text, record) => {
      return (
        <>
          <Button type="primary" size="small">
            View
          </Button>
        </>
      );
    },
  },
];

const data: DataType[] = [
  {
    key: "1",
    orderNo: "CD9872380",
    date: "2024-02-13",
    carNo: "SA ABC123",
    type: "Own Vehicle",
    startDate: "2024-02-13 15:33:12",
    time: "2h 25min",
    count: "30kw",
    cost: "$40.50 AUD",
  },
  {
    key: "2",
    orderNo: "CD9872381",
    date: "2024-02-14",
    carNo: "SA XTZ789",
    type: "Own Vehicle",
    startDate: "2024-02-14 09:12:45",
    time: "1h 10min",
    count: "15kw",
    cost: "$18.75 AUD",
  },
  {
    key: "3",
    orderNo: "CD9872382",
    date: "2024-02-15",
    carNo: "SA HJK456",
    type: "Own Vehicle",
    startDate: "2024-02-15 18:20:00",
    time: "3h 00min",
    count: "45kw",
    cost: "$52.20 AUD",
  },
  {
    key: "4",
    orderNo: "CD9872383",
    date: "2024-02-16",
    carNo: "SA LMN321",
    type: "Own Vehicle",
    startDate: "2024-02-16 11:45:30",
    time: "0h 50min",
    count: "10kw",
    cost: "$12.00 AUD",
  },
  {
    key: "5",
    orderNo: "CD9872384",
    date: "2024-02-17",
    carNo: "SA BCD567",
    type: "Own Vehicle",
    startDate: "2024-02-17 14:05:15",
    time: "2h 10min",
    count: "28kw",
    cost: "$38.00 AUD",
  },
  {
    key: "6",
    orderNo: "CD9872385",
    date: "2024-02-18",
    carNo: "SA QWE890",
    type: "Own Vehicle",
    startDate: "2024-02-18 08:30:00",
    time: "1h 45min",
    count: "22kw",
    cost: "$29.50 AUD",
  },
  {
    key: "7",
    orderNo: "CD9872386",
    date: "2024-02-19",
    carNo: "SA ZXC234",
    type: "Own Vehicle",
    startDate: "2024-02-19 17:20:30",
    time: "3h 15min",
    count: "50kw",
    cost: "$58.25 AUD",
  },
  {
    key: "8",
    orderNo: "CD9872387",
    date: "2024-02-20",
    carNo: "SA UIO678",
    type: "Own Vehicle",
    startDate: "2024-02-20 10:10:10",
    time: "0h 40min",
    count: "8kw",
    cost: "$9.80 AUD",
  },
  {
    key: "9",
    orderNo: "CD9872388",
    date: "2024-02-21",
    carNo: "SA RTY543",
    type: "Own Vehicle",
    startDate: "2024-02-21 13:55:00",
    time: "2h 00min",
    count: "25kw",
    cost: "$32.60 AUD",
  },
  {
    key: "10",
    orderNo: "CD9872389",
    date: "2024-02-22",
    carNo: "SA FGH901",
    type: "Own Vehicle",
    startDate: "2024-02-22 16:40:20",
    time: "1h 20min",
    count: "18kw",
    cost: "$21.90 AUD",
  },
  {
    key: "11",
    orderNo: "CD9872390",
    date: "2024-02-23",
    carNo: "SA MNB345",
    type: "Own Vehicle",
    startDate: "2024-02-23 07:25:00",
    time: "2h 30min",
    count: "35kw",
    cost: "$43.00 AUD",
  },
  {
    key: "12",
    orderNo: "CD9872391",
    date: "2024-02-24",
    carNo: "SA CVB210",
    type: "Own Vehicle",
    startDate: "2024-02-24 19:50:10",
    time: "3h 10min",
    count: "48kw",
    cost: "$56.80 AUD",
  },
  {
    key: "13",
    orderNo: "CD9872392",
    date: "2024-02-25",
    carNo: "SA NHY876",
    type: "Own Vehicle",
    startDate: "2024-02-25 12:00:00",
    time: "1h 00min",
    count: "12kw",
    cost: "$15.20 AUD",
  },
  {
    key: "14",
    orderNo: "CD9872393",
    date: "2024-02-26",
    carNo: "SA PLK654",
    type: "Own Vehicle",
    startDate: "2024-02-26 09:10:30",
    time: "2h 45min",
    count: "38kw",
    cost: "$47.00 AUD",
  },
  {
    key: "15",
    orderNo: "CD9872394",
    date: "2024-02-27",
    carNo: "SA DER432",
    type: "Own Vehicle",
    startDate: "2024-02-27 15:00:00",
    time: "2h 20min",
    count: "29kw",
    cost: "$36.50 AUD",
  },
  {
    key: "16",
    orderNo: "CD9872395",
    date: "2024-02-28",
    carNo: "SA TGB321",
    type: "Own Vehicle",
    startDate: "2024-02-28 14:10:15",
    time: "1h 30min",
    count: "20kw",
    cost: "$25.00 AUD",
  },
  {
    key: "17",
    orderNo: "CD9872396",
    date: "2024-02-29",
    carNo: "SA WSX098",
    type: "Own Vehicle",
    startDate: "2024-02-29 11:30:00",
    time: "2h 55min",
    count: "42kw",
    cost: "$51.20 AUD",
  },
  {
    key: "18",
    orderNo: "CD9872397",
    date: "2024-03-01",
    carNo: "SA EDC765",
    type: "Own Vehicle",
    startDate: "2024-03-01 17:45:20",
    time: "0h 30min",
    count: "6kw",
    cost: "$7.50 AUD",
  },
  {
    key: "19",
    orderNo: "CD9872398",
    date: "2024-03-02",
    carNo: "SA RFV210",
    type: "Own Vehicle",
    startDate: "2024-03-02 20:00:00",
    time: "3h 30min",
    count: "55kw",
    cost: "$63.80 AUD",
  },
  {
    key: "20",
    orderNo: "CD9872399",
    date: "2024-03-03",
    carNo: "SA YHN332",
    type: "Own Vehicle",
    startDate: "2024-03-03 10:05:05",
    time: "1h 15min",
    count: "16kw",
    cost: "$19.80 AUD",
  },
];

const columns2: TableProps<DataType2>["columns"] = [
  {
    title: "No.",
    key: "index",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Car Plate",
    dataIndex: "carNo",
    key: "carNo",
  },
  {
    title: "Owner Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Phone Number",
    dataIndex: "tel",
    key: "tel",
  },
  {
    title: "Rental Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Lease Remaining",
    dataIndex: "rest",
    key: "rest",
  },
  {
    title: "Overdue Days",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Entry Photo",
    dataIndex: "pic",
    key: "pic",
    render: (text) => (
      <Image
        src={come}
        width={50}
        placeholder={<Image preview={false} src={come} width={150} />}
      />
    ),
  },
  {
    title: "Action",
    dataIndex: "operate",
    key: "operate",
    render: (text, record) => {
      return (
        <>
          <Button type="primary" size="small" className="mr">
            Edit
          </Button>
          <Button type="primary" size="small" danger>
            Delete
          </Button>
        </>
      );
    },
  },
];

const data2: DataType2[] = [
  {
    key: "1",
    carNo: "NSW123ABC",
    name: "Liam Smith",
    tel: "0412 345 678",
    type: "Long-term",
    rest: "135 days",
    time: "0 days",
    pic: "",
  },
  {
    key: "2",
    carNo: "VIC456XYZ",
    name: "Emma Johnson",
    tel: "0423 456 789",
    type: "Long-term",
    rest: "135 days",
    time: "0 days",
    pic: "",
  },
  {
    key: "3",
    carNo: "QLD789LMN",
    name: "Noah Williams",
    tel: "0434 567 890",
    type: "Long-term",
    rest: "135 days",
    time: "0 days",
    pic: "",
  },
  {
    key: "4",
    carNo: "SA321DEF",
    name: "Olivia Brown",
    tel: "0445 678 901",
    type: "Long-term",
    rest: "135 days",
    time: "0 days",
    pic: "",
  },
  {
    key: "5",
    carNo: "WA654GHI",
    name: "Jack Davis",
    tel: "0456 789 012",
    type: "Long-term",
    rest: "135 days",
    time: "0 days",
    pic: "",
  },
  {
    key: "6",
    carNo: "TAS987JKL",
    name: "Isla Wilson",
    tel: "0467 890 123",
    type: "Long-term",
    rest: "135 days",
    time: "0 days",
    pic: "",
  },
  {
    key: "7",
    carNo: "ACT246MNO",
    name: "Lucas Martin",
    tel: "0478 901 234",
    type: "Long-term",
    rest: "135 days",
    time: "0 days",
    pic: "",
  },
  {
    key: "8",
    carNo: "NT135PQR",
    name: "Mia Thompson",
    tel: "0489 012 345",
    type: "Long-term",
    rest: "135 days",
    time: "0 days",
    pic: "",
  },
];

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Charging Records",
    children: <Table columns={columns} dataSource={data} />,
  },
  {
    key: "2",
    label: "Vehicles in the Park",
    children: <Table columns={columns2} dataSource={data2} />,
  },
];

function Car() {
  return (
    <div>
      <Card>
        <Row gutter={16}>
          <Col span={8}>
            <Input placeholder="Enter license plate, phone number or contact" />
          </Col>
          <Col span={8}>
            <Button type="primary" className="ml">
              Search
            </Button>
          </Col>
        </Row>
      </Card>
      <Card className="mt">
        <Tabs items={items}></Tabs>
      </Card>
    </div>
  );
}

export default Car;
