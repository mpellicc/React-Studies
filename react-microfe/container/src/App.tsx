import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Navbar />
      <Home />
    </Layout>
  );
}

export default App;
