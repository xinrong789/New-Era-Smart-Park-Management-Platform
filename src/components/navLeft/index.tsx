<<<<<<< HEAD
import { Menu } from "antd";
import { getMenu } from "../../api/users";
import { useState, useEffect } from "react";
import icons from "./iconList";
import logo from "../../assets/logo.png";
import "./index.scss";
import { setMenu } from "../../store/login/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
=======
// import { Menu } from "antd"
// import { getMenu } from "../../api/users"
// import { useState, useEffect } from "react"
// import icons from "./iconList"
// import logo from "../../assets/logo.png"
// import "./index.scss"
// import { setMenu } from "../../store/login/authSlice"
// import { useDispatch } from "react-redux"
// import { useNavigate, useLocation } from "react-router-dom"
// import { useSelector } from "react-redux"
>>>>>>> 73c12a592fde8019d64e8635c8f4038e6149a0c3

// interface MenuItem {
//   key: string
//   label: string
//   icon?: React.ReactNode
//   children?: MenuItem[]
// }
// interface MenuItemFromData {
//   key: string
//   label: string
//   icon: string
//   children?: MenuItemFromData[]
// }

// function NavLeft() {
//   const { menuList } = useSelector((state: any) => state.authSlice)
//   // const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [menuData, setMenuData] = useState<MenuItem[]>([])
//   const location = useLocation()
//   // const selectedKey = location.pathname
//   useEffect(() => {
//     configMenu()
//   }, [menuList])
//   async function configMenu() {
//     // const { data } = await getMenu()
//     // dispatch(setMenu(data))
//     const mappedMenuItems: MenuItem[] = mapMenuItems(menuList)
//     setMenuData(mappedMenuItems)
//   }

//   function mapMenuItems(items: MenuItemFromData[]): any {
//     return items.map((item: MenuItemFromData) => ({
//       key: item.key,
//       label: item.label,
//       icon: icons[item.icon],
//       children: item.children ? mapMenuItems(item.children) : null
//     }))
//   }

//   function handleClick({ key }: { key: string }) {
//     // console.log( key)
//     navigate(key)
//   }

//   // const [selectedKeys, setSelectedKeys] = useState(["/dashboard"])
//   return (
//     <div className="navLeft">
//       <div className="logo">
//         <img src={logo} alt="" width={27} />
//         <h1>New Era Smart Park</h1>
//       </div>
//       <Menu
//         defaultSelectedKeys={["/dashboard"]}
//         mode="inline"
//         theme="dark"
//         items={menuData}
//         onClick={handleClick}
//         // selectedKeys={selectedKeys}
//         // selectedKeys={[location.pathname]}
//       />
//     </div>
//   )
// }

// export default NavLeft

import { Menu } from "antd";
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
<<<<<<< HEAD
  // const dispatch = useDispatch()
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const location = useLocation();
  // const selectedKey = location.pathname
=======
  const navigate = useNavigate();
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const location = useLocation();
  // const selectedKey=location.pathname
>>>>>>> 73c12a592fde8019d64e8635c8f4038e6149a0c3
  useEffect(() => {
    configMenu();
  }, [menuList]);
  async function configMenu() {
<<<<<<< HEAD
    // const { data } = await getMenu()
    // dispatch(setMenu(data))
=======
>>>>>>> 73c12a592fde8019d64e8635c8f4038e6149a0c3
    const mappedMenuItems: MenuItem[] = mapMenuItems(menuList);
    setMenuData(mappedMenuItems);
  }
  //将返回的菜单数据转换成我们需要的格式
  function mapMenuItems(items: MenuItemFromData[]): any {
    return items.map((item: MenuItemFromData) => ({
      key: item.key,
      label: item.label,
      icon: icons[item.icon],
<<<<<<< HEAD
      children: item.children ? mapMenuItems(item.children) : null,
=======
      children: item.children ? mapMenuItems(item.children) : null, //递归操作
>>>>>>> 73c12a592fde8019d64e8635c8f4038e6149a0c3
    }));
  }

  function handleClick({ key }: { key: string }) {
<<<<<<< HEAD
    // console.log( key)
=======
>>>>>>> 73c12a592fde8019d64e8635c8f4038e6149a0c3
    navigate(key);
  }

  return (
    <div className="navleft">
      <div className="logo">
        <img src={logo} alt="" width={18} />
        <h1>朋远智慧园区</h1>
      </div>

      <Menu
        defaultSelectedKeys={["/dashboard"]}
        mode="inline"
        theme="dark"
        items={menuData}
        onClick={handleClick}
        selectedKeys={[location.pathname]}
      />
    </div>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 73c12a592fde8019d64e8635c8f4038e6149a0c3
export default NavLeft;
