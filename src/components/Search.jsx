import { useState } from "react"
import { RiSearch2Line } from "react-icons/ri"

const Search = () => {
    const [mobileView,setMobileView] = useState(false)

    const handleSearch = () =>{
        const searchInput = document.getElementById('input').value
        
        const apiKey = import.meta.env.VITE_GOOGLE_BOOK_API_KEY
        const URL = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${apiKey}`
        alert(URL)
          
    }

  return (
    <div>
        {
            mobileView
            ? (
                <div id="desktop-search" className='w-1/3' >
                    <form id='form' className='w-full flex gap-5'>
                        <input type="text" placeholder='SEARCH' className='p-[5px] rounded-lg w-[80%] lg:w-full'/>
                        <button type='submit' onClick={handleSearch} ><RiSearch2Line size={20}/></button>
                    </form>
                </div>
            )
            :(
                <div id="mobile-search" className='m-2' >
                    <form id='form' className='w-full flex gap-5'>
                        <input id='input' type="text" placeholder='SEARCH' className='p-2 rounded-lg w-[80%] lg:w-full' />
                        
                        <button type='submit' onClick={handleSearch}  ><RiSearch2Line size={20}/></button>
                    </form>
                </div>
            )
        }
    </div>
  )
}

export default Search