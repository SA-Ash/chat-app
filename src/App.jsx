import React from 'react'
import NavLink from './components/NavLinks'
import Login from './components/Login'
import Register from './components/Register'
import ChatList from './components/ChatList'
import ChatBox from './components/ChatBox'
import SearchModal from './components/SearchModal'
function App() {
  return (
    <div className='flex lg:flex-row flex-col items-start w-[100%]'>
      <NavLink/>
      <ChatList/>
      <ChatBox/>
    </div>
  )
}

export default App