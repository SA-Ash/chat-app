import React from 'react'
import logo from "../../public/assets/logo.png"
import { RiArrowDownSFill, RiBardLine, RiChatAiLine, RiFile4Line, RiFolderUserLine, RiNotificationLine, RiShutDownLine } from 'react-icons/ri'
function NavLink() {
  return (
    <section className='sticky lg:static top-0 flex items-center lg:items-start lg:justify-start lg:h-[100vh] w-[100%] h-[7vh] lg:w-[150px] py-8 lg:py-0 bg-[#01AA85]'>
      <main className='flex lg:flex-col items-center lg:gap-10 justify-between lg:px-0 w-[100%]'>
        <div className='flex items-start justify-center lg:border-b  border-[#ffffffb9] lg:w-[100%] p-6'>
            <span className='flex items-center justify-center bg-white w-[57px] h-[48px] rounded-lg p-2'><img  className="w-[56px] h-[52px] object-contain " src={logo} alt="" /></span>
        </div>
        <ul className='flex lg:flex-col flex-row items-center gap-7 md:gap-12 px-2 md:px-0'>
          <li className=''>
            <button className='cursor-pointer lg:text-[28px] text-[22px]'>
              <RiChatAiLine color='#fff'/>
            </button>
          </li>
          <li className=''>
            <button className='cursor-pointer lg:text-[28px] text-[22px]'>
              <RiFolderUserLine color='#fff'/>
            </button>
          </li>
          <li className=''>
            <button className='cursor-pointer lg:text-[28px] text-[22px]'>
              <RiNotificationLine color='#fff'/>
            </button>
          </li>
          <li className=''>
            <button className='cursor-pointer lg:text-[28px] text-[22px]'>
              <RiFile4Line color='#fff'/>
            </button>
          </li>
          <li className=''>
            <button className='cursor-pointer lg:text-[28px] text-[22px]'>
              <RiBardLine color='#fff'/>
            </button>
          </li>
          <li className=''>
            <button className='cursor-pointer lg:text-[28px] text-[22px]'>
              <RiShutDownLine color='#fff'/>
            </button>
          </li>
        </ul>
        <button className='cursor-pointer block lg:hidden  lg:text-[28px] text-[22px]'>
              <RiArrowDownSFill color='#fff'/>
            </button>
      </main>
    </section>
  )
}

export default NavLink