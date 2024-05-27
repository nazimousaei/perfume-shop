import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import BreadCrumb from "../Components/BreadCrumb"
import { useState, useEffect } from "react"
import { FaSortAmountDown } from 'react-icons/fa'
import Pagination from "../Components/Pagination"
import { allProductGetServer } from "../TypeScriptTypes/ProductsTypes"
import ProductCard from "../Components/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../Redux/Store"
import { getProductsServer } from "../Redux/Store/Products"


export default function Product() {
  const [btnActive, setBtnActive] = useState<string>('btn1')
  const [showItems, setShowItems] = useState<allProductGetServer[]>([])


  const getDataDispatch = useDispatch<AppDispatch>()
  const getData: any = useSelector<RootState>(state => state.products)

  useEffect(() => {

    if (btnActive === 'btn1') {
      getDataDispatch(getProductsServer('https://db-perfume.liara.run/products'))

    } else if (btnActive === 'btn2') {
      getDataDispatch(getProductsServer('https://db-perfume.liara.run/products?_sort=price&_order=asc'))

    } else if (btnActive === 'btn3') {
      getDataDispatch(getProductsServer('https://db-perfume.liara.run/products?_sort=price&_order=desc'))

    } else {
      getDataDispatch(getProductsServer('https://db-perfume.liara.run/products'))
    }

  }, [btnActive])


  return (
    <div>
      <Navbar />
      <div className="pt-8 px-4 sm:px-10 lg:px-14">
        <div className="mb-8"><BreadCrumb path={`products/1`} title={'محصولات'} /></div>
        <div className='flex flex-wrap gap-y-8 justify-center gap-x-16 items-center py-5 px-0 sm:p-7 border-[1px] border-stone-300 rounded-2xl  text-stone-700 text-sm sm:text-base lg:text-[1.1rem]'>
          <p className="flex gap-x-1.5 xsm:gap-x-3 items-center text-center text-stone-900"><FaSortAmountDown className='text-2xl' /> مرتب سازی بر اساس :</p>
          <div className="flex flex-wrap gap-y-5 justify-center items-center">
            <button onClick={() => setBtnActive('btn1')} className={`px-3 md:px-7  ${btnActive === 'btn1' && 'text-pink-600'}`}>همه محصولات</button>
            <button onClick={() => setBtnActive('btn2')} className={`px-3 md:px-7 xsm:border-x-2 xsm:border-pink-600 ${btnActive === 'btn2' && 'text-pink-600'}`}>ارزان ترین</button>
            <button onClick={() => setBtnActive('btn3')} className={`px-3 md:px-7 ${btnActive === 'btn3' && 'text-pink-600'}`}>گران ترین</button>
            <button onClick={() => setBtnActive('btn4')} className={`px-3 md:px-7 xsm:border-s-2 xsm:border-pink-600 ${btnActive === 'btn4' && 'text-pink-600'}`}>محبوب ترین</button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-14 mx-auto mt-20">
          {showItems?.map((product: allProductGetServer) => (
            <div className="w-full xsm:w-[90%] sm:w-2/3 lg:w-1/3">
              <ProductCard key={product.id} {...product} />
            </div>
          ))}
        </div>

        <Pagination items={getData} itemsCount={4} pathname={'/products'} setShowItems={setShowItems} />

      </div>
      <Footer />
    </div>
  )
}
