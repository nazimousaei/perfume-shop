import ProductCard from "./ProductCard"
import { allProductGetServer } from '../TypeScriptTypes/ProductsTypes'
import useData from '../CustomHooks/UseData'

export default function AllProduct() {

    const { data } = useData('http://localhost:3000/products')

    return (
        <div className="pt-28 ">
            <div className="px-0 xsm:px-14">
                <h1 className="title-section ">
                    همه محصولات
                </h1>
            </div>

            <div className='flex flex-wrap justify-center gap-12 mt-32 py-20 px-5 bg-pink-100 '>
                {data?.map((product: allProductGetServer) => (
                    <div className="w-full xsm:w-[20rem]">

                        <ProductCard key={product.id} {...product} />
                    </div>
                ))}
            </div>

            <button className='flex justify-center items-center px-5 py-2 text-sm sm:text-base sm:px-8 sm:py-2.5 mx-auto mt-20 rounded-full bg-black text-white hover:bg-pink-600 shadow-2xl shadow-black/10'>مشاهده همه</button>
        </div>
    )
}
