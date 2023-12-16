import { Link } from "react-router-dom"
import { PiBooksThin } from "react-icons/pi"
import { CiShoppingCart } from "react-icons/ci"
import axios from "axios"
import { useEffect, useState } from "react"

const Books = ({title}) => {
  const [books,setBooks] = useState([])
  useEffect(()=>{
    {
      axios
      .get(`https://example-data.draftbit.com/books?_limit=50`)
      .then((response)=>{
       //  console.log(response.data)
        const randomBooks = []
        while (randomBooks.length < 4){
          const book = response.data[Math.floor(Math.random() * response.data.length)]
          if(!randomBooks.includes(book)) {
            randomBooks.push(book)
           //  console.log(randomBooks.length)
           }
        }
        setBooks(randomBooks)
        // console.log(randomBooks)
       })
       .catch((err)=>(console.log(err)))
     }
  },[])

 
  return (
    <div id="books" className="lg:mx-[100px]">
      <p className="text-[1.5rem] lg:text-[2.5rem] p-4 uppercase">{title}</p>
      <div id="book-card" className="lg:flex grid grid-cols-1" >

          {books.map((book,idx)=>(
             <div className="lg:flex flex-col justify-between items-stretch lg:w-1/4 h-[500px] lg:p-5">
                <div>
                  <img src={book.image_url} alt="" className=" w-[200px] h-[250px]" key={idx}/>
                  <p>{book.title}</p>
                  <p>{book.Quote1}</p>
                  <p>$ {Math.ceil(Math.random()*20).toFixed(2)}</p>
                </div>
                  <button className="uppercase text-white bg-green-950 lg:w-full h-[50px] flex p-3">
                    <CiShoppingCart size={25} className="mr-2"/>
                    add to cart
                  </button>
             </div>
          ))}
          
      </div>
    </div>
  )
}

export default Books