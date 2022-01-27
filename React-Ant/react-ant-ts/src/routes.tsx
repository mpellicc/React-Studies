import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "./components/main/MainLayout";
import Home from "./components/main/Home";
import ProductsList from "./components/product/ProductsList";
import SingleProduct from "./components/product/single-product/SingleProduct";
import ProductLayout from "./components/product/ProductLayout";
import { Content } from "antd/lib/layout/layout";
import CreateProduct from "./components/product/CreateProduct";

const mainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "/", element: <Home /> },
    { path: "products", element: <Navigate to="/products" /> },
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
