import React, { useState } from "react";
import SideBar from './SideBar'
import User from "./User";
import { loginData } from "../store/DataReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Gender = [
    {
        id: 1,
        value: 'Select'
    },
    {
        id: 2,
        value: 'Male'
    }, {
        id: 3,
        value: 'Female'
    },
    {
        id: 4,
        value: 'Others'
    }
]

const stateOptions = [
    { value: 'Select', id: 0 },
    { value: 'Andra Pradesh', id: 1 },
    { value: 'Andaman and Nicobar Islands', id: 30 },
    { value: 'Arunachal Pradesh', id: 2 },
    { value: 'Assam', id: 3 },
    { value: 'Bihar', id: 4 },
    { value: 'Chhattisgarh', id: 5 },
    { value: 'Chandigarh', id: 31 },
    { value: 'Dadar and Nagar Haveli', id: 32 },
    { value: 'Daman and Diu', id: 33 },
    { value: 'Delhi', id: 34 },
    { value: 'Goa', id: 6 },
    { value: 'Gujarat', id: 7 },
    { value: 'Haryana', id: 8 },
    { value: 'Himachal Pradesh', id: 9 },
    { value: 'Jammu and Kashmir', id: 10 },
    { value: 'Jharkhand', id: 11 },
    { value: 'Karnataka', id: 12 },
    { value: 'Kerala', id: 13 },
    { value: 'Lakshadeep', id: 35 },
    { value: 'Madya Pradesh', id: 14 },
    { value: 'Maharashtra', id: 15 },
    { value: 'Manipur', id: 16 },
    { value: 'Meghalaya', id: 17 },
    { value: 'Mizoram', id: 18 },
    { value: 'Nagaland', id: 19 },
    { value: 'Orissa', id: 20 },
    { value: 'Pondicherry', id: 36 },
    { value: 'Punjab', id: 21 },
    { value: 'Rajasthan', id: 22 },
    { value: 'Sikkim', id: 23 },
    { value: 'Tamil Nadu', id: 24 },
    { value: 'Telangana', id: 25 },
    { value: 'Tripura', id: 26 },
    { value: 'Uttaranchal', id: 27 },
    { value: 'Uttar Pradesh', id: 28 },
    { value: 'West Bengal', id: 29 },
]

const specialtyOptions = [
    { value: 'Select', id: 0 },
    { value: 'Awards and Incentives', id: 1 },
    { value: 'Benefits', id: 2 },
    { value: 'Business Education', id: 3 },
    { value: 'California Law', id: 4 },
    { value: 'Communications', id: 5 },
    { value: 'Compensation', id: 6 },
    { value: 'Corporate Ethics', id: 7 },
    { value: 'Diversity, EEO, Affirmative Action', id: 8 },
    { value: 'Employee Assistance Programs', id: 9 },
    { value: 'Employee Relations', id: 10 },
    { value: 'HR Consulting', id: 11 },
    { value: 'HRIS, Technology', id: 12 },
    { value: 'Health and Wellness', id: 13 },
    { value: 'Health, Safety, Security', id: 14 },
    { value: 'Immigration', id: 15 },
    { value: 'International HRM, Multinational HR Ops', id: 16 },
    { value: 'Labor, Industrial Relations', id: 17 },
    { value: 'Measurement, Metrics', id: 18 },
    { value: 'Organizational Development', id: 19 },
    { value: 'Outsourcing, Offshoring', id: 20 },
    { value: 'Relocation', id: 21 },
    { value: 'Staffing, Recruitment, Retention', id: 22 },
    { value: 'Strategic Planning', id: 23 },
    { value: 'Training & Development', id: 24 },
    { value: 'Workforce Law, Compliance', id: 25 },
    { value: 'Workplace Planning, Readiness', id: 26 },
    { value: 'Other', id: 27 },
]

const positionLevelOptions = [
    { value: 'Select', id: 0 },
    { value: 'Academician', id: 1 },
    { value: 'Administrative Assistant', id: 2 },
    { value: 'Administrator', id: 3 },
    { value: 'Asst. or Assoc. Vice Pres', id: 4 },
    { value: 'Business Partner / HRBP', id: 5 },
    { value: 'CHRO, CHCO', id: 6 },
    { value: 'Consultant', id: 7 },
    { value: 'Coordinator', id: 8 },
    { value: 'Director or Asst/Assoc Director', id: 9 },
    { value: 'EVP, SVP', id: 10 },
    { value: 'Legal Counsel', id: 11 },
    { value: 'Manager, Generalist', id: 12 },
    { value: 'Non CHRO Executive, Other C-Suite', id: 13 },
    { value: 'Partner, Principal', id: 14 },
    { value: 'President, CEO, Chairman', id: 15 },
    { value: 'Representative, Associate', id: 16 },
    { value: 'Specialist', id: 17 },
    { value: 'Student', id: 18 },
    { value: 'Supervisor', id: 19 },
    { value: 'VP or Asst/Assoc VP', id: 20 },
    { value: 'Other', id: 21 }
]

const totalYearsOptions = [
    { value: 'Select', id: 0 },
    { value: '1', id: 1 },
    { value: '2', id: 2 },
    { value: '3', id: 3 },
    { value: '4', id: 4 },
    { value: '5', id: 5 },
    { value: '6', id: 6 },
    { value: '7', id: 7 },
    { value: '8', id: 8 },
    { value: '9', id: 9 },
    { value: '10', id: 10 },
    { value: '11', id: 11 },
    { value: '12', id: 12 },
    { value: '13', id: 13 },
    { value: '14', id: 14 },
    { value: '15', id: 15 },
    { value: '16', id: 16 },
    { value: '17', id: 17 },
    { value: '18', id: 18 },
    { value: '19', id: 19 },
    { value: '20', id: 20 },
    { value: '21', id: 21 },
    { value: '22', id: 22 },
    { value: '23', id: 23 },
    { value: '24', id: 24 },
    { value: '25', id: 25 },
    { value: '26', id: 26 },
    { value: '27', id: 27 },
    { value: '28', id: 28 },
    { value: '29', id: 29 },
    { value: '30', id: 30 },
]



const AddHr = () => {
    const navigate = useNavigate()

    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        address: '',
        street: '',
        city: '',
        state: '',
        pincode: '',
        jobTitle: '',
        specialty: '',
        positionLevel: '',
        totalYearExperience: 0,
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
        status: 'Live'
    })

    let results1 = JSON.parse(localStorage.getItem('results'))
    const [allProfiles, setAllProfiles] = useState([...results1])
    console.log(allProfiles)

    const dispatch = useDispatch()

    const registerInput = event => {
        const { value, name } = event.target
        if (name === 'firstname') {
            setProfile({ ...profile, firstName: value })
        }
        else if (name === 'lastname') {
            setProfile({ ...profile, lastName: value })
        }
        else if (name === 'gender') {
            setProfile({ ...profile, gender: value })
        }
        else if (name === 'address') {
            setProfile({ ...profile, address: value })
        }
        else if (name === 'street') {
            setProfile({ ...profile, street: value })
        }
        else if (name === 'city') {
            setProfile({ ...profile, city: value })
        }
        else if (name === 'state') {
            setProfile({ ...profile, state: value })
        }
        else if (name === 'pincode') {
            setProfile({ ...profile, pincode: value })
        }
        else if (name === 'jobtitle') {
            setProfile({ ...profile, jobTitle: value })
        }
        else if (name === 'specialty') {
            setProfile({ ...profile, specialty: value })
        }
        else if (name === 'position') {
            setProfile({ ...profile, positionLevel: value })
        }
        else if (name === 'experience') {
            setProfile({ ...profile, totalYearExperience: value })
        }
        else if (name === 'phone') {
            setProfile({ ...profile, phone: value })
        }
        else if (name === 'username') {
            setProfile({ ...profile, username: value })
        }
        else if (name === 'password') {
            setProfile({ ...profile, password: value })
        }
        else if (name === 'conPassword') {
            setProfile({ ...profile, confirmPassword: value })
        }

    }

    const registerSubmitBtn = (event) => {
        event.preventDefault()
        // console.log(profile)
        if (profile.password !== '' && profile.confirmPassword !== '' &&
            profile.password === profile.confirmPassword) {
            console.log('naidu')
            setAllProfiles([...allProfiles, profile])
            localStorage.setItem('results', JSON.stringify(allProfiles))
            let results2 = JSON.parse(localStorage.getItem('results'))
            dispatch(loginData(results2))
            // navigate('/dashboard')
        }

    }
    // console.log(allProfiles)

    return (
        <div className="container-fluid dashboard-container d-flex p-4">
            <SideBar />
            <div className="dashboard-table-container col-xl-9">
                <div className="d-flex justify-content-between search-container">
                    <div>
                        <input type="search" className="dashboard-table-input" placeholder="Search" />
                    </div>
                    <div className="dashboard-table-sm">
                        <User />
                    </div>
                </div>
                <div className="dashboard-table-con-2 p-4">
                    <h6><b>Add HR</b></h6>
                    <form onSubmit={registerSubmitBtn}>
                        <div className="mt-4">
                            <h5 className="mb-3">Contact Information</h5>
                            <div className="row">
                                <div className="col-xl-4">
                                    <label htmlFor="firstname" className="mb-1 ">First Name</label>
                                    <input onChange={registerInput} type="text" id="firstname" name="firstname" placeholder="Enter Firstname" className="form-control mb-3 " />
                                </div>
                                <div className="col-xl-4">
                                    <label htmlFor="lastname" className="mb-1 ">Last Name</label>
                                    <input onChange={registerInput} type="text" id="lastname" name="lastname" placeholder="Enter Lastname" className="form-control mb-3" />
                                </div>
                                <div className="col-xl-4">
                                    <label className="mb-1 ">Gender</label>
                                    <select className="form-select mb-3" name="gender" onChange={registerInput}>
                                        {Gender && Gender.map((each) => {
                                            return (
                                                <option className="dropdown-item" aria-label="Default select example" key={each.id} value={each.value}>{each.value}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-xl-6">
                                    <label htmlFor="address" className="mb-1 ">Address</label>
                                    <input onChange={registerInput} type="text" id="address" name="address" placeholder="Enter Address" className="form-control mb-3" />
                                </div>
                                <div className="col-xl-6">
                                    <label htmlFor="street" className="mb-1 ">Street</label>
                                    <input onChange={registerInput} type="text" id="street" name="street" placeholder="Enter Street" className="form-control mb-3" />
                                </div>
                                <div className="col-xl-4">
                                    <label htmlFor="city" className="mb-1 ">City</label>
                                    <input onChange={registerInput} type="text" id="city" name="city" placeholder="Enter City" className="form-control mb-3" />
                                </div>
                                <div className="col-xl-4">
                                    <label className="mb-1 ">State</label>
                                    <select className="form-select mb-3" onChange={registerInput} name="state">
                                        {stateOptions && stateOptions.map((each) => {
                                            return (
                                                <option className="dropdown-item" aria-label="Default select example" key={each.id} value={each.value}>{each.value}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-xl-4">
                                    <label htmlFor="pincode" className="mb-1 ">Pincode</label>
                                    <input onChange={registerInput} type="number" id="pincode" name="pincode" placeholder="Enter Pincode" className="form-control mb-3" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h5 className="mb-3">Professional Information</h5>
                            <div className="row">
                                <div className="col-xl-4">
                                    <label htmlFor="jobtitle" className="mb-1 ">Job Title</label>
                                    <input onChange={registerInput} type="text" id="jobtitle" name="jobtitle" placeholder="Enter Job" className="form-control mb-3 " />
                                </div>
                                <div className="col-xl-4">
                                    <label className="mb-1 ">Specialty</label>
                                    <select className="form-select mb-3" onChange={registerInput} name="specialty">
                                        {specialtyOptions && specialtyOptions.map((each) => {
                                            return (
                                                <option className="dropdown-item" aria-label="Default select example" key={each.id} value={each.value}>{each.value}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-xl-4">
                                    <label className="mb-1 ">Position Level</label>
                                    <select className="form-select mb-3" onChange={registerInput} name="position">
                                        {positionLevelOptions && positionLevelOptions.map((each) => {
                                            return (
                                                <option className="dropdown-item" aria-label="Default select example" key={each.id} value={each.value}>{each.value}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-xl-4">
                                    <label className="mb-1 ">Total Experience</label>
                                    <select className="form-select mb-3" onChange={registerInput} name="experience">
                                        {totalYearsOptions && totalYearsOptions.map((each) => {
                                            return (
                                                <option className="dropdown-item" aria-label="Default select example" key={each.id} value={each.value}>{each.value}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-xl-4">
                                    <label htmlFor="phone" className="mb-1 ">Phone</label>
                                    <input onChange={registerInput} type="number" id="phone" name="phone" placeholder="Enter phone" className="form-control mb-3 " />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h5 className="mb-3">Create Profile</h5>
                            <div className="row">
                                <div className="col-xl-4">
                                    <label htmlFor="username" className="mb-1 ">Username</label>
                                    <input onChange={registerInput} type="text" id="username" name="username" placeholder="Enter Username" className="form-control mb-3 " />
                                </div>
                                <div className="col-xl-4">
                                    <label htmlFor="password" className="mb-1 ">Password</label>
                                    <input onChange={registerInput} type="text" id="password" name="password" placeholder="Enter Password" className="form-control mb-3 " />
                                </div>
                                <div className="col-xl-4">
                                    <label htmlFor="conPassword" className="mb-1 ">Confirm Password</label>
                                    <input onChange={registerInput} type="text" id="conPassword" name="conPassword" placeholder="Enter Password" className="form-control mb-3 " />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-25 mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddHr