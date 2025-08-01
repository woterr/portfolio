import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Buffer } from 'buffer';
window.Buffer = Buffer;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
