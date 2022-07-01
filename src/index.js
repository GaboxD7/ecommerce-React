import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxqD-Vs2qWYWoERvtuJQXfyoHp8Rowqa0",
  authDomain: "ecommerce-bike.firebaseapp.com",
  projectId: "ecommerce-bike",
  storageBucket: "ecommerce-bike.appspot.com",
  messagingSenderId: "551974244642",
  appId: "1:551974244642:web:d04d4858451a3a9db5d57b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    <App />
  </> 


);


