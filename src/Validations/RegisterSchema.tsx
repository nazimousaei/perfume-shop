import * as Yup from 'yup'

const registerSchema = Yup.object().shape({
    username: Yup.string().required('نام کاربری خود را وارد کنید').min(3, ' نام کاربری حداقل باید ۳ کارکتر باشد').max(12, 'نام کاربری حداکثر باید ۱۲ کارکتر باشد'),
    phone: Yup.string().required('شماره تلفن خود را وارد نمایید').matches(/^۰۹[۰-۹]{9}|09[0-9]{9}$/, 'شماره تلفن معتبر نیست'),
    password: Yup.string().required('رمز عبور خود را وارد نمایید').min(6, 'رمز عبور باید حداقل ۶ کارکتر باشد').max(20, 'رمز عبور باید حذاکثر ۲۰ کارکتر باشد').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'رمز عبور باید حاوی حروف بزرگ و کوچک و اعداد و علائم باشد'),
    repeatPassword: Yup.string().required('رمز عبور خود را وارد نمایید').min(6, 'رمز عبور حداقل باید ۶ کارکتر باشد').max(20, 'رمز عبور حداثر باید ۲۰ کارکتر باشد').oneOf([Yup.ref('password')], 'با پسورد وارد شده مطابقت ندارد')

})

export default registerSchema