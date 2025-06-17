import React, { useState, useEffect, useMemo } from 'react'
import avatar from "../../public/assets/default.jpg"
import { RiMore2Fill } from 'react-icons/ri'
import SearchModal from './SearchModal'
import formatTimestamp from '../utils/formatTimestamp'
import chatData from '../data/chats'
import { listenForChats } from '../firebase/firebase'
function ChatList() {
  const [chats, setChats] = useState([]);
  console.log(chatData)

  useEffect(()=>{
    const unsubscribe = listenForChats(setChats)
  }, [])

  //useMemo is the hook used to remember the previous data

  const sortedChats = useMemo(()=>{
    return [...chats].sort((a,b)=>{
      const aTimestamp = a.lastMessageTimestamp.seconds + a.lastMessageTimestamp.nanoseconds / 1e9
      const bTimestamp = b.lastMessageTimestamp.seconds + b.lastMessageTimestamp.nanoseconds / 1e9

      return bTimestamp - aTimestamp
    })
  })

  return (
    <section className='relative hidden lg:flex flex-col items-start bg-white h-[100vh] w-[100%] md:w-[600px]'>
      <header className='flex items-center justify-between py-4 px-4 w-[100%] sticky md:static top-0 z-[100] lg:border-b  border-[#a8a8a8b9]' >
        <main className='flex gap-3 items-center'>
          <img className='rounded-full object-cover size-[44px]' src={avatar} alt="" />
          <span className=''>
            <h3 className='p-0 font-semibold text-[#2A3D39] md:text-[17px]'>{"Chatfrik User"}</h3>
            <p className='p-0 font-light text-[#2A3D39] text-[15px]'>{"@chatfrik"}</p>
          </span>
        </main>
        <button className='bg-[#D9F2ED] p-2 rounded-lg'>
          <RiMore2Fill color="#01AA85" className='w-[28px] h-[28px]'/>
        </button>
      </header>
      <div className='w-[100%] mt-[10px] px-5'>
        <header className='flex items-center justify-between'>
          <h3 className='text-[16px]'>Messages ({chats?.length || 0})</h3>
          <SearchModal/>
        </header>
      </div>

      <main className='w-[100%] flex flex-col items-start mt-[1.5rem] pb-3 pt-3'>
        
        {sortedChats?.map((chat)=>(
          <button key={chat?.uid} className='flex items-start justify-between w-[100%] border-b border-[#9090902c] px-5 pb-3 pt-3'>
          {
            chat?.users?.filter((user)=> user?.email !== "baxo@mailinator.com").map((user)=>(
              <>
                <div  className='flex items-start gap-3'>
                  <img src={user?.image} className='rounded-full object-cover size-[40px]' alt="" />
                  <span >
                    <h2 className='p-0 font-semibold  text-[#2A3d39] text-left text-[17px]'>{user?.fullName}</h2>
                    <p className='p-0 font-light text-[#2A3d39] text-left text-[12px]'>{chat?.lastMessage}</p>
                  </span>
                </div>
                <p className='p-0 font-regulat text-gray-400 text-left text-[12px]'>{formatTimestamp(chat?.lastMessageTimestamp)}</p>
              </>
            ))
          }
        </button>
        ))}
        
      </main>
    </section>
  )
}

export default ChatList