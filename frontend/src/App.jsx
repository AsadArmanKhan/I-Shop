import React from 'react'
import WebsiteLayout from './website/pages/WebsiteLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './website/pages/Home'
import AdminLayout from './admin/pages/AdminLayout'
import DashBoard from './admin/pages/DashBoard'
import ViewCategory from './admin/pages/Category/ViewCategory'
import AddCategory from './admin/pages/Category/AddCategory'

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
