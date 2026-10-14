import { createBrowserRouter, Outlet } from "react-router";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Home from "./Home";
import { Header } from "../components/Header";
import Pedidos from "./Pedidos";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);