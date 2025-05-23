import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { useEffect, useState, Suspense } from "react";
import { generateRoutes } from "./utils/generatesRoutes";

import { createBrowserRouter, Navigate } from "react-router-dom";
import { getMenu } from "./api/users";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "./store/login/authSlice";

function App() {
  // console.log("1111" + process.env.REACT_APP_API_URL);
  const { token } = useSelector((state: any) => state.authSlice);
  const [routerss, setRouter] = useState<any>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadData() {
      if (token) {
        const { data } = await getMenu();

        if (data.length) {
          dispatch(setMenu(data));
          const routers = generateRoutes(data); // 动态生成的 routes

          // ✅ 插入默认跳转规则：访问 "/" 自动跳到 dashboard 或 routers[0].path
          const defaultRedirect = {
            index: true,
            element: <Navigate to={routers[0]?.path || "dashboard"} replace />,
          };

          const myRoutes = [...routes];
          myRoutes[0].children = [defaultRedirect, ...routers];

          const router = createBrowserRouter(myRoutes);
          setRouter(router);
        }
      } else {
        const router = createBrowserRouter(routes);
        setRouter(router);
      }
    }

    loadData();
  }, [token]);

  if (routerss) {
    return (
      <div className="App">
        {/* <Suspense fallback={<p>加载中</p>}> 目前不写没问题 */}
        <RouterProvider router={routerss}></RouterProvider>
        {/* </Suspense> */}
      </div>
    );
  } else {
    return <div>Please Wait </div>;
  }
}

export default App;
