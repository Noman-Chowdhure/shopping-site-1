import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './navitems/Navbar'
const Layout = () => {
  return (
    <div className=' z-10'>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout