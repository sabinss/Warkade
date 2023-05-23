import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
import './index.css';
import WarKade from './App';
import reportWebVitals from './reportWebVitals';
import "../src/assets/styles/index.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WarKade />
  </React.StrictMode>
);

reportWebVitals();
