import SectionTitle from '../components/SectionTitle.jsx'
import LocationCard from '../components/LocationCard.jsx'
import locations from '../data/locations.js'
import './Lieux.css'

function Lieux() {
  return (
    <div className="page">
      <div className="container">
        <SectionTitle
          eyebrow="Sur les pas de Sidi Mohammed"
          title="Les Lieux"
          subtitle="Cliquez sur un lieu pour comprendre son importance dans le roman."
        />

        <div className="location-grid">
          {locations.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Lieux
