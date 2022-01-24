import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
} from "react-router-dom";

import "antd/dist/antd.css"
import "./index.css"


ReactDOM.render(
    <Router>
    <App />
    </Router>, 
    document.getElementById("root")
);