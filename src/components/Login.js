import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg"
                    alt="logo"></img>
            </div>
            <form className='w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg'>
                <h1 className="font-bold text-3xl py-4 w-full">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                <input type="text" placeholder='Email Address' className="p-4 my-4 w-full bg-gray-700" />
                {!isSignIn && <input type="text" placeholder='Name' className="p-4 my-4 w-full bg-gray-700" />}
                <input type="password" placeholder='Password' className="p-4 my-4 w-full bg-gray-700"></input>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already a User? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login
