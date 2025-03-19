import { lazy } from "react";
const Dashboard = lazy(() => import("../page/dashboard"));
const UserList = lazy(() => import("../page/users"));
const AddUser = lazy(() => import("../page/users/addUser"));
const Tenement = lazy(() => import("../page/estate/tenement"));
const Room = lazy(() => import("../page/estate/room"));
const Car = lazy(() => import("../page/estate/car"));
const Repair = lazy(() => import("../page/repair"));
const Contract = lazy(() => import("../page/finance/contract"));
const Contractdetail = lazy(() => import("../page/finance/contractdetail"));
const Bill = lazy(() => import("../page/finance/bill"));
const Merchants = lazy(() => import("../page/merchants"));
const All = lazy(() => import("../page/operation/all"));
const Article = lazy(() => import("../page/operation/articles"));
const Comments = lazy(() => import("../page/operation/comments"));
const Equipment = lazy(() => import("../page/equipment"));
const Energy = lazy(() => import("../page/energy"));
const Settings = lazy(() => import("../page/settings"));
const Personal = lazy(() => import("../page/personal"));
export const componentMap: any = {
  "/dashboard": <Dashboard />,
  "/users/list": <UserList />,
  "/users/add": <AddUser />,
  "/estate/tenement": <Tenement />,
  "/estate/room": <Room />,
  "/estate/car": <Car />,
  "/repair": <Repair />,
  "/finance/contract": <Contract />,
  "/finance/contractdetail": <Contractdetail />,
  "/finance/bill": <Bill />,
  "/merchants": <Merchants />,
  "/operation/all": <All />,
  "/operation/article": <Article />,
  "/operation/comments": <Comments />,
  "/equipment": <Equipment />,
  "/energy": <Energy />,
  "/settings": <Settings />,
  "/personal": <Personal />,
};
