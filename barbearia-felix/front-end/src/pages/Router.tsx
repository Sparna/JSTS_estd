import { createBrowserRouter } from "react-router";
import Login from "./Login";
import Cadastro from "./Cadastro";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div> Olá </div>,
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