import React from "react";
import ReactDOM, { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import Exercise1 from "./exercise1";
import Exercise2 from "./exercise2";
import Exercise3 from "./exercise3";
import Exercise4 from "./exercise4";
import Exercise5 from "./exercise5";
import Exercise6 from "./exercise6";
import "./index.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link> |<Link to="/1">Exercise 1</Link> |
      <Link to="/2">Exercise 2</Link> |<Link to="/3">Exercise 3</Link> |
      <Link to="/4">Exercise 4</Link> |<Link to="/5">Exercise 5</Link> |
      <Link to="/6">Exercise 6</Link> |
    </div>
  );
}

function Layout() {
  return (
    <>
      <NavBar />
      <hr />
      <Outlet />
    </>
  );
}

function Square() {
  return (
    <div className="square-box">
      <div className="square-content">Hello, World!</div>
    </div>
  );
}

function Home() {
  return <Square />;
}

function Exercise(props) {
  const num = parseInt(props.num);
  //const Ex = `Exercise${num}`;

  if (num === 1) {
    return (
      <div>
        <Exercise1 />
      </div>
    );
  } else if (num === 2) {
    return (
      <div>
        <Exercise2 />
      </div>
    );
  } else if (num === 3) {
    return (
      <div>
        <Exercise3 />
      </div>
    );
  } else if (num === 4) {
    return (
      <div>
        <Exercise4 />
      </div>
    );
  } else if (num === 5) {
    return (
      <div>
        <Exercise5 />
      </div>
    );
  } else if (num === 6) {
    return (
      <div>
        <Exercise6 />
      </div>
    );
  } else {
    return <div>Error</div>;
  }

  /*
    for (let i=0; i<=num; i++) {
       if (i === num) {
           return (
            <div className='exercise'>
                <Ex />
            </div>
           )
       }
   }
   */
}

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/1" element={<Exercise num="1" />} />
          <Route path="/2" element={<Exercise num="2" />} />
          <Route path="/3" element={<Exercise num="3" />} />
          <Route path="/4" element={<Exercise num="4" />} />
          <Route path="/5" element={<Exercise num="5" />} />
          <Route path="/6" element={<Exercise num="6" />} />
        </Route>
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
