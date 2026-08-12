import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'aos/dist/aos.css';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initAos } from './utils/initAos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const scheduleAos = () => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => initAos(), { timeout: 2000 });
  } else {
    window.setTimeout(() => initAos(), 1);
  }
};

if (document.readyState === 'complete') {
  scheduleAos();
} else {
  window.addEventListener('load', scheduleAos, { once: true });
}

reportWebVitals();
