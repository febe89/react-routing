import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import About from '../About'
import Contact from './Contact'
import Profile from './Profile'
import Products from './Products'
import Orders from '../Orders'
import Notfound from './Notfound'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='orders' element={<Orders />} />
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
