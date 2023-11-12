import RightSidebar from './components/RightSidebar'
import LeftSidebar from './components/LeftSidebar'

const HomePage = () => {
  return (
    <main className='flex '>
      <LeftSidebar />
      <section className='bg-white border flex-grow border-r h-screen'>
        <div className='flex justify-around items-center  border-b'>
          <div className='hover:bg-gray-200 flex justify-center w-full'>
            <button className='hover:bg-gray-200 py-3 border-b-2 border-b-blue-500'>For You</button>
          </div>
          <div className='hover:bg-gray-200 flex w-full justify-center'>
            <button className='hover:bg-gray-200 py-3 border-b-2 border-b-blue-500'>Following</button>
          </div>
        </div>
        <PostCard />
      </section>
      <RightSidebar />
    </main>
  )
}

const PostCard = () => {
  return (
    <div className='flex border border-b-2 p-4'>
      <div className=''>
        <img src="https://i.pinimg.com/564x/e8/a8/da/e8a8da0cacc834b88db50c9390d5b2d3.jpg" className='w-11 h-11 rounded-full' alt="" />
      </div>
      <div className='flex pt-2 px-2 flex-col gap-6 flex-grow'>
        <h1 className='text-xl text-gray-500'>What is happening?!</h1>
        <div className='w-full flex justify-between'>
          <div className='flex gap-2'>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill='#3B82F6'
              className="w-9 h-9 text-blue-500 hover:bg-blue-100 transition-colors rounded-full p-2"
            >
              <g>
                <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" />
              </g>
            </svg>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill='#3B82F6'
              className="w-9 h-9 text-blue-500 hover:bg-blue-100 transition-colors rounded-full p-2"
            >
              <g>
                <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z" />
              </g>
            </svg>
          </div>
          <button className="bg-blue-300 rounded-3xl text-sm text-white px-4 font-bold py-1">Post</button>
        </div>
      </div>
    </div>
  )
}
export default HomePage