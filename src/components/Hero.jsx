
import storefront from '../assets/storefront.jpeg'
import Events from '../components/Events.jsx'

const Hero = () => {
  return (
    <div id="wrapper" className='lg:mx-[100px]'>
        <div id="hero">
            <div className='flex'>
                <img src={storefront} alt="" className='lg:w-2/3 w-full object-cover' />
                <div id="events" className='p-4 bg-gray-200 w-full lg:grid hidden'>
                    <Events />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero