import './SectionTitle.css'

function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`section-title align-${align}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      <div className="star-divider" aria-hidden="true">
        ✦
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
