import { FaTrashCan } from 'react-icons/fa6'

export default function BasketItem() {
  return (
    <div className="h-[12rem] p-2.5 bg-zinc-50 relative flex  items-center justify-between rounded-lg shadow-lg shadow-black/10">
      <FaTrashCan className='absolute top-2 right-2 cursor-pointer text-xl xsm:text-2xl text-pink-600' />
      <div className="text-black h-full  flex flex-col justify-around items-center px-2.5">
        <div className="text-center pt-5 font-Dinar">
          <p className="text-base xsm:text-lg ">ادوپرفیوم میس دیور</p>
          <p className="text-pink-600 text-base xsm:text-xl">2300000 تومان</p>
        </div>
        <div className="flex">
          <button className="bg-black text-white w-7 h-5 xsm:w-10 xsm:h-7 flex justify-center items-center text-lg xsm:text-xl rounded-s-md">+</button>
          <div className="bg-white text-black w-7 h-5 xsm:w-10 xsm:h-7 text-base flex justify-center items-center">2</div>
          <button className="bg-black text-white w-7 h-5 xsm:w-10 xsm:h-7 flex justify-center items-center text-3xl rounded-e-md">-</button>
        </div>
      </div>
      <img src="/img/perf-1.png" className="w-1/3 h-[85%] sxm:h-full" alt="perfume" />
    </div>

  )
}
