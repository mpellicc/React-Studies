import Layout from "antd/lib/layout/layout";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./pages/routes";
import { ConfigProvider } from "antd";
import itIT from "antd/lib/locale/it_IT";

function App() {
  return (
    <ConfigProvider locale={itIT}>
      <Layout>
        <Navbar />
        <Routing />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
