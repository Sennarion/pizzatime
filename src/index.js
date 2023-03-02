import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { store, persistor } from 'redux/store';
import App from 'components/App';
import { theme } from 'styles/theme';
import './firebase-config/config';
import 'styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="ecommerce">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </CssBaseline>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
