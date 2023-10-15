import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

type BreadCrumbProps = {
    path:string;
    title:string
}

export default function BreadCrumb({path,title}:BreadCrumbProps) {
    return (
        <div className=''>
            <ul className='flex items-center gap-x-2 text-[.95rem] text-stone3-600'>
                <Link to={'/'} className=''><li className='flex items-center gap-x-2'>
                    <span>خانه</span>
                    <IoIosArrowBack/>
                </li></Link>
                <Link to={`/${path}`} className=''><li className='flex items-center gap-x-2'>
                    <span>{title}</span>
                </li></Link>
            </ul>
        </div>
    )
}