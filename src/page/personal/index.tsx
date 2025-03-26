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
                        {sessionStorage.getItem("username")}-运营专员
                      </a>
                    }
                    description="无论是打工还是生存，都要尽已所能全力以赴，优秀才是常态。"
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
                待处理：<Badge count={4} color="#faad14"></Badge>
              </Card>
              <Card
                title="新增账号申请"
                extra={<a href="#">详情</a>}
                className="mt"
              >
                <p>描述：新入职员工，需要新建user权限账号</p>
                <p className="mt">创建人：人力资源部 - 刘婷</p>
                <div className="mt">
                  日期：<Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">常规</Tag>
                  <Tag color="blue">账号问题</Tag>
                </div>
                <div className="mt">
                  进度：
                  <Progress percent={1} />
                </div>
              </Card>
              <Card
                title="新增账号申请"
                extra={<a href="#">详情</a>}
                className="mt"
              >
                <p>描述：新入职员工，需要新建user权限账号</p>
                <p className="mt">创建人：人力资源部 - 刘婷</p>
                <div className="mt">
                  日期：<Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">常规</Tag>
                  <Tag color="blue">账号问题</Tag>
                </div>
                <div className="mt">
                  进度：
                  <Progress percent={1} />
                </div>
              </Card>{" "}
              <Card
                title="新增账号申请"
                extra={<a href="#">详情</a>}
                className="mt"
              >
                <p>描述：新入职员工，需要新建user权限账号</p>
                <p className="mt">创建人：人力资源部 - 刘婷</p>
                <div className="mt">
                  日期：<Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">常规</Tag>
                  <Tag color="blue">账号问题</Tag>
                </div>
                <div className="mt">
                  进度：
                  <Progress percent={1} />
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                待处理：<Badge count={4} color="#faad14"></Badge>
              </Card>
              <Card
                title="新增账号申请"
                extra={<a href="#">详情</a>}
                className="mt"
              >
                <p>描述：新入职员工，需要新建user权限账号</p>
                <p className="mt">创建人：人力资源部 - 刘婷</p>
                <div className="mt">
                  日期：<Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">常规</Tag>
                  <Tag color="blue">账号问题</Tag>
                </div>
                <div className="mt">
                  进度：
                  <Progress percent={1} />
                </div>
              </Card>
              <Card
                title="新增账号申请"
                extra={<a href="#">详情</a>}
                className="mt"
              >
                <p>描述：新入职员工，需要新建user权限账号</p>
                <p className="mt">创建人：人力资源部 - 刘婷</p>
                <div className="mt">
                  日期：<Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">常规</Tag>
                  <Tag color="blue">账号问题</Tag>
                </div>
                <div className="mt">
                  进度：
                  <Progress percent={1} />
                </div>
              </Card>{" "}
              <Card
                title="新增账号申请"
                extra={<a href="#">详情</a>}
                className="mt"
              >
                <p>描述：新入职员工，需要新建user权限账号</p>
                <p className="mt">创建人：人力资源部 - 刘婷</p>
                <div className="mt">
                  日期：<Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">常规</Tag>
                  <Tag color="blue">账号问题</Tag>
                </div>
                <div className="mt">
                  进度：
                  <Progress percent={1} />
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card>
                待处理：<Badge count={4} color="#faad14"></Badge>
              </Card>
              <Card
                title="新增账号申请"
                extra={<a href="#">详情</a>}
                className="mt"
              >
                <p>描述：新入职员工，需要新建user权限账号</p>
                <p className="mt">创建人：人力资源部 - 刘婷</p>
                <div className="mt">
                  日期：<Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">常规</Tag>
                  <Tag color="blue">账号问题</Tag>
                </div>
                <div className="mt">
                  进度：
                  <Progress percent={1} />
                </div>
              </Card>
              <Card
                title="新增账号申请"
                extra={<a href="#">详情</a>}
                className="mt"
              >
                <p>描述：新入职员工，需要新建user权限账号</p>
                <p className="mt">创建人：人力资源部 - 刘婷</p>
                <div className="mt">
                  日期：<Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">常规</Tag>
                  <Tag color="blue">账号问题</Tag>
                </div>
                <div className="mt">
                  进度：
                  <Progress percent={1} />
                </div>
              </Card>{" "}
              <Card
                title="新增账号申请"
                extra={<a href="#">详情</a>}
                className="mt"
              >
                <p>描述：新入职员工，需要新建user权限账号</p>
                <p className="mt">创建人：人力资源部 - 刘婷</p>
                <div className="mt">
                  日期：<Tag>2024-05-02</Tag>
                </div>
                <div className="mt">
                  <Tag color="blue">常规</Tag>
                  <Tag color="blue">账号问题</Tag>
                </div>
                <div className="mt">
                  进度：
                  <Progress percent={1} />
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
