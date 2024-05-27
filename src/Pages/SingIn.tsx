import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'
import SignInSchema from "../Validations/SignInSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { RootState, AppDispatch } from "../Redux/Store"
import { useEffect } from "react"
import { getUsersServer } from "../Redux/Store/UserRegister"
import { userRegisterType } from "../TypeScriptTypes/UserRegisterTypes"
import { useNavigate } from "react-router-dom"
import swal from "sweetalert"

type FormValues = {
  username: string;
  password: string;
}

export default function SingIn() {

  const getUserDispatch = useDispatch<AppDispatch>()
  const getUserData: any = useSelector<RootState>(state => state.usersRegister)

  const navigation = useNavigate()

  useEffect(() => {

    getUserDispatch(getUsersServer())
  }, [])

  const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: yupResolver(SignInSchema)
  })




  //set cookie for new user
  const setCookieUser = () => {
    const now = new Date()
    now.setTime(now.getTime() + 10 * 24 * 60 * 60 * 1000)
    document.cookie = `username=${getValues(['username'])};path=/;expires=${now}`
  }


  const loginHandle = (data: FormValues) => {

    const IsUserInStore = getUserData.some((user: userRegisterType) => {
      if (user.username === data.username) {
        return true
      }
    })

    if (IsUserInStore) {

      const mainUser = getUserData.find((user: userRegisterType) => user.username === data.username)
      if (mainUser.password === data.password) {

        navigation('/')
        setCookieUser()
      } else {

        swal({
          title: 'پسورد اشتباه هست',
          icon: 'error',
          buttons: 'تلاش دوباره' as any,
          className: 'swal-footer'
        })
      }


    } else {
      swal({
        title: 'ابتدا باید در سایت ثبت نام کنید',
        icon: 'error',
        buttons: ['بستن', 'ثبت نام'],
        className: 'swal-footer'
      }).then(result => {

        if (result) {
          navigation('/register')
        }
      })
    }

    reset()
  }

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden w-full h-[90.4vh] sm:h-[86.4vh] lg:h-[84.8vh] flex justify-center md:justify-between items-center sm:mt-[.83rem]">
        <img src="/img/pic-18.png" className="invisible md:visible absolute right-0 -z-20  h-[80vh] w-full md:w-1/2 lg:w-[44%] drop-shadow-img px-10" />
        <img src="/img/pic-2.jpg" className="w-full h-full md:invisible" />

        <div className="w-[20%] h-[70%]  rounded-full absolute -right-12 top-0 opacity-70 bg-sky-100 -z-10 blur-3xl"></div>
        <div className="w-[18%] h-[90%] md:h-[55%]  rounded-full absolute right-1/2 md:right-1/3 top-0 opacity-60 bg-orange-200 -z-10 blur-3xl"></div>
        <div className="w-[30%] h-[90%]  rounded-full absolute -left-12 bottom-[20%] opacity-70 bg-lime-200 -z-10 blur-3xl"></div>

        <form onSubmit={handleSubmit(loginHandle)} className="absolute md:left-10 lg:left-32 bg-fuchsia-50/90 2xsm:w-[90%] xsm:w-[80%] sm:w-[55%] md:w-[44%] lg:w-1/3 px-5 xsm:px-10 py-14 flex flex-col items-center  shadow-xl shadow-black/20 rounded-xl font-Dinar">
          <h2 className="text-4xl font-semibold pb-8 text-pink-600">ورود</h2>
          <p className="">حساب کاربری ندارید ؟ <Link to={'/register'}><span className="text-pink-600 cursor-pointer underline">ثبت نام</span></Link></p>
          <input {...register('username')} type="text" className="form-item" placeholder="نام کاربری" />
          <span className="text-red-600 text-sm pt-1.5">{errors.username && errors.username.message}</span>
          <input {...register('password')} type="password" className="form-item" placeholder="رمز عبور" />
          <span className="text-red-600 text-sm pt-1.5">{errors.password && errors.password.message}</span>
          <span className="mt-12 mb-2 text-pink-600 cursor-pointer">رمز عبور را فراموش کرده اید ؟</span>
          <button className="absolute -bottom-5 bg-black text-white flex justify-center items-start text-xl py-2.5 px-10 rounded-lg">ورود</button>
        </form>
      </div>
    </>
  )
}
