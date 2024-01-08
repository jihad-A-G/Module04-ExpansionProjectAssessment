import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider,redirect } from 'react-router-dom'
import axios from 'axios'
import Products from './products.jsx'
import Product from './Product.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'Products',
        element:<Products/>,
        loader: async()=>{
          const response = await axios.get('http://localhost:8000/api/products/')
          if(!response){
            return null
          }
          console.log(response.data);
          return response.data
        } 
      },
      {
        path:'myProducts',
        element:<Products/>,
        loader: async () =>{
          const response = await axios.get(
            "http://localhost:8000/api/products/myProducts"
          );
          return response.data
        }
      },
      {
        path:'Products/:id',
        element:<Product/>,
        loader:async({params}) =>{
          const id = params.id
          const product = await axios.get(
            `http://localhost:8000/api/products/${id}`
          );
          console.log(product.data);
          return product.data
        }
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
