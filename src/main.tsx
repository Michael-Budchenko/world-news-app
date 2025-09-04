import '@/assets/styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import App from './app/App';
import { QueryProvider } from './libs/services/queryClient';
import ToastifyContainer from './libs/services/toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <App />
        <ToastifyContainer />
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
