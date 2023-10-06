import Navbar from "../Components/Navbar"
export default function SingIn() {
  return (
    <>  
    <Navbar />
    <div className="relative w-full h-[90.4vh] sm:h-[86.4vh] lg:h-[84.8vh] flex justify-center md:justify-between items-center sm:mt-[.83rem]">
        <img src="/img/pic-18.png" className="invisible md:visible absolute right-0 -z-20  h-[80vh] w-full md:w-1/2 lg:w-[44%] drop-shadow-img px-10" />
        <img src="/img/pic-2.jpg" className="w-full h-full md:invisible"/>

        <div className="w-[20%] h-[70%]  rounded-full absolute -right-12 top-0 opacity-70 bg-sky-100 -z-10 blur-3xl"></div>
        <div className="w-[18%] h-[90%] md:h-[55%]  rounded-full absolute right-1/2 md:right-1/3 top-0 opacity-60 bg-orange-200 -z-10 blur-3xl"></div>
        <div className="w-[30%] h-[90%]  rounded-full absolute -left-12 bottom-[20%] opacity-70 bg-lime-200 -z-10 blur-3xl"></div>

        <form className="absolute md:left-10 lg:left-32 bg-fuchsia-50/90 2xsm:w-[90%] xsm:w-[80%] sm:w-[55%] md:w-[44%] lg:w-1/3 px-5 xsm:px-10 py-14 flex flex-col items-center  shadow-xl shadow-black/20 rounded-xl font-Dinar">
          <h2 className="text-4xl font-semibold pb-8 text-pink-600">ورود</h2>
          <p className="">حساب کاربری ندارید ؟ <span className="text-pink-600 cursor-pointer">ثبت نام</span></p>
          <input type="text" className="w-full text-xl py-3 mt-10 text-center placeholder:text-zinc-700 placeholder:text-lg bg-transparent border-b-2 border-zinc-600 outline-none" placeholder="نام کاربری" />
          <input type="password" className="w-full outline-none text-xl py-3 mt-6 text-center placeholder:text-zinc-700 placeholder:text-lg bg-transparent border-b-2 border-zinc-600 " placeholder="رمز عبور" />
          <span className="mt-12 mb-2 text-pink-600 cursor-pointer">رمز عبور را فراموش کرده اید ؟</span>
          <button className="absolute -bottom-5 bg-black text-white flex justify-center items-start text-xl py-2.5 px-10 rounded-lg">ورود</button>
        </form>
      </div>
      </>
  )
}
