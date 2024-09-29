import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex space-x-16' >
      <div className="">

      <Sidebar/>
      </div>
      <div className="">
        <Outlet/>
      </div>
    </div>
    
  )
}

export default Dashboard