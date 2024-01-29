import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const BookDetail = () => {
const {title} = useParams()
// const params = useParams()
//   console.log(params)
  // console.log(title)
  const [openBook,setOpenBook] = useState(null) 

  useEffect(()=>{
    axios
    .get(`https://example-data.draftbit.com/books?_limit=50`)
    .then((response)=>{
      const data = response.data
      const foundBook = data.find((data) => data.title === title)
      setOpenBook(foundBook)
      // console.log(foundBook)
    })
  },[title])
  
  return (
    <>
    {openBook && (<div className='flex flex-col justify-center mx-3'>
        <p className='text-3xl font-black '>{openBook.title}</p>
        <img src={openBook.image_url} />
      <div>
        <p>{openBook.rating}</p>
        <p>{openBook.description}</p>
        <p>{openBook.Quote1}</p>
        <p>{openBook.Quote2}</p>
      </div>
    </div>)}
    </>
  )
}

export default BookDetail