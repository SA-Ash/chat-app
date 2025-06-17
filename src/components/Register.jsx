import React, { useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth, db} from "../firebase/firebase.js"
import { doc, setDoc } from 'firebase/firestore'
function Register({isLogin, setIsLogin}) { 
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: ''
    })
    console.log(userData)
    async function handleAuth(){
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, userData?.email, userData?.password)
            const user = userCredential.user

            const userDocRef = doc(db, "users", user.uid)
            await setDoc(userDocRef, {
                uid: user.uid,
                email: user.email,
                username: user.email?.split("@")[0],
                fullName: userData.fullName,
                image: ""
            })
            console.log("wrote user doc")
        }catch(e){
            console.log(e)
        }
        finally{
            setLoading(true)
        }
    }
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
            <div onClick={handleAuth}  className='w-full'>
                <button disabled={loading} className='  w-full bg-[#01aa85] rounded-md flex gap-1 items-center justify-center cursor-pointer  text-white font-bold p-2' >
                    {
                        loading ? (
                            <>
                                Processing....
                            </>
                        ):(<>
                            Register <FaUserPlus/>
                        </>)
                    }
                </button>
            </div>
            <div className='mt-5 text-center text-gray-400 text-sm'>
                <button onClick={()=>setIsLogin(!isLogin )}>Already have an account? Sign In</button>
            </div>
        </div> 
    </section>
  )
}

export default Register