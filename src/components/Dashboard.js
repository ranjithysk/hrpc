import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";
import './Dashboard.css'
import SideBar from "./SideBar";
import { useSelector } from "react-redux";



const Dashboard = () => {
    const navigate = useNavigate()
    const [userData1, setUserData1] = useState([])


    const addHrBtn = () => {
        navigate('/add_hr')
    }
    let userDetails = useSelector(state => state.DataReducer.eachUserProfile)
    useEffect(() => {
        setUserData1(JSON.parse(localStorage.getItem('results')))
    }, [])
    console.log(userData1)


    return (
        <div className="container-fluid dashboard-container d-flex p-4">
            <SideBar />
            <div className="dashboard-table-container col-xl-9 col-lg-12 col-sm-12 col-md-12">
                <div className="d-flex justify-content-between search-container">
                    <div>
                        <input type="search" className="dashboard-table-input" placeholder="Search" />
                    </div>
                    <div className="dashboard-table-sm">
                        <User />
                    </div>
                </div>
                <div className="dashboard-table-con-2 p-4">
                    <div className='d-flex justify-content-between mb-3'>
                        <h6 className="hr-results-heading"><b>HR Results</b></h6>
                        <button type="button" onClick={addHrBtn} className=" add-btn">Add HR</button>
                    </div>
                    <div className="table-container">
                        <table className="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">EmpID</th>
                                    <th scope="col">FullName</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Experience</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">PositionLevel</th>
                                    <th scope="col">Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                {userData1 && userData1.map((each, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{each.firstName} {each.lastName} </td>
                                            <td>{each.jobTitle}</td>
                                            <td>{each.totalYearExperience}</td>
                                            <td>{each.city}</td>
                                            <td>{each.state}</td>
                                            <td>{each.positionLevel}</td>
                                            <td>{each.status}</td>

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard
