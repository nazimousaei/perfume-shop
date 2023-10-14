//components
import BreadCrumb from "../Components/BreadCrumb"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import InfoProduct from "../Components/InfoProduct"
import DescriptionProduct from "../Components/DescriptionProduct"
import Textarea from '../Components/Textarea'
import Comment from '../Components/Comment'
//icons
import { MdOutlineCloudDone } from 'react-icons/md'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { GiReturnArrow } from 'react-icons/gi'
import { BiSupport } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
// import { AiOutlineStar } from 'react-icons/ai'
//type script types
import { allCommentGetServer } from "../TypeScriptTypes/CommentTypes"
import { infoProductGetServer } from "../TypeScriptTypes/InfoProductTypes"
import { basketItem } from "../TypeScriptTypes/BasketTypes"
//react-redux & redux-toolkit
import { useDispatch, useSelector } from "react-redux"
import { getCommentsServer } from "../Redux/Store/Comments"
import { getProductInfoServer } from "../Redux/Store/ProductDetal"
import { AppDispatch, RootState } from "../Redux/Store"
import { postBasketServer } from '../Redux/Store/Basket'
//react & react-router-dom
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
//sweetaler
import swal from 'sweetAlert'

//type of useparams hook
type param = {
  id: string;
}

export default function ProductDetail() {

  const [btnActive, setBtnActive] = useState<string>('btn1')

  const dispatchPostBasketItem = useDispatch<AppDispatch>()

  const { id } = useParams<param>()


  const dispatchComments = useDispatch<AppDispatch>()
  const commentsData = useSelector<RootState, allCommentGetServer[]>((state) => state.comments)

   const dispatchProductInfo = useDispatch<AppDispatch>()
   const productInfoData = useSelector<RootState,infoProductGetServer>((state) => state.productInfo)

  useEffect(() => {
    dispatchComments(getCommentsServer())
    dispatchProductInfo(getProductInfoServer(id))

  }, [])

  const addBasketHandle = () => {

    const newItemBasket:basketItem = {
        id: productInfoData.id,
        name: productInfoData.name,
        title: productInfoData.title,
        price: productInfoData.price,
        count:1,
        src: productInfoData.src
    }

    dispatchPostBasketItem(postBasketServer(newItemBasket))

    swal({
        title: 'محصول با موفقیت به سبد خرید افزوده شد',
        icon: 'success',
        buttons: ['بستن', 'تایید']
    })

}


  return (
    <div>
      <Navbar />
      <div className="pt-8 px-4 sm:px-10 lg:px-14">
        <div className="mb-8"><BreadCrumb /></div>
        <div className="flex justify-center gap-x-4 gap-y-14 xl:justify-between flex-wrap items-start">
          <div className="w-full justify-around xl:w-[64%] flex flex-wrap md:flex-nowrap gap-8 ">
            <div className="w-full sm:w-[70%] md:w-[47%] h-[24rem] sm:h-[27rem] flex justify-center items-center p-4 xsm:p-7 rounded-lg  border-[1px] border-gray-200">
              <img src={productInfoData?.src} className="w-full h-full" alt="perfume" />
            </div>
            <div className="w-full md:w-auto px-2">
              <h1 className="text-2xl ">{productInfoData?.name}</h1>
              <p className="pt-2 uppercase text-stone-500">{productInfoData?.title}</p>
              <div className="flex gap-x-6 pt-5 text-pink-600 font-semibold">
                <p className="">برند : {productInfoData?.brand} </p>
                <p className="">دسته بندی : عطر و ادکلن {productInfoData?.gender}</p>
              </div>
              <div className="pt-5">
                <h4 className="text-lg font-medium pb-2">ویژگی های محصول</h4>
                <ul className="text-[.9rem] list-disc list-inside marker:text-pink-600">
                  <li>ادوپرفیوم</li>
                  <li>مناسب {productInfoData?.gender === 'زنانه' ? 'خانم ها' : 'آقایان'}</li>
                </ul>
              </div>
              <div className="flex items-center gap-x-5 pt-5">
                <p className="font-semibold text-lg text-stone-700">  امتیاز:</p>
                <div className="flex gap-x-1.5">
                  {Array(productInfoData?.star)?.fill(0)?.map(() => (
                    <AiFillStar className='text-yellow-300 text-xl' />
                  ))} 
                   {/* {Array(5-productInfoData?.star)?.fill(0)?.map(() => (
                    <AiOutlineStar className='text-yellow-300 text-xl' />
                  ))}  */}
                </div>
              </div>

              <div className="flex items-center flex-wrap gap-4 sm:gap-x-10 pt-8">
                <p className="font-semibold text-lg text-stone-700">حجم عطر :</p>
                <form className="flex items-center gap-x-2 text-sm xsm:text-base">
                  <input type="radio" checked name="perf" id='perf-1' className="accent-black" />
                  <label htmlFor='perf-1' className="w-12 xsm:w-16">
                    <img src="/img/perf-1.png" />
                    <p className="font-semibold text-pink-600 text-cener">۱۰۰ میل</p>
                  </label>
                  <input type="radio" name="perf" id='perf-2' className="accent-black" />
                  <label htmlFor='perf-2' className="w-12 xsm:w-16">
                    <img src="/img/perf-1.png" />
                    <p className="font-semibold text-pink-600 text-center">۶۰ میل</p>
                  </label>
                  <input type="radio" name="perf" id='perf-3' className="accent-black" />
                  <label htmlFor='perf-3' className="w-12 xsm:w-16">
                    <img src="/img/perf-1.png" />
                    <p className="font-semibold text-pink-600 text-center">۵ میل</p>
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/3 md:w-[45%] text-base xl:w-[28%] rounded-lg  border-[1px] border-gray-200 p-4 xsm:p-7 xsm:px-10">
            <ul className="flex flex-col gap-y-4 border-b-[1px] border-gray-200 pb-5">
              <li className="flex items-center gap-x-4 text-stone-500">
                <MdOutlineCloudDone className='text-pink-600 text-3xl' />
                <p className="">ارایه تضمین اصل بودن کالا</p>
              </li>
              <li className="flex items-center gap-x-4 text-stone-500">
                <MdOutlineDeliveryDining className='text-pink-600 text-3xl' />
                <p className="">ارسال رایگان بالای ۵۰۰۰۰۰ تومان</p>
              </li>
              <li className="flex items-center gap-x-4 text-stone-500">
                <GiReturnArrow className='text-pink-600 text-3xl' />
                <p className="">ضمانت بازگشت کالا ۷ روزه</p>
              </li>
              <li className="flex items-center gap-x-4 text-stone-500">
                <BiSupport className='text-pink-600 text-3xl' />
                <p className="">مشاوره رایگان بگیرید</p>
              </li>
            </ul>
            <div className="w-full text-center pt-5">
              <p className="text-xl xsm:text-2xl text-pink-600 "> تومان {productInfoData?.price?.toLocaleString()}</p>
              <div className="flex items-center justify-between pt-5">
                <div className="flex">
                  <button className="bg-black text-white w-10 h-6 xsm:w-14 xsm:h-8 flex justify-center items-center text-lg xsm:text-xl rounded-s-md">+</button>
                  <div className="bg-white text-black w-10 h-6 xsm:w-16 xsm:h-8 text-base flex justify-center items-center">1</div>
                  <button className="bg-black text-white w-10 h-6 xsm:w-14 xsm:h-8 flex justify-center items-center text-3xl rounded-e-md">-</button>
                </div>
                <div className=" rounded-lg p-2 cursor-pointer">
                  <FiHeart className='text-pink-600 text-3xl font-semibold' />
                </div>
              </div>
              <button onClick={addBasketHandle} className="w-full mt-5 h-11 text-base xsm:text-lg text-white bg-pink-600 rounded-lg">افزودن به سبد خرید</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pt-32 px-4 sm:px-10 lg:px-14 gay-y-8">
        <div className='flex justify-center items-center py-5 px-0 sm:p-7 border-[1px] border-stone-300 rounded-2xl  text-stone-500 text-sm xsm:text-[1.1rem]'>
          <button onClick={() => setBtnActive('btn1')} className={`px-4 md:px-8 ${btnActive === 'btn1' && 'text-pink-600'}`}>مشخصات محصول</button>
          <button onClick={() => setBtnActive('btn2')} className={`px-4 md:px-8 border-x-2 border-pink-600 ${btnActive === 'btn2' && 'text-pink-600'}`}>توضیحات محصول</button>
          <button onClick={() => setBtnActive('btn3')} className={`px-4 md:px-8 ${btnActive === 'btn3' && 'text-pink-600'}`}>راهنمای استفاده</button>
        </div>
        <div className="w-full sm:w-[90%] md:w-[70%] xl:w-[55%] mt-10 pt-10 border-t-[1px] border-stone-300">
          {
            btnActive === 'btn1' ? <InfoProduct {...productInfoData} /> : btnActive === 'btn2' ? <DescriptionProduct /> : btnActive === 'btn3' && <div className="text-justify leading-9  sm:leading-10 text-base sm:text-lg px-4">
              در ابتدا "نکته ی حائز اهمیت این است که هرگز عطر خود را در معرض نور و گرمای مستقیم قرار ندهید و حتی المقدور تلاش کنید تا عطر داخل جعبه ی خود نگهداری شود. عطر را از فاصله ی 15 الی 30 سانتی متری روی پوست پاف کنید تا پخش بوی قابل قبولی داشته باشید. این فاصله ی 15 تا 30 سانتی متری بستگی به نوع اسپری(Vaporisateur) عطر می باشد که در برند های مختلف متنوع است. نکته ی مهم دیگر چگونگی اولین پاف عطر است: حتماً می بایست پاف اول عطر را بصورت مستقیم و محکم اسپری کرد تا تعادل فشار برقرار شود. در صورت عدم پاف محکم و یا کج کردن عطر به هنگام اولین پاف، ممکن است عطر شما دچار نشطی اندکی به اندازه ی کمتر از 2 میل شود. سعی کنید 1 الی 3 پاف اول عطر را برای اینکه بتوانید بصورت مستقیم اسپری کنید روی بدن نزنید. در این حالت می توانید عطر را روی کف یک دست قرار داده و با دست دیگر محکم پاف کنید، زمانیکه می خواهید عطر را برای 3مرتبه اول محکم پاف کنید برای پیشگیری سقوط شیشه عطر از دستانتان می توانید از میز یا کابینت آشپزخانه برای ایستایی مطمن آن استفاده کنید.
            </div>}
        </div>
        <div className="flex flex-col gap-y-5 justify-center items-center w-full md:w-[90%] xl:w-[75%]  pt-32 px-0 sm:px-6 lg:px-14">
          <h2 className="self-start text-2xl pb-10 text-stone-600">نظرات : </h2>

          {commentsData?.map((product: allCommentGetServer) => (
            <Comment key={product.id} {...product} />
          ))}

          <Textarea />
        </div>

      </div>
      <Footer />
    </div>
  )
}
