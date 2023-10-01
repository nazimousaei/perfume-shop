type pic = {
    img:string;
}
export default function BrandCard({img}:pic) {
  return (
    <div className='h-full rounded-xl shadow-2xl shadow-black flex items-center justify-center bg-white p-4 md:p-7'>
        <img src={img} className='' alt='brand'/>

    </div>
  )
}
