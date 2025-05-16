import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import SideMenu from '../components/SideMenu'

export default function AdminLayout() {
    return (
        <>
            <div className="max-w[1300px] grid grid-cols-5">
                <div className="col-span-1">
                    <SideMenu />
                </div>
                <div className="col-span-4">
                    {/* <Header /> */}
                    <Header />
                    <Outlet />
                </div>
            </div>

        </>
    )
}
