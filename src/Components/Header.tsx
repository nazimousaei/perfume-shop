import { BiSearchAlt } from 'react-icons/bi'
import Navbar from './Navbar'

export default function Header() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-[500px] md:h-[450px]  md:bg-[length:70%_100%] md:skew-x-[16deg]  md:translate-x-[5rem] md:rounded-bl-[100px] lg:rounded-bl-[200px] header'>
        <div className='flex flex-col items-center justify-center md:justify-start gap-y-1rem md:pl-12 lg:pl-16 xl:pl-24 w-[100%] md:w-[30%] h-full bg-fuchsia-100'>
          <img src='/img/logo.png' className='max-w-xs lg:max-w-sm md:skew-x-[-16deg] -mt-20 md:-mt-5' alt='logo' />
          <h1 className=' text-[2.2rem] md:text-[2rem] text-black title-shadow font-Dinar font-bold tracking-wider text-center md:pr-16 lg:pr-14 xl:pr-20  skew-x-[-16deg] lg:-translate-y-7'>
            عطر پارسیس
          </h1>
          <div className='flex rounded-e-2xl w-4/5 items-center mt-20 lg:mt-7 md:mr-16 xl:mr-32 md:skew-x-[-16deg] shadow-lg shadow-black-20'>
            <BiSearchAlt className='text-white bg-black h-[2.2rem] w-14 py-1 rounded-s-2xl ' />
            <input type='text ' placeholder='search ...'
              className='w-[89%] px-2 xl:px-4 py-1.5 rounded-e-2xl placeholder-pink-500' />
          </div>

        </div>

      </div>
    </div>
  )
}
