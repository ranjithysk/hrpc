import React from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
import SideBar from "../SideBar";

const userData = [
    {
        id: '001',
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'Hyderabad',
        age: 30,
        status: 'Live'
    },
    {
        id: '002',
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Vizag',
        age: 20,
        status: 'Live'
    },
    {
        id: '003',
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'Hyderabad',
        age: 30,
        status: 'Live'
    },
    {
        id: '004',
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Vizag',
        age: 20,
        status: 'Live'
    },
    {
        id: '005',
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'Hyderabad',
        age: 30,
        status: 'Live'
    },
    {
        id: '006',
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Vizag',
        age: 20,
        status: 'Live'
    },
    {
        id: '007',
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'Hyderabad',
        age: 30,
        status: 'Live'
    },
    {
        id: '008',
        name: 'Suresh Kumar',
        designation: 'Tester',
        place: 'Vizag',
        age: 20,
        status: 'Live'
    },
    {
        id: '009',
        name: 'Rajesh Kumar',
        designation: 'Developer',
        place: 'Hyderabad',
        age: 30,
        status: 'Live'
    },

]

const Dashboard = () => {
    const navigate = useNavigate()
    const addHrBtn = () => [
        navigate('/add_hr')
    ]
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
                    <div>
                        <div className='d-flex justify-content-between mb-3'>
                            <h6 className="hr-results-heading"><b>HR Results</b></h6>
                            <button type="button" onClick={addHrBtn} className=" add-btn">Add HR</button>
                        </div>
                        <div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Emp ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Designation</th>
                                        <th scope="col">Place</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData && userData.map((each) => {
                                        return (
                                            <tr key={each.id}>
                                                <th scope="row">{each.id}</th>
                                                <td>{each.name}</td>
                                                <td>{each.designation}</td>
                                                <td>{each.place}</td>
                                                <td>{each.age}</td>
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
        </div>
    )
}
export default Dashboard
