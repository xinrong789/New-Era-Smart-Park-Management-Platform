import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "../utils/RequireAuth";
import { RouteObject } from "react-router-dom";
const Home = React.lazy(() => import("../page/home"));
const Login = React.lazy(() => import("../page/login"));
const NotFound = React.lazy(() => import("../page/notFound"));
const Dashboard = React.lazy(() => import("../page/dashboard"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <RequireAuth allowed={true} redirectTo="/login">
        <Home />
      </RequireAuth>
    ),
  },
  {
    path: "/login",
    element: (
      <RequireAuth allowed={false} redirectTo="/dashboard">
        <Login />
      </RequireAuth>
    ),
  },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <RequireAuth allowed={true} redirectTo="/login">
  //       <Dashboard /> // 确保导入Dashboard组件
  //     </RequireAuth>
  //   ),
  // },
  {
    path: "*",
    element: <NotFound />,
  },
];
