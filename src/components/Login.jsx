import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login({isLogin, setIsLogin}) {
  const [userData, setUserData] = useState({
          email: '',
          password: ''
      })
    const [loading, setLoading] = useState(false)
    function handleUserData(e){
      const {name, value} = e.target

      setUserData((prevState)=>({
        ...prevState, 
        [name]: value,
      }))
    }

    async function handleAuth(){
        setLoading(true)
        try{
            await signInWithEmailAndPassword(auth, userData?.email, userData?.password)
            
        }catch(e){
            console.log(e)
        } finally{
          setLoading(false)
        }
    }
    console.log(userData)
  return (
    <section className='flex flex-col items-center justify-center h-[100vh] background-image'>
        <div className='bg-white shadow-lg p-5 rounded-xl h-[27rem] w-[20rem] flex flex-col justify-center items-center'>
            <div className='mb-10'>
                <h1 className='text-center text-[28px] font-bold'>Sign In</h1>
                <p className='text-center text-sm text-gray-400'>Welcome back, login to continue</p>
            </div>
            <div className='w-full`'>
                <input name='email' type="email" onChange={handleUserData} className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] tex-[#004939f3 mb-3 font-medium outline-none" placeholder='Email' />
                <input name='password' onChange={handleUserData} type="password" className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] tex-[#004939f3 mb-3 font-medium outline-none" placeholder='Password'/>
            </div>
            <div onClick={handleAuth}  className='w-full'>
                <button disabled={loading} className='  w-full bg-[#01aa85] rounded-md flex gap-1 items-center justify-center cursor-pointer  text-white font-bold p-2' >
                  {
                    loading ? (
                     <>
                       Processing...
                     </>
                    ) : (
                      <>
                        Login <FaSignInAlt/>
                      </>
                    )
                  } </button>
                  
                
            </div>
            <div className='mt-5 text-center text-gray-400 text-sm'>
                <button onClick={()=>setIsLogin(!isLogin )}>Don't have an account yet? Sign Up</button>
            </div>
        </div> 
    </section>
  )
}

export default Login