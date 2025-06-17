import React, { useEffect, useState } from 'react'
import NavLink from './components/NavLinks'
import Login from './components/Login'
import Register from './components/Register'
import ChatList from './components/ChatList'
import ChatBox from './components/ChatBox'
import SearchModal from './components/SearchModal'
import {auth} from "./firebase/firebase.js"
function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  
  useEffect(()=>{
    const CurrentUser = auth.currentUser;
    if(CurrentUser){
      setUser(CurrentUser)
    }

    const unsubscribe = auth.onAuthStateChanged((user)=>{
      setUser(user)
    })
    return ()=> unsubscribe();
  }, [])
  return (
    <div>
      {user?(
        <div className='flex lg:flex-row flex-col items-start w-[100%]'>
          <NavLink/>
          <ChatList/>
          <ChatBox/>
        </div>
      ): 
      <div>
       {isLogin? <Login isLogin={isLogin} setIsLogin={setIsLogin}/>: <Register isLogin={isLogin} setIsLogin={setIsLogin}/>}
      </div>
    }
    </div>
  )
}

export default App