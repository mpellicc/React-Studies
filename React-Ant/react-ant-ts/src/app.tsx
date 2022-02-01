import Layout from "antd/lib/layout/layout";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./pages/routes";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routing />
    </Layout>
  );
}

export default App;
