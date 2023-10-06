import Modal from "./Modal"
import { IoMdClose } from 'react-icons/io'
import BasketItem from "./BasketItem"

type openHandleBasket = {
  setOpenBasket: (value: boolean) => void
}

export default function Basket({ setOpenBasket }: openHandleBasket) {
  return (
    <div className="w-full sm:w-2/3 md:w-1/2  h-full p-4 xsm:p-6 fixed right-0 top-0 z-50 bg-white cursor-pointer overflow-y-auto">
      <Modal />
      <span className="absolute top-3 left-8 bg-black text-white text-3xl rounded-md" onClick={() => setOpenBasket(false)}><IoMdClose /></span>
      <div className=" flex flex-col gap-y-7 justify-center mt-10">
        <BasketItem />
        <BasketItem/>
        <BasketItem />
        <BasketItem/>
        <BasketItem />
        <BasketItem/>
        <BasketItem />
        <BasketItem/>
        <h2 className="text-black  mx-auto my-5 text-xl font-Dinar">صورتحساب</h2>
          <div className="flex flex-col justify-center items-center border-t-4 border-zinc-500 border-dotted py-10 text-black">
            
        <div className="w-full flex justify-center gap-x-10 items-center text-pink-600 text-base xsm:text-xl font-semibold">
          <p>مبلغ کل : </p>
          <span>30000000 تومان</span>
        </div>
        <button className="mt-12 w-1/2 xsm:w-1/3 h-12 text-base xsm:text-lg rounded-lg bg-black text-white flex justify-center items-center">تکمیل خرید</button>
      </div>
      </div>
    
    </div>
  )
}
