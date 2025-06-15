import React from 'react'
import avatar from "../../public/assets/default.jpg"

function ChatBox() {
  return (
    <section className='flex  flex-col items-start justify-start h-screen w-[100%] background-image'>
      <header className='border-b border-gray-400 w-[100%] h-[70px] m:h-fit p-4 bg-white'>
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

      <main className='relative h-[100vh] w-[100%] flex flex-col justify-between'>
        <section className='px-3 pt-5 b-20 lg:pb-10'>
          <div className='overflow-auto h-[80vh]'>
            <div className='flex flex-col items-end '>
              <span className='flex gap-3'>
                <div className='h-auto'>
                  <div className='flex items-center bg-white justify-center rounded-lg shadow-sm p-6'>
                    <h4 className='font-medium text-[17px] text-gray-800 w-full break-words'>Hey Buddy</h4>
                  </div>
                  <p className='text-gray-400 text-xs text-right'>7g</p>
                </div>
              </span>
              <span className='flex gap-3 w-[40%] h-auto ms-10'>
                <img src={avatar} alt="" className='h-11 w-11 object-cover rounded-full' />
                <div>
                  <div>
                    <h4>Chatfrik User</h4>
                  </div>
                  <p>11th Feb, 2025</p>
                </div>
              </span>
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}

export default ChatBox