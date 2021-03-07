import React from 'react'
import './SignInPage.scss'
import SignIn from '../../Component/SignIn/SignIn';
import SignUp from '../../Component/SignUp/SignUp';


const SignInPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInPage
