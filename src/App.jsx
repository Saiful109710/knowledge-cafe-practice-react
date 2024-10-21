
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);
  

  
    const handleBookmarks = (blog)=>{
      const newArray = [...bookmarks,blog]
      setBookmarks(newArray);
    }

    const handleReadingTime = (time,id)=>{
        const updateReadingTime = readingTime + time;
        setReadingTime(updateReadingTime);
        const remainingBookmarks = bookmarks.filter((bookmark)=>bookmark.id !==id);
          setBookmarks(remainingBookmarks);
    }

  return (
    <>
      
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
       <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
       <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>

      
    </>
  )
}

export default App
