import ProductCard from "./ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProductsServer } from "../Redux/Store/Products"
import { AppDispatch, RootState } from "../Redux/Store"
import { allProductGetServer } from "../TypeScriptTypes/ProductsTypes"
import { Link } from "react-router-dom"

export default function AllProduct() {

    const dispatch = useDispatch<AppDispatch>()
    const productsData = useSelector<RootState, allProductGetServer[]>((state) => state.products)


    useEffect(() => {
        dispatch(getProductsServer('http://localhost:3000/products'))
    }, [])

    return (
        <div className="pt-28 ">
            <div className="px-0 xsm:px-14">
                <h1 className="title-section ">
                    همه محصولات
                </h1>
            </div>

            <div className='flex flex-wrap justify-center gap-12 mt-32 py-20 px-5 bg-pink-100 '>
                {productsData?.map((product: allProductGetServer) => (
                    <div key={product.id} className="w-full xsm:w-[20rem]">
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
            <Link to={'/products/1'}>
                <button className='flex justify-center items-center px-5 py-2 text-sm sm:text-base sm:px-8 sm:py-2.5 mx-auto mt-20 rounded-full bg-black text-white hover:bg-pink-600 shadow-2xl shadow-black/10'>مشاهده همه</button>
            </Link>
        </div>
    )
}
