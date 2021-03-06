import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/reducers/index';
import LoginProvider from './context/loginContext';

ReactDOM.render(
  <LoginProvider>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </LoginProvider>,


  document.getElementById('root')
);

reportWebVitals();
