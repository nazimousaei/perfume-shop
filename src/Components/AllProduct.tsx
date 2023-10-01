import ProductCard from "./ProductCard"

export default function AllProduct() {
    return (
        <div className="pt-28 ">
            <div className="px-0 xsm:px-14">
                 <h1 className="title-section ">
                همه محصولات
            </h1>
            </div>
           
            <div className='flex flex-wrap justify-center gap-8 mt-32 py-20 px-10 bg-pink-100 '>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               
            </div>

            <button className='flex justify-center items-center px-5 py-2 text-sm sm:text-base sm:px-8 sm:py-2.5 mx-auto mt-20 rounded-full bg-black text-white hover:bg-pink-600 shadow-2xl shadow-black/10'>مشاهده همه</button>
        </div>
    )
}
