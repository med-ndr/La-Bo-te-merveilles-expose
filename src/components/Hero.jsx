import { useNavigate } from 'react-router-dom'
import InteractiveBox from './InteractiveBox.jsx'
import './Hero.css'

function Hero() {
  const navigate = useNavigate()

  return (
    <section className="hero pattern-zellige-gold">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-kicker">Ahmed Sefrioui</p>
          <h1>La Boîte à Merveilles</h1>
          <p className="hero-subtitle">Un voyage dans l'enfance de Sidi Mohammed</p>
          <p className="hero-intro">
            Plongez dans les ruelles de la médina de Fès, à hauteur d'enfant : un roman
            autobiographique où la solitude se transforme en émerveillement, objet après
            objet, souvenir après souvenir.
          </p>
          <button className="hero-cta" onClick={() => navigate('/le-roman')}>
            Commencer l'exploration →
          </button>
        </div>

        <div className="hero-box">
          <InteractiveBox autoLabel="Ouvrir la boîte à merveilles" />
        </div>
      </div>
    </section>
  )
}

export default Hero
