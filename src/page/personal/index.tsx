import { Card } from "antd";
import {
  Descriptions,
  Row,
  Col,
  Calendar,
  Avatar,
  List,
  Tag,
  Progress,
  Badge,
} from "antd";
import type { DescriptionsProps } from "antd";

const data = [
  {
    title: "Ant Design Title 1",
  },
];

function Personal() {
  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://randomuser.me/api/portraits/thumb/men/52.jpg`}
                      />
                    }
                    title={
                      <a href="https://ant.design">
                        {sessionStorage.getItem("username")} - Operations
                        Specialist
                      </a>
                    }
                    description="Whether it's for work or survival, do your best with all your might — excellence should be the norm."
                  />
                </List.Item>
              )}
            />
          </Card>
          <Card className="mt">
            <Calendar fullscreen={false} />
          </Card>
        </Col>

        <Col span={18}>
          <Row gutter={16}>
            <Col span={8}>
              <Card>
                Pending Tasks: <Badge count={4} color="#faad14" />
              </Card>
              <Card
                title="New Account Request"
                extra={<a href="#">Details</a>}
                className="mt"
              >
                <p>
                  Description: A new employee needs a user-permission account
                </p>
                <p className="mt">Created by: HR Department - Ting Liu</p>
                <div className="mt">
                  Date: <Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">Routine</Tag>
                  <Tag color="blue">Account Issue</Tag>
                </div>
                <div className="mt">
                  Progress: <Progress percent={1} />
                </div>
              </Card>
              <Card
                title="New Account Request"
                extra={<a href="#">Details</a>}
                className="mt"
              >
                <p>
                  Description: A new employee needs a user-permission account
                </p>
                <p className="mt">Created by: HR Department - Ting Liu</p>
                <div className="mt">
                  Date: <Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">Routine</Tag>
                  <Tag color="blue">Account Issue</Tag>
                </div>
                <div className="mt">
                  Progress: <Progress percent={1} />
                </div>
              </Card>
              <Card
                title="New Account Request"
                extra={<a href="#">Details</a>}
                className="mt"
              >
                <p>
                  Description: A new employee needs a user-permission account
                </p>
                <p className="mt">Created by: HR Department - Ting Liu</p>
                <div className="mt">
                  Date: <Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">Routine</Tag>
                  <Tag color="blue">Account Issue</Tag>
                </div>
                <div className="mt">
                  Progress: <Progress percent={1} />
                </div>
              </Card>
            </Col>

            <Col span={8}>
              <Card>
                Pending Tasks: <Badge count={4} color="#faad14" />
              </Card>
              <Card
                title="New Account Request"
                extra={<a href="#">Details</a>}
                className="mt"
              >
                <p>
                  Description: A new employee needs a user-permission account
                </p>
                <p className="mt">Created by: HR Department - Ting Liu</p>
                <div className="mt">
                  Date: <Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">Routine</Tag>
                  <Tag color="blue">Account Issue</Tag>
                </div>
                <div className="mt">
                  Progress: <Progress percent={1} />
                </div>
              </Card>
              <Card
                title="New Account Request"
                extra={<a href="#">Details</a>}
                className="mt"
              >
                <p>
                  Description: A new employee needs a user-permission account
                </p>
                <p className="mt">Created by: HR Department - Ting Liu</p>
                <div className="mt">
                  Date: <Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">Routine</Tag>
                  <Tag color="blue">Account Issue</Tag>
                </div>
                <div className="mt">
                  Progress: <Progress percent={1} />
                </div>
              </Card>
              <Card
                title="New Account Request"
                extra={<a href="#">Details</a>}
                className="mt"
              >
                <p>
                  Description: A new employee needs a user-permission account
                </p>
                <p className="mt">Created by: HR Department - Ting Liu</p>
                <div className="mt">
                  Date: <Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">Routine</Tag>
                  <Tag color="blue">Account Issue</Tag>
                </div>
                <div className="mt">
                  Progress: <Progress percent={1} />
                </div>
              </Card>
            </Col>

            <Col span={8}>
              <Card>
                Pending Tasks: <Badge count={4} color="#faad14" />
              </Card>
              <Card
                title="New Account Request"
                extra={<a href="#">Details</a>}
                className="mt"
              >
                <p>
                  Description: A new employee needs a user-permission account
                </p>
                <p className="mt">Created by: HR Department - Ting Liu</p>
                <div className="mt">
                  Date: <Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">Routine</Tag>
                  <Tag color="blue">Account Issue</Tag>
                </div>
                <div className="mt">
                  Progress: <Progress percent={1} />
                </div>
              </Card>
              <Card
                title="New Account Request"
                extra={<a href="#">Details</a>}
                className="mt"
              >
                <p>
                  Description: A new employee needs a user-permission account
                </p>
                <p className="mt">Created by: HR Department - Ting Liu</p>
                <div className="mt">
                  Date: <Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">Routine</Tag>
                  <Tag color="blue">Account Issue</Tag>
                </div>
                <div className="mt">
                  Progress: <Progress percent={1} />
                </div>
              </Card>
              <Card
                title="New Account Request"
                extra={<a href="#">Details</a>}
                className="mt"
              >
                <p>
                  Description: A new employee needs a user-permission account
                </p>
                <p className="mt">Created by: HR Department - Ting Liu</p>
                <div className="mt">
                  Date: <Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">Routine</Tag>
                  <Tag color="blue">Account Issue</Tag>
                </div>
                <div className="mt">
                  Progress: <Progress percent={1} />
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Personal;
