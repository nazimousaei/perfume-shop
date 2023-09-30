import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard';
import 'swiper/css';

import 'swiper/css/autoplay';


export default function BestSelling() {
    return (
        <div className="pt-28 px-7 xsm:px-14">
            <h1 className="title-section ">
                پر فروش ترین ها
            </h1>
          
            <div className="mt-32 rounded-lg shadow-2xl shadow-black/10">
                  <Swiper
                    loop={true}
                    slidesPerView={4}
                    modules={[Autoplay]}
                    spaceBetween={20}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        100: {
                            slidesPerView: 1,
                        },
                        580:{
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
                    <SwiperSlide className=''><ProductCard/></SwiperSlide>
                    <SwiperSlide className=''><ProductCard/></SwiperSlide>
                    <SwiperSlide className=''><ProductCard/></SwiperSlide>
                    <SwiperSlide className=''><ProductCard/></SwiperSlide>
                    <SwiperSlide className=''><ProductCard/></SwiperSlide>
                    <SwiperSlide className=''><ProductCard/></SwiperSlide>
                    <SwiperSlide className=''><ProductCard/></SwiperSlide>
                    <SwiperSlide className=''><ProductCard/></SwiperSlide>
                </Swiper >

            </div>
        </div >

    )
}
