import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store-config/store';
import { saveToLocalStorage } from './store-config/localStorage';
import { Provider } from 'react-redux';
import debounce from 'debounce';
import './index.css';

store.subscribe(
  debounce(() => {
    saveToLocalStorage(store.getState())
  }, 500)
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);