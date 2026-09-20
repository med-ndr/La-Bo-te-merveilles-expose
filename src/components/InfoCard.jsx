import './InfoCard.css'

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="info-card">
      {Icon && (
        <div className="info-card-icon" aria-hidden="true">
          <Icon size={20} />
        </div>
      )}
      <div>
        <p className="info-card-label">{label}</p>
        <p className="info-card-value">{value}</p>
      </div>
    </div>
  )
}

export default InfoCard
