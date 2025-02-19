import React, { useEffect, useState } from 'react'
import Blog from '../Blog.jsx/Blog';

const Blogs = ({handleBookmarks,handleReadingTime}) => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
  return (
    <div className='md:w-2/3'>
            <h1 className='text-4xl'>Blogs:{blogs.length}</h1>
            {
                blogs.map((blog)=><Blog key={blog.id} blog={blog}
                 handleBookmarks={handleBookmarks}
                 handleReadingTime={handleReadingTime} 
                 ></Blog>)
            }
    </div>
  )
}

export default Blogs
