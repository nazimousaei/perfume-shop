import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import BrandCard from './BrandCard';

export default function PopularBrand() {
  return (
    <div className="shadow-xl shadow-black/20 relative w-full 2xsm:h-[390px] xsm:h-[430px] sm:h-[470px] md:h-[500px] lg:h-[650px] mt-28 overflow-hidden">
      <video className="w-full h-full absolute left-0 top-0 object-fill -z-10 " autoPlay muted loop>
        <source src="/img/bg-video.mp4"></source>
      </video>
      <div className="flex items-center flex-col sm:flex-row justify-between p-5 sm:p-20 brand-section">
        <h1 className="text-white text-center font-bold 2xsm:self-center xsm:self-start sm:self-center font-Dinar text-2xl md:text-3xl lg:text-4xl text-shadow">
          محبوب ترین برند های عطر
        </h1>
        <div className='w-[90%] xsm:w-[37%] sm:w-[30%] xl:w-[24%] h-[40%] xsm:h-[75%] md:h-[90%] 2xsm:self-center xsm:self-end sm:self-center'>
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper w-full h-full"
          >
            <SwiperSlide><BrandCard img={'/img/brand-1.png'} /></SwiperSlide>
            <SwiperSlide><BrandCard img={'/img/brand-2.png'} /></SwiperSlide>
            <SwiperSlide><BrandCard img={'/img/brand-3.png'} /></SwiperSlide>
            <SwiperSlide><BrandCard img={'/img/brand-4.png'} /></SwiperSlide>
            <SwiperSlide><BrandCard img={'/img/brand-5.png'} /></SwiperSlide>
            <SwiperSlide><BrandCard img={'/img/brand-6.png'} /></SwiperSlide>
            <SwiperSlide><BrandCard img={'/img/brand-7.png'} /></SwiperSlide>
            <SwiperSlide><BrandCard img={'/img/brand-8.png'} /></SwiperSlide>
            <SwiperSlide><BrandCard img={'/img/brand-9.png'} /></SwiperSlide>
          </Swiper>
        </div>

      </div>
    </div>
  )
}
