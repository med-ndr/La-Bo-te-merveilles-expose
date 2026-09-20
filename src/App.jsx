import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import LeRoman from './pages/LeRoman.jsx'
import Personnages from './pages/Personnages.jsx'
import Chapitres from './pages/Chapitres.jsx'
import LaBoite from './pages/LaBoite.jsx'
import Lieux from './pages/Lieux.jsx'
import Themes from './pages/Themes.jsx'
import Quiz from './pages/Quiz.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main id="contenu-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/le-roman" element={<LeRoman />} />
          <Route path="/personnages" element={<Personnages />} />
          <Route path="/chapitres" element={<Chapitres />} />
          <Route path="/la-boite" element={<LaBoite />} />
          <Route path="/lieux" element={<Lieux />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
