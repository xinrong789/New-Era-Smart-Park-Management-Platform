import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "../utils/RequireAuth";
import { RouteObject, Navigate } from "react-router-dom";

const Home = React.lazy(() => import("../page/home"));
const Login = React.lazy(() => import("../page/login"));
const NotFound = React.lazy(() => import("../page/notFound"));
const Dashboard = React.lazy(() => import("../page/dashboard"));

export const routes: RouteObject[] = [
  // {
  //   path: "/",
  //   element: (
  //     <RequireAuth allowed={true} redirectTo="/login">
  //       <Home />
  //     </RequireAuth>
  //   ),
  // },
  {
    path: "/",
    element: (
      <RequireAuth allowed={true} redirectTo="/login">
        <Home />
      </RequireAuth>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        index: true, // 默认访问 / 就跳转到 /dashboard
        element: <Navigate to="dashboard" />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <RequireAuth allowed={false} redirectTo="/">
        <Login />
      </RequireAuth>
    ),
  },

  {
    path: "*",
    element: <NotFound />,
  },
];
