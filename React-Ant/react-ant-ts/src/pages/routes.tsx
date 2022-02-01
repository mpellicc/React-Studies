import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../components/Main/MainLayout";
import Home from "./home/Home";
import ProductsList from "../features/product/views/ProductsList";
import SingleProduct from "../features/product/single-product/views/SingleProduct";
import ProductLayout from "./product/ProductLayout";
import { Content } from "antd/lib/layout/layout";
import CreateProduct from "../features/product/components/CreateProduct";
import TestPage from "./test-page/TestPage";

const mainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "/", element: <Home /> },
    { path: "products", element: <Navigate to="/products" /> },
    { path: "redux", element: <TestPage /> },
  ],
};

const productsRoutes = {
  path: "/products",
  element: <ProductLayout />,
  children: [
    { path: "", element: <ProductsList /> },
    { path: ":id", element: <SingleProduct /> },
    { path: "create", element: <CreateProduct /> },
    { path: ":id/:edit", element: <SingleProduct /> },
  ],
};

function Routing() {
  const routing = useRoutes([mainRoutes, productsRoutes]);

  return (
    <Content style={{ padding: "0 50px", marginTop: 64 }}>{routing}</Content>
  );
}

export default Routing;
