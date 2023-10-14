import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { AiOutlineLike } from 'react-icons/ai'
import { AiOutlineDislike } from 'react-icons/ai'
import { allCommentGetServer } from '../TypeScriptTypes/CommentTypes'

export default function Comment(Props:allCommentGetServer) {

    return (
        <div className="w-full bg-zinc-100 p-8 rounded-xl">
            <div className='flex justify-between items-start flex-wrap'>
                <div className='flex flex-col justify-start'>
                    <div className='flex items-start gap-x-5'>
                        <img src='/img/user.png' className='bg-zinc-50 w-14 h-14 rounded-full' alt='user' />
                        <p className='text-lg self-center'>{Props.user}</p>
                    </div>
                    <div className='flex gap-x-1.5 items-start pt-5 text-yellow-300 text-xl'>
                        {Array(Props?.star).fill(0).map(() => (
                            <AiFillStar  />
                        ))}
                        {Array(5 - Props?.star).fill(0).map(() => (
                            <AiOutlineStar />
                        ))}
                    </div>
                </div>
                <div className='flex items-center flex-wrap  gap-5 text-sm pt-4'>
                    <p>آیا این نظر برایتان مفید بود ؟</p>
                    <button className='flex items-center border-[1px] border-pink-600 py-0.5 px-2 rounded-full gap-x-2'><AiOutlineLike className='text-base' /> <span>0</span></button>
                    <button className='flex items-center border-[1px] border-pink-600 py-0.5 px-2 rounded-full gap-x-2'><AiOutlineDislike className='text-base' /> <span>0</span></button>
                </div>
            </div>
            <div className='pt-6 pb-2 text-justify'>
                <h4 className=' font-semibold'>{Props.title}</h4>
                <p className='text-sm pt-3 text-zinc-500'>{Props.body}</p>
            </div>

        </div>
    )
}
