import React from 'react'

export default function Description() {
    return (
        <div className="flex flex-col md:flex-row justify-between relative">
            <div className="w-[20%] h-[60%]  rounded-full absolute -right-12 top-0 opacity-60 bg-sky-100 -z-10 blur-3xl"></div>
            <div className="w-[20%] h-[90%] md:h-[40%]  rounded-full absolute right-1/2 md:right-1/3 top-0 opacity-40 bg-pink-200 -z-10 blur-3xl"></div>
            <div className="w-[30%] h-[80%]  rounded-full absolute -left-12 bottom-[20%] opacity-50 bg-lime-200 -z-10 blur-3xl"></div>

            <div className='w-full md:w-1/2 flex flex-col  pt-28 px-7 xsm:px-14'>
                <h3 className='font-bold text-xl'>چگونگی توصیف رایحه پرفیوم و عطر</h3>
                <p className='text-justify py-10 '>
                    برای خرید و به خصوص خرید آنلاین پرفیوم خوب است که بدانید رایحه هر عطر چگونه توصیف می شود تا از خرید خود رضایت کامل را داشته باشید.

                    با تشبیه رایحه عطر ها به نت های موسیقی ما سه نت عطر داریم:

                    نت ابتدایی: بلافاصله بعد از استفاده از عطر این رایحه را احساس می کنید. این نت در خرید پرفیوم بسیار مورد توجه قرار می گیرد چون اولین بویی است که احساس می شود.
                    نت میانی: در حالی که بوی نت ابتدایی در حال محو شدن است رایحه ی نت میانی احساس می شود. معمولا نت میانی بویی ملایم تر و دل نشین تر دارد.
                    نت پایانی: نت پایانی 30 دقیقه بعد از استفاده از عطر استشمام می شود. این نت عمق رایحه را نشان می دهد و بویی است که با ماندگاری عطر روی بدن و لباس شما حس می شود.
                    نت میانی و نت پایانی از مهم ترین بخش های رایحه عطر هستند. چون نت ابتدایی در لحظه به مشام می رسد و از بین می رود اما نت میانی و پایانی ماندگار است.
                </p>
                <h3 className='font-bold text-xl'>خرید پرفیوم و عطر اصل</h3>
                <p className='text-justify py-10 '>
                    برای انتخاب عطر و پرفیوم در ابتدا باید به رایحه ای توجه کنید که خودتان می پسندید و با توجه به شرایط فصلی، عطری که احساس خوشایندی به شما می دهد انتخاب کنید. علاوه بر این اصل بودن پرفیوم خریداری شده بسیار مهم است زیرا عطر های فیک ماندگاری مورد نظر شما را نخواهند داشت و به علت داشتن مقدار زیادی متانول ممکن است باعث حساسیت های پوستی، قرمز شدن پوست و خارش شوند
                </p>
                <h3 className='font-bold text-xl'>نگهداری از عطر و پرفیوم</h3>
                <p className='text-justify py-10 '>
                    بهتر است عطر دور از گرما و نور خورشید نگهداری شود و درِ عطر غیر از مواقع استفاده بسته باشد. رعایت این موارد باعث می شود کیفیت و بوی پرفیوم و عطر ثابت بماند.

                </p>
                <h3 className='font-bold text-xl'>بهترین روش استفاده از پرفیوم</h3>
                <p className='text-justify py-10 '>
                برای اینکه عطر و پرفیوم بیشترین ماندگاری خود را داشته باشد بهتر است آن را روی نبض مچ دست، پشت گوش، گردن و پشت مچ پا روی پوست کاملا تمیز و شسته شده بزنید.
                </p>

            </div>
            <div className='w-full md:w-1/2 lg:w-[42%] pt-28 px-7 xsm:px-14 flex flex-col justify-center items-center '>
                <img src='public/img/pic-5.jpg' className='h-[190px] md:h-[250px] w-[70%] xsm:w-[65%] custom-img-1' alt='perfume'/>
                <img src='public/img/pic-8.jpg' className='h-[290px] md:h-[350px] md:w-[100%] w-full  xsm:w-[86%] rounded-3xl custom-img my-4' alt='perfume'/>
                <img src='public/img/pic-7.jpg' className='h-[190px] md:h-[250px] w-[70%] xsm:w-[65%] custom-img-1 md:self-start' alt='perfume'/>
            </div>
        </div>
    )
}
