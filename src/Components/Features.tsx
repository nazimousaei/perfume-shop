import {TbTruckDelivery} from 'react-icons/tb'
import {MdOutlineCreditScore} from 'react-icons/md'
import {BiSupport} from 'react-icons/bi'
import {HiOutlineReceiptRefund} from 'react-icons/hi'

export default function Features() {
  return (
    <div className="w-full h-[500px] md:h-[350px] bg-[url('/img/pic-12.jpg')] bg-no-repeat bg-cover mt-28 bg-fixed bg-top">
     <div className='w-full h-full flex flex-wrap gap-5 justify-evenly items-center '>
            <div className='flex flex-col justify-center items-center bg-white w-2/3 sm:w-1/3 lg:w-[18%] h-18 lg:h-22 shadow-lg shadow-pink-700/50 rounded-md border-2 border-pink-600 p-2.5'>
                   <TbTruckDelivery className='text-[2.5rem] sm:text-[3rem]'/>
                   <p className='text-pink-600 text-sm sm:text-[1.1rem] text-center'>ارسال سریع و رایگان</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-white w-2/3 sm:w-1/3 lg:w-[18%] h-18 lg:h-22 shadow-lg shadow-pink-700/50  rounded-md border-2 border-pink-600 p-2.5'>
                   <MdOutlineCreditScore className='text-[2.5rem] sm:text-[3rem]'/>
                   <p className='text-pink-600 text-sm sm:text-[1.1rem] text-center'>امکان پرداخت در محل</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-white w-2/3 sm:w-1/3 lg:w-[18%] h-18 lg:h-22 shadow-lg shadow-pink-700/50  rounded-md border-2 border-pink-600 p-2.5'>
                   <HiOutlineReceiptRefund className='text-[2.5rem] sm:text-[3rem]'/>
                   <p className='text-pink-600 text-sm sm:text-[1.1rem] text-center'>ضمانت بازگشت کالا</p>
            </div>
            <div className='flex flex-col justify-center items-center bg-white w-2/3 sm:w-1/3 lg:w-[18%] h-18 lg:h-22 shadow-lg shadow-pink-700/50  rounded-md border-2 border-pink-600 p-2.5'>
                   <BiSupport className='text-[2.5rem] sm:text-[3rem]'/>
                   <p className='text-pink-600 text-sm sm:text-[1.1rem] text-center'>۷ روز هفته , ۲۴ ساعته</p>
            </div>
     </div>

    </div>
  )
}
