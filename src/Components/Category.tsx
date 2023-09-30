
export default function Category() {
  return (
    <div className="pt-16 px-7 xsm:px-14">
        <h1 className="title-section ">
            دسته بندی عطر ها
        </h1>
        <div className="mt-32 flex justify-center items-center relative">
          <div className="w-10/12 h-full  rounded-full absolute top-0 opacity-40 bg-lightOrange -z-10 blur-3xl"></div>
          <div className="w-full flex flex-wrap sm:flex-nowrap justify-center items-center xl:px-24 gap-y-16 gap-5 lg:gap-10">
             <div className="w-[85%] xsm:w-[55%] sm:w-[30%] md:w-[23%] rounded-tl-full rounded-tr-full shadow-2xl shadow-black/25">
             <img src="/img/pic-1.jpg" className="rounded-tl-full rounded-tr-full" alt='kids-perfume'/>
              <div className="flex justify-center font-semibold items-center 2xsm:text-xl xsm:text-2xl md:text-3xl title-shadow font-Dinar bg-white h-auto py-10">
               عطر زنانه
              </div>
             </div>
             <div className=" w-[85%] xsm:w-[55%] sm:w-[30%] md:w-[23%] rounded-tl-full rounded-tr-full shadow-2xl shadow-black/25">
             <img src="/img/pic-6.jpg" className="rounded-tl-full rounded-tr-full" alt='kids-perfume'/>
              <div className="flex justify-center font-semibold items-center 2xsm:text-xl xsm:text-2xl md:text-3xl title-shadow font-Dinar bg-white h-auto py-10">
               عطر مردانه
              </div>
             </div>
             <div className="w-[85%] xsm:w-[55%] sm:w-[30%] md:w-[23%] rounded-tl-full rounded-tr-full shadow-2xl shadow-black/25">
             <img src="/img/pic-17.jpg" className="rounded-tl-full rounded-tr-full" alt='kids-perfume'/>
              <div className="flex justify-center font-semibold items-center 2xsm:text-xl xsm:text-2xl  md:text-3xl title-shadow font-Dinar bg-white h-auto py-10">
                عطر کودک
              </div>
             </div>
          </div>
        </div>
       
    </div>
  )
}
 