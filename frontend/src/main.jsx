// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import "tw-elements-react/dist/css/tw-elements-react.min.css";
import './index.css'
import { Provider } from 'react-redux'; 
import { configureStore } from '@reduxjs/toolkit';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './redux/rootReducer'
// import store from './redux/store.jsx';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';


// Redux persist configuration
const persistConfig = {
  key: 'root',
  storage : storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Redux store
const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>,
)
