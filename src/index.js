import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/root';
import { PersistGate } from 'redux-persist/integration/react';
import { api } from 'services/api';

api.interceptors.request.use(
  config => {
    const token = store.getState().user.token;
    if (!token) return config;
    
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="project-ucranes03">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
