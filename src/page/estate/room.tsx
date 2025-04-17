import { Card, Row, Col, Image, Radio, Spin } from "antd";
import "./index.scss";
import { useEffect, useState } from "react";
import { getRoomList } from "../../api/room";
import { RadioChangeEvent } from "antd/lib";
import roomPic from "../../assets/roomPic.jpg";

interface RoomType {
  roomNumber: number;
  decorationType: "Unfurnished" | "Fully Furnished";
  area: number;
  unitPrice: number;
  src: string;
}

function Room() {
  const [visible, setVisible] = useState<boolean>(false);
  const [room, setRoom] = useState<RoomType[]>([]);
  const [src, setSrc] = useState<string>(roomPic);
  const [loading, setLoading] = useState<boolean>(false);

  const loadRoom = async (roomid: string) => {
    setLoading(true);
    const {
      data: { rooms },
    } = await getRoomList(roomid);
    setLoading(false);
    setRoom(rooms);
  };

  useEffect(() => {
    loadRoom("a1");
  }, []);

  const showImage = (src: string) => {
    setSrc(src);
    setVisible(true);
  };

  const handleChange = (e: RadioChangeEvent) => {
    const roomid: string = e.target.value;
    loadRoom(roomid);
  };

  return (
    <div className="room">
      <Image
        width={200}
        style={{ display: "none" }}
        preview={{
          visible,
          src: src,
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
      <Card className="mb">
        <Radio.Group
          defaultValue="a1"
          optionType="button"
          buttonStyle="solid"
          onChange={handleChange}
        >
          <Radio.Button value="a1">A1 Office Building</Radio.Button>
          <Radio.Button value="a2">A2 Office Building</Radio.Button>
          <Radio.Button value="b1">B1 Office Building</Radio.Button>
          <Radio.Button value="b2">B2 Office Building</Radio.Button>
          <Radio.Button value="c1">C1 Office Building</Radio.Button>
          <Radio.Button value="c2">C2 Office Building</Radio.Button>
          <Radio.Button value="d1">Tianhui International Tower A</Radio.Button>
          <Radio.Button value="d2">Times Financial Plaza</Radio.Button>
        </Radio.Group>
      </Card>
      <Spin spinning={loading}>
        <Row gutter={16}>
          {room.map((item) => {
            return (
              <Col span={6} className="item" key={item.roomNumber}>
                <Card
                  title="Room Number"
                  extra={<a onClick={() => showImage(roomPic)}>Floor Plan</a>}
                >
                  <h1>{item.roomNumber}</h1>
                  <div className="clearfix mt">
                    <p className="fl">Decoration:</p>
                    <p className="fr">{item.decorationType}</p>
                  </div>
                  <div className="clearfix mt">
                    <p className="fl">Room Area:</p>
                    <p className="fr">{item.area}㎡</p>
                  </div>
                  <div className="clearfix mt">
                    <p className="fl">Rental Price:</p>
                    <p className="fr">{item.unitPrice} AUD/Per Month</p>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Spin>
    </div>
  );
}

export default Room;
