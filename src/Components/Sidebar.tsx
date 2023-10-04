import Modal from "./Modal"
import { Link } from "react-router-dom"
import { BiSearchAlt } from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import {FaSignInAlt} from 'react-icons/fa'


type openHandleType = {
    setOpenSidebar:(value:boolean) => void
}

export default function Sidebar({setOpenSidebar}:openHandleType) {
    return (

        <div className="w-[85%] sm:w-1/2 md:w-1/3 h-full fixed right-0 top-0 z-50 bg-white cursor-pointer">
            <Modal />
            <span className="absolute top-3 left-8 bg-pink-600 text-white text-3xl rounded-md" onClick={() => setOpenSidebar(false)}><IoMdClose/></span>
            <div className="flex flex-col justify-center items-center text-white  font-Dinar h-auto p-2 ">
                <img src="/img/logo.png" className="shadow-img " alt='logo' />
                <div className='w-[95%] mt-2 h-14 flex rounded-2xl items-center shadow-lg shadow-black-20'>
            <BiSearchAlt className='text-white bg-black h-full w-16 py-1 rounded-s-2xl ' />
            <input type='text ' placeholder='جست و جو ...'
              className='w-[89%] bg-pink-50 px-2 xl:px-4 h-full rounded-e-2xl placeholder-black outline-0 text-black' />
          </div>
            </div>
            
            <ul className="mt-14 text-pink-600 flex flex-col font-semibold text-sm xsm:text-base text-Dinar">
                <Link to={'/'} className="bg-black text-white">
                    <li className="px-5 py-5 border-b-[.2px] border-pink-500">خانه</li>
                </Link>
                <Link to={'/'} className="bg-pink-50">
                    <li className="px-5 py-5 border-b-[.2px] border-pink-500">محصولات</li>
                </Link>
                <Link to={'/'} className="bg-pink-50">
                    <li className="px-5 py-5 border-b-[.2px] border-pink-500">مقالات</li>
                </Link>
                <Link to={'/'} className="bg-pink-50">
                    <li className="px-5 py-5 border-b-[.2px] border-pink-500">درباره ما</li>
                </Link>
                <Link to={'/'} className="bg-pink-50">
                    <li className="px-5 py-5 border-b-[.2px] border-pink-500">تماس با ما</li>
                </Link>
            </ul>
                <Link to={'signin'} className="flex justify-center items-center mt-8 gap-x-2 text-2xl text-pink-600 font-Dinar">
                    <FaSignInAlt className=''/> 
                  <span>ورود</span>
                </Link>
        </div>


    )
}
