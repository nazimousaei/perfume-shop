import { FaHeart } from 'react-icons/fa'
import { MdAddCircle } from 'react-icons/md'
import {Link} from 'react-router-dom'
import { allProductGetServer } from '../TypeScriptTypes/ProductsTypes'

export default function ProductCard(Props:allProductGetServer) {
    return (
        <Link to={`./productInfo/${Props.id}`}>
            <div className='relative  h-[250px] flex justify-center items-center bg-neutral-100 rounded-t-lg '>
                <FaHeart className='absolute top-6 right-6 cursor-pointer text-3xl text-red-500' />
                <img src={Props.src} className='w-1/2 h-2/3 drop-shadow-xl' alt='product' />
            </div>
            <div className='p-3 flex flex-col gap-y-3 justify-between items-center rounded-b-lg bg-white'>
                <h3 className='font-semibold text-center font-mono tracking-wide'>
                        {Props.name}
                    <span className='block text-center pt-1 text-md font-medium'>{Props.title}</span>
                </h3>

                <p className='text-pink-600 text-[1.08rem] '>
                    تومان {Props.price?.toLocaleString()}
                </p>
                <div className='flex justify-center items-center'>
                    <MdAddCircle className='text-4xl text-black cursor-pointer hover:text-pink-600' />
                    <div className='flex text-xs  '>
                        <span className='flex justify-start items-center ps-1 bg-neutral-100 cursor-pointer w-[62px] h-7 rounded-full -translate-x-10 text-pink-600'>۱۰۰ ml</span>
                        <span className='flex justify-center items-center bg-black hover:bg-pink-600 cursor-pointer text-center text-white w-[51px] h-7 rounded-full  -translate-x-5'>۵ ml</span>
                        <span className='flex justify-end items-center pe-1 bg-neutral-100 cursor-pointer w-[62px] h-7 rounded-full text-pink-600' >۱.۸ ml</span>
                    </div>

                </div>

            </div>

        </Link>
    )
}
