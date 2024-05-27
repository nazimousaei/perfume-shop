import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProductsServer } from "../Redux/Store/Products"
import { AppDispatch, RootState } from "../Redux/Store"
import { allProductGetServer } from "../TypeScriptTypes/ProductsTypes"
import { Link } from 'react-router-dom';

export default function LastProduct() {

    const dispatch = useDispatch<AppDispatch>()
    const productsData = useSelector<RootState, allProductGetServer[]>((state) => state.products)

    useEffect(() => {
        dispatch(getProductsServer('https://db-perfume.liara.run/products?_start=15&_end=25'))
    }, [])

    return (
        <div className="pt-28 px-4 xsm:px-14">
            <h1 className="title-section ">
                جدید ترین ها
            </h1>

            <div className="mt-32 flex justify-center">
                <Swiper
                    loop={true}
                    slidesPerView={4}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        100: {
                            slidesPerView: 1,
                        },
                        580: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        840: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1122: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        }
                    }}

                    className="mySwiper w-full h-full"
                >

                    {productsData?.map((product: allProductGetServer) => (
                        <SwiperSlide key={product.id}><ProductCard {...product} /></SwiperSlide>
                    ))}

                </Swiper >

            </div>
            <Link to={'/products/1'}>
                <button className='flex justify-center items-center px-5 py-2 text-sm sm:text-base sm:px-8 sm:py-2.5 mx-auto mt-20 rounded-full bg-black text-white hover:bg-pink-600 shadow-2xl shadow-black/10'>مشاهده همه</button>
            </Link>
        </div >

    )
}
