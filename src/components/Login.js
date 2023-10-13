import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginCreds } from '../store/DataReducer'
import download from '../components/Images/download.png'


const users = [
    {
        id: 1,
        username: 'yskinfotech',
        password: '12345',
        email: "yskinfotech@gmail.com",
        gender: "male",
        image: "https://yskinfotech.com/assets/home/images/logo.jpg",
        token: "token",
        name: 'YSK InfoTech'
    },
    {
        id: 2,
        username: 'shashi',
        password: '12345',
        email: "yskinfotech@gmail.com",
        gender: "male",
        image: "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
        token: "token",
        name: 'ShashiNaidu'
    },

]
const Login = () => {
    const [iniUsername, setIniUsername] = useState('')
    const [iniPassword, setIniPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const eachUser = JSON.parse(localStorage.getItem('eachUser'))


    localStorage.setItem('totalUsers', JSON.stringify(users))
    const user = JSON.parse(localStorage.getItem('totalUsers'))


    useEffect(() => {
        setUserData([...user])
    }, [])


    const loginInput = event => {
        setIniUsername(event.target.value)
    }
    const loginPassword = event => {
        setIniPassword(event.target.value)
    }
    const submitBtn = event => {
        event.preventDefault()
        userData.map((each) => {
            if (each.username === iniUsername && each.password === iniPassword) {
                console.log('success')
                localStorage.setItem('eachUser', JSON.stringify(each))
                dispatch(loginCreds(eachUser))
                navigate('/dashboard')
            }
            else {
                setErrorMsg('*Invalid Username and Password')
            }
        })

    }
    // console.log(finalUser)
    return (
        <div className='container-fluid login-container d-flex justify-content-center align-items-center '>
            <form className='login-form' onSubmit={submitBtn}>
                <div className='d-flex justify-content-center'>
                    <img src={download} className='logo' alt='img' />
                </div>
                <h4 className='text-center mb-4'>Login</h4>
                <input type='text' value={iniUsername} onChange={loginInput} className='form-control p-2 mb-4 add-user-input' placeholder='Username' id='username' />
                <input type='password' value={iniPassword} onChange={loginPassword} className='form-control p-2 add-user-input' placeholder='Password' id='password' />
                {errorMsg !== '' && (<p className='error-msg mt-2 mb-0'>{errorMsg}</p>)}
                <button type='submit' className='btn Login-btn w-100 mt-4 p-2' >Submit</button>
                <Link className='nav-link' to='/signup'><p className='login-sign-para'>SignUp</p></Link>
            </form>

        </div>
    )
}
export default Login