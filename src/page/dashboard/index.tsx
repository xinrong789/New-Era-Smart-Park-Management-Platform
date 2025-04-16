import { Col, Row, Card, Progress, Statistic, Timeline, Tag } from "antd";
import {
  RadarChartOutlined,
  SnippetsOutlined,
  DollarOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import "./index.scss";
import ReactECharts from "echarts-for-react";
import { getEnergyConsumptionData } from "../../api/dashboard";
import { useEffect, useState } from "react";

const option2 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {},
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: [0, 0.01],
    data: ["2014", "2016", "2018", "2020", "2022", "2024"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Technology Enterprises",
      type: "bar",
      data: [40, 220, 378, 658, 1122, 1200],
    },
    {
      name: "High-Tech Enterprises",
      type: "bar",
      data: [20, 39, 443, 490, 559, 762],
    },
    {
      name: "State-Owned Enterprises",
      type: "bar",
      data: [78, 167, 229, 330, 380, 420],
    },
  ],
};
const option3 = {
  legend: {
    top: "10px",
  },
  series: [
    {
      name: "Nightingale Chart",
      type: "pie",
      radius: [30, 100],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8,
      },
      data: [
        { value: 40, name: "Operating" },
        { value: 38, name: "Leased" },
        { value: 30, name: "Recently Leased" },
        { value: 26, name: "Vacant" },
        { value: 22, name: "Terminated" },
      ],
    },
  ],
};

function Dashboard() {
  const initialOption = {
    // title: {
    //   text: "",
    // },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["0:00", "4:00", "8:00", "12:00", "16:00", "20:00", "24:00"],
    },
    yAxis: {
      type: "value",
    },
    series: [],
  };
  const [data, setData] = useState(initialOption);
  useEffect(() => {
    const loadData = async () => {
      const { data: apidata } = await getEnergyConsumptionData(); //data: apidata  change name
      // console.log(data)
      const dataList = apidata.map((item: any) => ({
        name: item.name,
        data: item.data,
        type: "line",
        stack: "Total",
      }));
      const updataOption = {
        ...data,
        legend: {
          data: dataList.map((item: any) => item.name),
        },
        series: dataList,
      };
      setData(updataOption);
    };
    loadData();
  }, []);
  return (
    <div className="dashboard">
      <Row gutter={16}>
        {" "}
        <Col span={6}>
          {" "}
          <Card className="clearfix">
            <div className="fl area">
              <h2>12497</h2>
              <p>Total area(m²)</p>
            </div>
            <div className="fr">
              <RadarChartOutlined className="icon" />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="clearfix">
            <div className="fl area">
              <h2>8635</h2>
              <p>Total Leased Area(m²)</p>
            </div>

            <div className="fr">
              <RadarChartOutlined className="icon" />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="clearfix">
            <div className="fl area">
              <h2>13478</h2>
              <p>Total Output Value(AUD)</p>
            </div>
            <div className="fr">
              <DollarOutlined className="icon" style={{ color: "#62c9cb" }} />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className="clearfix">
            <div className="fl area">
              <h2>2897</h2>
              <p> Total Enterprises(units)</p>
            </div>
            <div className="fr">
              <LaptopOutlined className="icon" style={{ color: "#e49362" }} />
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} className="mt">
        <Col span={12}>
          {" "}
          <Card>
            Energy consumption for the day
            <ReactECharts option={data}></ReactECharts>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            Enterprise qualifications(units)
            <ReactECharts option={option2}></ReactECharts>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} className="mt">
        <Col span={12}>
          <Card title="Rental status">
            <ReactECharts option={option3}></ReactECharts>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Charging pile idle statistics">
            <div className="wrap">
              <Progress type="circle" percent={75}></Progress>
              <Statistic
                title="Total number of charging piles"
                value={75}
                suffix="/ 100"
                className="mt"
              />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Implement vehicle information"
            style={{ height: "405px" }}
          >
            <Timeline
              items={[
                {
                  children: (
                    <>
                      <Tag color="green">Arrival</Tag>08:24 Vehicle SA123ABC
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      <Tag color="red">Departure</Tag>09:15 Vehicle SA123ABC{" "}
                    </>
                  ),
                  color: "red",
                },
                {
                  children: (
                    <>
                      <Tag color="green">Arrival</Tag>09:22 Vehicle SA456DEF{" "}
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      <Tag color="red">Departure</Tag>10:43 Vehicle SA789GHI{" "}
                    </>
                  ),
                  color: "red",
                },
                {
                  children: (
                    <>
                      <Tag color="green">Arrival</Tag>13:38 Vehicle SA101JKL{" "}
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      <Tag color="green">Arrival</Tag>14:46 Vehicle SA234MNO{" "}
                    </>
                  ),
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Dashboard;
