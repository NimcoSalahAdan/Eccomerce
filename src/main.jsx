import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//productprovider
import Productprovider from './contexts/ProductContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Productprovider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Productprovider>
);
