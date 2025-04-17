import { message } from "antd";
import Mock from "mockjs";
import { useEffect } from "react";
Mock.setup({
  timeout: "600",
});
// login interface
Mock.mock("http://www.demo.com/login", "post", (options: any) => {
  console.log("Received body:", options.body);
  const loginData = { username: "admin", password: "admin123456" };
  console.log("About to send POST request with data:", loginData);
  const { username, password } = JSON.parse(options.body);
  // console.log(username, password);
  if (username === "admin" && password === "admin123456") {
    return {
      code: 200,
      message: "login successful",
      data: {
        username: "admin",
        token: "mocktoken123456admin",
        btnAuth: ["add", "edit", "delete"],
      },
    };
  } else if (username === "manager" && password === "manager123456") {
    return {
      code: 200,
      message: "login successful",
      data: {
        username: "manager",
        token: "mocktoken123456manager",
        btnAuth: ["add", "edit"],
      },
    };
  } else if (username === "user" && password === "user123456") {
    return {
      code: 200,
      message: "login successful",
      data: {
        username: "user",
        token: "mocktoken123456user",
        btnAuth: ["add"],
      },
    };
  } else {
    return {
      code: 401,
      message: "The username or password is incorrect",
      data: "",
    };
  }
});

const menuList = [
  {
    icon: "DashboardOutlined",
    label: "Workbench",
    key: "/dashboard",
  },
  {
    icon: "TeamOutlined",

    label: "Tenant Management",
    key: "/users/list",
  },
  {
    icon: "LaptopOutlined",
    label: "Property Management",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "Building Management",
        key: "/estate/tenement",
      },
      {
        icon: "BankOutlined",
        label: "Room Management",
        key: "/estate/room",
      },
      {
        icon: "TruckOutlined",
        label: "Vehicle Information",
        key: "/estate/car",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "Repair management",
    key: "/repair",
  },
  {
    icon: "DollarOutlined",
    label: "financial management",
    key: "/finance",
    children: [
      {
        icon: "ProfileOutlined",
        label: "Contract Management",
        key: "/finance/contract",
      },
      // {
      //   icon: "FrownOutlined",
      //   label: "Contract details",
      //   key: "/finance/contractdetail",
      // },
      {
        icon: "FileTextOutlined",
        label: "Billing Management",
        key: "/finance/bill",
      },
    ],
  },
  {
    icon: "TransactionOutlined",
    label: "Merchants Management",
    key: "/merchants",
  },
  {
    icon: "FundProjectionScreenOutlined",
    label: "operations management",
    key: "/operation",
    children: [
      {
        icon: "FundViewOutlined",
        label: "Operation Overview",
        key: "/operation/all",
      },
      {
        icon: "ReadOutlined",
        label: "Article Release",
        key: "/operation/article",
      },
      {
        icon: "CommentOutlined",
        label: "Content Comments",
        key: "/operation/comments",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "Device Management",
    key: "/equipment",
  },
  {
    icon: "ThunderboltOutlined",
    label: "Energy consumption",
    key: "/energy",
  },
  {
    icon: "SettingOutlined",
    label: "System Settings",
    key: "/settings",
  },
  {
    icon: "UserOutlined",
    label: "Personal Center",
    key: "/personal",
  },
];
const userMenuList = [
  {
    icon: "DashboardOutlined",
    label: "工作台",
    key: "/dashboard",
  },
  {
    icon: "TeamOutlined",
    label: "租户管理",
    key: "/users",
    children: [
      {
        icon: "UnorderedListOutlined",
        label: "租户列表",
        key: "/users/list",
      },
      {
        icon: "UserAddOutlined",
        label: "新增租户",
        key: "/users/add",
      },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "物业管理",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "楼宇管理",
        key: "/estate/tenement",
      },
      {
        icon: "BankOutlined",
        label: "房间管理",
        key: "/estate/room",
      },
      {
        icon: "TruckOutlined",
        label: "车辆信息",
        key: "/estate/car",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "报修管理",
    key: "/repair",
  },
  {
    icon: "ToolOutlined",
    label: "设备管理",
    key: "/equipment",
  },
  {
    icon: "ThunderboltOutlined",
    label: "能源消耗",
    key: "/energy",
  },
  {
    icon: "UserOutlined",
    label: "个人中心",
    key: "/personal",
  },
];

const managerMenuList = [
  {
    icon: "DashboardOutlined",
    label: "工作台",
    key: "/dashboard",
  },
  {
    icon: "TeamOutlined",
    label: "租户管理",
    key: "/users",
    children: [
      {
        icon: "UnorderedListOutlined",
        label: "租户列表",
        key: "/users/list",
      },
      {
        icon: "UserAddOutlined",
        label: "新增租户",
        key: "/users/add",
      },
    ],
  },
  {
    icon: "LaptopOutlined",
    label: "物业管理",
    key: "/estate",
    children: [
      {
        icon: "InsertRowLeftOutlined",
        label: "楼宇管理",
        key: "/estate/tenement",
      },
      {
        icon: "BankOutlined",
        label: "房间管理",
        key: "/estate/room",
      },
      {
        icon: "TruckOutlined",
        label: "车辆信息",
        key: "/estate/car",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "报修管理",
    key: "/repair",
  },
  {
    icon: "TransactionOutlined",
    label: "招商管理",
    key: "/merchants",
  },
  {
    icon: "FundProjectionScreenOutlined",
    label: "运营管理",
    key: "/operation",
    children: [
      {
        icon: "FundViewOutlined",
        label: "运营总览",
        key: "/operation/all",
      },
      {
        icon: "ReadOutlined",
        label: "文章发布",
        key: "/operation/article",
      },
      {
        icon: "CommentOutlined",
        label: "内容评论",
        key: "/operation/comments",
      },
    ],
  },
  {
    icon: "ToolOutlined",
    label: "设备管理",
    key: "/equipment",
  },
  {
    icon: "ThunderboltOutlined",
    label: "能源消耗",
    key: "/energy",
  },
  {
    icon: "SettingOutlined",
    label: "系统设置",
    key: "/settings",
  },
  {
    icon: "UserOutlined",
    label: "个人中心",
    key: "/personal",
  },
];

//menu interface
Mock.mock("http://www.demo.com/menu", "get", (options: any) => {
  const token = sessionStorage.getItem("token");
  if (token == "mocktoken123456admin") {
    return {
      code: 200,
      message: "request success",
      data: menuList,
    };
  } else if (token == "mocktoken123456user") {
    return {
      code: 200,
      message: "request success",
      data: userMenuList,
    };
  } else if (token == "mocktoken123456manager") {
    return {
      code: 200,
      message: "request success",
      data: managerMenuList,
    };
  } else {
    return {
      code: 200,
      message: "failed",
      data: [],
    };
  }
});

// dashboard figure information
Mock.mock("http://www.demo.com/energyConsumption", "get", () => {
  return {
    code: 200,
    message: "Request Success",
    data: [
      { name: "Coal", data: [120, 132, 101, 134, 90, 230, 210] },
      { name: "Gas", data: [220, 182, 191, 234, 290, 330, 310] },
      { name: "Oil", data: [150, 232, 201, 154, 190, 330, 410] },
      { name: "Electricity", data: [320, 332, 301, 334, 390, 330, 320] },
      { name: "Heat", data: [820, 932, 901, 934, 1290, 1330, 1320] },
    ],
  };
});
Mock.Random.extend({
  phone: function () {
    return "04" + Mock.mock(/\d{8}/);
  },
});

//userList

Mock.mock("http://www.demo.com/userList", "post", (options: any) => {
  const { pageSize, page, companyName, contact, phone } = JSON.parse(
    options.body
  );

  return {
    code: 200,
    message: "Request successful",
    data: Mock.mock({
      [`list|${pageSize}`]: [
        {
          id: "@string('number',6)", // ID
          name: "@name", // Customer Name
          companyName:
            "@word(4,8) @pick(['Solutions', 'Systems', 'Corporation', 'Technologies', 'Enterprises', 'Group', 'Holdings']) Pty Ltd", // 英文公司名
          abn: "@string('number',11)", // ABN
          acn: "@string('number',9)", // ACN
          "status|1": [1, 1, 1, 1, 2], // Business Status
          tel: "@phone", // Phone Number
          email: "@email", // Email
          "business|1": [
            "Manufacturing",
            "Information Technology",
            "New Media",
            "Beauty Industry",
            "Renewable Energy",
            "Logistics",
            "E-Commerce",
          ], // Industry
          shareholders: "@name", // One shareholder
        },
      ],
      total: 78,
    }),
  };
});

//delete company

Mock.mock("http://www.demo.com/deleteUser", "post", (options: any) => {
  console.log("Deleted successfully:", options);
  return {
    code: 200,
    message: "success",
    data: "Operation successful",
  };
});
// batch deletion
Mock.mock("http://www.demo.com/batchDeleteUser", "post", (options: any) => {
  const { ids } = JSON.parse(options.body);
  console.log("ids", ids);
  return {
    code: 200,
    message: "success",
    data: "Operation successful",
  };
});
//edit conpany
Mock.mock("https://www.demo.com/editUser", "post", (options: any) => {
  console.log("编辑企业收到参数", JSON.parse(options.body));
  return {
    code: 200,
    message: "success",
    data: "Operation successful",
  };
});

//get room list

const generateRooms = () => {
  return Mock.mock({
    "rooms|5-10": [
      {
        "id|+1": 1, // Auto-increment ID
        "roomNumber|+1": 1001, // 起始房号
        decorationType: "@pick(['Unfurnished', 'Fully Furnished'])",
        "area|50-150": 1, // 房间面积
        "unitPrice|1000-3000": 1, // 每月租金
        src: "@image('300x200', '#50B347', '#FFF', 'Room')", // 随机图像
      },
    ],
  }).rooms;
};

Mock.mock("http://www.demo.com/roomList", "post", (options: any) => {
  console.log("room id", JSON.parse(options.body).roomid);
  return {
    code: 200,
    message: "success",
    data: {
      rooms: generateRooms(),
    },
  };
});

//contrct
Mock.mock("http://www.demo.com/contractList", "post", (options: any) => {
  const { page, pageSize } = JSON.parse(options.body);
  console.log(
    "Backend received parameters for contract management",
    JSON.parse(options.body)
  );
  // console.log("hhhh", Mock);
  return {
    code: 200,
    message: "Success",
    data: Mock.mock({
      [`list|${pageSize}`]: [
        {
          contractNo: '@string("number", 6)',
          "type|1": ["Lease Contract", "Custom Contract", "Purchase Contract"],
          "name|1": [
            "General Template for Housing Lease Contract",
            "General Template for Parking Space Lease Contract",
            "Commercial Real Estate Sale Contract",
          ],
          "startDate|1": ["2023-01-01", "2023-03-05", "2023-04-01"],
          "endDate|1": ["2024-01-01", "2024-03-05", "2024-04-01"],
          "jia|1": [
            "Wantu Technology Co., Ltd.",
            "Dayu Network Technology",
            "Liuliu Information Technology Co., Ltd.",
          ],
          yi: "Tianming Property Co., Ltd.",
          "status|1": ["1", "2", "3"],
        },
      ],
      total: 54,
    }),
  };
});

//bill
Mock.mock("http://www.demo.com/billList", "post", (options: any) => {
  const { page, pageSize, companyName, contact, phone } = JSON.parse(
    options.body
  );
  console.log("后端账单管理接到参数", JSON.parse(options.body));
  return {
    code: 200,
    message: "成功",
    data: Mock.mock({
      [`list|${pageSize}`]: [
        {
          accountNo: '@string("number", 6)',
          "status|1": ["1", "2"],
          "roomNo|1": [
            "A1幢写字楼-201",
            "B1幢写字楼-402",
            "B2幢写字楼-701",
            "C2幢写字楼-1601",
          ],
          "carNo|1": ["B109", "C227", "C106", "D158"],
          "tel|1": ["@phone"],
          "costName1|1": [1278.0, 2633.0, 3698.0],
          costName2: "200元/月",
          "costName3|1": ["25800/年", "19800/年"],
          startDate: "2023-01-01",
          endDate: "2024-01-01",
          preferential: 0.0,
          money: 26000.0,
          "pay|1": ["微信", "支付宝", "现金", "银行卡转账"],
        },
      ],
      total: 54,
    }),
  };
});
//账号管理
Mock.mock("http://www.demo.com/accountList", "post", (options: any) => {
  //  const {page,pageSize,companyName,contact,phone}=JSON.parse(options.body);
  console.log("后端账号管理接到参数", options);
  return {
    code: 200,
    message: "成功",
    data: {
      list: [
        {
          id: 1001,
          accountName: "xuchao",
          auth: "admin",
          person: "徐超",
          tel: "188888888888",
          department: "总裁办",
          menu: menuList,
        },
        {
          id: 1002,
          accountName: "user01",
          auth: "user",
          person: "王丽丽",
          tel: "17777777777",
          department: "网推部",
          menu: userMenuList,
        },
        {
          id: 1003,
          accountName: "manager01",
          auth: "manager",
          person: "刘伟",
          tel: "16666666666",
          department: "财务部",
          menu: managerMenuList,
        },
        {
          id: 1004,
          accountName: "user02",
          auth: "customize",
          person: "张安定",
          tel: "15555555555",
          department: "企划部",
          // menu: customizeMenuList,
        },
        {
          id: 1005,
          accountName: "laowang",
          auth: "user",
          person: "王大大",
          tel: "14444444444",
          department: "总裁办",
          menu: userMenuList,
        },
      ],
      total: 5,
    },
  };
});
//设备管理
Mock.mock("http://www.demo.com/equipmentList", "post", (options: any) => {
  const { page, pageSize, companyName, contact, phone } = JSON.parse(
    options.body
  );

  console.log("后端设备管理接到参数", JSON.parse(options.body));

  return {
    code: 200,
    message: "成功",
    data: Mock.mock({
      [`list|${Number(pageSize) || 10}`]: [
        {
          "id|+1": 1001,
          "name|1": [
            "智能供水机组",
            "A1幢写字楼供暖设备",
            "园区大门入口闸机",
            "球机摄像头",
            "C1幢写字楼中央空调",
            "B区充电桩",
            "B2-21-电梯",
            "路灯设备1",
          ],
          "no|1": ["CP-0NYU-1098", "H876-89", "CDU-B09-21"], // 设备编号
          person: "@cname", // 负责人
          "tel|1": ["@phone"], // 负责人电话
          "time|1": ["20年", "15年", "10年"], // 理论寿命
          rest: "7年", // 剩余寿命
          "status|1": [1, 2, 3], // 1使用中 2维护中 3已损坏
          "last|1": ["2023-11-11", "2024-05-06"], // 最后维护时间
          "type|1": ["型号1", "型号2", "型号3"],
          "from|1": [
            "上海科技股份有限公司",
            "武汉能源设备有限公司",
            "重庆某某照明有限公司",
          ],
        },
      ],
      total: 66,
    }),
  };
});
//账号管理
Mock.mock("http://www.demo.com/accountList", "post", (options: any) => {
  //  const {page,pageSize,companyName,contact,phone}=JSON.parse(options.body);
  console.log("后端账号管理接到参数", options);
  return {
    code: 200,
    message: "成功",
    data: {
      list: [
        {
          id: 1001,
          accountName: "xuchao",
          auth: "admin",
          person: "徐超",
          tel: "188888888888",
          department: "总裁办",
          menu: menuList,
        },
        {
          id: 1002,
          accountName: "user01",
          auth: "user",
          person: "王丽丽",
          tel: "17777777777",
          department: "网推部",
          menu: userMenuList,
        },
        {
          id: 1003,
          accountName: "manager01",
          auth: "manager",
          person: "刘伟",
          tel: "16666666666",
          department: "财务部",
          menu: managerMenuList,
        },
        // {
        //   id: 1004,
        //   accountName: "user02",
        //   auth: "customize",
        //   person: "张安定",
        //   tel: "15555555555",
        //   department: "企划部",
        //   menu: customizeMenuList,
        // },
        {
          id: 1005,
          accountName: "laowang",
          auth: "user",
          person: "王大大",
          tel: "14444444444",
          department: "总裁办",
          menu: userMenuList,
        },
      ],
      total: 5,
    },
  };
});
