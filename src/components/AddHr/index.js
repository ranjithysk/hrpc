import React from "react";
import "./index.css"
import SideBar from "../SideBar";

const AddHr = () => {
    return (
        <div className="container-fluid dashboard-container d-flex p-4">
            <SideBar />
            <div className="dashboard-table-container col-xl-9">
                <div className="d-flex justify-content-between">
                    <div>
                        <input type="search" className="dashboard-table-input" placeholder="Search" />
                    </div>
                    <div className="d-flex mt-2">
                        <div>
                            <h6 className="dashboard-hunter">Dylan Hunter</h6>
                            <p>Admin Profile</p>
                        </div>
                        <img className="profile-img" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="img" />
                    </div>
                </div>
                <div className="dashboard-table-con-2 p-4">
                    <h6><b>Add HR</b></h6>
                    <div className="d-flex row mt-4">
                        <div className="col-xl-4 mb-4">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input type="text" className="form-control add-user-input" />
                        </div>
                        <div className="col-xl-4 mb-4 ">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input type="text" className="form-control add-user-input" />
                        </div>
                        <div className="col-xl-4 mb-4 ">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input type="text" className="form-control add-user-input" />
                        </div>
                        <div className="col-xl-4 mb-4 ">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input type="text" className="form-control add-user-input" />
                        </div>
                        <div className="col-xl-4 mb-4 ">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input type="text" className="form-control add-user-input" />
                        </div>
                        <div className="col-xl-4 mb-4 ">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input type="text" className="form-control add-user-input" />
                        </div>
                        <div className="col-xl-4 mb-4 ">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input type="text" className="form-control add-user-input" />
                        </div>
                        <div className="col-xl-4 mb-4 ">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input type="text" className="form-control add-user-input" />
                        </div>
                        <div className="col-xl-4 mb-4 ">
                            <label className="mb-1" htmlFor="username">Username</label>
                            <input type="text" className="form-control add-user-input" />
                        </div>

                    </div>
                    <button type="button" className="btn btn-primary submit-btn">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default AddHr