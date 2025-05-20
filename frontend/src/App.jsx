import React from 'react'
import WebsiteLayout from './website/pages/WebsiteLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './website/pages/Home'
import AdminLayout from './admin/pages/AdminLayout'
import DashBoard from './admin/pages/DashBoard'
import ViewCategory from './admin/pages/Category/ViewCategory'
import AddCategory from './admin/pages/Category/AddCategory'
import EditCategory from './admin/pages/Category/EditCategory'
import ViewColor from './admin/pages/Colors/ViewColor'
import AddColor from './admin/pages/Colors/AddColor'
import ViewProduct from './admin/pages/Product/ViewProduct'
import AddProduct from './admin/pages/Product/AddProduct'
import MultipleImage from './admin/pages/Product/MultipleImage'
import EditProduct from './admin/pages/Product/EditProduct'
import EditColor from './admin/pages/Colors/EditColor'
import AdminLogin from './admin/pages/AdminLogin'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <WebsiteLayout />,
      children: [
        {
          path: "/",
          element: <Home />

        }
      ]
    },


    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <DashBoard />
        },
        {
          path: "category",
          element: <ViewCategory />
        },
        {
          path: "category/add",
          element: <AddCategory />
        },
        {
          path: "category/edit/:categoryId",
          element: <EditCategory />
        },
        {
          path: "color",
          element: <ViewColor />
        },
        {
          path: "color/add",
          element: <AddColor />
        },
        {
          path: "color/edit/:colorId",
          element: <EditColor />
        },
        {
          path: "product",
          element: <ViewProduct />
        },
        {
          path: "product/add",
          element: <AddProduct />
        },
        {
          path: `product/multiple/:productId`,
          element: <MultipleImage />
        },
        {
          path: `product/edit/:productId`,
          element: <EditProduct />
        },
      ]
    },
    {

      path: "/admin/login",
      element: <AdminLogin />

    }

  ])
  return (
    <div>

      <RouterProvider router={routers} />

    </div>
  )
}
