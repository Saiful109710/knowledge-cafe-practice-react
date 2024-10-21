import React from 'react'
import { FaRegBookmark } from "react-icons/fa6"

const Blog = ({blog,handleBookmarks,handleReadingTime}) => {
    console.log(blog)
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags} = blog
  return (
    <div className='mb-20 space-y-5'>
        <img className='w-full rounded-xl' src={cover} alt={`cover picture of title ${title}`} />
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
            </div>
            <div className='space-x-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookmarks(blog)} className='text-2xl text-red-500'><FaRegBookmark /></button>
            </div>
        </div>
        <h2 className='text-4xl'>{title}</h2>
        <p>
            {
                hashtags.map((tag,index)=><span key={index}>#{tag}</span>)
            }
        </p>
        <button className='text-purple-700 underline' onClick={()=>handleReadingTime(reading_time,id)}>Mark as read</button>
    </div>
  )
}

export default Blog
