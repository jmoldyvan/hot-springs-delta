import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './custom.scss';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

