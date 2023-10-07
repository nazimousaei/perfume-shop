import Modal from "./Modal"
import { IoMdClose } from 'react-icons/io'
import FavoriteItem from "./FavoriteItem"

type openHandleFavorite = {
  setOpenFavorite: (value: boolean) => void
}

export default function Favorite({ setOpenFavorite }: openHandleFavorite) {
  return (
    <div className="w-full xsm:w-[85%] sm:w-1/2  lg:w-[35%]  h-full p-4 xsm:p-6 fixed right-0 top-0 z-50 bg-rose-50 cursor-pointer overflow-y-auto">
      <Modal />
      <span className="absolute top-3 left-8 bg-black text-white text-3xl rounded-md" onClick={() => setOpenFavorite(false)}><IoMdClose /></span>
      <div className="flex flex-col gap-y-7 justify-center mt-10">
      <FavoriteItem/>
      <FavoriteItem/>
      <FavoriteItem/>
      <FavoriteItem/>
      <FavoriteItem/>
      <FavoriteItem/>
      <FavoriteItem/>
      <FavoriteItem/>
  
      </div>
    </div>
  )
}