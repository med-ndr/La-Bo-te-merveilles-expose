import * as Icons from 'lucide-react'
import './ThemeCard.css'

function ThemeCard({ theme }) {
  const Icon = Icons[theme.icon] || Icons.Sparkles

  return (
    <div className="theme-card">
      <div className="theme-icon" aria-hidden="true">
        <Icon size={26} />
      </div>
      <h3>{theme.title}</h3>
      <p>{theme.description}</p>
    </div>
  )
}

export default ThemeCard
