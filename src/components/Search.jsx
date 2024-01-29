import { useEffect, useState } from "react"
import { RiSearch2Line } from "react-icons/ri"
import {useNavigate, useParams} from 'react-router-dom'


const Search = () => {
    const [mobileView,setMobileView] = useState(false)
    const [searchInput,setsearchInput] = useState({
        searchTerm:''
    })


    const getBook = (event) =>{
        event.preventDefault()
        const searchTerm = document.getElementById('input').value

        const apiKey = import.meta.env.VITE_GOOGLE_BOOK_API_KEY
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`
        
        // alert(URL)
        
    }


  return (
    <div>
        {
            mobileView
            ? (
                <div id="desktop-search" className='w-1/3' >
                    <form id='form' className='w-full flex gap-5'>
                        <input id='input' type="text" placeholder='SEARCH' className='p-[5px] rounded-lg w-[80%] lg:w-full'/>
                        <button type='submit' onClick={getBook} ><RiSearch2Line size={20}/></button>
                    </form>
                </div>
            )
            :(
                <div id="mobile-search" className='m-2' >
                    <form id='form' className='w-full flex gap-5'>
                        <input id='input' type="text" placeholder='SEARCH' className='p-2 rounded-lg w-[80%] lg:w-full' />
                        
                        <button type='submit' onClick={getBook}  ><RiSearch2Line size={20}/></button>
                    </form>
                </div>
            )
        }
    </div>
  )
}

export default Search