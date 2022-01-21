import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Products from './products'
import "./index.css";



function App() {
    return (
        <div className='productapp'>
            <h1>Test</h1>
            <Products />
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);