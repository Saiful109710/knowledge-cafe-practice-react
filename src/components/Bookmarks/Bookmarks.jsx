import React from 'react'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className='md:w-1/3 bg-gray-200 '>
        <div className='bg-green-400 p-4' >
            <h3 className='text-center text-2xl font-bold text-slate-700'>Total Reading Time: {readingTime} minute</h3>
        </div>
        <h2 className='text-center'>Bookmarks:{bookmarks.length}</h2>
        {
            bookmarks.map((bookmark,index)=><Bookmark key={index} bookmark={bookmark}></Bookmark>)
        }
    </div>
  )
}

export default Bookmarks
