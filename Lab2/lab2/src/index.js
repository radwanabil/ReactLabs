import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App';


let root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App/>);
