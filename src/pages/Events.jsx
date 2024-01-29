import {useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Events = () => {
    const [events,setEvents] = useState([])
    
    useEffect(()=>{
        {
          axios
          .get(`https://example-data.draftbit.com/podcasts?_limit=50`)
          .then((response)=>{
            // console.log(response.data)
            const randomEvents = []
            while (randomEvents.length < 4){
              const event = response.data[Math.floor(Math.random() * response.data.length)]
              if(!randomEvents.includes(event)) {
                randomEvents.push(event)
                // console.log(randomEvents.length)
               }
            }
            setEvents(randomEvents)
            // console.log(randomEvents)
           })
           .catch((err)=>(console.log(err)))
         }
      },[])
    
      // const content = events.length > 0 ? events[0].author : null;

  return (
    <>
      <p className='uppercase text-[1.5rem]'>events & podcasts</p>
      {
        events.map((event,idx)=>(
          <Link to={`/events/${event.title}`}>
            <div id="event-card" className='lg:grid lg:p-5 border-b border-solid border-white'>
            <p key={idx} className='text-lg mb-2'>{event.title}</p>
            <p className='text-sm font-light'>{event.pubDate}</p>
            <p className='uppercase font-medium text-xs'>{event.categories}</p>
          </div>
          </Link>
        ))
      }
    </>
  )
}

export default Events