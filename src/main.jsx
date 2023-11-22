import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/tailwind.css';
import { GlobalContextSlideProvider } from './components/GlobalContext/GlobalContextSlide.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextSlideProvider>
      <App />
    </GlobalContextSlideProvider>
  </React.StrictMode>,
)
