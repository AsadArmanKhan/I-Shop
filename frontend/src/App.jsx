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
          path: "product",
          element: <ViewProduct />
        },
        {
          path: "product/add",
          element: <AddProduct />
        }
      ]
    },

  ])
  return (
    <div>

      <RouterProvider router={routers} />

    </div>
  )
}
