import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='container-fluid login-container d-flex justify-content-center align-items-center'>
            <form className='login-form'>
                <h3 className='text-center mb-4'><b>HPRC SignUp</b></h3>
                <input type='text' className='form-control p-2 mb-4 add-user-input' placeholder='Username' id='username' />
                <input type='password' className='form-control p-2 add-user-input' placeholder='Password' id='password' />
                <input type='password' className='form-control p-2 mt-4 add-user-input' placeholder='Confirm Password' id='password' />
                <button type='submit' className='btn btn-primary w-100 mt-4 p-2' >Submit</button>
                <Link to='/login' className='nav-link'><p className='login-sign-para'>Login</p></Link>
            </form>
        </div>
    )
}
export default SignUp