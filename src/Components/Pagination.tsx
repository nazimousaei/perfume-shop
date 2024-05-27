import { allProductGetServer } from '../TypeScriptTypes/ProductsTypes'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

type paginatinPropsTtpes = {

    items: allProductGetServer[];
    itemsCount: number;
    pathname: string;
    setShowItems: (value: allProductGetServer[]) => void
}

export default function Pagination({ items, itemsCount, pathname, setShowItems }: paginatinPropsTtpes):React.ReactNode {

   

    const [pageCount, setPageCount] = useState<number | null>(null)
    const { page }: any = useParams()

    useEffect(() => {
        let endIndex = itemsCount * page
        let startIndex = endIndex - itemsCount
        let paginatedItems = items.slice(startIndex,endIndex)
        setShowItems(paginatedItems)
       

        let pageNumbers = Math.floor(items.length / itemsCount)
        setPageCount(pageNumbers)

    }, [items, page])


    return (
        <div className='flex justify-center mt-32'>
        <ul className='flex gap-2 justify-center flex-wrap sm:gap-x-10'>

            {Array(pageCount).fill(0).map((btn, index) => (


                   btn && index + 1 === Number(page) ? (

                    <Link key={crypto.randomUUID()} to={`${pathname}/${index + 1}`} className='flex justify-center items-center rounded-full bg-pink-600 hover:bg-black w-10 sm:w-16 py-1 text-white'>{index + 1}</Link>

                ) : (

                    <Link key={crypto.randomUUID()} to={`${pathname}/${index + 1}`} className='flex justify-center items-center rounded-full bg-pink-200 hover:bg-black w-10 sm:w-16 py-1 text-white'>{index + 1}</Link>

                )


            ))}
        </ul>
    </div>
    )
}
