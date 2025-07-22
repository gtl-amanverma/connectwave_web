import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store, { persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { LanguageProvider } from './react_intl/language_context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LanguageProvider>
            
              <App />
              <ToastContainer
                stacked
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                icon={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            
          </LanguageProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);
