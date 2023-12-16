import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import History from './pages/History.jsx'
import Cafe from './pages/Cafe.jsx'
import EventDetail from './pages/EventDetail.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <div className='m-auto grid grid-cols-1 gap-10'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/history' element={<History />} />
        <Route path='/events' element={<EventDetail />} />
        <Route path='/cafe' element={<Cafe />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App