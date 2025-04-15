import { Menu } from "antd";
import { getMenu } from "../../api/users";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import icons from "./iconList";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import "./index.scss";
interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

interface MenuItemFromData {
  key: string;
  label: string;
  icon: string;
  children?: MenuItemFromData[];
}
function NavLeft() {
  const { menuList } = useSelector((state: any) => state.authSlice);
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const location = useLocation();
  // const selectedKey = location.pathname;
  useEffect(() => {
    configMenu();
  }, [menuList]);
  async function configMenu() {
    const { data } = await getMenu();
    const mappedMenuItems: MenuItem[] = mapMenuItems(data);
    setMenuData(mappedMenuItems);
  }
  //Convert the returned menu data into the format we need
  function mapMenuItems(items: MenuItemFromData[]): any {
    return items.map((item: MenuItemFromData) => ({
      key: item.key,
      label: item.label,
      icon: icons[item.icon],
      children: item.children ? mapMenuItems(item.children) : null, //recursion
    }));
  }

  function handleClick({ key }: { key: string }) {
    navigate(key);
  }

  return (
    <div className="navLeft">
      <div className="logo">
        <img src={logo} alt="" width={27} />
        <h1>New Era Smart Park</h1>
      </div>
      <Menu
        defaultSelectedKeys={["/dashboard"]}
        mode="inline"
        theme="dark"
        items={menuData}
        onClick={handleClick}
      />
    </div>
  );
}
export default NavLeft;
