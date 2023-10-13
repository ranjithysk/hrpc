import React from "react";
import download from './Images/download.png'
import './SideBar.css'

const SideBar = () => {

    return (
        <div className="dashboard-dashboard-container col-xl-3 p-4 col-md-12 col-lg-3 col-sm-2">
            <div className='d-flex justify-content-center'>
                <img src={download} className='logo' alt='img' />
            </div>
            <div className="dashboard-text-con">
                <p className="dashboard-dashboard-para">Dashboard</p>
                <p className="dashboard-dashboard-para">Events</p>
                <p className="dashboard-dashboard-para">Job Posts</p>
            </div>
        </div>
    )
}
export default SideBar
