import Hero from '../components/Hero'
import Books from '../components/Books'
import Merch from '../components/Merch'
import Quotes from '../components/Quotes'

const Home = () => {
  return (
    <div className='grid grid-cols-1 gap-10'>
      <Hero />
      <Books title={'Featured Books'} />
      <Quotes />
      <Books title={'Weekly Special'}/>
      <Merch title = {'Merch'}/>
    </div>
  )
}

export default Home