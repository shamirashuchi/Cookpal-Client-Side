import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Toaster } from 'react-hot-toast'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Components/Routes/Routes.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
