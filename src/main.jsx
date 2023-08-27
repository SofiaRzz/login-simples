import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cadastro from './Cadastro.jsx'
import Home from './Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  }, 
  {
    path: "/cadastro",
    element: <Cadastro></Cadastro>
  },
  {
    path: "/home",
    element: <Home></Home>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
