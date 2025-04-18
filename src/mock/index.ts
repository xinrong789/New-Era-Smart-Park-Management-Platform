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
    label: "Dashboard",
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
    icon: "ToolOutlined",
    label: "Equipment Management",
    key: "/equipment",
  },
  // {
  //   icon: "ThunderboltOutlined",
  //   label: "Energy consumption",
  //   key: "/energy",
  // },
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
    label: "Dashboard",
    key: "/dashboard",
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
    icon: "ToolOutlined",
    label: "Equipment Management",
    key: "/equipment",
  },

  {
    icon: "UserOutlined",
    label: "Personal Center",
    key: "/personal",
  },
];
const managerMenuList = [
  {
    icon: "DashboardOutlined",
    label: "Dashboard",
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
    icon: "TransactionOutlined",
    label: "Merchants Management",
    key: "/merchants",
  },

  {
    icon: "ToolOutlined",
    label: "Equipment Management",
    key: "/equipment",
  },

  {
    icon: "UserOutlined",
    label: "Personal Center",
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
        "roomNumber|+1": 1001,
        decorationType: "@pick(['Unfurnished', 'Fully Furnished'])",
        "area|50-150": 1,
        "unitPrice|1000-3000": 1,
        src: "@image('300x200', '#50B347', '#FFF', 'Room')",
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
  // console.log("Backend bill management received parameters", JSON.parse(options.body));
  return {
    code: 200,
    message: "Success",
    data: Mock.mock({
      [`list|${pageSize}`]: [
        {
          accountNo: '@string("number", 6)',
          "status|1": ["1", "2"],
          "roomNo|1": [
            "A1 Office Building - 201",
            "B1 Office Building - 402",
            "B2 Office Building - 701",
            "C2 Office Building - 1601",
          ],
          "carNo|1": ["B109", "C227", "C106", "D158"],
          "tel|1": ["@phone"],
          "costName1|1": [450.0, 620.0, 785.0], // Monthly rent or service fee in AUD
          costName2: "120 AUD/month",
          "costName3|1": ["3100 AUD/year", "2450 AUD/year"],
          startDate: "2023-01-01",
          endDate: "2024-01-01",
          preferential: 0.0,
          money: 3100.0,
          "pay|1": ["PayID", "BPAY", "Credit Card", "Bank Transfer"],
        },
      ],
      total: 54,
    }),
  };
});

//
//equipment
Mock.mock("http://www.demo.com/equipmentList", "post", (options: any) => {
  const { page, pageSize, companyName, contact, phone } = JSON.parse(
    options.body
  );

  console.log(
    "Received parameters for equipment management backend:",
    JSON.parse(options.body)
  );

  return {
    code: 200,
    message: "Success",
    data: Mock.mock({
      [`list|${Number(pageSize) || 10}`]: [
        {
          "id|+1": 1001,
          "name|1": [
            "Smart Water Supply Unit",
            "A1 Office Building Heating Equipment",
            "Main Gate Entrance Turnstile",
            "PTZ Camera",
            "C1 Office Building Central Air Conditioning",
            "Zone B Charging Pile",
            "B2-21 Elevator",
            "Street Light Equipment 1",
          ],
          "no|1": ["CP-0NYU-1098", "H876-89", "CDU-B09-21"], // Device number
          "person|1": [
            "Liam Smith",
            "Olivia Brown",
            "Noah Williams",
            "Emma Jones",
            "Jack Taylor",
            "Ava Wilson",
            "James Anderson",
            "Isla Thompson",
            "William White",
            "Mia Martin",
          ],

          "tel|1": ["@phone"], // Contact number
          "time|1": ["20 years", "15 years", "10 years"], // Expected lifespan
          rest: "7 years", // Remaining lifespan
          "status|1": [1, 2, 3], // 1: In use, 2: Under maintenance, 3: Broken
          "last|1": ["2023-11-11", "2024-05-06"], // Last maintenance date
          "type|1": ["Model 1", "Model 2", "Model 3"],
          "from|1": [
            "Melbourne Smart Utilities Pty Ltd",
            "Sydney Energy Systems",
            "Brisbane Lighting Solutions",
            "Adelaide Building Tech Co.",
            "Perth Infrastructure Services",
          ],
        },
      ],
      total: 66,
    }),
  };
});

Mock.mock("http://www.demo.com/accountList", "post", (options: any) => {
  console.log("Backend received account management parameters", options);
  return {
    code: 200,
    message: "Success",
    data: {
      list: [
        {
          id: 1001,
          accountName: "esmith", // Ethan Smith
          auth: "admin",
          person: "Ethan Smith",
          tel: "0412 345 678",
          department: "Executive Office",
          menu: menuList,
        },
        {
          id: 1002,
          accountName: "ljohnson", // Lily Johnson
          auth: "user",
          person: "Lily Johnson",
          tel: "0411 222 333",
          department: "User",
          menu: userMenuList,
        },
        {
          id: 1003,
          accountName: "wbrown", // William Brown
          auth: "manager",
          person: "William Brown",
          tel: "0413 666 999",
          department: "Finance Department",
          menu: managerMenuList,
        },
        {
          id: 1005,
          accountName: "dwang", // David Wang
          auth: "user",
          person: "David Wang",
          tel: "0410 444 555",
          department: "User",
          menu: userMenuList,
        },
      ],
      total: 5,
    },
  };
});
