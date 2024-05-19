import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ProductsPage from "./pages/Products";
import NotFoundPage from "./pages/404";
import Home from "./pages/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={Router} />;
}
