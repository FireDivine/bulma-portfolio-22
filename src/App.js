import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'

function App() {
  return (
    <section className="hero is-success is-fullheight">
      <div className="hero-head">
        <Header />
      </div>
      <div className="hero-body">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about-me' element={<About />}></Route> */}
        </Routes>
      </div>
      <div className="hero-foot">
        <Footer />
      </div>
    </section>
  )
}

export default App
