import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PageNotFound from './components/About/PageNotFound.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
const router = createBrowserRouter([{
  path:"/",
  element: <Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
    },{
      path:"/about",
      element:<About/>
    }, {
      path:"*",
      element:<PageNotFound/>
    },{
      path:'/github/:username',
      element:<Github/>
    }
  ]
} , {path:'/contact' ,
  element:<Contact/>
} ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
