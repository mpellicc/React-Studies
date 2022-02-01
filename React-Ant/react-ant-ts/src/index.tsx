import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import store from "./store"
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById("root")
);
