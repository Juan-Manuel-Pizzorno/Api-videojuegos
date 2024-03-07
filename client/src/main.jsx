import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import {createRoot} from 'react-dom/client'; 
import './index.css';
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom";
import {store} from "./redux/store.js"
import { Provider } from 'react-redux';


//ahora es createRoot proque lo otro quedo obsoleto
createRoot(document.getElementById('root')).render(
  
    <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  
  
);