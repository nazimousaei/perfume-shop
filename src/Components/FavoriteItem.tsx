import { FaTrashCan } from 'react-icons/fa6'
import { favoriteItem } from '../TypeScriptTypes/FavoritesTypes'
import { useDispatch } from 'react-redux'
import { deleteFavoritesServer } from '../Redux/Store/FavoriteList'
import { AppDispatch } from '../Redux/Store'
import swal from 'sweetalert'

export default function FavoriteItem(Props: favoriteItem) {

  const deleteFavoriteItem = useDispatch<AppDispatch>()

  const removeFavoriteItem = (favoriteID: number) => {
    swal({
      title: 'آیا از حذف اطمینان دارید ؟',
      icon: 'warning',
      buttons: ['خیر', 'بله'],
      className:'swal-footer'

    }).then(result => {
      if (result) {
        deleteFavoriteItem(deleteFavoritesServer(favoriteID))
        swal({
          title:'با موفقیت حذف شد',
          icon:'success',
          buttons:'بستن' as any,
          className:'swal-footer'
        })
      }
    })
  }

  return (
    <div className="flex gap-x-2 items-center justify-between h-[12rem] p-5 bg-gray-50 relative  rounded-lg shadow-lg shadow-black/10">
      <FaTrashCan onClick={() => removeFavoriteItem(Props.id)} className='absolute top-3 right-4 cursor-pointer text-xl xsm:text-2xl text-pink-600' />
      <div className=' flex justify-between items-center w-full h-full text-black '>
        <div className="flex flex-col justify-center items-center gap-y-3 pt-5 font-Dinar">
          <p className="text-sm xsm:text-lg text-center">{Props?.name}</p>
          <p className="text-pink-600 text-sm xsm:text-xl text-center">{Props.price?.toLocaleString()} تومان</p>
          <button className="flex justify-center items-center w-11/12 h-8 text-sm xsm:text-lg rounded-lg bg-black text-white ">خرید</button>

        </div>
        <img src={Props?.src} className="w-[45%] xsm:w-1/3 h-[70%] xsm:h-[85%] sxm:h-full" alt="perfume" />
      </div>
    </div>
  )
}
