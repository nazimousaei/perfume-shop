import { useState } from "react"
import { allCommentGetServer } from "../TypeScriptTypes/CommentTypes"
import { useDispatch , useSelector } from "react-redux"
import { AppDispatch , RootState } from "../Redux/Store"
import { postCommentsServer } from "../Redux/Store/Comments"
import swal from 'sweetAlert'

export default function Textarea() {
 const [username,setUsename] = useState<string>('')
 const [titleComment,setTitleComment] = useState<string>('')
 const [bodyComment,setBodyComment] = useState<string>('')
 

 const postCmDispatch = useDispatch<AppDispatch>()
 const dataComments:any = useSelector<RootState>(state => state.comments)
 

 const addCommentHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
   event.preventDefault()

  const newComment:allCommentGetServer = {
    id:dataComments.length+1,
    title:titleComment,
    body:bodyComment,
    user:username,
    star:4
  }



  postCmDispatch(postCommentsServer(newComment))

  swal({
    title:'نظر شما با موفقیت ثبت شد',
    icon:'success',
    buttons:['بستن','تایید']
  })
  
    setUsename('')
    setTitleComment('')
    setBodyComment('')
  
 }

  return (
    <form className="flex flex-col gap-y-4 w-full mt-10">
      <input type="text" value={username} onChange={(event) => setUsename(event.target.value)} className="w-full xsm:w-2/3 md:w-1/3 py-2.5 px-5 rounded-lg outline-none bg-zinc-100" placeholder="نام و نام خانوادگی"/>
      <input type="text" value={titleComment} onChange={(event) => setTitleComment(event.target.value)} className="w-full xsm:w-2/3 md:w-1/3 py-2.5 px-5 rounded-lg outline-none bg-zinc-100" placeholder="عنوان نظر"/>
        <textarea value={bodyComment} onChange={(event) => setBodyComment(event.target.value)} className="w-full h-64 resize-none rounded-lg bg-zinc-100 outline-none p-7 text-zinc-600" placeholder="نظر خود را بنویسید ...">

        </textarea>
        <button onClick={(event)=> addCommentHandler(event)} className="w-36 h-11 flex justify-center items-center mt-2 hover:bg-black bg-pink-600 text-white rounded-xl text-lg p-2">ثبت نظر</button>

    </form>
  )
}
