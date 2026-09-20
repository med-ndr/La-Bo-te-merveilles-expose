import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, PackageOpen } from 'lucide-react'
import './Navbar.css'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/le-roman', label: 'Le Roman' },
  { to: '/personnages', label: 'Personnages' },
  { to: '/chapitres', label: 'Chapitres' },
  { to: '/la-boite', label: 'La Boîte' },
  { to: '/lieux', label: 'Lieux' },
  { to: '/themes', label: 'Thèmes' },
  { to: '/quiz', label: 'Quiz' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  // Ferme le menu mobile après un changement de route
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <PackageOpen size={22} aria-hidden="true" />
          <span>La Boîte à Merveilles</span>
        </NavLink>

        <button
          className="navbar-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="navbar-menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="navbar-menu"
          className={`navbar-links ${open ? 'is-open' : ''}`}
          aria-label="Navigation principale"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar-link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
