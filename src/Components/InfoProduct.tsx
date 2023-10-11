import { infoProductGetServer } from "../TypeScriptTypes/InfoProductTypes"

export default function InfoProduct(Props:infoProductGetServer) {
    return (
        <ul className='font-Dinar texl-base xsm:text-xl'>
            <li className='flex pb-0.5'>
                <div className='flex items-center w-[35%] p-7  text-zinc-400 bg-zinc-100'>برند</div>
                <div className='flex items-center p-7 ps-20 xsm:ps-28'>{Props?.brand}</div>
            </li>
            <li className='flex pb-0.5'>
                <div className='flex items-center w-[35%] p-7  text-zinc-400 bg-zinc-100'>سال ساخت</div>
                <div className='flex items-center p-7 ps-20 xsm:ps-28'>{Props?.productyear}</div>
            </li>
            <li className='flex pb-0.5'>
                <div className='flex items-center w-[35%] p-7  text-zinc-400 bg-zinc-100'>جنسیت</div>
                <div className='flex items-center p-7 ps-20 xsm:ps-28'>{Props?.gender}</div>
            </li>
            <li className='flex pb-0.5'>
                <div className='flex items-center w-[35%] p-7  text-zinc-400 bg-zinc-100'>نوع</div>
                <div className='flex items-center p-7 ps-20 xsm:ps-28'>{Props?.type}</div>
            </li>
            <li className='flex pb-0.5'>
                <div className='flex items-center w-[35%] p-7  text-zinc-400 bg-zinc-100'>کشور مبدا</div>
                <div className='flex items-center p-7 ps-20 xsm:ps-28'>{Props?.country}</div>
            </li>
            <li className='flex pb-0.5'>
                <div className='flex items-center w-[35%] p-7  text-zinc-400 bg-zinc-100'>طبع رایجه</div>
                <div className='flex items-center p-7 ps-20 xsm:ps-28'>{Props?.natureSmell}</div>
            </li>
            <li className='flex pb-0.5'>
                <div className='flex items-center w-[35%] p-7  text-zinc-400 bg-zinc-100'>طعم رایحه</div>
                <div className='flex items-center p-7 ps-20 xsm:ps-28'>{Props?.typeSmell}</div>
            </li>
            <li className='flex pb-0.5'>
                <div className='flex items-center w-[35%] p-7  text-zinc-400 bg-zinc-100'>گروه بویایی</div>
                <div className='flex items-center p-7 ps-20 xsm:ps-28'>{Props?.groupSmell}</div>
            </li>

        </ul>
    )
}
