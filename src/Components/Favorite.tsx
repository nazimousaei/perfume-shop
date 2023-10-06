import Modal from "./Modal"
import {IoMdClose} from 'react-icons/io'

type openHandleFavorite = {
    setOpenFavorite:(value:boolean) => void
}

export default function Favorite({setOpenFavorite}:openHandleFavorite) {
  return (
    <div className="w-[85%] sm:w-1/2 md:w-1/3 h-full fixed right-0 top-0 z-50 bg-white cursor-pointer">
    <Modal />
    <span className="absolute top-3 left-8 bg-pink-600 text-white text-3xl rounded-md" onClick={() => setOpenFavorite(false)}><IoMdClose/></span>
 
    </div>
  )
}