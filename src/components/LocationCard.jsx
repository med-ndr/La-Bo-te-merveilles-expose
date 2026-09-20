import * as Icons from 'lucide-react'
import { useState } from 'react'
import './LocationCard.css'

function LocationCard({ location }) {
  const [open, setOpen] = useState(false)
  const Icon = Icons[location.icon] || Icons.MapPin

  return (
    <button className="location-card pattern-zellige" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
      <div className="location-icon" aria-hidden="true">
        <Icon size={24} />
      </div>
      <h3>{location.name}</h3>
      <p className={`location-description ${open ? 'is-open' : ''}`}>{location.description}</p>
      <span className="location-toggle">{open ? 'Réduire' : "Pourquoi ce lieu compte"}</span>
    </button>
  )
}

export default LocationCard
