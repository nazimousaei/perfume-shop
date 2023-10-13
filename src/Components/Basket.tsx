import Modal from "./Modal"
import { IoMdClose } from 'react-icons/io'
import BasketItem from "./BasketItem"
import { basketItem } from "../TypeScriptTypes/BasketTypes"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getBasketServer } from "../Redux/Store/Basket"
import { AppDispatch, RootState } from "../Redux/Store"

type openHandleBasket = {
  setOpenBasket: (value: boolean) => void
}

export default function Basket({setOpenBasket}:openHandleBasket) {

  const dispatch = useDispatch<AppDispatch>()
  const basketData = useSelector<RootState, basketItem[]>((state) => state.basket)

  useEffect(() => {
      dispatch(getBasketServer())
  }, [])
  return (
    <div className="w-full sm:w-2/3  lg:w-[45%]  h-full p-4 xsm:p-6 fixed right-0 top-0 z-50 bg-white cursor-pointer overflow-y-auto">
      <Modal />
      <span className="absolute top-3 left-8 bg-pink-600 text-white text-3xl rounded-md" onClick={() => setOpenBasket(false)}><IoMdClose /></span>
      <div className="flex flex-col gap-y-7 justify-center mt-10">
        {basketData?.map((basketProduct:basketItem) => (
        <BasketItem key={basketProduct.id} {...basketProduct}/>
       ))}
        </div>
        <div className="fixed bottom-0 right-0 w-[95%] xsm:w-[96.8%] sm:w-[64.7%]  lg:w-[43.69%] px-4 xsm:px-6 bg-white flex flex-col items-center">
          <h2 className="text-black  mx-auto my-5 text-xl font-Dinar">صورتحساب</h2>
          <div className="flex flex-col justify-center items-center border-t-4 border-zinc-500 border-dotted py-7 text-black">

            <div className=" w-full flex justify-center gap-x-10 items-center text-pink-600 text-sm xsm:text-xl font-semibold">
              <p>مبلغ کل : </p>
              <span>30000000 تومان</span>
            </div>
            <button className="mt-8 w-1/2 xsm:w-2/3 h-12 text-base xsm:text-lg rounded-lg bg-black text-white flex justify-center items-center">تکمیل خرید</button>
          </div>
          </div>
        </div>
  )
}
