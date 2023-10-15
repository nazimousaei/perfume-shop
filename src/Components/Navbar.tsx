//icons
import { BiHomeSmile } from 'react-icons/bi'
import { TbPerfume } from 'react-icons/tb'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { BiSolidBookmarkHeart } from 'react-icons/bi'
// import { BsFillBalloonHeartFill } from 'react-icons/bs'
import { MdOutlineContactPhone } from 'react-icons/md'
import { PiChalkboardTeacherBold } from 'react-icons/pi'
import { PiArticleBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState, useEffect, useRef } from 'react'
//components
import Basket from './Basket'
import Favorite from './Favorite'
import Sidebar from './Sidebar'
//redux-toolkit & react-redux
import { useSelector } from "react-redux"
import { RootState } from "../Redux/Store"
//typscript types
import { basketItem } from '../TypeScriptTypes/BasketTypes'
import { favoriteItem } from '../TypeScriptTypes/FavoritesTypes'

export default function Navbar() {

  const [openSidebar, setOpenSidebar] = useState<boolean>(false)
  const [openBasket, setOpenBasket] = useState<boolean>(false)
  const [openFavorite, setOpenFavorite] = useState<boolean>(false)
  const [mainUserCookie, setMainUserCookie] = useState<string>('')


  const favoritesData = useSelector<RootState, favoriteItem[]>((state) => state.favoriteList)
  const basketData = useSelector<RootState, basketItem[]>((state) => state.basket)

  const ref = useRef<any>(null)
  const refTwo = useRef<any>(null)
  const refThree = useRef<any>(null)


  function getUserFromCookie() {
    let getUserCookie = document.cookie.split(';')
    getUserCookie.some(cookie => {
      if (cookie.includes('username')) {
        setMainUserCookie(cookie.substring(cookie.indexOf('=') + 1))
      }
    })
  }

 

  useEffect(() => {

    getUserFromCookie()

    const closeSidebarHandle = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenSidebar(false);
      }

    };

    document.addEventListener('mousedown', closeSidebarHandle)

    const closeBasketHandle = (event: MouseEvent): void => {
      if (refTwo.current && !refTwo.current.contains(event.target)) {
        setOpenBasket(false);
      }

    };

    document.addEventListener('mousedown', closeBasketHandle)

    const closeFavoriteHandle = (event: MouseEvent): void => {
      if (refThree.current && !refThree.current.contains(event.target)) {
        setOpenFavorite(false);
      }

    };

    document.addEventListener('mousedown', closeFavoriteHandle)



    return () => {

      document.removeEventListener('mousedown', closeSidebarHandle)
      document.removeEventListener('mousedown', closeBasketHandle)
      document.removeEventListener('mousedown', closeFavoriteHandle)
    }
  }, [ref, refTwo, refThree,getUserFromCookie,logoutHandler])



 function logoutHandler () {
  const now = new Date()
  now.setTime(now.getTime()-20*24*60*60*1000)
  document.cookie =`username=;path=/;expire${now}`
  setMainUserCookie('')

 }

  return (
    <div className='flex justify-between items-center p-4 px-4 sm:px-10'>
      <div>
        <div ref={ref}>
          <GiHamburgerMenu className='text-4xl sm:text-5xl text-black lg:hidden cursor-pointer' onClick={() => setOpenSidebar(prev => !prev)} />
          {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} />}
        </div>

        <ul className='hidden lg:flex gap-x-10 text-sm justify-center items-center font-semibold' >
          <Link to={'/'} className='flex flex-col items-center justify-center gap-y-1.5'>
            <BiHomeSmile className='text-pink-600 text-4xl' />
            <li>خانه</li>
          </Link>
          <Link to={'/products'} className='flex flex-col items-center justify-center gap-y-1.5'>
            <TbPerfume className='text-pink-600 text-4xl' />
            <li>محصولات</li>
          </Link>
          <Link to={'/'} className='flex flex-col items-center justify-center gap-y-1.5'>
            <PiArticleBold className='text-pink-600 text-4xl' />
            <li>مقالات</li>
          </Link>
          <Link to={'/'} className='flex flex-col items-center justify-center gap-y-1.5'>
            <PiChalkboardTeacherBold className='text-pink-600 text-4xl' />
            <li>درباره ما</li>
          </Link>
          <Link to={'/'} className='flex flex-col items-center justify-center gap-y-1.5'>
            <MdOutlineContactPhone className='text-pink-600 text-4xl' />
            <li>تماس با ما</li>
          </Link>
        </ul>
      </div>
      <div className='flex items-center sm:gap-x-2'>
        <div ref={refTwo} className='relative cursor-pointer bg-black text-white p-1.5 sm:p-2 rounded-md'>
          <BsFillBasket2Fill onClick={() => setOpenBasket(prev => !prev)} className='text-lg sm:text-[1.6rem]' />
          <span className='flex items-center justify-center w-5 h-5 text-[.6rem] sm:text-base absolute -top-4 sm:-top-3 left-5 sm:left-8 rounded-full text-white bg-pink-600'>{basketData?.length}</span>
          {openBasket && <Basket setOpenBasket={setOpenBasket} />}
        </div>
        <div ref={refThree} className='relative cursor-pointer ml-[3rem] sm:ml-20'>
          <BiSolidBookmarkHeart onClick={() => setOpenFavorite(prev => !prev)} className='text-black text-4xl sm:text-[3.2rem]' />
          <span className='flex items-center justify-center w-5 h-5 text-[.6rem] sm:text-base absolute left-5 sm:right-0 -top-3 sm:-top-2 rounded-full text-white bg-pink-600'>{favoritesData?.length}</span>
          {openFavorite && <Favorite setOpenFavorite={setOpenFavorite} />}
        </div>
        {mainUserCookie.length === 0 ?
          <div className='flex relative font-medium -right-[3rem] sm:-right-16'>
            < Link to={'/signin'}>
              <button className='w-[4.5rem] sm:w-32 text-sm sm:text-base  py-1.5 sm:py-2 px-4 sm:px-7 text-start text-white bg-pink-600 shadow-md shadow-zinc-500/20 rounded-3xl'>ورود</button>
            </Link>
            <Link to={'/register'}>
              <button className=' w-[4.5rem] sm:w-32 absolute z-10 right-[3rem] sm:right-[4.5rem] text-sm sm:text-base py-1.5 sm:py-2 rounded-3xl bg-neutral-50 text-black shadow-md shadow-zinc-500/20 '>ثبت نام</button>
            </Link>
          </div> :
          <div className='flex relative font-medium -right-[3rem] sm:-right-16'>
            <button onClick={logoutHandler} className='w-[4.5rem] sm:w-32 text-sm sm:text-base  py-1.5 sm:py-2 px-4 sm:px-7 text-start text-white bg-pink-600 shadow-md shadow-zinc-500/20 rounded-3xl'>خروج</button>
       
            <button className=' w-[4.5rem] sm:w-32 absolute z-10 right-[3rem] sm:right-[4.5rem] text-sm sm:text-base py-1.5 sm:py-2 rounded-3xl bg-neutral-50 text-black shadow-md shadow-zinc-500/20 '>پروفایل</button>
         
        </div>
}
    </div>
    </div >
  )
}
