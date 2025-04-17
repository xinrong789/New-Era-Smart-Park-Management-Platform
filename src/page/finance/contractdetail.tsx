import { Card, Button, Descriptions } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DescriptionsProps } from "antd/lib";

const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Contract Type",
    children: "Lease Contract",
  },
  {
    key: "2",
    label: "Contract Name",
    children: "General Template for House Lease Contract",
  },
  {
    key: "3",
    label: "Contract Start Date",
    children: "2023-03-05",
  },
  {
    key: "4",
    label: "Contract End Date",
    children: "2024-03-05",
  },
  {
    key: "5",
    label: "Party A",
    children: "Techwise Solutions Pty Ltd",
  },
  {
    key: "6",
    label: "Party B",
    children: "Bright Property Group",
    span: 3,
  },
  {
    key: "7",
    label: "Approval Status",
    children: "Approval Rejected",
  },
  {
    key: "8",
    label: "Rejection Reason",
    children: "Missing signature of legal representative",
  },
  {
    key: "9",
    label: "Contact Number",
    children: "+61 412 345 678",
  },
  {
    key: "10",
    label: "Additional Clauses",
    children: (
      <>
        1. Semi-annual payment, yearly rent
        <br />
        2. Air conditioning fees included
        <br />
        3. Includes rights to two parking spaces (no charging station)
        <br />
        4. Renovation prohibited between 9:00 AM and 6:00 PM
      </>
    ),
  },
];

const items2: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "Building(s)",
    children: "A1 Office Tower",
  },
  {
    key: "2",
    label: "Room Number",
    children: "406",
  },
  {
    key: "3",
    label: "Room Area",
    children: "96㎡",
  },
  {
    key: "4",
    label: "Valuation Area",
    children: "70㎡",
  },
  {
    key: "5",
    label: "Property Fee",
    children: "$6,800",
  },
  {
    key: "6",
    label: "Room Condition",
    children: "Fully furnished",
  },
  {
    key: "7",
    label: "Property Manager",
    children: "Sarah Thompson",
  },
  {
    key: "8",
    label: "Manager's Contact",
    children: "+61 423 987 654",
  },
];

function Contractdetail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <div>
      <Card>
        <Button
          type="primary"
          onClick={() => navigate("/finance/contract?return=true")}
        >
          Return
        </Button>
      </Card>
      <Card className="mt">
        <Descriptions
          title={`Contract No.: ${searchParams.get("contractNo")}`}
          bordered
          items={items}
        />
        <Descriptions
          title="Leased Room Information"
          bordered
          items={items2}
          className="mt"
        />
      </Card>
    </div>
  );
}

export default Contractdetail;
