import { Layout } from "antd";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import CreateProduct from "../../create-product/src/components/CreateProduct";

function App() {
  return (
    <Layout>
      <Navbar />
      <Home />
        <CreateProduct></CreateProduct>
    </Layout>
  );
}

export default App;
