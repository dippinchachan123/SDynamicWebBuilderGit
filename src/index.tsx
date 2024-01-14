import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './Pages/Desktop/Homepage/Homepage';
import Footer from './Components/Mobile/Footer/Footer';
import Navbar from './Components/Mobile/Navbar/Navbar';
import Test from './Pages/Desktop/Homepage/test';
  // import Homepage from './Pages/Mobile/Homepage/Homepage';


//Strapi Code
import { Strapi } from 'strapi-frontend';
import { config } from './Strapi/strapi';
Strapi.setConfig(config);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* <Homepage
      open_status = {false}
            attrName={"r"}
            value_update={()=>{}} /> */}
    {/* <Test /> */}
    <Homepage />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
