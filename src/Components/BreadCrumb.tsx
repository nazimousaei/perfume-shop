import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function BreadCrumb() {
    return (
        <div className=''>
            <ul className='flex items-center gap-x-2 text-[.95rem] text-stone3-600'>
                <Link to={'/'} className=''><li className='flex items-center gap-x-2'>
                    <span>خانه</span>
                    <IoIosArrowBack/>
                </li></Link>
                <Link to={'/product'} className=''><li className='flex items-center gap-x-2'>
                    <span>جزيیات محصول</span>
                    <IoIosArrowBack/>
                </li></Link>

            </ul>
        </div>
    )
}