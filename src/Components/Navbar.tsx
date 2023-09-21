import { BiHomeSmile } from 'react-icons/bi'
import { TbPerfume } from 'react-icons/tb'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { BiSolidBookmarkHeart } from 'react-icons/bi'
// import { BsFillBalloonHeartFill } from 'react-icons/bs'
import { MdOutlineContactPhone } from 'react-icons/md'
import { PiChalkboardTeacherBold } from 'react-icons/pi'
import { PiArticleBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center p-4 px-4 sm:px-10'>
      <div>
        <GiHamburgerMenu className='text-4xl sm:text-5xl text-pink-500 lg:hidden'/>
        <ul className='hidden lg:flex gap-x-10 text-sm justify-center items-center font-semibold'>
          <Link to={'/'} className='flex flex-col items-center justify-center gap-y-1.5'>
            <BiHomeSmile className='text-pink-500 text-4xl' />
            <li>خانه</li>
          </Link>
          <Link to={'/'} className='flex flex-col items-center justify-center gap-y-1.5'>
            <TbPerfume className='text-pink-500 text-4xl' />
            <li>محصولات</li>
          </Link>
          <Link to={'/'} className='flex flex-col items-center justify-center gap-y-1.5'>
            <PiArticleBold className='text-pink-500 text-4xl' />
            <li>مقالات</li>
          </Link>
          <Link to={'/'} className='flex flex-col items-center justify-center gap-y-1.5'>
            <PiChalkboardTeacherBold className='text-pink-500 text-4xl' />
            <li>درباره ما</li>
          </Link>
          <Link to={'/'} className='flex flex-col items-center justify-center gap-y-1.5'>
            <MdOutlineContactPhone className='text-pink-500 text-4xl' />
            <li>تماس با ما</li>
          </Link>
        </ul>
      </div>
      <div className='flex items-center  sm:gap-x-2'>
        <div className='relative ml-3 bg-black text-white p-1.5 sm:p-2 rounded-md'>
          <BsFillBasket2Fill className='text-lg sm:text-[1.6rem]' />
          <span className='flex items-center justify-center w-5 h-5 absolute -top-4 sm:-top-3 left-5 sm:left-8 rounded-full text-white bg-pink-500'>0</span>

        </div>
        <div className='relative ml-[3.5rem] sm:ml-20'>
          <BiSolidBookmarkHeart className='text-black text-4xl sm:text-[3.2rem]' />
          <span className='flex items-center justify-center w-5 h-5 absolute left-5 sm:right-0 -top-3 sm:-top-2 rounded-full text-white bg-pink-500'>2</span>
        </div>
        <div className='flex relative font-medium'>
          <button className='w-[4.5rem] sm:w-32 text-sm sm:text-base absolute left-[3rem] sm:left-[4.5rem] -z-10 py-1.5 sm:py-2 px-4 sm:px-7  text-start text-white bg-pink-500 shadow-md shadow-zinc-500/20 rounded-3xl'>ورود</button>
          <button className='w-[4.5rem] sm:w-32 text-sm sm:text-base py-1.5 sm:py-2  rounded-3xl bg-neutral-50 text-black shadow-md shadow-zinc-500/20 '>ثبت نام</button>
        </div>
      </div>
    </div>
  )
}
