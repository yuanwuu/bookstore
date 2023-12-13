import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav.jsx'
import About from './pages/About.jsx'
import History from './pages/History.jsx'
import Cafe from './pages/Cafe.jsx'
import Events from './pages/Events.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <div className='m-auto'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/history' element={<History />} />
        <Route path='/events' element={<Events />} />
        <Route path='/cafe' element={<Cafe />} />
      </Routes>
    </div>
  )
}

export default App