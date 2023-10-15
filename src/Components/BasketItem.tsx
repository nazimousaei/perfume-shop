import { FaTrashCan } from 'react-icons/fa6'
import { useState } from 'react'
import { basketItem } from '../TypeScriptTypes/BasketTypes'
import { useDispatch } from 'react-redux'
import { deleteBasketServer } from '../Redux/Store/Basket'
import { putBasketServer } from '../Redux/Store/Basket'
import { AppDispatch } from '../Redux/Store'
import swal from 'sweetalert'

export default function BasketItem(Props: basketItem) {

  const [productCount, setProductCount] = useState<number>(Props.count)

  const deleteBasketItem = useDispatch<AppDispatch>()
  const editBasketCount = useDispatch<AppDispatch>()

  const deleteBasketItemHandler = (ProductID: number) => {
    swal({
      title: 'آیا از حذف اطمینان دارید ؟',
      icon: 'warning',
      buttons: ['خیر', 'بله'],
      className:'swal-footer'

    }).then(result => {
      if (result) {
        deleteBasketItem(deleteBasketServer(ProductID))
        swal({
          title: 'با موفقیت حذف شد',
          icon: 'success',
          buttons:'بستن' as any,
          className:'swal-footer'
        })
      }
    })
  }



  const plusBtnHandler = () => {

    setProductCount(prev => prev + 1)

    const editBasket = {
      id: Props.id,
      name: Props.name,
      title: Props.title,
      price: Props.price,
      count: productCount,
      src: Props.src
    }
    editBasketCount(putBasketServer(editBasket))

  }


  const minesBtnHandler = () => {
    if (productCount > 1) {
      setProductCount(prev => prev - 1)
    }
    const editBasket = {
      id: Props.id,
      name: Props.name,
      title: Props.title,
      price: Props.price,
      count: productCount,
      src: Props.src
    }

    editBasketCount(putBasketServer(editBasket))

  }

  return (
    <div className="h-[12rem] p-2.5 bg-zinc-50 relative flex gap-x-2 items-center justify-between rounded-lg shadow-lg shadow-black/10">
      <FaTrashCan onClick={() => deleteBasketItemHandler(Props.id)} className='absolute top-2 right-2 cursor-pointer text-xl xsm:text-2xl text-pink-600' />
      <div className="flex flex-col xsm:flex-row mt-5 xsm:mt-0">
        <button onClick={() => plusBtnHandler()} className="bg-black text-white w-7 h-5 xsm:w-10 xsm:h-7 flex justify-center items-center text-lg xsm:text-xl rounded-t-md xsm:rounded-s-md">+</button>
        <div className="bg-white text-black w-7 h-5 xsm:w-10 xsm:h-7 text-base flex justify-center items-center">{Props?.count}</div>
        <button onClick={() => minesBtnHandler()} className="bg-black text-white w-7 h-5 xsm:w-10 xsm:h-7 flex justify-center items-center text-3xl rounded-b-md xsm:rounded-e-md">-</button>
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
