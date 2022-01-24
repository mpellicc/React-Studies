import Layout from "antd/lib/layout/layout";
import Navbar from "./components/main/Navbar";
import Routing from "./routes";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routing />
    </Layout>
  );
}

export default App;
