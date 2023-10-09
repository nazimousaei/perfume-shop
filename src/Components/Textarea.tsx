
export default function Textarea() {
  return (
    <form className="flex flex-col gap-y-4 w-full mt-10">
      <input type="text" className="w-full xsm:w-2/3 md:w-1/3 py-2.5 px-5 rounded-lg outline-none bg-zinc-100" placeholder="نام و نام خانوادگی"/>
      <input type="text" className="w-full xsm:w-2/3 md:w-1/3 py-2.5 px-5 rounded-lg outline-none bg-zinc-100" placeholder="عنوان نظر"/>
        <textarea className="w-full h-64 resize-none rounded-lg bg-zinc-100 outline-none p-7 text-zinc-600" placeholder="نظر خود را بنویسید ...">

        </textarea>
        <button className="w-36 h-11 flex justify-center items-center mt-2 hover:bg-black bg-pink-600 text-white rounded-xl text-lg p-2">ثبت نظر</button>

    </form>
  )
}
