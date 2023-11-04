import React from 'react'
import RightSidebar from './components/RightSidebar'
import { TwitterX } from '@/assets/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons'
const HomePage = () => {
  return (
    <main className='flex '>
      <section className='bg-white pl-12 border border-r h-screen w-[25%]'>
        <div>
          <div className='my-3 px-3'>
            <TwitterX />
          </div>
          <div className='flex gap-5 items-start flex-col'>

            <div className='flex items-center gap-3 py-3 rounded-full px-5 hover:bg-slate-100'>
              <FontAwesomeIcon className='w-7 h-7' icon={faHouse} />
              <span>Home</span>
            </div>
            <div className='flex items-center gap-3 py-3 rounded-full px-5 hover:bg-slate-100'>
              <FontAwesomeIcon className='w-7 h-7' icon={faMagnifyingGlass} />
              <span>Explore</span>
            </div>
            <div className='flex items-center gap-3 py-3 rounded-full px-5 hover:bg-slate-100'>
              <FontAwesomeIcon className='w-7 h-7' icon={faBell} />
              <span>Notification</span>
            </div>
            <div className='flex items-center gap-3 py-3 rounded-full px-5 hover:bg-slate-100'>
              <FontAwesomeIcon className='w-7 h-7' icon={faEnvelope} />
              <span>Messages</span>
            </div>

          </div>

        </div>

      </section>
      <section className='bg-white border flex-grow border-r h-screen w-[25%]'>

      </section>
      <RightSidebar />
    </main>
  )
}
export default HomePage