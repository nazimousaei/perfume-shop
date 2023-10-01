import {BsTelegram} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import {BsFacebook} from 'react-icons/bs'

export default function Footer() {
  return (
    <div className="flex flex-col justify-center p-10 sm:p-24 text-white mt-32 bg-black ">
        <div className="flex flex-wrap gap-32 justify-center items-center">
            <div>
                <h4 className="text-center">ما را در شبکه های اجتماعی دنبال کنید</h4>
                <div className="flex items-center justify-evenly text-[#FF096A] text-3xl pt-10 ">
                    <BsTelegram/>
                    <AiFillInstagram/>
                    <IoLogoWhatsapp/>
                    <BsFacebook/>
                </div>

            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-20">
            <div className="text-center">
                <h4 className="text-[#FF096A] text-xl pb-5 border-b-[1px] border-x-zinc-200">
                    خرید از پارسیس
                </h4>
                <ul className="pt-2.5 leading-10 font-light">
                    <li className="">روش های پرداخت </li>
                    <li className="">رویه های ارسال </li>
                    <li className="">رویه های مرجوعی</li>
                    <li className="">گارانتی اصالت کالا</li>
                </ul>
            </div>
            <div className="text-center">
                <h4 className="text-[#FF096A] text-xl pb-5 border-b-[1px] border-x-zinc-200">
                   ارتباط با پارسیس
                </h4>
                <ul className="pt-2.5 leading-10 font-light">
                    <li className="">تماس با ما</li>
                    <li className="">درباره ما</li>
                    <li className="">خرید عطر</li>
                    <li className="">راهنمای خرید</li>
                </ul>
            </div>
            </div>
            <div className="w-full sm:w-2/3 xl:w-1/3">
                <h4 className="font-semibold text-lg text-center">عضویت در خبرنامه و اطلاع از تخفیف ها</h4>
                <div className="flex mt-10">
                  <input type="text" className="bg-zinc-50 w-full px-6 rounded-tr-md rounded-br-md" placeholder="ایمیل" />
                  <span className="bg-[#FF096A] text-white text-sm sm:text-base p-2 px-5 sm:px-7 rounded-tl-md rounded-bl-md">ارسال</span>
                </div>
            </div>
        </div>
        <div className='w-2/3 sm:w-1/3 text-center leading-10 mx-auto mt-20 text-[.85rem] text-[#FF096A] font-thin'>
            کلیه حقوق طراحی و پیاده سازی سایت متعلق به توسعه دهنده سایت بوده و رعایت حقوق کپی رایت الزامی است
             copyRight &copy;
        </div>
    </div>
  )
}
