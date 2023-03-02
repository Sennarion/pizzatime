import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@mui/material/CssBaseline';
import { store, persistor } from 'redux/store';
import App from 'components/App';
import './firebase';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="ecommerce">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline>
            <App />
          </CssBaseline>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
