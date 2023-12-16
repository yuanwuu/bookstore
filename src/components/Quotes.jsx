import {useEffect,useState } from 'react'
import axios from 'axios'

const Quotes = () => {
    const [quotes,setQuotes] = useState([])

    useEffect(()=>{
        {
          axios
          .get(`https://example-data.draftbit.com/books?_limit=50`)
          .then((response)=>{
            // console.log(response.data)
            const randomQuotes = []
            while (randomQuotes.length < 1){
              const quote = response.data[Math.floor(Math.random() * response.data.length)]
              if(!randomQuotes.includes(quote)) {
                randomQuotes.push(quote)
                // console.log(randomQuotes.length)
               }
            }
            setQuotes(randomQuotes)
            // console.log(randomQuotes)
           })
           .catch((err)=>(console.log(err)))
         }
      },[])
    
      const content = quotes.length > 0 ? quotes[0].Quote1 : null;
      const authors = quotes.length > 0 ? quotes[0].authors : null;
      

  return (
    <section id="quotes" className='bg-gray-200 w-full h-[300px] items-center p-10 flex justify-center'>
      {content && <div>
        <p className='text-2xl lg:text-[2.5rem] lg:leading-normal text-center '>{content}</p>
      <p className='flex justify-center text-xl'>- {authors}</p>
      </div>
      }
    </section>
  )
}

export default Quotes