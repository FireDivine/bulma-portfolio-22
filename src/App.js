import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Experience from './Components/Experience'
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
          <Route path="/exp" element={<Experience />}></Route>
          <Route path="/edu" element={<Education />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about-me" element={<About />}></Route>
        </Routes>
      </div>
      <div className="hero-foot">
        <Footer />
      </div>
    </section>
  )
}

export default App
