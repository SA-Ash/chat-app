import React, { useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'

function Register() {
    const [onClicked, setOnClicked] = useState(false)
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: ''
    })
    console.log(userData)
  return (
    <section className='flex flex-col items-center justify-center h-[100vh] background-image'>
        <div className='bg-white shadow-lg p-5 rounded-xl h-[27rem] w-[20rem] flex flex-col justify-center items-center'>
            <div className='mb-10'>
                <h1 className='text-center text-[28px] font-bold'>Sign Up</h1>
                <p className='text-center text-sm text-gray-400'>Welcome, create and account to continue</p>
            </div>
            <div className='w-full`'>
                <input onChange={(e)=>setUserData({...userData, fullName: e.target.value})} type="text" className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] tex-[#004939f3 mb-3 font-medium outline-none" placeholder='Full name' />
                <input onChange={(e)=>setUserData({...userData, email: e.target.value})} type="email" className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] tex-[#004939f3 mb-3 font-medium outline-none" placeholder='Email' />
                <input onChange={(e)=>setUserData({...userData, password: e.target.value})} type="password" className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] tex-[#004939f3 mb-3 font-medium outline-none" placeholder='Password'/>
            </div>
            <div className='cursor-pointer w-full bg-[#01aa85] rounded-md flex gap-1 items-center justify-center'>
                <button onClick={()=>setSignUpDetails(signUpDetails)} className='cursor-pointer  text-white font-bold p-2 '>Register </button>
                <FaUserPlus className='text-white'/>
            </div>
            <div className='mt-5 text-center text-gray-400 text-sm'>
                <button>Already have an account? Sign In</button>
            </div>
        </div> 
    </section>
  )
}

export default Register