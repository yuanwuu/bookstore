import {Routes, Route, useParams} from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import History from './pages/History.jsx'
import Events from './pages/Events.jsx'
import Cafe from './pages/Cafe.jsx'
import Books from './components/Books.jsx'
import EventDetail from './pages/EventDetail.jsx'
import BookDetail from './pages/BookDetail.jsx'
import Home from './pages/Home.jsx'

const App = () => {

  return (
    <div className='m-auto grid grid-cols-1 gap-10'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/history' element={<History />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/:id' element={<EventDetail />} /> 
        <Route path='/cafe' element={<Cafe />} />
        <Route path='/books' element={<Books />} />
        <Route path='/books/:title' element={<BookDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App