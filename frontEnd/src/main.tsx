import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
// import { ScrollToTop } from 'react-router-scroll-top';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
