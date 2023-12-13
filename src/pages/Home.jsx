import {events} from '../data.jsx'

const Home = () => {
  return (
    <div id="wrapper" className='border border-black w-full h-screen'>
        <div id="hero">
            <div className='flex'>
                <img src="" alt="" className='border border-black w-2/3' />
                <div id="events">
                    <p className='capitalize'>events & podcasts</p>
                    {
                        events.map((event,idx)=>(
                            <ul className='list-none'>
                                <li className='text-xl font-normal list-none' key={idx}>{event.title}</li>
                                <li className='text-lg font-normal'>{event.content}</li>
                                <li className='text-sm font-medium text-gray-800 uppercase'>{event.category}</li>
                            </ul>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home