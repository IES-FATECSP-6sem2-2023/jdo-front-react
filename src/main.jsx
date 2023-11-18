import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContaProvider } from '/src/contexts/AuthContaContext';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContaProvider>
      <App />
    </AuthContaProvider>
    <ToastContainer />
  </React.StrictMode>,
)
