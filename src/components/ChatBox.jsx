import React, { useEffect, useMemo, useRef, useState } from 'react'
import avatar from "../../public/assets/default.jpg"
import { RiSendPlaneFill } from 'react-icons/ri'
import {messageData} from "../data/messageData.js"
import formatTimestamp from "../utils/formatTimestamp.js"
function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [messageText, sendMessageText] = useState("")
  const senderEmail = "baxo@mailinator.com";
  const scrollRef = useRef(null)
  const cursorRef = useRef(null)
  useEffect(()=>{
    cursorRef.current?.focus()
  })
  useEffect(() => {
        setMessages(messageData);
    }, []);
  useEffect(()=>{
      if (scrollRef?.current){
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
      }
  }, [messages])

  function handleSendMessage(e){
    e.preventDefault()
    const newMessage = {
      sender: senderEmail,
      text: messageText,
      timestamp:{
        seconds: Math.floor(Date.now()/ 1000),
        nanoseconds: 0
      }
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage
    ])
    sendMessageText("")
  }
    const sortedMessages = useMemo(()=>{
        return [...messages].sort((a,b)=>{
          const aTimestamp = a.timestamp.seconds + a.timestamp.nanoseconds / 1e9
          const bTimestamp = b.timestamp.seconds + b.timestamp.nanoseconds / 1e9
    
          return aTimestamp - bTimestamp
        })
      }, [messages])
  return (
    <section className= 'flex flex-col items-start justify-start h-screen w-[100%] background-image'>
      <header className='border-b border-gray-400 w-[100%] h-[85px] m:h-fit p-4 bg-white'>
        <main className='flex items-center gap-3 '>
          <span>
            <img className='w-11 h-11 object-cover size-[44px] rounded-full' src={avatar} alt="" />
          </span>
          <span>
            <h3 className='font-semibold text-[#2A3D39]text-lg'>Chatfrik User</h3>
            <p className='font-light text-[#2A3D39] text-sm'>@chatfri</p>
          </span>
        </main>
      </header>

      <main className='custom-scrollbar relative h-[100vh] w-[100%] flex flex-col justify-between'>
        <section className='px-3 pt-5 b-20 lg:pb-10'>
          <div ref={scrollRef} className='overflow-auto h-[80vh]'>
            {sortedMessages?.map((msg, index)=>(
              <>
              {msg?.sender === senderEmail? <div className='flex flex-col items-end w-full'>
              <span className='flex gap-3 me-10 h-auto ms-10'>
                <img src={avatar} alt="" className='h-11 w-11 object-cover rounded-full' />
                <div>
                  <div className='flex items-center justify-center bg-white p-6 rounded-md'>
                    <h4 className='font-medium text-[17px] text-gray-800 w-full'>{msg.text}</h4>
                  </div>
                  <p className='text-gray-400 text-xs mt-3'>{formatTimestamp(msg.timestamp, false)}</p>
                </div>
              </span>
            </div> : (<div className='flex flex-col items-start w-full'>
              <span className='flex gap-3 w-[40%] h-auto ms-10'>
                <img src={avatar} alt="" className='h-11 w-11 object-cover rounded-full' />
                <div>
                  <div className='flex items-center justify-center bg-white p-6 rounded-md'>
                    <h4 className='font-medium text-[17px] text-gray-800 w-full'>{msg?.text}</h4>
                  </div>
                  <p className='text-gray-400 text-xs mt-3'>{formatTimestamp(msg.timestamp, false)}</p>
                </div>
              </span>
            </div>)}
                
            
              </>
            ))}
            
          </div>
        </section>
        <div className=' active sticky lg:bottom-0 bottom-[60px] p-3 h-fit w-[100%]'>
          <form onSubmit={handleSendMessage} action="" className='flex items-center bg-white h-[45px] w-[100%] px-2 rounded-lg relative shadow-lg'>
            <input ref={cursorRef} value={messageText} onChange={(e) => sendMessageText(e.target.value)} className='h-full text-[#2A3D39] outline-none text-[15px] pl-3 pr-[50px] rounded-lg w-[100%] ' type="text" placeholder='Write your message' />
            <button className='flex items-cetner justify-center absolute right-3 bg-[#D9F2ED] p-2 rounded-full hover:bg-[#c8eae3] cursor-pointer'>
              <RiSendPlaneFill color='#01AA85'/>
            </button>
          </form>
        </div>
      </main>
    </section>
  )
}

export default ChatBox