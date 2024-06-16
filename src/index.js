import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'store/root';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App';
import { themeStorageKey, themes } from 'constants/themes';

import './index.css';


const rootElement = document.getElementById('root');
const theme = localStorage.getItem(themeStorageKey);

if (!theme) {
  localStorage.setItem(themeStorageKey, themes.LIGHT);
  rootElement.dataset.theme = themes.LIGHT;
} else {
  rootElement.dataset.theme = theme;
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter basename="project-ucranes03">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <button onClick={() => {
            const currentTheme = localStorage.getItem(themeStorageKey);
            if (!theme) {
              localStorage.setItem(themeStorageKey, themes.LIGHT);
              rootElement.dataset.theme = themes.LIGHT;
            } else {
              const newTheme = currentTheme === themes.LIGHT ? themes.DARK : themes.LIGHT;
              localStorage.setItem(themeStorageKey, newTheme); 
              rootElement.dataset.theme = newTheme;
            }
          }}>Toggle</button>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
