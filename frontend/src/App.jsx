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
// import LoginPage from './website/pages/AuthForm'
// import RegisterPage from './website/pages/RegisterPage'
import Card from './website/components/Card'
import Cart from './website/pages/Cart'
import Profile from './website/pages/Profile'
import Homeeee from './website/pages/Homeeee'
import Store from './website/pages/Store'
import Checkout from './website/pages/Checkout'
import AuthForm from './website/pages/AuthForm'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { lsAdmin } from './redux/slice/adminSlice'
import { lsUser } from './redux/slice/userSlice'
// import HomePage from './website/pages/Homeeee'

export default function App() {
  // const dispatcher = useDispatch()
  // useEffect(
  //   () => {
  //     // dispatcher(lsAdmin())
  //     // dispatcher(lsUser())
  //   },
  //   []
  // )

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <WebsiteLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/ghar",
          element: <Homeeee />
        },
        {
          path: "/store/:categorySlug?",
          element: <Store />
        },
        {
          path: "/checkout",
          element: <Checkout />
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

    },

    {
      path: "/login",
      element: <AuthForm />
    },


  ])
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  )
}
