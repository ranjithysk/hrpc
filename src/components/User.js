import React, { useState, useEffect } from "react";
import './User.css'
import { useSelector } from "react-redux";

const User = () => {
    const [userProfile, setUserProfile] = useState({})
    let newData = useSelector(state => state.DataReducer.creds)

    const finalUser = JSON.parse(localStorage.getItem('eachUser'))
    // console.log(newData)

    useEffect(() => {
        setUserProfile({ ...finalUser })
    }, [])

    return (
        <div className="d-flex mt-2">
            <div>
                <h6 className="dashboard-hunter">{userProfile.name}</h6>
                <p>Admin Profile</p>
            </div>
            <img className="profile-img" src={userProfile.image} alt="img" />
        </div>
    )
}
export default User