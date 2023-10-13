import { FaTrashCan } from 'react-icons/fa6'
import { basketItem } from '../TypeScriptTypes/BasketTypes'

export default function BasketItem(Props:basketItem) {
  return (
    <div className="h-[12rem] p-2.5 bg-zinc-50 relative flex gap-x-2 items-center justify-between rounded-lg shadow-lg shadow-black/10">
      <FaTrashCan className='absolute top-2 right-2 cursor-pointer text-xl xsm:text-2xl text-pink-600' />
      <div className="flex flex-col xsm:flex-row mt-5 xsm:mt-0">
        <button className="bg-black text-white w-7 h-5 xsm:w-10 xsm:h-7 flex justify-center items-center text-lg xsm:text-xl rounded-t-md xsm:rounded-s-md">+</button>
        <div className="bg-white text-black w-7 h-5 xsm:w-10 xsm:h-7 text-base flex justify-center items-center">{Props?.count}</div>
        <button className="bg-black text-white w-7 h-5 xsm:w-10 xsm:h-7 flex justify-center items-center text-3xl rounded-b-md xsm:rounded-e-md">-</button>
      </div>
      <div className='text-black flex justify-end items-center gap-x-1 xsm:gap-x-5 h-full '>
        <div className="text-center pt-5 font-Dinar">
          <p className="text-sm xsm:text-lg text-center">{Props?.name}</p>
          <p className="text-pink-600 text-sm xsm:text-xl text-center">{Props?.price?.toLocaleString()} تومان </p>
        </div>
        <img src={Props?.src} className="w-[45%] xsm:w-1/3 h-[70%] xsm:h-[85%] sxm:h-full" alt="perfume" />
      </div>
    </div>
  )
}
