import { HomeIcon, TwitterX } from '@/assets/icons'
import { faBell, faBookmark, faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faEllipsis, faHouse, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ProfileCardProps = {
  image: String,
  username: String,
  name: String
}
type Icon = {
  svg:JSX.Element,
  label:String
}
const ICONS:Icon[] = [
  {
    svg: <FontAwesomeIcon className='w-6 h-6' icon={faHouse} />,
    label: "Home"
  },
  {
    svg: <FontAwesomeIcon className='w-6 h-6' icon={faMagnifyingGlass} />,
    label: "Explore"
  },
  {
    svg: <FontAwesomeIcon className='w-6 h-6' icon={faBell} />,
    label: "Notification"
  },
  {
    svg: <FontAwesomeIcon className='w-6 h-6' icon={faEnvelope} />,
    label: "Explore"
  },
  {
    svg: <FontAwesomeIcon className='w-6 h-6' icon={faBookmark} />,
    label: "Bookmarks"
  },
  {
    svg: <FontAwesomeIcon className='w-6 h-6' icon={faUsers} />,
    label: "Communities"
  },
  {
    svg: <FontAwesomeIcon className='w-6 h-6' icon={faUser} />,
    label: "Profile"
  },
  {
    svg: <FontAwesomeIcon className='w-6 h-6' icon={faEllipsis} />,
    label: "More"
  },
]
const ProfileData = {
  image:"https://i.pinimg.com/564x/e8/a8/da/e8a8da0cacc834b88db50c9390d5b2d3.jpg",
  username:"@lakshaykamat",
  name:"Dreadful Dev"
}


const ProfileCard = ({ image, username, name }: ProfileCardProps) => {
  return (
    <div className='flex items-center justify-between hover:bg-gray-100 p-3 rounded-full '>
      <div className='flex gap-3'>

      <img className='w-12 rounded-full h-12' src={image.toString()} alt="" />
      <div className=' flex-col hidden xl:flex'>
        <h1 className='font-bold'>{name}</h1>
        <span className='text-gray-500 text-sm'>{username}</span>
      </div>
      </div>
      <FontAwesomeIcon className='w-4 h-4' icon={faEllipsis}/>
    </div>
  )
}

const LeftSidebar = () => {
  return (
    <section className='bg-white xl:pl-10 border py-3 px-3 flex-col justify-between border-r h-screen hidden sm:flex w-[6rem] xl:w-[25%] overflow-y-auto scroll-m-2'>
      <div className='flex flex-col xl:px-7 xl:items-start items-center'>
        <div className='my-3 px-3'>
          <TwitterX width={"w-8"} height={"h-8"} />
        </div>
        <div className='flex gap-1 items-start flex-col'>
          {
            ICONS.map((icon,i) => {
              return <div key={i} className='flex justify-start items-start gap-3 py-3 rounded-full px-5 hover:bg-slate-100'>
                {icon.svg}
                <span className='xl:block hidden'>{icon.label}</span>
              </div>
            })
          }
        </div>
        <button className=' bg-blue-400  px-3 py-3 rounded-3xl text-white font-semibold mx-2 drop-shadow-xl my-2 hidden xl:visible'>Post</button>
        <button className=' bg-blue-400 m-2 px-3 py-3 rounded-full text-white font-semibold drop-shadow-xl visible xl:hidden'><FontAwesomeIcon className='w-6 h-6' icon={faBell} /></button>


      </div>
      <ProfileCard image={ProfileData.image} username={ProfileData.username} name={ProfileCard.name} />
    </section>
  )
}

export default LeftSidebar