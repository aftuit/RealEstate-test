import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='wrapper'>
      <div className='bg-navbar w-100 bg-dark'>
        <div className="py-3 px-5 d-flex w-100 justify-content-between bg-dark text-light align-items-center">
          <Link to={'/'}>
        <h5 className='text-slate-700'>Form generator app</h5>
          </Link>
        <div>
        <i className="fa-brands fa-github fa-2xl" style={{color: "#ffffff"}}></i>
        </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Navbar