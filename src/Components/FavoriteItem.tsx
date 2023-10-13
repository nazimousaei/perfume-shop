import { FaTrashCan } from 'react-icons/fa6'
import { favoriteItem } from '../TypeScriptTypes/FavoritesTypes'

export default function FavoriteItem(Props:favoriteItem) {
  return (
    <div className="h-[12rem] p-5 bg-gray-50 relative flex gap-x-2 items-center justify-between rounded-lg shadow-lg shadow-black/10">
    <FaTrashCan className='absolute top-3 right-4 cursor-pointer text-xl xsm:text-2xl text-pink-600' />
    <div className='text-black w-full h-full flex justify-between items-center'>
      <div className="flex flex-col justify-center items-center gap-y-3 pt-5 font-Dinar">
        <p className="text-sm xsm:text-lg text-center">{Props?.name}</p>
        <p className="text-pink-600 text-sm xsm:text-xl text-center">{Props.price?.toLocaleString()} تومان</p>
        <button className="w-11/12 h-8 text-sm xsm:text-lg rounded-lg bg-black text-white flex justify-center items-center">خرید</button>

      </div>
      <img src={Props?.src} className="w-[45%] xsm:w-1/3 h-[70%] xsm:h-[85%] sxm:h-full" alt="perfume" />
    </div>
  </div>
  )
}
