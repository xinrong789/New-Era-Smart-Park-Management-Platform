import { Carousel, Card, Row, Col, Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import pic1 from "../../assets/1.jpg";
import pic2 from "../../assets/2.jpg";
import pic3 from "../../assets/3.jpg";
import { Avatar, List } from "antd";

const data = [
  {
    title: "New Contract: Tech Solutions Pty Ltd",
  },
  {
    title: "Renewed Contract: GreenFarm Australia",
  },
  {
    title: "New Contract: Oceanic Logistics",
  },
  {
    title: "Renewed Contract: Sunlight Energy Co.",
  },
];

function Merchants() {
  return (
    <div>
      <Card>
        <div style={{ width: "1200px", margin: "auto" }}>
          <Carousel autoplay arrows>
            <div>
              <img src={pic1}></img>
            </div>
            <div>
              <img src={pic2}></img>
            </div>
            <div>
              <img src={pic3}></img>
            </div>
          </Carousel>
        </div>
      </Card>

      <Row gutter={16} className="mt">
        <Col span={12}>
          <Card>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                      />
                    }
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="New Clients"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <Statistic
              title="Renewed Clients"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
            <Statistic
              title="Terminated Clients"
              value={5.16}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
            <Statistic
              title="Potential Clients"
              value={13.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Merchants;
