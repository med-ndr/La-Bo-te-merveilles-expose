import SectionTitle from '../components/SectionTitle.jsx'
import ThemeCard from '../components/ThemeCard.jsx'
import themes from '../data/themes.js'
import './Themes.css'

function Themes() {
  return (
    <div className="page">
      <div className="container">
        <SectionTitle
          eyebrow="Ce que raconte vraiment le roman"
          title="Les Thèmes"
          subtitle="Sept fils conducteurs qui traversent l'ensemble du récit."
        />

        <div className="theme-grid">
          {themes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Themes
