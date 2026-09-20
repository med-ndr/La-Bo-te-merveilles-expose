import { Link } from 'react-router-dom'
import { BookOpen, Users, LayoutList, HelpCircle } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import './Home.css'

const shortcuts = [
  { to: '/le-roman', icon: BookOpen, label: 'Le Roman', text: 'Auteur, contexte et résumé' },
  { to: '/personnages', icon: Users, label: 'Personnages', text: 'Les habitants de Dar Chouafa' },
  { to: '/chapitres', icon: LayoutList, label: 'Chapitres', text: 'Les 12 chapitres expliqués' },
  { to: '/quiz', icon: HelpCircle, label: 'Quiz', text: 'Testez vos connaissances' },
]

function Home() {
  return (
    <div>
      <Hero />

      <section className="container home-shortcuts-section">
        <SectionTitle
          eyebrow="Bienvenue dans la médina"
          title="Un livre à explorer, pas à réciter"
          subtitle="Choisissez une porte d'entrée dans l'univers du roman."
        />
        <div className="home-shortcuts">
          {shortcuts.map(({ to, icon: Icon, label, text }) => (
            <Link key={to} to={to} className="shortcut-card">
              <Icon size={26} aria-hidden="true" />
              <h3>{label}</h3>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
